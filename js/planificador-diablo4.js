(function () {
  const LS_KEY = "soulsbase_plan_d4";
  const MAX_SKILLS = 58;
  const MAX_PARAGON = 200;

  // ── Clases ──
  const CLASES = {
    "Nigromante": {
      emoji: "💀", color: "#7A4A9A",
      desc: "Maestro de no-muertos y magia oscura",
      arbol: [
        {
          cat: "Básicas", req: 0,
          skills: [
            { id:"bone-splinters",  nombre:"Bone Splinters",  max:3, desc:"Lanza astillas de hueso que perforan enemigos." },
            { id:"decompose",       nombre:"Decompose",        max:3, desc:"Descompone al enemigo generando Esencia." },
            { id:"hemorrhage",      nombre:"Hemorrhage",       max:3, desc:"Golpe que causa hemorragia." },
            { id:"reap",            nombre:"Reap",             max:3, desc:"Siega con la guadaña en área." },
          ]
        },
        {
          cat: "Principales", req: 1,
          skills: [
            { id:"bone-spear",  nombre:"Bone Spear",  max:5, desc:"Lanza una lanza de hueso penetrante." },
            { id:"blight",      nombre:"Blight",      max:5, desc:"Proyectil de corrupción que deja charco." },
            { id:"sever",       nombre:"Sever",       max:5, desc:"Envía una guadaña espectral." },
            { id:"blood-surge", nombre:"Blood Surge", max:5, desc:"Absorbe sangre y la expulsa en nova." },
          ]
        },
        {
          cat: "Defensivas", req: 1,
          skills: [
            { id:"blood-mist",   nombre:"Blood Mist",   max:5, desc:"Se transforma en niebla de sangre invulnerable." },
            { id:"bone-prison",  nombre:"Bone Prison",  max:5, desc:"Atrapa enemigos en una jaula de huesos." },
            { id:"decrepify",    nombre:"Decrepify",    max:5, desc:"Maldición que ralentiza y debilita." },
          ]
        },
        {
          cat: "Conjuras", req: 2,
          skills: [
            { id:"raise-skeleton",    nombre:"Raise Skeleton",    max:5, desc:"Invoca esqueletos guerreros." },
            { id:"golem",             nombre:"Golem",             max:1, desc:"Invoca un Golem de hueso, sangre o hierro." },
            { id:"corpse-explosion",  nombre:"Corpse Explosion",  max:5, desc:"Explota cadáveres en área." },
            { id:"corpse-tendrils",   nombre:"Corpse Tendrils",   max:5, desc:"Tentáculos que atraen y ralentizan enemigos." },
          ]
        },
        {
          cat: "Maldiciones", req: 2,
          skills: [
            { id:"iron-maiden",     nombre:"Iron Maiden",     max:5, desc:"Devuelve daño a los atacantes." },
            { id:"amplify-damage",  nombre:"Amplify Damage",  max:3, desc:"Aumenta el daño recibido por los enemigos." },
          ]
        },
        {
          cat: "Ultimate", req: 3,
          skills: [
            { id:"army-of-the-dead", nombre:"Army of the Dead", max:1, desc:"Invoca un ejército masivo de no-muertos." },
            { id:"blood-wave",       nombre:"Blood Wave",       max:1, desc:"Ola de sangre que barre todo." },
            { id:"bone-storm",       nombre:"Bone Storm",       max:1, desc:"Tormenta de huesos que protege y daña." },
          ]
        },
      ]
    },
    "Bárbaro": {
      emoji: "⚔️", color: "#C87B3A",
      desc: "Maestro de las armas, fuerza bruta y berserker",
      arbol: [
        {
          cat: "Básicas", req: 0,
          skills: [
            { id:"b-flay",       nombre:"Flay",           max:3, desc:"Ataque que causa hemorragia." },
            { id:"b-lacerate",   nombre:"Lacerate",       max:3, desc:"Lacera al enemigo con daño continuo." },
            { id:"b-bash",       nombre:"Bash",           max:3, desc:"Golpe poderoso que aturde." },
            { id:"b-lunging",    nombre:"Lunging Strike", max:3, desc:"Avanza y golpea al objetivo." },
          ]
        },
        {
          cat: "Principales", req: 1,
          skills: [
            { id:"b-whirlwind",  nombre:"Whirlwind",   max:5, desc:"Gira atacando a todos los enemigos cercanos." },
            { id:"b-upheaval",   nombre:"Upheaval",    max:5, desc:"Golpe masivo que levanta el suelo." },
            { id:"b-rend",       nombre:"Rend",        max:5, desc:"Lacera múltiples enemigos." },
            { id:"b-hamstring",  nombre:"Hamstring",   max:5, desc:"Ralentiza y daña en área." },
          ]
        },
        {
          cat: "Defensivas", req: 1,
          skills: [
            { id:"b-challenging", nombre:"Challenging Shout", max:5, desc:"Grito que reduce el daño recibido." },
            { id:"b-rallying",    nombre:"Rallying Cry",      max:5, desc:"Aumenta velocidad de ataque y movimiento." },
            { id:"b-ground",      nombre:"Ground Stomp",      max:5, desc:"Pisotón que aturde enemigos cercanos." },
          ]
        },
        {
          cat: "Berserker", req: 2,
          skills: [
            { id:"b-war-cry",    nombre:"War Cry",     max:5, desc:"Grito de guerra que potencia el daño." },
            { id:"b-berserking", nombre:"Berserking",  max:5, desc:"Entra en modo berserker." },
          ]
        },
        {
          cat: "Arsenal", req: 2,
          skills: [
            { id:"b-leap",   nombre:"Leap Attack", max:5, desc:"Salta sobre los enemigos aplastándolos." },
            { id:"b-charge", nombre:"Charge",      max:5, desc:"Carga derribando enemigos en línea." },
          ]
        },
        {
          cat: "Ultimate", req: 3,
          skills: [
            { id:"b-wrath", nombre:"Wrath of the Berserker", max:1, desc:"Explosión de furia que activa Berserk masivo." },
            { id:"b-call",  nombre:"Call of the Ancients",   max:1, desc:"Invoca a los Antiguos como aliados." },
            { id:"b-iron",  nombre:"Iron Maelstrom",         max:1, desc:"Torbellino de armas que arrasa el área." },
          ]
        },
      ]
    },
    "Druida": {
      emoji: "🌿", color: "#4A8A3A",
      desc: "Metamorfo y convocador de la naturaleza",
      arbol: [
        {
          cat: "Básicas", req: 0,
          skills: [
            { id:"d-storm",  nombre:"Storm Strike",  max:3, desc:"Golpe que encadena relámpagos." },
            { id:"d-wind",   nombre:"Wind Shear",    max:3, desc:"Ráfaga de viento que daña y debilita." },
            { id:"d-earth",  nombre:"Earth Spike",   max:3, desc:"Pincho de tierra que brota del suelo." },
            { id:"d-claw",   nombre:"Claw",          max:3, desc:"Ataque de garra en forma de oso." },
          ]
        },
        {
          cat: "Principales", req: 1,
          skills: [
            { id:"d-tornado",   nombre:"Tornado",   max:5, desc:"Torbellinos que persiguen a los enemigos." },
            { id:"d-hurricane", nombre:"Hurricane", max:5, desc:"Huracán defensivo que daña en área." },
            { id:"d-pulverize", nombre:"Pulverize", max:5, desc:"Aplasta en forma de oso haciendo AoE masivo." },
            { id:"d-shred",     nombre:"Shred",     max:5, desc:"Serie de ataques de garras en forma de lobo." },
          ]
        },
        {
          cat: "Defensivas", req: 1,
          skills: [
            { id:"d-cyclone",      nombre:"Cyclone Armor",   max:5, desc:"Armadura de viento que desvía proyectiles." },
            { id:"d-earthen",      nombre:"Earthen Bulwark", max:5, desc:"Escudo de roca." },
            { id:"d-debilitating", nombre:"Debilitating Roar", max:5, desc:"Rugido que debilita enemigos." },
          ]
        },
        {
          cat: "Compañeros", req: 2,
          skills: [
            { id:"d-ravens", nombre:"Ravens",      max:5, desc:"Cuervos que atacan a los enemigos." },
            { id:"d-vines",  nombre:"Vine Creeper", max:5, desc:"Enredaderas que inmovilizan." },
            { id:"d-wolves", nombre:"Wolves",      max:5, desc:"Manada de lobos aliados." },
          ]
        },
        {
          cat: "Wrath", req: 2,
          skills: [
            { id:"d-trample", nombre:"Trample", max:5, desc:"Pisotea enemigos en forma de oso." },
            { id:"d-rabies",  nombre:"Rabies",  max:5, desc:"Infecta enemigos con rabia contagiosa." },
          ]
        },
        {
          cat: "Ultimate", req: 3,
          skills: [
            { id:"d-grizzly",  nombre:"Grizzly Rage", max:1, desc:"Transformación en oso primigenio." },
            { id:"d-petrify",  nombre:"Petrify",      max:1, desc:"Petrifica a todos los enemigos cercanos." },
            { id:"d-lacerate", nombre:"Lacerate",     max:1, desc:"Torbellino de garras devastador." },
          ]
        },
      ]
    },
    "Pícaro": {
      emoji: "🗡️", color: "#3A6A8A",
      desc: "Velocidad, venenos y trampas",
      arbol: [
        {
          cat: "Básicas", req: 0,
          skills: [
            { id:"r-puncture",    nombre:"Puncture",          max:3, desc:"Lanza dagas que laceran." },
            { id:"r-blade",       nombre:"Blade Shift",       max:3, desc:"Se desplaza y golpea al enemigo." },
            { id:"r-invigorating",nombre:"Invigorating Strike",max:3, desc:"Golpe que restaura Energía." },
            { id:"r-forceful",    nombre:"Forceful Arrow",    max:3, desc:"Flecha que inflige lentitud." },
          ]
        },
        {
          cat: "Principales", req: 1,
          skills: [
            { id:"r-flurry",      nombre:"Flurry",           max:5, desc:"Serie rápida de ataques de daga." },
            { id:"r-twisting",    nombre:"Twisting Blades",  max:5, desc:"Clava cuchillas y las hace regresar." },
            { id:"r-rapid",       nombre:"Rapid Fire",       max:5, desc:"Ráfaga de flechas rápidas." },
            { id:"r-penetrating", nombre:"Penetrating Shot", max:5, desc:"Flecha que atraviesa enemigos." },
          ]
        },
        {
          cat: "Agile", req: 1,
          skills: [
            { id:"r-dash",    nombre:"Dash",        max:5, desc:"Dash rápido que daña al pasar." },
            { id:"r-shadow",  nombre:"Shadow Step", max:5, desc:"Teletransporte al objetivo por la espalda." },
            { id:"r-caltrops",nombre:"Caltrops",    max:5, desc:"Lanza trampas de pinchos." },
          ]
        },
        {
          cat: "Trampas", req: 2,
          skills: [
            { id:"r-death",  nombre:"Death Trap",    max:5, desc:"Trampa explosiva de gran daño." },
            { id:"r-poison", nombre:"Poison Trap",   max:5, desc:"Trampa que envenena a los enemigos." },
            { id:"r-smoke",  nombre:"Smoke Grenade", max:5, desc:"Granada de humo que ciega." },
          ]
        },
        {
          cat: "Sombra", req: 2,
          skills: [
            { id:"r-shadow-imbuement", nombre:"Shadow Imbuement", max:5, desc:"Imbución sombría que contagia." },
            { id:"r-poison-imbuement", nombre:"Poison Imbuement", max:5, desc:"Imbución venenosa." },
          ]
        },
        {
          cat: "Ultimate", req: 3,
          skills: [
            { id:"r-rain", nombre:"Rain of Arrows", max:1, desc:"Lluvia masiva de flechas envenenadas." },
            { id:"r-dark", nombre:"Dark Shroud",    max:1, desc:"Capas de sombra que protegen." },
            { id:"r-cp",   nombre:"Cold Imbuement", max:1, desc:"Imbución de hielo que congela en área." },
          ]
        },
      ]
    },
    "Hechicero": {
      emoji: "⚡", color: "#3A5A9A",
      desc: "Maestro de fuego, hielo y rayo",
      arbol: [
        {
          cat: "Básicas", req: 0,
          skills: [
            { id:"s-spark", nombre:"Spark",     max:3, desc:"Descarga eléctrica básica." },
            { id:"s-frost", nombre:"Frost Bolt", max:3, desc:"Proyectil de hielo que ralentiza." },
            { id:"s-fire",  nombre:"Fire Bolt",  max:3, desc:"Proyectil de fuego con daño continuo." },
            { id:"s-arc",   nombre:"Arc Lash",   max:3, desc:"Látigo eléctrico en área." },
          ]
        },
        {
          cat: "Principales", req: 1,
          skills: [
            { id:"s-fireball", nombre:"Fireball",        max:5, desc:"Bola de fuego explosiva en área." },
            { id:"s-frozen",   nombre:"Frozen Orb",      max:5, desc:"Orbe de hielo que explota en cristales." },
            { id:"s-chain",    nombre:"Chain Lightning",  max:5, desc:"Rayo que encadena entre enemigos." },
            { id:"s-charged",  nombre:"Charged Bolts",   max:5, desc:"Múltiples rayos aleatorios." },
          ]
        },
        {
          cat: "Defensivas", req: 1,
          skills: [
            { id:"s-teleport",  nombre:"Teleport",    max:5, desc:"Teletransporte instantáneo." },
            { id:"s-ice-shield",nombre:"Ice Armor",   max:5, desc:"Armadura de hielo que absorbe daño." },
            { id:"s-flame",     nombre:"Flame Shield", max:5, desc:"Escudo de llamas que quema al contacto." },
          ]
        },
        {
          cat: "Conjuras", req: 2,
          skills: [
            { id:"s-meteor",   nombre:"Meteor",        max:5, desc:"Hace caer un meteorito del cielo." },
            { id:"s-blizzard", nombre:"Blizzard",      max:5, desc:"Tormenta de hielo en área." },
            { id:"s-ballista", nombre:"Ball Lightning", max:5, desc:"Bola de relámpago que persiste en el campo." },
          ]
        },
        {
          cat: "Dominio", req: 2,
          skills: [
            { id:"s-mastery", nombre:"Vyr's Mastery", max:5, desc:"Potencia los ataques de rayo cercanos." },
            { id:"s-inferno", nombre:"Inferno",        max:5, desc:"Lanza un chorro de fuego continuo." },
          ]
        },
        {
          cat: "Ultimate", req: 3,
          skills: [
            { id:"s-deep-freeze", nombre:"Deep Freeze",          max:1, desc:"Congela todo el área durante varios segundos." },
            { id:"s-unstable",    nombre:"Unstable Currents",     max:1, desc:"Lanza hechizos aleatorios de rayo automáticamente." },
            { id:"s-inferno-ult", nombre:"Inferno (Ultimate)",    max:1, desc:"Serpiente de fuego que abrasa el mapa." },
          ]
        },
      ]
    },
  };

  const ASPECTOS_OFENSIVOS = {
    "Nigromante": ["Huesos Afilados","Esperanza de los Osarios","Señor de Esqueletos","Espiral de Sangre","No-Muertos Imparables","Nigún aspecto"],
    "Bárbaro":    ["Berserker Incansable","Oleada de Guerra","Maestro de Armas","Bárbaro Ancestral","Grito de Guerra","Ningún aspecto"],
    "Druida":     ["Oso Primigenio","Huracán Eterno","Lobo Hambriento","Tormenta Ancestral","Vengador de la Naturaleza","Ningún aspecto"],
    "Pícaro":     ["Sombra Asesina","Veneno Eterno","Cuchillas Gemelas","Arquero Certero","Maestro de Trampas","Ningún aspecto"],
    "Hechicero":  ["Fuego Eterno","Hielo Perpetuo","Rayo Incesante","Meteoro Ardiente","Tormenta Helada","Ningún aspecto"],
  };

  const ASPECTOS_DEFENSIVOS = [
    "Protección Elemental","Armadura Ancestral","Escudo Inexpugnable","Barrera de Sangre","Ningún aspecto",
  ];

  const GLIFOS = [
    "Crusher — +Daño AoE",
    "Ire — +Golpe crítico",
    "Ranger — +Daño a distancia",
    "Exploit — +Daño vulnerables",
    "Territorial — +Daño cuerpo a cuerpo",
    "Bloodbath — +Daño hemorragia",
    "Domination — +Daño élites",
    "Closer — +Daño al avanzar",
    "Ninguno",
  ];

  const PAR_CATS = [
    { key:"fuerza",    label:"Fuerza",    color:"#E24B4A", bonusLabel:"Daño",       bonusFn: (v) => "+" + Math.round(v * 0.4) + "%" },
    { key:"vitalidad", label:"Vitalidad", color:"#97C459", bonusLabel:"Vida",       bonusFn: (v) => "+" + Math.round(v * 10) },
    { key:"voluntad",  label:"Voluntad",  color:"#85B7EB", bonusLabel:"Recurso",    bonusFn: (v) => "+" + Math.round(v * 0.3) + "%" },
    { key:"destreza",  label:"Destreza",  color:"#EF9F27", bonusLabel:"Vel. ataque",bonusFn: (v) => "+" + Math.round(v * 0.2) + "%" },
  ];

  // ── State ──
  let claseActual = "Nigromante";
  let skills = {};
  let nivelParagon = 0;
  let paragonStats = { fuerza: 0, vitalidad: 0, voluntad: 0, destreza: 0 };
  let aspectosOfe = ["Ningún aspecto","Ningún aspecto","Ningún aspecto","Ningún aspecto","Ningún aspecto","Ningún aspecto"];
  let aspectosDef = ["Ningún aspecto","Ningún aspecto","Ningún aspecto"];
  let glifos = [
    { id:"Ninguno", nivel:1 },{ id:"Ninguno", nivel:1 },
    { id:"Ninguno", nivel:1 },{ id:"Ninguno", nivel:1 },
  ];

  // ── Helpers ──
  function puntosGastados() {
    return Object.values(skills).reduce((s, v) => s + v, 0);
  }

  function puntosParagonDisponibles() {
    return nivelParagon - PAR_CATS.reduce((s, c) => s + paragonStats[c.key], 0);
  }

  function catReqMet(catIdx) {
    if (catIdx === 0) return true;
    const arbol = CLASES[claseActual].arbol;
    const req = arbol[catIdx].req;
    let prev = 0;
    for (let i = 0; i < catIdx; i++) {
      arbol[i].skills.forEach((s) => { prev += skills[s.id] || 0; });
    }
    return prev >= req;
  }

  function detectBuild() {
    const g = (id) => skills[id] || 0;
    if (claseActual === "Nigromante") {
      if (g("bone-spear") >= 3)       return "Bone Spear Build";
      if (g("army-of-the-dead") >= 1) return "Army of the Dead Build";
      if (g("blight") >= 3)           return "Blight Build";
      if (g("blood-surge") >= 3)      return "Blood Surge Build";
      if (g("raise-skeleton") >= 3)   return "Summoner Build";
    }
    if (claseActual === "Bárbaro") {
      if (g("b-whirlwind") >= 3) return "Whirlwind Build";
      if (g("b-upheaval") >= 3)  return "Upheaval Build";
      if (g("b-rend") >= 3)      return "Rend Build";
      if (g("b-wrath") >= 1)     return "WotB Build";
    }
    if (claseActual === "Druida") {
      if (g("d-pulverize") >= 3) return "Pulverize Build";
      if (g("d-tornado") >= 3)   return "Tornado Build";
      if (g("d-shred") >= 3)     return "Shred Build";
    }
    if (claseActual === "Pícaro") {
      if (g("r-twisting") >= 3) return "Twisting Blades Build";
      if (g("r-rapid") >= 3)    return "Rapid Fire Build";
      if (g("r-flurry") >= 3)   return "Flurry Build";
    }
    if (claseActual === "Hechicero") {
      if (g("s-fireball") >= 3) return "Fireball Build";
      if (g("s-frozen") >= 3)   return "Frozen Orb Build";
      if (g("s-chain") >= 3)    return "Chain Lightning Build";
      if (g("s-blizzard") >= 3) return "Blizzard Build";
    }
    return "Build personalizada";
  }

  function calcPotencia() {
    const skill   = puntosGastados();
    const par     = PAR_CATS.reduce((s, c) => s + paragonStats[c.key], 0);
    const aspects = [...aspectosOfe, ...aspectosDef].filter((a) => !a.startsWith("Ning")).length;
    const glifoBonus = glifos.filter((g) => g.id !== "Ninguno").reduce((s, g) => s + g.nivel, 0);
    return Math.min(9999, Math.round((skill / MAX_SKILLS) * 4000 + (par / MAX_PARAGON) * 3000 + aspects * 200 + glifoBonus * 50));
  }

  // ── Render árbol de habilidades ──
  function renderSkillTree() {
    const container = document.getElementById("d4-skill-tree");
    if (!container) return;
    const arbol = CLASES[claseActual].arbol;
    const color = CLASES[claseActual].color;
    const gastados = puntosGastados();

    const ptEl = document.getElementById("d4-puntos-gastados");
    if (ptEl) ptEl.textContent = gastados;

    container.innerHTML = arbol.map((cat, catIdx) => {
      const unlocked = catReqMet(catIdx);
      return `<div class="skill-category">
        <div class="skill-category-title" style="color:${color}">${cat.cat}${cat.req > 0 ? `<span style="font-size:10px;font-weight:400;color:var(--text-hint);margin-left:6px">(req. ${cat.req} pt. previos)</span>` : ""}</div>
        <div class="skill-nodes">
          ${cat.skills.map((sk) => {
            const rank = skills[sk.id] || 0;
            const locked = !unlocked;
            return `<div class="skill-node${rank > 0 ? " active" : ""}${locked ? " locked" : ""}"
              data-id="${sk.id}" data-max="${sk.max}" data-cat="${catIdx}"
              title="${sk.desc}${locked ? "\n[Requiere más puntos en categorías anteriores]" : ""}">
              <div class="skill-node-name">${sk.nombre}</div>
              <div class="skill-node-rank">Rango <span>${rank}</span> / ${sk.max}</div>
            </div>`;
          }).join("")}
        </div>
      </div>`;
    }).join("");

    container.querySelectorAll(".skill-node:not(.locked)").forEach((node) => {
      node.addEventListener("click", () => {
        const id  = node.dataset.id;
        const max = parseInt(node.dataset.max);
        const cur = skills[id] || 0;
        if (cur < max && puntosGastados() < MAX_SKILLS) {
          skills[id] = cur + 1;
          renderAll();
        }
      });
      node.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        const id  = node.dataset.id;
        const cur = skills[id] || 0;
        if (cur > 0) {
          skills[id] = cur - 1;
          if (skills[id] === 0) delete skills[id];
          renderAll();
        }
      });
    });
  }

  // ── Render Paragón ──
  function renderParagon() {
    const container = document.getElementById("d4-paragon-cats");
    if (!container) return;
    const disp = puntosParagonDisponibles();

    container.innerHTML = PAR_CATS.map((c) => `
      <div class="paragon-cat">
        <div class="paragon-cat-name" style="color:${c.color}">${c.label} <span style="font-size:10px;color:var(--text-hint)">(${c.bonusLabel}: ${c.bonusFn(paragonStats[c.key])})</span></div>
        <div style="display:flex;align-items:center;gap:8px">
          <input type="range" class="paragon-slider" id="par-${c.key}"
            min="0" max="${nivelParagon}" value="${paragonStats[c.key]}" />
          <span style="font-size:13px;font-weight:600;color:${c.color};min-width:28px;text-align:right">${paragonStats[c.key]}</span>
        </div>
      </div>`).join("");

    PAR_CATS.forEach((c) => {
      const sl = document.getElementById(`par-${c.key}`);
      if (!sl) return;
      sl.addEventListener("input", () => {
        const newVal = parseInt(sl.value);
        const others = PAR_CATS.filter((x) => x.key !== c.key).reduce((s, x) => s + paragonStats[x.key], 0);
        paragonStats[c.key] = Math.min(newVal, nivelParagon - others);
        renderParagon();
        renderResults();
      });
    });
  }

  // ── Render aspectos ──
  function renderAspectos() {
    const opts = ASPECTOS_OFENSIVOS[claseActual] || ASPECTOS_OFENSIVOS["Nigromante"];

    const ofeContainer = document.getElementById("d4-aspectos-ofe");
    if (ofeContainer) {
      ofeContainer.innerHTML = aspectosOfe.map((val, i) => `
        <div class="aspecto-slot">
          <span class="aspecto-icon">⚔️</span>
          <select class="aspecto-select" data-tipo="ofe" data-idx="${i}">
            ${opts.map((o) => `<option${o === val ? " selected" : ""}>${o}</option>`).join("")}
          </select>
        </div>`).join("");
    }

    const defContainer = document.getElementById("d4-aspectos-def");
    if (defContainer) {
      defContainer.innerHTML = aspectosDef.map((val, i) => `
        <div class="aspecto-slot">
          <span class="aspecto-icon">🛡️</span>
          <select class="aspecto-select" data-tipo="def" data-idx="${i}">
            ${ASPECTOS_DEFENSIVOS.map((o) => `<option${o === val ? " selected" : ""}>${o}</option>`).join("")}
          </select>
        </div>`).join("");
    }

    const gliContainer = document.getElementById("d4-glifos-grid");
    if (gliContainer) {
      gliContainer.innerHTML = glifos.map((g, i) => `
        <div class="aspecto-slot" style="gap:8px">
          <span class="aspecto-icon">💎</span>
          <select class="aspecto-select" data-tipo="glifo" data-idx="${i}" style="flex:2">
            ${GLIFOS.map((o) => `<option${o === g.id ? " selected" : ""}>${o}</option>`).join("")}
          </select>
          <span style="font-size:11px;color:var(--text-hint);flex-shrink:0">Nv.</span>
          <input type="number" min="1" max="21" value="${g.nivel}"
            data-tipo="glifo-nivel" data-idx="${i}"
            style="width:44px;background:var(--bg-base);border:0.5px solid var(--border);border-radius:4px;padding:4px;color:var(--text-main);font-size:12px;text-align:center">
        </div>`).join("");
    }

    document.querySelectorAll(".aspecto-select").forEach((sel) => {
      sel.addEventListener("change", () => {
        const tipo = sel.dataset.tipo;
        const idx  = parseInt(sel.dataset.idx);
        if (tipo === "ofe")   aspectosOfe[idx] = sel.value;
        if (tipo === "def")   aspectosDef[idx] = sel.value;
        if (tipo === "glifo") glifos[idx].id   = sel.value;
        renderResults();
      });
    });
    document.querySelectorAll("[data-tipo='glifo-nivel']").forEach((inp) => {
      inp.addEventListener("change", () => {
        glifos[parseInt(inp.dataset.idx)].nivel = Math.min(21, Math.max(1, parseInt(inp.value) || 1));
        renderResults();
      });
    });
  }

  // ── Render results ──
  function renderResults() {
    const clase    = CLASES[claseActual];
    const gastados = puntosGastados();
    const parTotal = PAR_CATS.reduce((s, c) => s + paragonStats[c.key], 0);
    const aofe     = aspectosOfe.filter((a) => !a.startsWith("Ning")).length;
    const adef     = aspectosDef.filter((a) => !a.startsWith("Ning")).length;
    const gl       = glifos.filter((g) => g.id !== "Ninguno").length;
    const pot      = calcPotencia();

    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    const setStyle = (id, prop, val) => { const el = document.getElementById(id); if (el) el.style[prop] = val; };

    set("d4-res-skills",  `${gastados} / ${MAX_SKILLS}`);
    set("d4-res-paragon", `${parTotal} / ${nivelParagon}`);
    set("d4-res-buildtype", detectBuild());
    setStyle("d4-res-buildtype", "color", clase.color);

    set("d4-res-potencia", pot.toLocaleString("es"));
    setStyle("d4-res-potencia", "color", pot > 7000 ? "#E24B4A" : pot > 4000 ? "#EF9F27" : "#97C459");

    set("d4-res-aofe",   `${aofe} / 6`);
    set("d4-res-adef",   `${adef} / 3`);
    set("d4-res-glifos", `${gl} / 4`);

    const parStatsEl = document.getElementById("d4-res-parstats");
    if (parStatsEl) {
      parStatsEl.innerHTML = PAR_CATS.map((c) =>
        `<div style="display:flex;justify-content:space-between">
          <span style="color:var(--text-muted)">${c.label}</span>
          <span style="color:${c.color};font-weight:600">${c.bonusFn(paragonStats[c.key])}</span>
        </div>`
      ).join("");
    }
  }

  function renderAll() {
    renderSkillTree();
    renderParagon();
    renderAspectos();
    renderResults();
  }

  // ── localStorage ──
  function loadSaves() {
    try { return JSON.parse(localStorage.getItem(LS_KEY)) || []; } catch { return []; }
  }
  function saveSaves(arr) {
    localStorage.setItem(LS_KEY, JSON.stringify(arr));
  }

  function renderSaved() {
    const saves = loadSaves();
    const el = document.getElementById("d4-saved-list");
    if (!el) return;
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
        claseActual  = s.clase;
        skills       = { ...s.skills };
        nivelParagon = s.nivelParagon || 0;
        paragonStats = { ...s.paragonStats };
        aspectosOfe  = s.aspectosOfe || ["Ningún aspecto","Ningún aspecto","Ningún aspecto","Ningún aspecto","Ningún aspecto","Ningún aspecto"];
        aspectosDef  = s.aspectosDef || ["Ningún aspecto","Ningún aspecto","Ningún aspecto"];
        glifos       = s.glifos || glifos;
        const sl = document.getElementById("d4-paragon-slider");
        if (sl) sl.value = nivelParagon;
        const numEl = document.getElementById("d4-paragon-num");
        if (numEl) numEl.textContent = nivelParagon;
        const nivEl = document.getElementById("d4-paragon-nivel");
        if (nivEl) nivEl.textContent = nivelParagon;
        updateClaseUI();
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
    params.set("nivel", nivelParagon);
    Object.entries(skills).forEach(([k, v]) => params.set("sk_" + k, v));
    PAR_CATS.forEach((c) => params.set("par_" + c.key, paragonStats[c.key]));
    return window.location.origin + window.location.pathname + "?" + params.toString();
  }

  function loadFromURL() {
    const params = new URLSearchParams(window.location.search);
    if (!params.has("clase")) return;
    const cl = params.get("clase");
    if (CLASES[cl]) claseActual = cl;
    nivelParagon = parseInt(params.get("nivel")) || 0;
    params.forEach((val, key) => {
      if (key.startsWith("sk_"))  skills[key.slice(3)]       = parseInt(val) || 0;
      if (key.startsWith("par_")) paragonStats[key.slice(4)] = parseInt(val) || 0;
    });
  }

  function updateClaseUI() {
    document.querySelectorAll(".d4-clase-card").forEach((c) => {
      const active = c.dataset.clase === claseActual;
      c.classList.toggle("active", active);
      c.style.borderColor = active ? CLASES[c.dataset.clase].color : "";
    });
  }

  // ── Init ──
  document.addEventListener("DOMContentLoaded", () => {
    loadFromURL();

    // Clase grid
    const claseGrid = document.getElementById("d4-clase-grid");
    if (claseGrid) {
      claseGrid.innerHTML = Object.entries(CLASES).map(([nombre, cl]) => `
        <div class="d4-clase-card${nombre === claseActual ? " active" : ""}"
          data-clase="${nombre}"
          style="border-color:${nombre === claseActual ? cl.color : ""}">
          <div class="d4-clase-emoji">${cl.emoji}</div>
          <div class="d4-clase-name" style="color:${cl.color}">${nombre}</div>
          <div class="d4-clase-desc">${cl.desc}</div>
        </div>`).join("");

      claseGrid.querySelectorAll(".d4-clase-card").forEach((card) => {
        card.addEventListener("click", () => {
          claseActual = card.dataset.clase;
          skills = {};
          updateClaseUI();
          renderAll();
        });
      });
    }

    // Paragón slider
    const parSlider = document.getElementById("d4-paragon-slider");
    if (parSlider) {
      parSlider.value = nivelParagon;
      parSlider.addEventListener("input", () => {
        nivelParagon = parseInt(parSlider.value);
        const numEl = document.getElementById("d4-paragon-num");
        if (numEl) numEl.textContent = nivelParagon;
        const nivEl = document.getElementById("d4-paragon-nivel");
        if (nivEl) nivEl.textContent = nivelParagon;
        // Si puntos distribuidos superan nuevo nivel, resetear
        const total = PAR_CATS.reduce((s, c) => s + paragonStats[c.key], 0);
        if (total > nivelParagon) {
          paragonStats = { fuerza: 0, vitalidad: 0, voluntad: 0, destreza: 0 };
        }
        renderParagon();
        renderResults();
      });
    }

    // Guardar
    const btnGuardar = document.getElementById("d4-btn-guardar");
    if (btnGuardar) {
      btnGuardar.addEventListener("click", () => {
        const nombre = (document.getElementById("d4-build-name") || {}).value?.trim();
        if (!nombre) return;
        const arr = loadSaves();
        arr.unshift({
          nombre, clase: claseActual,
          skills: { ...skills },
          nivelParagon,
          paragonStats: { ...paragonStats },
          aspectosOfe: [...aspectosOfe],
          aspectosDef: [...aspectosDef],
          glifos: glifos.map((g) => ({ ...g })),
        });
        if (arr.length > 20) arr.length = 20;
        saveSaves(arr);
        const nameEl = document.getElementById("d4-build-name");
        if (nameEl) nameEl.value = "";
        renderSaved();
      });
    }

    // Compartir
    const btnCompartir = document.getElementById("d4-btn-compartir");
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

    renderSaved();
    renderAll();
  });
})();
