(function () {
  const LS_KEY = "soulsbase_plan_er";

  // ── Clases base ──
  const CLASES = [
    { id: "vagabundo",   nombre: "Vagabundo",   nivel: 9,  vigor: 15, mente: 10, resistencia: 11, fuerza: 14, destreza: 13, inteligencia: 9,  fe: 9,  arcano: 7  },
    { id: "guerrero",    nombre: "Guerrero",    nivel: 8,  vigor: 11, mente: 12, resistencia: 11, fuerza: 10, destreza: 16, inteligencia: 10, fe: 8,  arcano: 9  },
    { id: "heroe",       nombre: "Héroe",       nivel: 7,  vigor: 14, mente: 9,  resistencia: 12, fuerza: 16, destreza: 9,  inteligencia: 7,  fe: 8,  arcano: 11 },
    { id: "bandido",     nombre: "Bandido",     nivel: 5,  vigor: 10, mente: 11, resistencia: 10, fuerza: 9,  destreza: 13, inteligencia: 9,  fe: 8,  arcano: 14 },
    { id: "astrologer",  nombre: "Astrologer",  nivel: 6,  vigor: 9,  mente: 15, resistencia: 9,  fuerza: 8,  destreza: 12, inteligencia: 16, fe: 7,  arcano: 9  },
    { id: "profeta",     nombre: "Profeta",     nivel: 7,  vigor: 10, mente: 14, resistencia: 8,  fuerza: 11, destreza: 10, inteligencia: 7,  fe: 16, arcano: 10 },
    { id: "confesor",    nombre: "Confesor",    nivel: 10, vigor: 10, mente: 13, resistencia: 10, fuerza: 12, destreza: 12, inteligencia: 9,  fe: 14, arcano: 9  },
    { id: "samurai",     nombre: "Samurai",     nivel: 9,  vigor: 12, mente: 11, resistencia: 13, fuerza: 12, destreza: 15, inteligencia: 9,  fe: 8,  arcano: 8  },
    { id: "prisionero",  nombre: "Prisionero",  nivel: 9,  vigor: 11, mente: 12, resistencia: 11, fuerza: 11, destreza: 14, inteligencia: 14, fe: 6,  arcano: 9  },
    { id: "wretch",      nombre: "Wretch",      nivel: 1,  vigor: 10, mente: 10, resistencia: 10, fuerza: 10, destreza: 10, inteligencia: 10, fe: 10, arcano: 10 },
  ];

  const STATS = ["vigor", "mente", "resistencia", "fuerza", "destreza", "inteligencia", "fe", "arcano"];
  const STAT_LABELS = {
    vigor: "Vigor", mente: "Mente", resistencia: "Resistencia",
    fuerza: "Fuerza", destreza: "Destreza", inteligencia: "Inteligencia", fe: "Fe", arcano: "Arcano"
  };
  const STAT_COLORS = {
    vigor: "#E24B4A", mente: "#85B7EB", resistencia: "#EF9F27",
    fuerza: "#c4956e", destreza: "#97C459", inteligencia: "#AFA9EC", fe: "#FAC775", arcano: "#C46EC4"
  };

  const ARMAS = [
    { nombre: "Rivers of Blood",          reqs: { fuerza: 12, destreza: 18, arcano: 20 } },
    { nombre: "Moonveil Katana",           reqs: { fuerza: 12, destreza: 18, inteligencia: 23 } },
    { nombre: "Greatsword",               reqs: { fuerza: 31, destreza: 12 } },
    { nombre: "Blasphemous Blade",        reqs: { fuerza: 22, destreza: 15, fe: 21 } },
    { nombre: "Sword of Night and Flame", reqs: { fuerza: 12, destreza: 12, inteligencia: 24, fe: 24 } },
    { nombre: "Dragon's Dogma",           reqs: { fuerza: 22, destreza: 10, inteligencia: 10, fe: 10, arcano: 14 } },
    { nombre: "Rotten Battle Hammer",     reqs: { fuerza: 26, destreza: 8 } },
    { nombre: "Starscourge Greatsword",   reqs: { fuerza: 38, destreza: 12 } },
  ];

  // ── State ──
  let claseActual = CLASES[0];
  let nivelObj = 150;
  let added = { vigor: 0, mente: 0, resistencia: 0, fuerza: 0, destreza: 0, inteligencia: 0, fe: 0, arcano: 0 };

  // ── Fórmulas ──
  function calcHP(v) {
    if (v <= 25) return Math.round(300 + v * 12);
    if (v <= 40) return Math.round(600 + (v - 25) * 17);
    if (v <= 60) return Math.round(855 + (v - 40) * 11);
    return Math.round(1075 + (v - 60) * 3);
  }
  function calcFP(m) {
    if (m <= 15) return Math.round(50 + m * 8);
    if (m <= 35) return Math.round(170 + (m - 15) * 7);
    return Math.round(310 + (m - 35) * 5);
  }
  function calcStamina(r) {
    if (r <= 30) return Math.round(80 + r * 3);
    if (r <= 60) return Math.round(170 + (r - 30) * 2);
    return Math.round(230 + (r - 60) * 1);
  }
  function calcEL(r) {
    if (r <= 25) return +(45 + r * 1.5).toFixed(1);
    if (r <= 60) return +(82 + (r - 25) * 1.2).toFixed(1);
    return +(124 + (r - 60) * 0.8).toFixed(1);
  }

  function getTotal(stat) {
    return claseActual[stat] + added[stat];
  }

  function puntosGastados() {
    return STATS.reduce((s, k) => s + added[k], 0);
  }
  function puntosDisponibles() {
    return (nivelObj - claseActual.nivel) - puntosGastados();
  }

  function detectBuild() {
    const s = {};
    STATS.forEach((k) => (s[k] = getTotal(k)));
    if (s.arcano >= 40) return "Build Arcana / Hemorragia";
    if (s.inteligencia >= 40) return "Build Mago";
    if (s.fe >= 40) return "Build Fe / Milagros";
    if (s.fuerza >= 40 && s.destreza < 30) return "Build Fuerza";
    if (s.destreza >= 40 && s.fuerza < 30) return "Build Destreza";
    if (s.fuerza >= 30 && s.destreza >= 30) return "Build Quality";
    return "Build personalizada";
  }

  // ── DOM refs ──
  let elNivel, elPuntos, elHP, elFP, elStamina, elEL, elBuildType, elArmas, elSavedList;
  const statEls = {};

  // ── Render stats ──
  function renderStats() {
    const disp = puntosDisponibles();
    STATS.forEach((stat) => {
      const total = getTotal(stat);
      const base  = claseActual[stat];
      const add   = added[stat];
      if (!statEls[stat]) return;
      statEls[stat].val.textContent  = total;
      statEls[stat].base.textContent = base;
      statEls[stat].bar.style.width  = Math.round((total / 99) * 100) + "%";
      statEls[stat].bar.style.background = STAT_COLORS[stat];
      statEls[stat].btnP.disabled = total >= 99 || disp <= 0;
      statEls[stat].btnM.disabled = add <= 0;
    });
  }

  // ── Render results ──
  function renderResults() {
    const vig = getTotal("vigor");
    const men = getTotal("mente");
    const res = getTotal("resistencia");

    elHP.textContent      = calcHP(vig).toLocaleString("es");
    elFP.textContent      = calcFP(men).toLocaleString("es");
    elStamina.textContent = calcStamina(res).toLocaleString("es");
    elEL.textContent      = calcEL(res).toLocaleString("es");
    elNivel.textContent   = nivelObj;
    elBuildType.textContent = detectBuild();

    const gastados = puntosGastados();
    const total    = nivelObj - claseActual.nivel;
    elPuntos.textContent = `${gastados} / ${total} puntos`;

    // Armas
    const stats = {};
    STATS.forEach((k) => (stats[k] = getTotal(k)));
    elArmas.innerHTML = ARMAS.map((a) => {
      const cumple = Object.entries(a.reqs).every(([k, v]) => stats[k] >= v);
      const reqStr = Object.entries(a.reqs)
        .map(([k, v]) => `${STAT_LABELS[k].substring(0, 3)} ${v}`)
        .join(" · ");
      return `<div class="arma-req-row">
        <span class="arma-req-name">${a.nombre}</span>
        <span style="font-size:10px;color:var(--text-hint);margin-right:8px">${reqStr}</span>
        <span class="${cumple ? "arma-req-ok" : "arma-req-no"}">${cumple ? "✓ OK" : "✗ No"}</span>
      </div>`;
    }).join("");
  }

  function render() {
    renderStats();
    renderResults();
  }

  // ── Clase select ──
  function selectClase(clase) {
    claseActual = clase;
    // Reset added to 0 but ensure level is achievable
    STATS.forEach((k) => (added[k] = 0));
    // Ensure nivelObj >= clase.nivel
    if (nivelObj < clase.nivel) nivelObj = clase.nivel;
    document.getElementById("nivel-slider").min = clase.nivel;
    document.getElementById("nivel-slider").value = nivelObj;
    document.querySelectorAll(".clase-card").forEach((c) => {
      c.classList.toggle("active", c.dataset.clase === clase.id);
    });
    render();
  }

  // ── Build URL share ──
  function buildShareURL() {
    const params = new URLSearchParams();
    params.set("clase", claseActual.id);
    params.set("nivel", nivelObj);
    STATS.forEach((k) => params.set(k, added[k]));
    return window.location.origin + window.location.pathname + "?" + params.toString();
  }

  function loadFromURL() {
    const params = new URLSearchParams(window.location.search);
    if (!params.has("clase")) return;
    const c = CLASES.find((x) => x.id === params.get("clase"));
    if (c) claseActual = c;
    nivelObj = parseInt(params.get("nivel")) || claseActual.nivel;
    STATS.forEach((k) => {
      const v = parseInt(params.get(k));
      added[k] = isNaN(v) ? 0 : Math.max(0, v);
    });
  }

  // ── localStorage saves ──
  function loadSaves() {
    try { return JSON.parse(localStorage.getItem(LS_KEY)) || []; } catch { return []; }
  }
  function saveSaves(arr) {
    localStorage.setItem(LS_KEY, JSON.stringify(arr));
  }

  function renderSaved() {
    const saves = loadSaves();
    if (!saves.length) {
      elSavedList.innerHTML = '<span style="font-size:12px;color:var(--text-hint)">No hay builds guardadas.</span>';
      return;
    }
    elSavedList.innerHTML = saves.map((s, i) => `
      <div class="build-saved-item">
        <span>${s.nombre}</span>
        <div class="build-saved-actions">
          <button class="build-saved-btn" data-action="load" data-idx="${i}">Cargar</button>
          <button class="build-saved-btn" data-action="del" data-idx="${i}" style="color:#E24B4A">Eliminar</button>
        </div>
      </div>`).join("");

    elSavedList.querySelectorAll("[data-action='load']").forEach((btn) => {
      btn.addEventListener("click", () => {
        const s = loadSaves()[parseInt(btn.dataset.idx)];
        if (!s) return;
        const c = CLASES.find((x) => x.id === s.clase);
        if (c) claseActual = c;
        nivelObj = s.nivel;
        STATS.forEach((k) => (added[k] = s.added[k] || 0));
        document.getElementById("nivel-slider").value = nivelObj;
        document.querySelectorAll(".clase-card").forEach((card) => {
          card.classList.toggle("active", card.dataset.clase === claseActual.id);
        });
        render();
      });
    });

    elSavedList.querySelectorAll("[data-action='del']").forEach((btn) => {
      btn.addEventListener("click", () => {
        const arr = loadSaves();
        arr.splice(parseInt(btn.dataset.idx), 1);
        saveSaves(arr);
        renderSaved();
      });
    });
  }

  // ── Init ──
  document.addEventListener("DOMContentLoaded", () => {
    loadFromURL();

    elNivel     = document.getElementById("res-nivel");
    elPuntos    = document.getElementById("res-puntos");
    elHP        = document.getElementById("res-hp");
    elFP        = document.getElementById("res-fp");
    elStamina   = document.getElementById("res-stamina");
    elEL        = document.getElementById("res-el");
    elBuildType = document.getElementById("res-buildtype");
    elArmas     = document.getElementById("armas-list");
    elSavedList = document.getElementById("saved-list");

    // ── Clase grid ──
    const claseGrid = document.getElementById("clase-grid");
    claseGrid.innerHTML = CLASES.map((c) => `
      <div class="clase-card${c.id === claseActual.id ? " active" : ""}" data-clase="${c.id}">
        <div class="clase-card-name">${c.nombre}</div>
        <div class="clase-card-nivel">Nv. ${c.nivel}</div>
      </div>`).join("");

    claseGrid.querySelectorAll(".clase-card").forEach((card) => {
      card.addEventListener("click", () => {
        const c = CLASES.find((x) => x.id === card.dataset.clase);
        if (c) selectClase(c);
      });
    });

    // ── Nivel slider ──
    const slider = document.getElementById("nivel-slider");
    slider.min   = claseActual.nivel;
    slider.value = nivelObj;
    slider.addEventListener("input", () => {
      nivelObj = parseInt(slider.value);
      render();
    });

    // ── Stats grid ──
    const statsGrid = document.getElementById("stats-grid");
    statsGrid.innerHTML = STATS.map((stat) => `
      <div class="stat-item">
        <span class="stat-item-name">${STAT_LABELS[stat]}</span>
        <span class="stat-item-base" id="base-${stat}">${claseActual[stat]}</span>
        <button class="stat-item-btn" id="btn-m-${stat}">−</button>
        <span class="stat-item-val" id="val-${stat}">${getTotal(stat)}</span>
        <button class="stat-item-btn" id="btn-p-${stat}">+</button>
        <div class="stat-item-bar">
          <div class="stat-item-bar-fill" id="bar-${stat}" style="width:${Math.round((getTotal(stat)/99)*100)}%;background:${STAT_COLORS[stat]}"></div>
        </div>
      </div>`).join("");

    STATS.forEach((stat) => {
      statEls[stat] = {
        val:  document.getElementById(`val-${stat}`),
        base: document.getElementById(`base-${stat}`),
        bar:  document.getElementById(`bar-${stat}`),
        btnP: document.getElementById(`btn-p-${stat}`),
        btnM: document.getElementById(`btn-m-${stat}`),
      };
      statEls[stat].btnP.addEventListener("click", () => {
        if (getTotal(stat) >= 99 || puntosDisponibles() <= 0) return;
        added[stat]++;
        render();
      });
      statEls[stat].btnM.addEventListener("click", () => {
        if (added[stat] <= 0) return;
        added[stat]--;
        render();
      });
    });

    // ── Guardar build ──
    document.getElementById("btn-guardar").addEventListener("click", () => {
      const nombre = document.getElementById("build-name-input").value.trim();
      if (!nombre) return;
      const arr = loadSaves();
      arr.unshift({ nombre, clase: claseActual.id, nivel: nivelObj, added: { ...added } });
      if (arr.length > 20) arr.length = 20;
      saveSaves(arr);
      document.getElementById("build-name-input").value = "";
      renderSaved();
    });

    // ── Compartir ──
    document.getElementById("btn-compartir").addEventListener("click", () => {
      const url = buildShareURL();
      navigator.clipboard.writeText(url).then(() => {
        const btn = document.getElementById("btn-compartir");
        const orig = btn.textContent;
        btn.textContent = "¡Copiado!";
        setTimeout(() => (btn.textContent = orig), 2000);
      }).catch(() => {
        prompt("Copia esta URL:", url);
      });
    });

    renderSaved();
    render();
  });
})();
