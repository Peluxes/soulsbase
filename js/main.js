document.addEventListener("DOMContentLoaded", () => {
  // ── Hero banner — Juego del día ──
  const banner = document.getElementById("hero-banner");
  if (banner) {
    const hoy = new Date();
    const seed = hoy.getFullYear() * 10000 + (hoy.getMonth() + 1) * 100 + hoy.getDate();
    const idx = seed % DB.juegos.length;
    const jdd = DB.juegos[idx];

    if (jdd.imagen) {
      banner.style.backgroundImage = `url('${jdd.imagen}')`;
      banner.style.backgroundSize = "cover";
      banner.style.backgroundPosition = "center";
    } else {
      banner.style.background = `radial-gradient(ellipse at 20% 50%, ${jdd.thumbBg}cc 0%, #111213 80%)`;
    }

    document.getElementById("banner-title").textContent = jdd.titulo;
    document.getElementById("banner-meta").innerHTML =
      `<span><i class="ti ti-star" style="color:#EF9F27"></i> ${jdd.rating}</span>
       <span class="tag tag-${jdd.tag}">${jdd.tagLabel}</span>
       <span>${jdd.año}</span>`;
    document.getElementById("banner-btn-primary").href = `juego.html?id=${jdd.id}`;
    banner.addEventListener("click", (e) => {
      if (!e.target.closest("a")) window.location.href = `juego.html?id=${jdd.id}`;
    });

    window.addEventListener('scroll', () => {
      const rate = window.scrollY * 0.4;
      banner.style.backgroundPositionY = `calc(center + ${rate}px)`;
    }, { passive: true });
  }

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
    setTimeout(() => {
      window.Favoritos && Favoritos.aplicarBotones();
      window.Valoraciones && Valoraciones.aplicarEnCards();
    }, 0);
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
    setTimeout(() => {
      window.Favoritos && Favoritos.aplicarBotones();
      window.Valoraciones && Valoraciones.aplicarEnCards();
    }, 0);
  });

  // ── Stats (primero, antes de cualquier render que pueda fallar) ──
  const statJuegos = document.getElementById("stat-juegos");
  const statGuias  = document.getElementById("stat-guias");
  const statBosses = document.getElementById("stat-bosses");
  const statBuilds = document.getElementById("stat-builds");
  if (statJuegos) statJuegos.textContent = DB.juegos.length;
  if (statGuias)  statGuias.textContent  = DB.guias.length.toLocaleString("es");
  if (statBosses) statBosses.textContent = Object.keys(DB.bosses).length;
  if (statBuilds) statBuilds.textContent = DB.guias.filter((g) => g.tipo === "build").length;

  // ── Guías ──
  const guiasList = document.getElementById("guides-list");
  const badgeMap = {
    hot:     ["badge-hot", "Popular"],
    new:     ["badge-new", "Nueva"],
    updated: ["badge-up", "Actualizada"],
  };

  if (guiasList) {
    guiasList.innerHTML = DB.guias
      .map((g) => {
        const badge = badgeMap[g.badge] || ["badge-hot", g.badge];
        const [cls, label] = badge;
        const juegoData = DB.juegos.find((j) => j.titulo === g.juego);
        const emoji = juegoData ? juegoData.emoji : "🎮";
        const bg    = juegoData ? juegoData.thumbBg : "#17181a";
        return `
      <div class="guide-row">
        <div class="guide-icon" style="background:${bg}">${emoji}</div>
        <div class="guide-text">
          <div class="guide-title-text">${g.titulo}</div>
          <div class="guide-sub">${g.juego} · ${g.tipo} · ${g.minutos} min lectura</div>
        </div>
        <span class="badge ${cls}">${label}</span>
      </div>`;
      })
      .join("");
  }

  // ── Tier list ──
  const tierRow = document.getElementById("tier-row");
  if (tierRow && DB.tier) {
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
  }
});
