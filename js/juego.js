document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "elden-ring";

  const juego = DB.juegos.find((j) => j.id === id) || DB.juegos[0];
  const ficha = DB.fichas[juego.id] || DB.fichas["elden-ring"];

  // ── Hero ──
  document.title = `${juego.titulo} — SoulsBase`;

  const hero = document.getElementById("game-hero");
  hero.style.background = `radial-gradient(ellipse at 20% 50%, ${juego.thumbBg}99 0%, #111213 70%)`;
  if (juego.imagen) {
    hero.style.backgroundImage = `url('${juego.imagen}')`;
    hero.style.backgroundSize = 'cover';
    hero.style.backgroundPosition = 'center top';
  }

  document.getElementById("hero-emoji").textContent = juego.emoji;
  document.getElementById("hero-title").textContent = juego.titulo;
  document.getElementById("hero-score").textContent = juego.rating;

  document.getElementById("hero-tags").innerHTML =
    `<span class="tag tag-${juego.tag}">${juego.tagLabel}</span>`;

  document.getElementById("hero-meta").innerHTML = [
    `<span><i class="ti ti-building"></i> ${ficha.developer}</span>`,
    `<span><i class="ti ti-calendar"></i> ${ficha.año}</span>`,
    `<span><i class="ti ti-device-gamepad"></i> ${ficha.plataformas}</span>`,
  ].join("");

  // ── Info tabla ──
  const infoTabla = document.getElementById("info-tabla");
  const campos = [
    ["Developer", ficha.developer],
    ["Publisher", ficha.publisher],
    ["Año", ficha.año],
    ["Plataformas", ficha.plataformas],
    ["Modos", ficha.modos],
    ["Puntuación", juego.rating + " / 10"],
  ];
  infoTabla.innerHTML = campos
    .map(
      ([k, v]) => `
    <div class="info-row">
      <span class="info-row-label">${k}</span>
      <span class="info-row-val">${v}</span>
    </div>`,
    )
    .join("");

  // ── Descripción ──
  document.getElementById("info-desc").textContent = ficha.descripcion;

  // ── Barras de dificultad ──
  const colores = {
    95: "#E24B4A",
    85: "#EF9F27",
    70: "#EF9F27",
    60: "#97C459",
  };
  const difEl = document.getElementById("dificultad-bars");
  difEl.innerHTML = Object.entries(ficha.dificultad)
    .map(([nombre, val]) => {
      const color = val >= 90 ? "#E24B4A" : val >= 70 ? "#EF9F27" : "#97C459";
      return `
      <div class="dif-row">
        <div class="dif-label">
          <span>${nombre}</span><span>${val}/100</span>
        </div>
        <div class="dif-track">
          <div class="dif-fill" style="width:${val}%;background:${color}"></div>
        </div>
      </div>`;
    })
    .join("");

  // ── Bosses ──
  const difClass = {
    Extremo: "dif-extremo",
    Alto: "dif-alto",
    Medio: "dif-medio",
  };
  document.getElementById("bosses-grid").innerHTML = ficha.bosses
    .map(
      (b) => `
  <div class="boss-card" data-id="${b.id || 'malenia'}" onclick="window.location.href='boss.html?id=${b.id || "malenia"}'">
    <div class="boss-emoji">${b.emoji}</div>
    <div class="boss-name">${b.nombre}</div>
    <div class="boss-zone">${b.zona}</div>
    <div class="boss-footer">
      <span class="boss-dif ${difClass[b.dificultad]}">${b.dificultad}</span>
      <span class="boss-drops">${b.drops}</span>
    </div>
  </div>`,
    )
    .join("");
  setTimeout(() => window.Favoritos && Favoritos.aplicarBotones(), 0);

  // ── Guías ──
  const badgeMap = {
    hot: ["badge-hot", "Popular"],
    new: ["badge-new", "Nueva"],
    updated: ["badge-up", "Actualizada"],
  };
  document.getElementById("juego-guias").innerHTML = ficha.guias
    .map((g) => {
      const [cls, label] = badgeMap[g.badge];
      return `
      <div class="guide-row">
        <div class="guide-icon" style="background:${juego.thumbBg}">${juego.emoji}</div>
        <div class="guide-text">
          <div class="guide-title-text">${g.titulo}</div>
          <div class="guide-sub">${juego.titulo} · ${g.tipo} · ${g.minutos} min lectura</div>
        </div>
        <span class="badge ${cls}">${label}</span>
      </div>`;
    })
    .join("");

  // ── Galería ──
  document.getElementById("galeria-grid").innerHTML = ficha.galeria
    .map(
      (g) => `
    <div class="galeria-item">
      ${g.emoji}
      <div class="galeria-label">${g.label}</div>
    </div>`,
    )
    .join("");

  // ── Lore ──
  document.getElementById("lore-list").innerHTML = ficha.lore
    .map(
      (l) => `
    <div class="lore-card">
      <div class="lore-card-title">${l.titulo}</div>
      <div class="lore-card-text">${l.texto}</div>
      <div class="lore-card-tag">${l.tag}</div>
    </div>`,
    )
    .join("");

  // ── Tabs ──
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".tab-btn")
        .forEach((b) => b.classList.remove("active"));
      document
        .querySelectorAll(".tab-content")
        .forEach((c) => c.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById("tab-" + btn.dataset.tab).classList.add("active");
    });
  });
});
