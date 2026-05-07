document.addEventListener("DOMContentLoaded", () => {
  // ── Juegos ──
  const grid = document.getElementById("games-grid");
  let filtroActivo = "todos";

  function renderJuegos(filtro) {
    const lista =
      filtro === "todos"
        ? DB.juegos
        : DB.juegos.filter((j) => j.tag === filtro);

    grid.innerHTML = lista
      .map(
        (j) => `
    <div class="game-card" data-id="${j.id}">
      <div class="game-thumb" style="background:${j.thumbBg}">
        ${j.imagen ? `<img src="${j.imagen}" alt="${j.titulo}" loading="lazy" onerror="this.style.display='none'">` : `<span class="game-thumb-fallback">${j.emoji}</span>`}
      </div>
      <div class="game-info" style="padding:10px 12px 12px;">
        <div class="game-title">${j.titulo}</div>
        <div class="game-footer">
          <span class="tag tag-${j.tag}">${j.tagLabel}</span>
          <span class="rating"><i class="ti ti-star"></i>${j.rating}</span>
        </div>
      </div>
    </div>
  `,
      )
      .join("");
    setTimeout(() => window.Favoritos && Favoritos.aplicarBotones(), 0);
  }

  renderJuegos("todos");

  // Filtros pills
  document.querySelectorAll(".pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".pill")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      filtroActivo = btn.dataset.filter;
      renderJuegos(filtroActivo);
    });
  });

  // Buscador
  document.getElementById("search-input").addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase();
    if (q.length === 0) {
      renderJuegos(filtroActivo);
      return;
    }
    const res = DB.juegos.filter((j) => j.titulo.toLowerCase().includes(q));
    grid.innerHTML = res.length
      ? res
          .map(
            (j) => `
          <div class="game-card" data-id="${j.id}">
            <div class="game-thumb" style="background:${j.thumbBg}">
              ${j.imagen ? `<img src="${j.imagen}" alt="${j.titulo}" loading="lazy" onerror="this.style.display='none'">` : `<span class="game-thumb-fallback">${j.emoji}</span>`}
            </div>
            <div class="game-info">
              <div class="game-title">${j.titulo}</div>
              <div class="game-footer">
                <span class="tag tag-${j.tag}">${j.tagLabel}</span>
                <span class="rating"><i class="ti ti-star"></i>${j.rating}</span>
              </div>
            </div>
          </div>`,
          )
          .join("")
      : '<p style="color:var(--text-hint);font-size:13px;padding:12px 0">Sin resultados</p>';
    setTimeout(() => window.Favoritos && Favoritos.aplicarBotones(), 0);
  });

  // ── Guías ──
  const guiasList = document.getElementById("guides-list");
  const badgeMap = {
    hot: ["badge-hot", "Popular"],
    new: ["badge-new", "Nueva"],
    updated: ["badge-up", "Actualizada"],
  };

  guiasList.innerHTML = DB.guias
    .map((g) => {
      const [cls, label] = badgeMap[g.badge];
      return `
      <div class="guide-row">
        <div class="guide-icon" style="background:${g.thumbBg}">${g.emoji}</div>
        <div class="guide-text">
          <div class="guide-title-text">${g.titulo}</div>
          <div class="guide-sub">${g.juego} · ${g.tipo} · ${g.minutos} min lectura</div>
        </div>
        <span class="badge ${cls}">${label}</span>
      </div>`;
    })
    .join("");

  // ── Tier list ──
  tierRow.innerHTML = DB.tier
    .map(
      (t) => `
  <div class="tier-badge">
    <span class="tier-letter" style="color:${t.color}">${t.letra}</span>
    <div class="tier-names">
      ${t.juegos.map((j) => `<div>${j}</div>`).join("")}
    </div>
  </div>
`,
    )
    .join("");

  // ── Stats ──
  document.getElementById("stat-juegos").textContent = DB.stats.juegos;
  document.getElementById("stat-guias").textContent =
    DB.stats.guias.toLocaleString("es");
  document.getElementById("stat-bosses").textContent =
    DB.stats.bosses.toLocaleString("es");
  document.getElementById("stat-builds").textContent = DB.stats.builds;
});
