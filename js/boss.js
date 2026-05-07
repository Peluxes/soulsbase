document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "malenia";
  const boss = DB.bosses[id];

  if (!boss) {
    document.body.innerHTML =
      '<p style="padding:40px;color:var(--text-muted)">Boss no encontrado.</p>';
    return;
  }

  document.title = `${boss.nombre} — SoulsBase`;

  // ── Back btn ──
  document.getElementById("back-label").textContent = boss.juego;
  document.getElementById("back-btn").href = `juego.html?id=${boss.juegoId}`;

  // ── Hero ──
  const hero = document.getElementById("boss-hero");
  hero.style.background = `radial-gradient(ellipse at 20% 50%, ${boss.juegoBg}cc 0%, #111213 70%)`;

  document.getElementById("boss-emoji").textContent = boss.emoji;
  document.getElementById("boss-title").textContent = boss.nombre;

  document.getElementById("boss-breadcrumb").innerHTML = `
    <a href="catalogo.html">${boss.juego}</a>
    <i class="ti ti-chevron-right" style="font-size:11px"></i>
    <span>Bosses</span>
    <i class="ti ti-chevron-right" style="font-size:11px"></i>
    <span>${boss.nombre}</span>`;

  document.getElementById("boss-meta").innerHTML = `
    <span><i class="ti ti-map-pin"></i> ${boss.zona}</span>
    <span><i class="ti ti-tag"></i> ${boss.tipo}</span>
    <span><i class="ti ti-layers"></i> ${boss.fases} fases</span>`;

  const difColors = {
    Extremo: { bg: "#1f0808", color: "#F09595", border: "#791F1F" },
    Alto: { bg: "#1a1008", color: "#EF9F27", border: "#633806" },
    Medio: { bg: "#0f1e10", color: "#97C459", border: "#27500A" },
  };
  const dc = difColors[boss.dificultad] || difColors["Alto"];
  const difBadge = document.getElementById("boss-dif-badge");
  difBadge.textContent = boss.dificultad;
  difBadge.style.cssText = `background:${dc.bg};color:${dc.color};border-color:${dc.border}`;

  // ── Stats ──
  const statsEl = document.getElementById("boss-stats-row");
  statsEl.innerHTML = Object.values(boss.stats)
    .map(
      (s) => `
    <div class="boss-stat-card">
      <div class="boss-stat-val">${s.val}</div>
      <div class="boss-stat-label">${s.label}</div>
    </div>`,
    )
    .join("");

  // ── Descripción ──
  document.getElementById("boss-desc").textContent = boss.descripcion;

  // ── Estrategia ──
  document.getElementById("boss-estrategia-lista").innerHTML = boss.estrategia
    .map(
      (p, i) => `
      <div class="estrategia-paso">
        <div class="paso-num">${i + 1}</div>
        <div>
          <div class="paso-titulo">${p.titulo}</div>
          <div class="paso-texto">${p.texto}</div>
        </div>
      </div>`,
    )
    .join("");

  // ── Info tabla ──
  const infoTabla = [
    ["Juego", boss.juego],
    ["Zona", boss.zona],
    ["Tipo", boss.tipo],
    ["HP", boss.hp],
    ["Runas", boss.runas],
    ["Dificultad", boss.dificultad],
    ["Debilidades", boss.debilidades_texto.join(", ")],
  ];
  document.getElementById("boss-info-tabla").innerHTML = infoTabla
    .map(
      ([k, v]) => `
    <div class="info-row">
      <span class="info-row-label">${k}</span>
      <span class="info-row-val">${v}</span>
    </div>`,
    )
    .join("");

  // ── Resistencias ──
  function barrasHTML(lista) {
    return lista
      .map(
        (r) => `
      <div class="res-row">
        <span class="res-label"><i class="ti ${r.icono}"></i>${r.nombre}</span>
        <div class="res-bar-wrap">
          <div class="res-bar" style="width:${r.valor}%;background:${r.color}"></div>
        </div>
        <span class="res-val" style="color:${r.color}">${r.valor}</span>
      </div>`,
      )
      .join("");
  }
  document.getElementById("boss-resistencias").innerHTML = barrasHTML(
    boss.resistencias,
  );
  document.getElementById("boss-debilidades").innerHTML = barrasHTML(
    boss.debilidades,
  );

  // ── Fases ──
  document.getElementById("boss-fases-lista").innerHTML = boss.fases_data
    .map(
      (f) => `
    <div class="fase-card">
      <div class="fase-header">
        <span class="fase-num" style="color:${f.color}">Fase ${f.num}</span>
        <div>
          <div class="fase-title">${f.titulo}</div>
          <div class="fase-sub">${f.sub}</div>
        </div>
        <span class="fase-hp-badge">${f.hp_trigger}</span>
      </div>
      <div class="fase-body">
        <div class="fase-desc">${f.desc}</div>
        <div class="fase-nuevos">
          <strong>Nuevos ataques:</strong> ${f.nuevos}
        </div>
      </div>
    </div>`,
    )
    .join("");

  // ── Ataques ──
  document.getElementById("boss-ataques-lista").innerHTML = boss.ataques
    .map(
      (a) => `
    <div class="ataque-row">
      <div class="ataque-top">
        <span class="ataque-nombre">${a.nombre}</span>
        <span class="ataque-tipo tipo-${a.tipo}">${a.tipoLabel}</span>
      </div>
      <div class="ataque-desc">${a.desc}</div>
      <div class="ataque-tip">
        <i class="ti ti-bulb"></i>
        <span>${a.tip}</span>
      </div>
    </div>`,
    )
    .join("");

  // ── Drops ──
  const rarityClass = {
    legendario: "rarity-legendario",
    raro: "rarity-raro",
    comun: "rarity-comun",
  };
  document.getElementById("boss-drops-grid").innerHTML = boss.drops
    .map(
      (d) => `
    <div class="drop-card">
      <div class="drop-emoji">${d.emoji}</div>
      <div class="drop-name">${d.nombre}</div>
      <div class="drop-desc">${d.desc}</div>
      <div class="drop-footer">
        <span class="drop-rate"><i class="ti ti-percentage"></i> ${d.tasa}</span>
        <span class="drop-rarity ${rarityClass[d.rareza]}">${d.rareza}</span>
      </div>
    </div>`,
    )
    .join("");

  // ── Builds ──
  document.getElementById("boss-builds-lista").innerHTML = boss.builds
    .map(
      (b) => `
    <div class="build-card">
      <div class="build-rank" style="color:${b.rankColor}">#${b.rank}</div>
      <div class="build-info">
        <div class="build-name">${b.nombre}</div>
        <div class="build-desc">${b.desc}</div>
        <div class="build-tags">
          ${b.tags.map((t) => `<span class="tag tag-souls" style="font-size:10px">${t}</span>`).join("")}
        </div>
      </div>
      <div class="build-efectividad">
        <div class="build-efectividad-val">${b.efectividad}</div>
        <div class="build-efectividad-label">Efectividad</div>
      </div>
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
