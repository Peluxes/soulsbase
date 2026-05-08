document.addEventListener("DOMContentLoaded", () => {
  const grid       = document.getElementById("builds-grid");
  const searchInput = document.getElementById("search-input");
  const countEl   = document.getElementById("results-count");
  const juegoBar  = document.getElementById("juego-filter-bar");

  let filtroTipo  = "todos";
  let filtroJuego = "todos";

  // ── Juego filter pills ──
  const juegos = [...new Set(Object.values(DB.builds).map((b) => b.juego))];
  juegoBar.innerHTML =
    `<button class="pill active" data-juego="todos">Todos los juegos</button>` +
    juegos
      .map((j) => `<button class="pill" data-juego="${j}">${j}</button>`)
      .join("");

  juegoBar.querySelectorAll(".pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      juegoBar.querySelectorAll(".pill").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      filtroJuego = btn.dataset.juego;
      render();
    });
  });

  // ── Tipo pills (topbar) ──
  document.querySelectorAll(".pill[data-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".pill[data-filter]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      filtroTipo = btn.dataset.filter;
      render();
    });
  });

  // ── Filter logic ──
  function filtrar() {
    const q = searchInput.value.toLowerCase().trim();
    return Object.values(DB.builds).filter((b) => {
      if (filtroTipo !== "todos" && b.tipo.toLowerCase().replace("/", "-") !== filtroTipo) return false;
      if (filtroJuego !== "todos" && b.juego !== filtroJuego) return false;
      if (q && !b.nombre.toLowerCase().includes(q) && !b.juego.toLowerCase().includes(q) && !b.tipo.toLowerCase().includes(q)) return false;
      return true;
    });
  }

  // ── Efectividad color ──
  function efectividadColor(val) {
    if (val > 90) return "#E24B4A";
    if (val > 80) return "#EF9F27";
    return "#97C459";
  }

  // ── Tipo badge class ──
  function tipoBadgeClass(tipo) {
    if (tipo === "PvE") return "build-badge-pve";
    if (tipo === "PvP") return "build-badge-pvp";
    return "build-badge-pvepvp";
  }

  // ── Dificultad badge class ──
  function difBadgeClass(dif) {
    return "build-badge-dif";
  }

  // ── Render ──
  function render() {
    const lista = filtrar();
    countEl.textContent = `${lista.length} build${lista.length !== 1 ? "s" : ""}`;

    if (!lista.length) {
      grid.innerHTML = `<p style="color:var(--text-hint);font-size:13px;padding:12px 0;grid-column:1/-1">Sin resultados para esa búsqueda.</p>`;
      return;
    }

    grid.innerHTML = lista
      .map((b) => {
        const juego = DB.juegos.find((j) => j.id === b.juegoId);
        const thumbBg = juego ? juego.thumbBg : b.juegoBg;
        const color = efectividadColor(b.rating);
        return `
        <div class="build-index-card" onclick="window.location.href='build.html?id=${b.id}'">
          <div class="build-index-thumb" style="background:${thumbBg}">
            <span>${b.emoji}</span>
          </div>
          <div class="build-index-body">
            <div class="build-index-name">${b.nombre}</div>
            <div class="build-index-tags">
              <span class="build-badge ${tipoBadgeClass(b.tipo)}" style="font-size:10px;padding:2px 7px">${b.tipo}</span>
              <span class="build-badge build-badge-dif" style="font-size:10px;padding:2px 7px">${b.dificultad}</span>
            </div>
            <div class="build-efectividad-row">
              <span class="build-efectividad-label">Efectividad</span>
              <div class="build-efectividad-track">
                <div class="build-efectividad-fill" style="width:${b.rating}%;background:${color}"></div>
              </div>
              <span style="font-size:11px;color:${color};font-weight:600;min-width:32px;text-align:right">${b.rating}</span>
            </div>
            <div class="build-index-footer">
              <span>${b.juego}</span>
              <span style="color:${color}">${b.rating}/100</span>
            </div>
          </div>
        </div>`;
      })
      .join("");
  }

  searchInput.addEventListener("input", render);
  render();
});
