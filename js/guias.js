document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("guias-container");
  const countEl = document.getElementById("results-count");
  const searchInput = document.getElementById("search-input");
  const sortSelect = document.getElementById("sort-select");

  let filtroActivo = "todos";

  const badgeMap = {
    hot: ["badge-hot", "Popular"],
    new: ["badge-new", "Nueva"],
    updated: ["badge-up", "Actualizada"],
  };

  // ── Filtrar ──
  function filtrar() {
    const q = searchInput.value.toLowerCase().trim();
    let res =
      filtroActivo === "todos"
        ? DB.guias
        : DB.guias.filter((g) => g.tipo === filtroActivo);

    if (q)
      res = res.filter(
        (g) =>
          g.titulo.toLowerCase().includes(q) ||
          g.juego.toLowerCase().includes(q) ||
          g.descripcion.toLowerCase().includes(q),
      );

    const orden = sortSelect.value;
    if (orden === "popular")
      res = [...res].sort((a, b) => b.visitas - a.visitas);
    if (orden === "reciente")
      res = [...res].sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    if (orden === "rapida")
      res = [...res].sort((a, b) => a.minutos - b.minutos);

    return res;
  }

  // ── Render ──
  function render() {
    const lista = filtrar();
    countEl.textContent = `${lista.length} guía${lista.length !== 1 ? "s" : ""}`;

    container.innerHTML = lista.length
      ? lista
          .map((g) => {
            const [badgeCls, badgeLabel] = badgeMap[g.badge];
            const visitas =
              g.visitas >= 1000
                ? (g.visitas / 1000).toFixed(1) + "k"
                : g.visitas;
            return `
            <div class="guia-card-full" onclick="window.location.href='guia.html?id=${g.id}'" style="cursor:pointer">
              <div class="guia-card-thumb" style="background:${g.juegoBg}">${g.juegoEmoji}</div>
              <div class="guia-card-body">
                <div class="guia-card-top">
                  <span class="guia-card-title">${g.titulo}</span>
                  <span class="badge ${badgeCls}">${badgeLabel}</span>
                </div>
                <div class="guia-card-desc">${g.descripcion}</div>
                <div class="guia-card-footer">
                  <span><i class="ti ti-device-gamepad"></i>${g.juego}</span>
                  <span><i class="ti ti-tag"></i>${g.tipoLabel}</span>
                  <span><i class="ti ti-clock"></i>${g.minutos} min</span>
                  <span><i class="ti ti-eye"></i>${visitas} visitas</span>
                </div>
              </div>
            </div>`;
          })
          .join("")
      : '<p style="color:var(--text-hint);font-size:13px;padding:12px 0">Sin resultados para esa búsqueda.</p>';
  }

  // ── Pills topbar ──
  document.querySelectorAll(".pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".pill")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      filtroActivo = btn.dataset.filter;
      syncCatCards();
      render();
    });
  });

  // ── Cat cards grandes ──
  document.querySelectorAll(".guia-cat-card").forEach((card) => {
    card.addEventListener("click", () => {
      filtroActivo = card.dataset.filter;
      syncCatCards();
      syncPills();
      render();
    });
  });

  function syncCatCards() {
    document.querySelectorAll(".guia-cat-card").forEach((c) => {
      c.classList.toggle("active-cat", c.dataset.filter === filtroActivo);
    });
  }

  function syncPills() {
    document.querySelectorAll(".pill").forEach((b) => {
      b.classList.toggle("active", b.dataset.filter === filtroActivo);
    });
  }

  searchInput.addEventListener("input", render);
  sortSelect.addEventListener("change", render);

  render();
});
