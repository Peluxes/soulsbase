document.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("tl-board");
  const pool = document.getElementById("tl-pool");
  const modeInfo = document.getElementById("tl-mode-info");
  const searchInput = document.getElementById("search-input");

  let modoActivo = "global";
  // Estado mutable de la tier — copia profunda del data
  let estado = {};

  const tiers = [
    { id: "S", label: "S", cls: "tl-tier-s" },
    { id: "A", label: "A", cls: "tl-tier-a" },
    { id: "B", label: "B", cls: "tl-tier-b" },
    { id: "C", label: "C", cls: "tl-tier-c" },
    { id: "D", label: "D", cls: "tl-tier-d" },
  ];

  // ── Inicializar estado desde data ──
  function initEstado(modo) {
    const data = DB.tierData[modo];
    estado = { S: [], A: [], B: [], C: [], D: [], pool: [] };

    tiers.forEach((t) => {
      estado[t.id] = (data.tiers[t.id] || [])
        .map((id) => DB.juegos.find((j) => j.id === id))
        .filter(Boolean);
    });

    // Juegos no asignados van al pool
    const asignados = Object.values(data.tiers).flat();
    estado.pool = DB.juegos.filter((j) => !asignados.includes(j.id));
  }

  // ── Chip HTML ──
  function chipHTML(juego) {
    return `
      <div class="tl-chip" draggable="true" data-id="${juego.id}">
        <span class="tl-chip-emoji">${juego.emoji}</span>
        <div>
          <div class="tl-chip-name">${juego.titulo}</div>
          <div class="tl-chip-rating">★ ${juego.rating}</div>
        </div>
      </div>`;
  }

  // ── Render board ──
  function render() {
    const q = searchInput.value.toLowerCase().trim();

    board.innerHTML = tiers
      .map((t) => {
        const juegos = estado[t.id];
        const chips = juegos
          .filter((j) => !q || j.titulo.toLowerCase().includes(q))
          .map((j) => chipHTML(j))
          .join("");

        return `
        <div class="tl-row" data-tier="${t.id}">
          <div class="tl-tier-label ${t.cls}">${t.label}</div>
          <div class="tl-tier-games" data-drop="${t.id}">${chips}</div>
        </div>`;
      })
      .join("");

    const poolJuegos = estado.pool.filter(
      (j) => !q || j.titulo.toLowerCase().includes(q),
    );

    pool.innerHTML = poolJuegos.length
      ? poolJuegos.map((j) => chipHTML(j)).join("")
      : '<span style="font-size:12px;color:var(--text-hint)">Todos los juegos están clasificados</span>';

    bindDrag();
  }

  // ── Drag & Drop ──
  let dragId = null;
  let dragFrom = null;

  function bindDrag() {
    document.querySelectorAll(".tl-chip").forEach((chip) => {
      chip.addEventListener("dragstart", (e) => {
        dragId = chip.dataset.id;
        dragFrom = chip.closest("[data-drop]")?.dataset.drop || "pool";
        e.dataTransfer.effectAllowed = "move";
        chip.style.opacity = ".5";
      });
      chip.addEventListener("dragend", () => {
        chip.style.opacity = "";
      });
    });

    const zonas = [...document.querySelectorAll("[data-drop]"), pool];

    zonas.forEach((zona) => {
      zona.addEventListener("dragover", (e) => {
        e.preventDefault();
        zona.classList.add("drag-over-zone");
      });
      zona.addEventListener("dragleave", () => {
        zona.classList.remove("drag-over-zone");
      });
      zona.addEventListener("drop", (e) => {
        e.preventDefault();
        zona.classList.remove("drag-over-zone");

        const destino = zona.dataset.drop || "pool";
        if (destino === dragFrom) return;

        const juego = DB.juegos.find((j) => j.id === dragId);
        if (!juego) return;

        // Quitar de origen
        if (dragFrom === "pool") {
          estado.pool = estado.pool.filter((j) => j.id !== dragId);
        } else {
          estado[dragFrom] = estado[dragFrom].filter((j) => j.id !== dragId);
        }

        // Añadir a destino
        if (destino === "pool") {
          estado.pool.push(juego);
        } else {
          estado[destino].push(juego);
        }

        render();
      });
    });

    // Pool como zona drop también
    pool.dataset.drop = "pool";
  }

  // ── Modos ──
  document.querySelectorAll(".pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".pill")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      modoActivo = btn.dataset.mode;
      initEstado(modoActivo);
      modeInfo.textContent = DB.tierData[modoActivo].descripcion;
      render();
    });
  });

  // ── Buscador ──
  searchInput.addEventListener("input", render);

  // ── Reset ──
  document.getElementById("btn-reset").addEventListener("click", () => {
    initEstado(modoActivo);
    render();
    toast("Tier list reseteada al ranking de la comunidad");
  });

  // ── Compartir ──
  document.getElementById("btn-share").addEventListener("click", () => {
    const resumen = tiers
      .map((t) => {
        const nombres = estado[t.id].map((j) => j.titulo).join(", ") || "—";
        return `${t.label}: ${nombres}`;
      })
      .join("\n");
    navigator.clipboard
      .writeText("Mi tier list SoulsBase:\n\n" + resumen)
      .then(() => toast("Tier list copiada al portapapeles"))
      .catch(() => toast("No se pudo copiar"));
  });

  // ── Toast ──
  const toastEl = document.createElement("div");
  toastEl.className = "tl-toast";
  document.body.appendChild(toastEl);

  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    setTimeout(() => toastEl.classList.remove("show"), 2800);
  }

  // ── Init ──
  initEstado(modoActivo);
  modeInfo.textContent = DB.tierData[modoActivo].descripcion;
  render();
});
