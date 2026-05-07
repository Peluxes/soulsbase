document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("search-input");
  const clearBtn = document.getElementById("search-clear");
  const homeEl = document.getElementById("search-home");
  const resultsEl = document.getElementById("search-results");
  const summaryEl = document.getElementById("results-summary");
  const noResults = document.getElementById("no-results");
  const noResultsTxt = document.getElementById("no-results-text");

  let catActiva = "todos";
  let query = "";

  // ── Sugerencias populares ──
  const sugerencias = [
    { texto: "Malenia", icono: "ti-skull", q: "malenia" },
    { texto: "Elden Ring", icono: "ti-device-gamepad", q: "elden ring" },
    { texto: "Build Nigromante", icono: "ti-sword", q: "nigromante" },
    { texto: "Bloodborne", icono: "ti-drop", q: "bloodborne" },
    { texto: "Walkthrough", icono: "ti-map", q: "walkthrough" },
    { texto: "Tier list", icono: "ti-chart-bar", q: "tier" },
    { texto: "Radahn", icono: "ti-bolt", q: "radahn" },
    { texto: "Dark Souls", icono: "ti-heart", q: "dark souls" },
  ];

  document.getElementById("suggestions-grid").innerHTML = sugerencias
    .map(
      (s) => `
    <div class="suggestion-chip" onclick="buscarSugerencia('${s.q}')">
      <i class="ti ${s.icono}"></i>${s.texto}
    </div>`,
    )
    .join("");

  // Contadores categorías
  document.getElementById("cat-count-juegos").textContent =
    DB.juegos.length + " juegos";
  document.getElementById("cat-count-guias").textContent =
    DB.guias.length + " guías";
  document.getElementById("cat-count-galeria").textContent =
    DB.galeria.length + " items";

  // ── Búsqueda desde sugerencia ──
  window.buscarSugerencia = function (q) {
    input.value = q;
    query = q;
    buscar();
  };

  window.irA = function (url) {
    window.location.href = url;
  };

  // ── Highlight texto ──
  function highlight(texto, q) {
    if (!q) return texto;
    const re = new RegExp(
      `(${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
      "gi",
    );
    return texto.replace(re, "<mark>$1</mark>");
  }

  // ── Buscar en todas las fuentes ──
  function buscar() {
    const q = query.toLowerCase().trim();
    clearBtn.style.display = q ? "" : "none";

    if (!q) {
      homeEl.style.display = "";
      resultsEl.style.display = "none";
      return;
    }

    homeEl.style.display = "none";
    resultsEl.style.display = "";

    // Buscar en cada fuente
    const rJuegos =
      catActiva === "todos" || catActiva === "juegos"
        ? DB.juegos.filter(
            (j) =>
              j.titulo.toLowerCase().includes(q) ||
              j.developer.toLowerCase().includes(q) ||
              j.tagLabel.toLowerCase().includes(q),
          )
        : [];

    const rBosses =
      catActiva === "todos" || catActiva === "bosses"
        ? Object.values(DB.bosses).filter(
            (b) =>
              b.nombre.toLowerCase().includes(q) ||
              b.zona.toLowerCase().includes(q) ||
              b.juego.toLowerCase().includes(q),
          )
        : [];

    const rGuias =
      catActiva === "todos" || catActiva === "guias"
        ? DB.guias.filter(
            (g) =>
              g.titulo.toLowerCase().includes(q) ||
              g.juego.toLowerCase().includes(q) ||
              g.descripcion.toLowerCase().includes(q) ||
              g.tipoLabel.toLowerCase().includes(q),
          )
        : [];

    const rGaleria =
      catActiva === "todos" || catActiva === "galeria"
        ? DB.galeria.filter(
            (i) =>
              i.titulo.toLowerCase().includes(q) ||
              i.juego.toLowerCase().includes(q),
          )
        : [];

    const total =
      rJuegos.length + rBosses.length + rGuias.length + rGaleria.length;

    // Resumen
    summaryEl.innerHTML =
      total > 0
        ? `<strong>${total}</strong> resultado${total !== 1 ? "s" : ""} para <strong>"${query}"</strong>`
        : "";

    // Sin resultados
    noResults.style.display = total === 0 ? "" : "none";
    if (total === 0) {
      noResultsTxt.textContent = `Sin resultados para "${query}"`;
    }

    // Render grupos
    renderGrupo(
      "results-juegos",
      rJuegos,
      "Juegos",
      "ti-layout-grid",
      renderJuego,
    );
    renderGrupo("results-bosses", rBosses, "Bosses", "ti-skull", renderBoss);
    renderGrupo("results-guias", rGuias, "Guías", "ti-book", renderGuia);
    renderGrupo(
      "results-galeria",
      rGaleria,
      "Galería",
      "ti-photo",
      renderGaleriaItem,
    );
  }

  // ── Render grupo ──
  function renderGrupo(elId, lista, titulo, icono, renderFn) {
    const el = document.getElementById(elId);
    if (!lista.length) {
      el.innerHTML = "";
      return;
    }

    const items = lista.slice(0, 5).map(renderFn).join("");
    const mas =
      lista.length > 5
        ? `<div style="font-size:12px;color:var(--accent);padding:6px 0;cursor:pointer">
           + ${lista.length - 5} más resultados
         </div>`
        : "";

    el.innerHTML = `
      <div class="results-group">
        <div class="results-group-header">
          <span class="results-group-title">
            <i class="ti ${icono}"></i>${titulo}
          </span>
          <span class="results-group-count">${lista.length}</span>
        </div>
        ${items}
        ${mas}
      </div>`;
  }

  // ── Renders individuales ──
  function renderJuego(j) {
    return `
      <div class="result-item" onclick="window.location.href='juego.html?id=${j.id}'">
        <div class="result-thumb" style="background:${j.thumbBg}">${j.emoji}</div>
        <div class="result-body">
          <div class="result-title">${highlight(j.titulo, query)}</div>
          <div class="result-sub">
            <span><i class="ti ti-building"></i>${j.developer}</span>
            <span><i class="ti ti-calendar"></i>${j.año}</span>
            <span><i class="ti ti-star"></i>${j.rating}</span>
          </div>
        </div>
        <span class="tag tag-${j.tag}" style="flex-shrink:0">${j.tagLabel}</span>
        <i class="ti ti-chevron-right result-arrow"></i>
      </div>`;
  }

  function renderBoss(b) {
    const difColors = {
      Extremo: "#E24B4A",
      Alto: "#EF9F27",
      Medio: "#97C459",
    };
    const color = difColors[b.dificultad] || "#888";
    return `
      <div class="result-item" onclick="window.location.href='boss.html?id=${b.id}'">
        <div class="result-thumb" style="background:${b.juegoBg}">${b.emoji}</div>
        <div class="result-body">
          <div class="result-title">${highlight(b.nombre, query)}</div>
          <div class="result-sub">
            <span><i class="ti ti-device-gamepad"></i>${b.juego}</span>
            <span><i class="ti ti-map-pin"></i>${b.zona}</span>
          </div>
        </div>
        <span style="font-size:11px;font-weight:500;color:${color};flex-shrink:0">${b.dificultad}</span>
        <i class="ti ti-chevron-right result-arrow"></i>
      </div>`;
  }

  function renderGuia(g) {
    const badgeMap = { hot: "Popular", new: "Nueva", updated: "Actualizada" };
    return `
      <div class="result-item" onclick="window.location.href='guias.html'">
        <div class="result-thumb" style="background:${g.juegoBg}">${g.juegoEmoji}</div>
        <div class="result-body">
          <div class="result-title">${highlight(g.titulo, query)}</div>
          <div class="result-sub">
            <span><i class="ti ti-device-gamepad"></i>${g.juego}</span>
            <span><i class="ti ti-tag"></i>${g.tipoLabel}</span>
            <span><i class="ti ti-clock"></i>${g.minutos} min</span>
          </div>
        </div>
        <span class="badge badge-${g.badge === "hot" ? "hot" : g.badge === "new" ? "new" : "up"}" style="flex-shrink:0">
          ${badgeMap[g.badge]}
        </span>
        <i class="ti ti-chevron-right result-arrow"></i>
      </div>`;
  }

  function renderGaleriaItem(i) {
    const typeLabel = {
      screenshot: "Screenshot",
      artwork: "Artwork",
      video: "Vídeo",
    };
    const typeCls = {
      screenshot: "gal-screenshot",
      artwork: "gal-artwork",
      video: "gal-video",
    };
    return `
      <div class="result-item" onclick="window.location.href='galeria.html'">
        <div class="result-thumb" style="background:${i.juegoBg}">${i.emoji}</div>
        <div class="result-body">
          <div class="result-title">${highlight(i.titulo, query)}</div>
          <div class="result-sub">
            <span><i class="ti ti-device-gamepad"></i>${i.juego}</span>
            <span><i class="ti ti-heart"></i>${i.likes.toLocaleString("es")} likes</span>
          </div>
        </div>
        <span class="gal-type-badge ${typeCls[i.tipo]}" style="flex-shrink:0">${typeLabel[i.tipo]}</span>
        <i class="ti ti-chevron-right result-arrow"></i>
      </div>`;
  }

  // ── Pills categoría ──
  document.querySelectorAll(".pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".pill")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      catActiva = btn.dataset.cat;
      buscar();
    });
  });

  // ── Input ──
  input.addEventListener("input", (e) => {
    query = e.target.value;
    buscar();
  });

  clearBtn.addEventListener("click", () => {
    input.value = "";
    query = "";
    buscar();
    input.focus();
  });

  // ── Parámetro URL ──
  const params = new URLSearchParams(window.location.search);
  const qParam = params.get("q");
  if (qParam) {
    input.value = qParam;
    query = qParam;
    buscar();
  }
});
