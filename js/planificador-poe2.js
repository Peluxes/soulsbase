(function () {
  const LS_KEY = "soulsbase_plan_poe2";
  const MAX_PASIVAS = 120;

  // ── Datos ──
  const CLASES_POE2 = {
    "Warrior": {
      emoji: "⚔️", color: "#C87B3A",
      desc: "Fuerza bruta y resistencia",
      ascendencias: [
        { nombre: "Titan",        desc: "Amplifica la fuerza y los golpes devastadores" },
        { nombre: "Warbringer",   desc: "Combina berserker y invocación de totems" },
        { nombre: "Chronomancer", desc: "Manipula el tiempo para potenciar ataques" },
      ]
    },
    "Ranger": {
      emoji: "🏹", color: "#4A8A3A",
      desc: "Velocidad, evasión y proyectiles",
      ascendencias: [
        { nombre: "Deadeye",    desc: "Proyectiles adicionales y alcance máximo" },
        { nombre: "Pathfinder", desc: "Frascos potenciados y venenos devastadores" },
        { nombre: "Ritualist",  desc: "Rituales y maldiciones de naturaleza" },
      ]
    },
    "Sorceress": {
      emoji: "⚡", color: "#3A5A9A",
      desc: "Magia elemental devastadora",
      ascendencias: [
        { nombre: "Stormweaver", desc: "Domina los rayos y encadena tormentas" },
        { nombre: "Invoker",     desc: "Invoca elementales y potencia hechizos" },
        { nombre: "Chronomancer",desc: "Manipula el tiempo para lanzar hechizos" },
      ]
    },
    "Monk": {
      emoji: "☯️", color: "#7A4A9A",
      desc: "Velocidad de ataque y evasión",
      ascendencias: [
        { nombre: "Acolyte of Chayula", desc: "Vacío y dimensiones para potenciar golpes" },
        { nombre: "Invoker",            desc: "Energía espiritual que potencia cada golpe" },
        { nombre: "Tactician",          desc: "Posicionamiento y control del campo" },
      ]
    },
    "Mercenary": {
      emoji: "🔫", color: "#3A6A8A",
      desc: "Armas de fuego y trampas",
      ascendencias: [
        { nombre: "Witchhunter",        desc: "Especialista en eliminar usuarios de magia" },
        { nombre: "Gemling Legionnaire",desc: "Potencia gemas duplicadas y encadenadas" },
        { nombre: "Tactician",          desc: "Trampas y granadas con precisión militar" },
      ]
    },
    "Witch": {
      emoji: "🌑", color: "#5A3A8A",
      desc: "Invocación y magia oscura",
      ascendencias: [
        { nombre: "Infernalist",         desc: "Pactos demoníacos y fuego de las profundidades" },
        { nombre: "Blood Mage",          desc: "Sacrifica vida para lanzar hechizos devastadores" },
        { nombre: "Gemling Legionnaire", desc: "Maximiza el potencial de cada gema equipada" },
      ]
    },
  };

  const ZONAS_PASIVAS = [
    {
      zona: "Fuerza", color: "#C87B3A",
      nodos: [
        { id:"str1", nombre:"Vida aumentada",   bonus:"+10% vida máxima",                coste:1 },
        { id:"str2", nombre:"Daño físico",       bonus:"+12% daño físico",                coste:1 },
        { id:"str3", nombre:"Armadura",          bonus:"+15% armadura",                   coste:1 },
        { id:"str4", nombre:"Golpe poderoso",    bonus:"+20% daño con ataques de fuerza", coste:2 },
        { id:"str5", nombre:"Fortify",           bonus:"Fortify al recibir daño",         coste:3 },
      ]
    },
    {
      zona: "Destreza", color: "#4A8A3A",
      nodos: [
        { id:"dex1", nombre:"Vel. de ataque",  bonus:"+8% velocidad de ataque",    coste:1 },
        { id:"dex2", nombre:"Evasión",         bonus:"+15% evasión",               coste:1 },
        { id:"dex3", nombre:"Proyectiles",     bonus:"+10% daño de proyectiles",   coste:1 },
        { id:"dex4", nombre:"Furtividad",      bonus:"+20% daño crítico",          coste:2 },
        { id:"dex5", nombre:"Movimiento",      bonus:"+10% vel. de movimiento",    coste:2 },
      ]
    },
    {
      zona: "Inteligencia", color: "#3A5A9A",
      nodos: [
        { id:"int1", nombre:"Maná aumentado",    bonus:"+12% maná máximo",             coste:1 },
        { id:"int2", nombre:"Daño de hechizos",  bonus:"+10% daño de hechizos",        coste:1 },
        { id:"int3", nombre:"Resistencias",      bonus:"+10% a todas las resistencias", coste:1 },
        { id:"int4", nombre:"Concentración",     bonus:"+15% daño de área",            coste:2 },
        { id:"int5", nombre:"Arcano",            bonus:"+25% daño elemental",          coste:3 },
      ]
    },
    {
      zona: "Keystones", color: "#EF9F27",
      nodos: [
        { id:"key1", nombre:"Resolute Technique",  bonus:"Nunca fallas ataques, no puedes criticar",     coste:5 },
        { id:"key2", nombre:"Elemental Overload",  bonus:"+40% daño elemental tras criticar",            coste:5 },
        { id:"key3", nombre:"Acrobatics",          bonus:"+30% evasión, -30% armadura y ES",             coste:5 },
        { id:"key4", nombre:"Unwavering Stance",   bonus:"Inmune a stun, no puedes evadir",              coste:5 },
        { id:"key5", nombre:"Ghost Dance",         bonus:"Regenera escudo de energía con evasión",       coste:5 },
      ]
    },
  ];

  const HABILIDADES_POE2 = {
    "Warrior":    ["—","Ground Slam","Heavy Strike","Leap Slam","Shield Charge","Sunder","Armour Explosion"],
    "Ranger":     ["—","Tornado Shot","Lightning Arrow","Barrage","Rain of Arrows","Shrapnel Shot","Splitting Steel"],
    "Sorceress":  ["—","Fireball","Ice Nova","Arc","Glacial Cascade","Spark","Orb of Storms"],
    "Monk":       ["—","Tempest Bell","Killing Palm","Resonating Shield","Bells of War","Ice Strike","Whirling Assault"],
    "Mercenary":  ["—","Galvanic Shards","Fragmentation Rounds","Siege Volley","Explosive Shot","Gas Grenade","Magnetic Salvo"],
    "Witch":      ["—","Bone Cage","Rotten Claws","Contagion","Essence Drain","Summon Raging Spirit","Detonate Dead"],
  };

  const SOPORTES = [
    "—","Added Fire Damage","Added Cold Damage","Added Lightning Damage",
    "Faster Attacks","Faster Casting","Concentrated Effect",
    "Increased Area of Effect","Multistrike","Fork","Pierce",
    "Chain","Volley","Brutality","Elemental Damage with Attacks",
    "Life on Hit","Mana Leech","Culling Strike",
  ];

  const EQUIPO_SLOTS = [
    { key:"cabeza",    label:"Cabeza",      icon:"🪖" },
    { key:"pecho",     label:"Pecho",       icon:"🛡️" },
    { key:"manos",     label:"Manos",       icon:"🧤" },
    { key:"pies",      label:"Pies",        icon:"👢" },
    { key:"arma1",     label:"Arma princ.", icon:"⚔️" },
    { key:"arma2",     label:"Arma sec.",   icon:"🗡️" },
  ];

  // ── Estado ──
  let claseActual = "Warrior";
  let ascendencia = "";
  let nivel = 70;
  let pasivas = {};        // { nodoId: true }
  let gems = [];           // [{ habilidad, nivel, quality, soportes:[s1,s2,s3] }, ...]
  let equipo = {};         // { slotKey: { nombre, sockets } }

  function initGems() {
    gems = Array.from({ length: 6 }, () => ({
      habilidad: "—", nivel: 1, quality: 0,
      soportes: ["—", "—", "—"],
    }));
  }

  function initEquipo() {
    equipo = {};
    EQUIPO_SLOTS.forEach((s) => { equipo[s.key] = { nombre: "", sockets: 2 }; });
  }

  // ── Helpers ──
  function puntosGastados() {
    return ZONAS_PASIVAS.reduce((total, zona) => {
      return total + zona.nodos.reduce((t, n) => t + (pasivas[n.id] ? n.coste : 0), 0);
    }, 0);
  }

  function bonusPasivas() {
    const b = { vidaPct: 0, manaPct: 0, resistencias: 0, dps: 0 };
    ZONAS_PASIVAS.forEach((zona) => {
      zona.nodos.forEach((n) => {
        if (!pasivas[n.id]) return;
        const bonus = n.bonus;
        if (bonus.includes("vida")) b.vidaPct += extractPct(bonus);
        if (bonus.includes("maná")) b.manaPct += extractPct(bonus);
        if (bonus.includes("resistencias")) b.resistencias += extractPct(bonus);
        if (bonus.includes("daño")) b.dps += extractPct(bonus);
      });
    });
    return b;
  }

  function extractPct(str) {
    const m = str.match(/\+(\d+)%/);
    return m ? parseInt(m[1]) : 0;
  }

  function calcGemDPS(gem) {
    if (!gem.habilidad || gem.habilidad === "—") return 0;
    return gem.nivel * 10 + gem.quality * 2;
  }

  function totalDPS() {
    return gems.reduce((s, g) => s + calcGemDPS(g), 0);
  }

  function detectBuild() {
    const habs = gems.map((g) => g.habilidad);
    if (habs.some((h) => ["Fireball","Ice Nova","Arc","Glacial Cascade","Spark","Orb of Storms"].includes(h)))
      return "Hechicero Elemental";
    if (habs.some((h) => ["Tornado Shot","Lightning Arrow","Barrage","Rain of Arrows","Shrapnel Shot","Splitting Steel"].includes(h)))
      return "Arquero";
    if (habs.some((h) => ["Ground Slam","Heavy Strike","Leap Slam","Shield Charge","Sunder","Armour Explosion"].includes(h)))
      return "Guerrero cuerpo a cuerpo";
    if (habs.some((h) => ["Bone Cage","Rotten Claws","Contagion","Essence Drain","Summon Raging Spirit","Detonate Dead"].includes(h)))
      return "Invocador / DoT";
    if (habs.some((h) => ["Galvanic Shards","Fragmentation Rounds","Siege Volley","Explosive Shot","Gas Grenade","Magnetic Salvo"].includes(h)))
      return "Mercenario a distancia";
    if (habs.some((h) => ["Tempest Bell","Killing Palm","Resonating Shield","Bells of War","Ice Strike","Whirling Assault"].includes(h)))
      return "Monje combatiente";
    return "Build personalizada";
  }

  // ── Render clase ──
  function renderClaseGrid() {
    const grid = document.getElementById("poe2-clase-grid");
    if (!grid) return;
    grid.innerHTML = Object.entries(CLASES_POE2).map(([nombre, cl]) => `
      <div class="poe2-clase-card${nombre === claseActual ? " active" : ""}"
        data-clase="${nombre}"
        style="border-color:${nombre === claseActual ? cl.color : ""}">
        <div class="poe2-clase-emoji">${cl.emoji}</div>
        <div class="poe2-clase-name" style="color:${cl.color}">${nombre}</div>
        <div class="poe2-clase-desc">${cl.desc}</div>
      </div>`).join("");

    grid.querySelectorAll(".poe2-clase-card").forEach((card) => {
      card.addEventListener("click", () => {
        claseActual = card.dataset.clase;
        ascendencia = "";
        renderClaseGrid();
        renderAscendencias();
        renderGems();
        renderResults();
      });
    });
  }

  function renderAscendencias() {
    const wrap = document.getElementById("poe2-asc-wrap");
    const grid = document.getElementById("poe2-asc-grid");
    if (!wrap || !grid) return;
    const clase = CLASES_POE2[claseActual];
    wrap.style.display = "block";
    grid.innerHTML = clase.ascendencias.map((asc) => `
      <div class="asc-card${ascendencia === asc.nombre ? " active" : ""}"
        data-asc="${asc.nombre}" title="${asc.desc}">
        <div style="font-weight:500;margin-bottom:3px">${asc.nombre}</div>
        <div style="font-size:10px;color:var(--text-hint);line-height:1.3">${asc.desc}</div>
      </div>`).join("");

    grid.querySelectorAll(".asc-card").forEach((card) => {
      card.addEventListener("click", () => {
        ascendencia = ascendencia === card.dataset.asc ? "" : card.dataset.asc;
        renderAscendencias();
        renderResults();
      });
    });
  }

  // ── Render pasivas ──
  function renderPasivas() {
    const container = document.getElementById("poe2-pasivas-container");
    if (!container) return;
    const gastados = puntosGastados();
    const ptEl = document.getElementById("poe2-pasivas-gastados");
    if (ptEl) ptEl.textContent = gastados;

    container.innerHTML = ZONAS_PASIVAS.map((z) => `
      <div class="pasiva-zona">
        <div class="pasiva-zona-title">
          <span style="width:10px;height:10px;border-radius:50%;background:${z.color};display:inline-block;flex-shrink:0"></span>
          <span style="color:${z.color}">${z.zona}</span>
        </div>
        <div class="pasiva-nodos">
          ${z.nodos.map((n) => {
            const activo = !!pasivas[n.id];
            const costeTotal = gastados - (activo ? n.coste : 0) + (activo ? 0 : n.coste);
            const puedeActivar = !activo && (gastados + n.coste <= MAX_PASIVAS);
            return `<div class="pasiva-nodo${activo ? " active" : ""}" data-id="${n.id}" data-coste="${n.coste}"
              style="${activo ? "border-color:"+z.color+";" : ""}${!puedeActivar && !activo ? "opacity:.5;" : ""}">
              <input type="checkbox" ${activo ? "checked" : ""} data-id="${n.id}" />
              <div class="pasiva-nodo-info">
                <div class="pasiva-nodo-nombre">${n.nombre}</div>
                <div class="pasiva-nodo-bonus">${n.bonus}</div>
                <div class="pasiva-nodo-coste">${n.coste} punto${n.coste > 1 ? "s" : ""}</div>
              </div>
            </div>`;
          }).join("")}
        </div>
      </div>`).join("");

    container.querySelectorAll(".pasiva-nodo").forEach((nodo) => {
      nodo.addEventListener("click", () => {
        const id    = nodo.dataset.id;
        const coste = parseInt(nodo.dataset.coste);
        if (pasivas[id]) {
          delete pasivas[id];
        } else {
          if (puntosGastados() + coste > MAX_PASIVAS) return;
          pasivas[id] = true;
        }
        renderPasivas();
        renderResults();
      });
    });
  }

  // ── Render gemas ──
  function renderGems() {
    const container = document.getElementById("poe2-gems-container");
    if (!container) return;
    const habs = ["—", ...(HABILIDADES_POE2[claseActual] || []).filter((h) => h !== "—")];

    container.innerHTML = gems.map((gem, i) => {
      const dps = calcGemDPS(gem);
      return `
        <div class="gem-slot-wrap">
          <div class="gem-slot-header">
            <div class="gem-slot-num">${i + 1}</div>
            <select class="gem-main-select" data-gem="${i}" data-tipo="hab">
              ${habs.map((h) => `<option${h === gem.habilidad ? " selected" : ""}>${h}</option>`).join("")}
            </select>
            <div class="gem-nivel-wrap">
              Nv.<input type="number" class="gem-nivel-input" min="1" max="20" value="${gem.nivel}" data-gem="${i}" data-tipo="nivel" />
            </div>
            <div class="gem-nivel-wrap">
              Q%<input type="number" class="gem-nivel-input" min="0" max="20" value="${gem.quality}" data-gem="${i}" data-tipo="quality" />
            </div>
          </div>
          <div class="gem-supports">
            ${gem.soportes.map((s, si) => `
              <select class="gem-support-select" data-gem="${i}" data-soporte="${si}">
                ${SOPORTES.map((o) => `<option${o === s ? " selected" : ""}>${o}</option>`).join("")}
              </select>`).join("")}
          </div>
          ${dps > 0 ? `<div class="gem-dps">DPS estimado: <strong>${dps}</strong></div>` : ""}
        </div>`;
    }).join("");

    container.querySelectorAll("[data-tipo='hab']").forEach((sel) => {
      sel.addEventListener("change", () => {
        gems[parseInt(sel.dataset.gem)].habilidad = sel.value;
        renderResults();
      });
    });
    container.querySelectorAll("[data-tipo='nivel']").forEach((inp) => {
      inp.addEventListener("change", () => {
        gems[parseInt(inp.dataset.gem)].nivel = Math.min(20, Math.max(1, parseInt(inp.value) || 1));
        renderGems();
        renderResults();
      });
    });
    container.querySelectorAll("[data-tipo='quality']").forEach((inp) => {
      inp.addEventListener("change", () => {
        gems[parseInt(inp.dataset.gem)].quality = Math.min(20, Math.max(0, parseInt(inp.value) || 0));
        renderGems();
        renderResults();
      });
    });
    container.querySelectorAll("[data-soporte]").forEach((sel) => {
      sel.addEventListener("change", () => {
        const gi = parseInt(sel.dataset.gem);
        const si = parseInt(sel.dataset.soporte);
        gems[gi].soportes[si] = sel.value;
        renderResults();
      });
    });
  }

  // ── Render equipo ──
  function renderEquipo() {
    const container = document.getElementById("poe2-equipo-container");
    if (!container) return;

    container.innerHTML = EQUIPO_SLOTS.map((slot) => {
      const eq = equipo[slot.key];
      const gemCount = 0; // sockets usados (simplificado, no asignamos gemas a slots específicos)
      const socketsHTML = Array.from({ length: eq.sockets }, (_, si) =>
        `<div class="socket${si < gemCount ? " used" : ""}"></div>`
      ).join("");

      return `
        <div class="equipo-slot">
          <div class="equipo-slot-icon">${slot.icon}</div>
          <div class="equipo-slot-name">${slot.label}</div>
          <input class="equipo-slot-input" type="text" placeholder="Nombre del item..." value="${eq.nombre}"
            data-slot="${slot.key}" data-tipo="nombre" />
          <div class="gem-nivel-wrap" style="flex-shrink:0">
            S:<input type="number" class="gem-nivel-input" min="1" max="4" value="${eq.sockets}"
              data-slot="${slot.key}" data-tipo="sockets" style="width:36px" />
          </div>
          <div class="equipo-sockets">${socketsHTML}</div>
        </div>`;
    }).join("");

    container.querySelectorAll("[data-tipo='nombre']").forEach((inp) => {
      inp.addEventListener("input", () => {
        equipo[inp.dataset.slot].nombre = inp.value;
      });
    });
    container.querySelectorAll("[data-tipo='sockets']").forEach((inp) => {
      inp.addEventListener("change", () => {
        equipo[inp.dataset.slot].sockets = Math.min(4, Math.max(1, parseInt(inp.value) || 1));
        renderEquipo();
      });
    });
  }

  // ── Render results ──
  function renderResults() {
    const clase = CLASES_POE2[claseActual];
    const bonus = bonusPasivas();
    const gastados = puntosGastados();
    const dps = totalDPS();
    const vida = Math.round(50 + nivel * 10 * (1 + bonus.vidaPct / 100));
    const mana = Math.round(30 + nivel * 5  * (1 + bonus.manaPct / 100));
    const gemasActivas = gems.filter((g) => g.habilidad !== "—").length;

    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    const setStyle = (id, prop, val) => { const el = document.getElementById(id); if (el) el.style[prop] = val; };

    set("poe2-res-emoji", clase.emoji);
    set("poe2-res-clase", claseActual);
    setStyle("poe2-res-clase", "color", clase.color);
    set("poe2-res-asc", ascendencia || "Sin ascendencia");

    set("poe2-res-buildtype", detectBuild());
    setStyle("poe2-res-buildtype", "color", clase.color);

    const dpsEl = document.querySelector("#poe2-res-dps div:first-child");
    if (dpsEl) {
      dpsEl.textContent = dps.toLocaleString("es");
      dpsEl.style.color = dps > 1000 ? "#E24B4A" : dps > 500 ? "#EF9F27" : "#97C459";
    }

    set("poe2-res-vida",   vida.toLocaleString("es"));
    set("poe2-res-mana",   mana.toLocaleString("es"));
    set("poe2-res-res",    bonus.resistencias > 0 ? "+" + bonus.resistencias + "%" : "0%");
    set("poe2-res-pasivas",`${gastados} / ${MAX_PASIVAS}`);
    set("poe2-res-gemas",  `${gemasActivas} / 6`);

    const ptEl = document.getElementById("poe2-pasivas-gastados");
    if (ptEl) ptEl.textContent = gastados;
  }

  // ── localStorage ──
  function loadSaves() {
    try { return JSON.parse(localStorage.getItem(LS_KEY)) || []; } catch { return []; }
  }
  function saveSaves(arr) {
    localStorage.setItem(LS_KEY, JSON.stringify(arr));
  }

  function renderSaved() {
    const el = document.getElementById("poe2-saved-list");
    if (!el) return;
    const saves = loadSaves();
    if (!saves.length) {
      el.innerHTML = '<span style="font-size:12px;color:var(--text-hint)">No hay builds guardadas.</span>';
      return;
    }
    el.innerHTML = saves.map((s, i) => `
      <div class="build-saved-item">
        <span>${s.nombre} <span style="color:var(--text-hint);font-size:10px">(${s.clase})</span></span>
        <div class="build-saved-actions">
          <button class="build-saved-btn" data-action="load" data-idx="${i}">Cargar</button>
          <button class="build-saved-btn" data-action="del"  data-idx="${i}" style="color:#E24B4A">Eliminar</button>
        </div>
      </div>`).join("");

    el.querySelectorAll("[data-action='load']").forEach((btn) => {
      btn.addEventListener("click", () => {
        const s = loadSaves()[parseInt(btn.dataset.idx)];
        if (!s) return;
        claseActual = s.clase;
        ascendencia = s.ascendencia || "";
        nivel       = s.nivel || 70;
        pasivas     = { ...s.pasivas };
        gems        = s.gems ? s.gems.map((g) => ({ ...g, soportes: [...g.soportes] })) : gems;
        equipo      = s.equipo ? JSON.parse(JSON.stringify(s.equipo)) : equipo;
        const sl = document.getElementById("poe2-nivel-slider");
        if (sl) { sl.value = nivel; document.getElementById("poe2-nivel-num").textContent = nivel; }
        renderAll();
      });
    });
    el.querySelectorAll("[data-action='del']").forEach((btn) => {
      btn.addEventListener("click", () => {
        const arr = loadSaves();
        arr.splice(parseInt(btn.dataset.idx), 1);
        saveSaves(arr);
        renderSaved();
      });
    });
  }

  // ── URL share ──
  function buildShareURL() {
    const params = new URLSearchParams();
    params.set("clase", claseActual);
    if (ascendencia) params.set("asc", ascendencia);
    params.set("nivel", nivel);
    Object.keys(pasivas).forEach((k) => params.set("p_" + k, "1"));
    gems.forEach((g, i) => {
      if (g.habilidad !== "—") {
        params.set(`g${i}h`, g.habilidad);
        params.set(`g${i}n`, g.nivel);
        params.set(`g${i}q`, g.quality);
        g.soportes.forEach((s, si) => { if (s !== "—") params.set(`g${i}s${si}`, s); });
      }
    });
    return window.location.origin + window.location.pathname + "?" + params.toString();
  }

  function loadFromURL() {
    const params = new URLSearchParams(window.location.search);
    if (!params.has("clase")) return;
    const cl = params.get("clase");
    if (CLASES_POE2[cl]) claseActual = cl;
    ascendencia = params.get("asc") || "";
    nivel = parseInt(params.get("nivel")) || 70;
    params.forEach((val, key) => {
      if (key.startsWith("p_")) pasivas[key.slice(2)] = true;
    });
    for (let i = 0; i < 6; i++) {
      if (params.has(`g${i}h`)) {
        gems[i].habilidad = params.get(`g${i}h`);
        gems[i].nivel     = parseInt(params.get(`g${i}n`)) || 1;
        gems[i].quality   = parseInt(params.get(`g${i}q`)) || 0;
        for (let si = 0; si < 3; si++) {
          if (params.has(`g${i}s${si}`)) gems[i].soportes[si] = params.get(`g${i}s${si}`);
        }
      }
    }
  }

  function renderAll() {
    renderClaseGrid();
    renderAscendencias();
    renderPasivas();
    renderGems();
    renderEquipo();
    renderResults();
    renderSaved();
  }

  // ── Init ──
  document.addEventListener("DOMContentLoaded", () => {
    initGems();
    initEquipo();
    loadFromURL();

    // Nivel slider
    const nivelSlider = document.getElementById("poe2-nivel-slider");
    if (nivelSlider) {
      nivelSlider.value = nivel;
      nivelSlider.addEventListener("input", () => {
        nivel = parseInt(nivelSlider.value);
        document.getElementById("poe2-nivel-num").textContent = nivel;
        renderResults();
      });
    }

    // Guardar
    const btnGuardar = document.getElementById("poe2-btn-guardar");
    if (btnGuardar) {
      btnGuardar.addEventListener("click", () => {
        const nameEl = document.getElementById("poe2-build-name");
        const nombre = nameEl?.value.trim();
        if (!nombre) return;
        const arr = loadSaves();
        arr.unshift({
          nombre, clase: claseActual, ascendencia, nivel,
          pasivas: { ...pasivas },
          gems: gems.map((g) => ({ ...g, soportes: [...g.soportes] })),
          equipo: JSON.parse(JSON.stringify(equipo)),
        });
        if (arr.length > 20) arr.length = 20;
        saveSaves(arr);
        if (nameEl) nameEl.value = "";
        renderSaved();
      });
    }

    // Compartir
    const btnCompartir = document.getElementById("poe2-btn-compartir");
    if (btnCompartir) {
      btnCompartir.addEventListener("click", () => {
        const url = buildShareURL();
        navigator.clipboard.writeText(url).then(() => {
          const orig = btnCompartir.innerHTML;
          btnCompartir.textContent = "¡Copiado!";
          setTimeout(() => (btnCompartir.innerHTML = orig), 2000);
        }).catch(() => prompt("Copia esta URL:", url));
      });
    }

    renderAll();
  });
})();
