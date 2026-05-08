document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || Object.keys(DB.builds)[0];
  const build = DB.builds[id];

  if (!build) {
    document.querySelector(".content").innerHTML =
      '<p style="padding:40px;color:var(--text-hint)">Build no encontrada.</p>';
    return;
  }

  document.title = `${build.nombre} — SoulsBase`;

  // ── Hero ──
  document.getElementById("build-emoji").textContent = build.emoji;
  document.getElementById("build-nombre").textContent = build.nombre;
  document.getElementById("build-juego").innerHTML =
    `<a href="juego.html?id=${build.juegoId}" style="color:var(--text-hint);text-decoration:none">
      <i class="ti ti-device-gamepad" style="font-size:12px"></i> ${build.juego}
    </a>`;

  const tipoClass = { PvE: "build-badge-pve", PvP: "build-badge-pvp", "PvE/PvP": "build-badge-pvepvp" };
  const tipoEl = document.getElementById("build-tipo");
  tipoEl.textContent = build.tipo;
  tipoEl.className = `build-badge ${tipoClass[build.tipo] || "build-badge-dif"}`;

  document.getElementById("build-dificultad").textContent = build.dificultad;
  document.getElementById("build-rating").textContent = build.rating + " / 100";

  document.getElementById("build-efectividad-bar").style.width = build.rating + "%";
  document.getElementById("build-rating-num").textContent = build.rating + "/100";

  // ── Tab Resumen ──
  document.getElementById("build-desc").textContent = build.descripcion;
  document.getElementById("build-habilidades").innerHTML = build.habilidades
    .map((h) => `
      <div class="habil-card">
        <div class="habil-header">
          <span class="habil-nombre">${h.nombre}</span>
          <span class="habil-tipo habil-tipo-${h.tipo}">${h.tipo}</span>
        </div>
        <div class="habil-desc">${h.desc}</div>
      </div>`)
    .join("");

  // ── Tab Stats ──
  const statColors = {
    vigor: "#E24B4A", mente: "#85B7EB", resistencia: "#EF9F27",
    fuerza: "#c4956e", destreza: "#97C459",
    inteligencia: "#AFA9EC", fe: "#FAC775", arcano: "#C46EC4"
  };
  const statLabels = {
    vigor: "Vigor", mente: "Mente", resistencia: "Resistencia",
    fuerza: "Fuerza", destreza: "Destreza",
    inteligencia: "Inteligencia", fe: "Fe", arcano: "Arcano"
  };
  document.getElementById("build-stats-bars").innerHTML = Object.entries(build.stats)
    .map(([key, val]) => `
      <div class="stat-bar-row">
        <span class="stat-bar-label">${statLabels[key] || key}</span>
        <div class="stat-bar-track">
          <div class="stat-bar-fill" style="width:${Math.round((val / 99) * 100)}%;background:${statColors[key] || "#7F77DD"}"></div>
        </div>
        <span class="stat-bar-val">${val}</span>
      </div>`)
    .join("");

  // ── Tab Equipamiento ──
  const slotIcons = {
    "Arma principal": "ti-sword", "Arma secundaria": "ti-shield",
    "Cabeza": "ti-helmet", "Pecho": "ti-shirt", "Manos": "ti-hand-stop",
    "Piernas": "ti-boot", "Talismanes": "ti-diamond"
  };
  document.getElementById("build-equip").innerHTML = `
    <table class="equip-table">
      ${Object.entries(build.equipamiento).map(([slot, item]) => `
        <tr>
          <td class="equip-slot"><i class="ti ${slotIcons[slot] || "ti-package"}"></i> ${slot}</td>
          <td>${item}</td>
        </tr>`).join("")}
    </table>`;

  // ── Tab Progresión ──
  document.getElementById("build-progresion").innerHTML = `
    <div class="prog-timeline">
      ${build.progresion.map((p) => `
        <div class="prog-item">
          <div class="prog-nivel">Nv. ${p.nivel}</div>
          <div class="prog-texto">${p.texto}</div>
        </div>`).join("")}
    </div>`;

  // ── Tab Pros y Contras ──
  document.getElementById("build-proscontras").innerHTML = `
    <div class="pros-contras">
      <div class="pros-list">
        <h4><i class="ti ti-circle-check"></i> PROS</h4>
        ${build.pros.map((p) => `<div class="pros-item"><span style="color:#97C459">✓</span> ${p}</div>`).join("")}
      </div>
      <div class="contras-list">
        <h4><i class="ti ti-circle-x"></i> CONTRAS</h4>
        ${build.contras.map((c) => `<div class="contras-item"><span style="color:#E24B4A">✗</span> ${c}</div>`).join("")}
      </div>
    </div>`;

  // ── Tabs ──
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach((c) => c.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById("tab-" + btn.dataset.tab).classList.add("active");
    });
  });
});
