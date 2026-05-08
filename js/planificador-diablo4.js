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
            { id:"sever",       nombre:"Sever",        max:5, desc:"Envía una guadaña espectral." },
            { id:"blood-surge", nombre:"Blood Surge",  max:5, desc:"Absorbe sangre y la expulsa en nova." },
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
            { id:"raise-skeleton",   nombre:"Raise Skeleton",   max:5, desc:"Invoca esqueletos guerreros." },
            { id:"golem",            nombre:"Golem",             max:1, desc:"Invoca un Golem de hueso, sangre o hierro." },
            { id:"corpse-explosion", nombre:"Corpse Explosion",  max:5, desc:"Explota cadáveres en área." },
            { id:"corpse-tendrils",  nombre:"Corpse Tendrils",   max:5, desc:"Tentáculos que atraen y ralentizan enemigos." },
          ]
        },
        {
          cat: "Maldiciones", req: 2,
          skills: [
            { id:"iron-maiden",    nombre:"Iron Maiden",    max:5, desc:"Devuelve daño a los atacantes." },
            { id:"amplify-damage", nombre:"Amplify Damage", max:3, desc:"Aumenta el daño recibido por los enemigos." },
          ]
        },
        {
          cat: "Ultimate", req: 3,
          skills: [
            { id:"army-of-the-dead", nombre:"Army of Dead", max:1, desc:"Invoca un ejército masivo de no-muertos." },
            { id:"blood-wave",       nombre:"Blood Wave",   max:1, desc:"Ola de sangre que barre todo." },
            { id:"bone-storm",       nombre:"Bone Storm",   max:1, desc:"Tormenta de huesos que protege y daña." },
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
            { id:"b-flay",    nombre:"Flay",           max:3, desc:"Ataque que causa hemorragia." },
            { id:"b-lacerate",nombre:"Lacerate",        max:3, desc:"Lacera al enemigo con daño continuo." },
            { id:"b-bash",    nombre:"Bash",            max:3, desc:"Golpe poderoso que aturde." },
            { id:"b-lunging", nombre:"Lunging Strike",  max:3, desc:"Avanza y golpea al objetivo." },
          ]
        },
        {
          cat: "Principales", req: 1,
          skills: [
            { id:"b-whirlwind", nombre:"Whirlwind", max:5, desc:"Gira atacando a todos los enemigos cercanos." },
            { id:"b-upheaval",  nombre:"Upheaval",  max:5, desc:"Golpe masivo que levanta el suelo." },
            { id:"b-rend",      nombre:"Rend",      max:5, desc:"Lacera múltiples enemigos." },
            { id:"b-hamstring", nombre:"Hamstring", max:5, desc:"Ralentiza y daña en área." },
          ]
        },
        {
          cat: "Defensivas", req: 1,
          skills: [
            { id:"b-challenging", nombre:"Challenging",  max:5, desc:"Grito que reduce el daño recibido." },
            { id:"b-rallying",    nombre:"Rallying Cry", max:5, desc:"Aumenta velocidad de ataque y movimiento." },
            { id:"b-ground",      nombre:"Ground Stomp", max:5, desc:"Pisotón que aturde enemigos cercanos." },
          ]
        },
        {
          cat: "Berserker", req: 2,
          skills: [
            { id:"b-war-cry",    nombre:"War Cry",    max:5, desc:"Grito de guerra que potencia el daño." },
            { id:"b-berserking", nombre:"Berserking", max:5, desc:"Entra en modo berserker." },
          ]
        },
        {
          cat: "Arsenal", req: 2,
          skills: [
            { id:"b-leap",   nombre:"Leap Attack", max:5, desc:"Salta sobre los enemigos aplastándolos." },
            { id:"b-charge", nombre:"Charge",       max:5, desc:"Carga derribando enemigos en línea." },
          ]
        },
        {
          cat: "Ultimate", req: 3,
          skills: [
            { id:"b-wrath", nombre:"WotB",      max:1, desc:"Explosión de furia que activa Berserk masivo." },
            { id:"b-call",  nombre:"Ancients",  max:1, desc:"Invoca a los Antiguos como aliados." },
            { id:"b-iron",  nombre:"Iron Mael.", max:1, desc:"Torbellino de armas que arrasa el área." },
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
            { id:"d-storm", nombre:"Storm Strike", max:3, desc:"Golpe que encadena relámpagos." },
            { id:"d-wind",  nombre:"Wind Shear",   max:3, desc:"Ráfaga de viento que daña y debilita." },
            { id:"d-earth", nombre:"Earth Spike",  max:3, desc:"Pincho de tierra que brota del suelo." },
            { id:"d-claw",  nombre:"Claw",         max:3, desc:"Ataque de garra en forma de oso." },
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
            { id:"d-cyclone",      nombre:"Cyclone Armor",  max:5, desc:"Armadura de viento que desvía proyectiles." },
            { id:"d-earthen",      nombre:"Earthen Bulwark",max:5, desc:"Escudo de roca." },
            { id:"d-debilitating", nombre:"Debil. Roar",    max:5, desc:"Rugido que debilita enemigos." },
          ]
        },
        {
          cat: "Compañeros", req: 2,
          skills: [
            { id:"d-ravens", nombre:"Ravens",      max:5, desc:"Cuervos que atacan a los enemigos." },
            { id:"d-vines",  nombre:"Vine Creeper",max:5, desc:"Enredaderas que inmovilizan." },
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
            { id:"d-grizzly",  nombre:"Grizzly Rage",max:1, desc:"Transformación en oso primigenio." },
            { id:"d-petrify",  nombre:"Petrify",     max:1, desc:"Petrifica a todos los enemigos cercanos." },
            { id:"d-lacerate", nombre:"Lacerate",    max:1, desc:"Torbellino de garras devastador." },
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
            { id:"r-puncture",     nombre:"Puncture",         max:3, desc:"Lanza dagas que laceran." },
            { id:"r-blade",        nombre:"Blade Shift",      max:3, desc:"Se desplaza y golpea al enemigo." },
            { id:"r-invigorating", nombre:"Invig. Strike",    max:3, desc:"Golpe que restaura Energía." },
            { id:"r-forceful",     nombre:"Forceful Arrow",   max:3, desc:"Flecha que inflige lentitud." },
          ]
        },
        {
          cat: "Principales", req: 1,
          skills: [
            { id:"r-flurry",      nombre:"Flurry",          max:5, desc:"Serie rápida de ataques de daga." },
            { id:"r-twisting",    nombre:"Twisting Blades", max:5, desc:"Clava cuchillas y las hace regresar." },
            { id:"r-rapid",       nombre:"Rapid Fire",      max:5, desc:"Ráfaga de flechas rápidas." },
            { id:"r-penetrating", nombre:"Penetrating",     max:5, desc:"Flecha que atraviesa enemigos." },
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
            { id:"r-shadow-imbuement", nombre:"Shadow Imb.", max:5, desc:"Imbución sombría que contagia." },
            { id:"r-poison-imbuement", nombre:"Poison Imb.", max:5, desc:"Imbución venenosa." },
          ]
        },
        {
          cat: "Ultimate", req: 3,
          skills: [
            { id:"r-rain", nombre:"Rain of Arrows",max:1, desc:"Lluvia masiva de flechas envenenadas." },
            { id:"r-dark", nombre:"Dark Shroud",   max:1, desc:"Capas de sombra que protegen." },
            { id:"r-cp",   nombre:"Cold Imbuement",max:1, desc:"Imbución de hielo que congela en área." },
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
            { id:"s-fireball", nombre:"Fireball",       max:5, desc:"Bola de fuego explosiva en área." },
            { id:"s-frozen",   nombre:"Frozen Orb",     max:5, desc:"Orbe de hielo que explota en cristales." },
            { id:"s-chain",    nombre:"Chain Lightning",max:5, desc:"Rayo que encadena entre enemigos." },
            { id:"s-charged",  nombre:"Charged Bolts",  max:5, desc:"Múltiples rayos aleatorios." },
          ]
        },
        {
          cat: "Defensivas", req: 1,
          skills: [
            { id:"s-teleport",   nombre:"Teleport",    max:5, desc:"Teletransporte instantáneo." },
            { id:"s-ice-shield", nombre:"Ice Armor",   max:5, desc:"Armadura de hielo que absorbe daño." },
            { id:"s-flame",      nombre:"Flame Shield",max:5, desc:"Escudo de llamas que quema al contacto." },
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
            { id:"s-mastery", nombre:"Vyr's Mastery",max:5, desc:"Potencia los ataques de rayo cercanos." },
            { id:"s-inferno", nombre:"Inferno",       max:5, desc:"Lanza un chorro de fuego continuo." },
          ]
        },
        {
          cat: "Ultimate", req: 3,
          skills: [
            { id:"s-deep-freeze", nombre:"Deep Freeze",    max:1, desc:"Congela todo el área durante varios segundos." },
            { id:"s-unstable",    nombre:"Unstable Curr.", max:1, desc:"Lanza hechizos aleatorios de rayo automáticamente." },
            { id:"s-inferno-ult", nombre:"Inferno (Ult.)", max:1, desc:"Serpiente de fuego que abrasa el mapa." },
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
    { key:"fuerza",    label:"Fuerza",    color:"#E24B4A", bonusLabel:"Daño",        bonusFn: (v) => "+" + Math.round(v * 0.4) + "%" },
    { key:"vitalidad", label:"Vitalidad", color:"#97C459", bonusLabel:"Vida",        bonusFn: (v) => "+" + Math.round(v * 10) },
    { key:"voluntad",  label:"Voluntad",  color:"#85B7EB", bonusLabel:"Recurso",     bonusFn: (v) => "+" + Math.round(v * 0.3) + "%" },
    { key:"destreza",  label:"Destreza",  color:"#EF9F27", bonusLabel:"Vel. ataque", bonusFn: (v) => "+" + Math.round(v * 0.2) + "%" },
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

  // ── SVG pan/zoom state ──
  let vb = { x: 0, y: 0, w: 800, h: 600 };
  let isDragging = false, hasDragged = false;
  let dragStartClient = { x: 0, y: 0 }, dragStartVB = { x: 0, y: 0 };
  let lastTouchDist = 0;
  let currentSVG = null;
  let tooltipEl = null;

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

  // ── SVG helpers ──
  function hexToRgba(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
  }

  function brighten(hex) {
    var r = Math.min(255, parseInt(hex.slice(1, 3), 16) + 60);
    var g = Math.min(255, parseInt(hex.slice(3, 5), 16) + 60);
    var b = Math.min(255, parseInt(hex.slice(5, 7), 16) + 60);
    return '#' + [r, g, b].map(function(x) { return x.toString(16).padStart(2, '0'); }).join('');
  }

  function getNodeIcon(nombre) {
    var words = nombre.split(/\s+/);
    if (words.length === 1) return nombre.slice(0, 2).toUpperCase();
    return words.map(function(w) { return w[0] ? w[0].toUpperCase() : ''; }).join('').slice(0, 3);
  }

  function showToast(msg) {
    var t = document.createElement('div');
    t.className = 'skill-toast';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function() { if (t.parentNode) t.parentNode.removeChild(t); }, 2200);
  }

  function getOrCreateTooltip() {
    if (!tooltipEl) {
      tooltipEl = document.createElement('div');
      tooltipEl.className = 'skill-tooltip';
      tooltipEl.style.display = 'none';
      document.body.appendChild(tooltipEl);
    }
    return tooltipEl;
  }

  function showTooltip(node, rank, locked, color, cx, cy) {
    var tt = getOrCreateTooltip();
    tt.innerHTML =
      '<div class="skill-tooltip-title" style="color:' + color + '">' + node.nombre + '</div>' +
      '<div class="skill-tooltip-desc">' + node.desc + '</div>' +
      '<div class="skill-tooltip-rank">Rango: ' + rank + ' / ' + node.max + '</div>' +
      (locked ? '<div class="skill-tooltip-locked">Bloqueado — necesitas más puntos previos</div>' : '');
    tt.style.display = 'block';
    positionTooltip(tt, cx, cy);
  }

  function positionTooltip(tt, x, y) {
    var w = tt.offsetWidth || 200;
    var left = x + 18;
    if (left + w > window.innerWidth - 8) left = x - w - 8;
    tt.style.left = left + 'px';
    tt.style.top  = (y - 10) + 'px';
  }

  function hideTooltip() {
    if (tooltipEl) tooltipEl.style.display = 'none';
  }

  function updateViewBox(svg) {
    svg.setAttribute('viewBox', vb.x + ' ' + vb.y + ' ' + vb.w + ' ' + vb.h);
  }

  function doZoom(factor, svg) {
    var newW = Math.max(400, Math.min(1600, vb.w * factor));
    var newH = newW * 0.75;
    vb.x += (vb.w - newW) / 2;
    vb.y += (vb.h - newH) / 2;
    vb.w = newW;
    vb.h = newH;
    updateViewBox(svg);
  }

  function isUnlocked(className, node) {
    var arbol = CLASES[className].arbol;
    var catIdx = node.cat;
    if (catIdx === 0) return true;
    var req = arbol[catIdx].req;
    var prev = 0;
    for (var i = 0; i < catIdx; i++) {
      arbol[i].skills.forEach(function(s) { prev += skills[s.id] || 0; });
    }
    return prev >= req;
  }

  function buildSkillNodes(className) {
    var arbol = CLASES[className].arbol;
    var svgW = 800;
    var topPad = 55;
    var botPad = 55;
    var usableH = 600 - topPad - botPad;
    var catCount = arbol.length;
    var catSpacing = catCount > 1 ? usableH / (catCount - 1) : 0;
    var margin = 110;
    var nodes = [];
    var edges = [];

    arbol.forEach(function(cat, catIdx) {
      var y = topPad + catIdx * catSpacing;
      var count = cat.skills.length;
      var xs;
      if (count === 1) {
        xs = [svgW / 2];
      } else {
        xs = cat.skills.map(function(_, i) {
          return margin + i * (svgW - 2 * margin) / (count - 1);
        });
      }
      cat.skills.forEach(function(sk, i) {
        nodes.push({ id: sk.id, nombre: sk.nombre, cat: catIdx, max: sk.max, desc: sk.desc, x: xs[i], y: y });
      });

      if (catIdx < catCount - 1) {
        var nextCat = arbol[catIdx + 1];
        var nextCount = nextCat.skills.length;
        cat.skills.forEach(function(sk, i) {
          var tIdx = Math.min(Math.round(i * (nextCount - 1) / Math.max(count - 1, 1)), nextCount - 1);
          edges.push({ from: sk.id, to: nextCat.skills[tIdx].id });
        });
      }
    });

    return { nodes: nodes, edges: edges };
  }

  function updateNodeVisual(svg, className, nodeId, nodes) {
    var color = CLASES[className].color;
    var node = null;
    for (var i = 0; i < nodes.length; i++) { if (nodes[i].id === nodeId) { node = nodes[i]; break; } }
    if (!node) return;
    var rank = skills[nodeId] || 0;
    var locked = !isUnlocked(className, node);
    var isMaxed = rank > 0 && rank >= node.max;
    var isActive = rank > 0;

    var circle = svg.querySelector('#nc-' + nodeId);
    var rankBg  = svg.querySelector('#nrb-' + nodeId);
    var rankTx  = svg.querySelector('#nr-' + nodeId);
    var iconTx  = svg.querySelector('#ni-' + nodeId);
    var group   = svg.querySelector('#ng-' + nodeId);
    if (!circle || !group) return;

    if (locked) {
      circle.setAttribute('fill', '#1a1b1e');
      circle.setAttribute('stroke', '#3a3b3e');
      circle.setAttribute('opacity', '0.4');
      circle.removeAttribute('filter');
      group.style.cursor = 'not-allowed';
      if (iconTx) { iconTx.setAttribute('fill', '#444'); }
    } else if (isMaxed) {
      circle.setAttribute('fill', color);
      circle.setAttribute('stroke', brighten(color));
      circle.setAttribute('opacity', '1');
      circle.setAttribute('filter', 'url(#glow-' + nodeId + ')');
      group.style.cursor = 'pointer';
      if (iconTx) { iconTx.setAttribute('fill', '#fff'); }
    } else if (isActive) {
      circle.setAttribute('fill', hexToRgba(color, 0.35));
      circle.setAttribute('stroke', color);
      circle.setAttribute('opacity', '1');
      circle.removeAttribute('filter');
      group.style.cursor = 'pointer';
      if (iconTx) { iconTx.setAttribute('fill', color); }
    } else {
      circle.setAttribute('fill', '#1e1f23');
      circle.setAttribute('stroke', color);
      circle.setAttribute('opacity', '1');
      circle.removeAttribute('filter');
      group.style.cursor = 'pointer';
      if (iconTx) { iconTx.setAttribute('fill', color); }
    }

    if (rankBg && rankTx) {
      var show = rank > 0;
      rankBg.style.display = show ? '' : 'none';
      rankTx.style.display = show ? '' : 'none';
      if (show) rankTx.textContent = rank;
    }
  }

  function updateAllNodes(svg, className, nodes) {
    nodes.forEach(function(n) { updateNodeVisual(svg, className, n.id, nodes); });
  }

  function updateAllConnections(svg, className, edges) {
    var color = CLASES[className].color;
    edges.forEach(function(edge) {
      var line = svg.querySelector('#conn-' + edge.from.replace(/[^a-z0-9]/gi, '-') + '-' + edge.to.replace(/[^a-z0-9]/gi, '-'));
      if (!line) return;
      var fromRank = skills[edge.from] || 0;
      line.setAttribute('stroke', fromRank > 0 ? color : '#2a2b3e');
      line.setAttribute('stroke-width', fromRank > 0 ? '2.5' : '1.5');
    });
  }

  function connId(from, to) {
    return 'conn-' + from.replace(/[^a-z0-9]/gi, '-') + '-' + to.replace(/[^a-z0-9]/gi, '-');
  }

  function attachSVGEvents(svg, className, nodes, edges) {
    var color = CLASES[className].color;

    svg.addEventListener('mousedown', function(e) {
      if (e.target.closest && e.target.closest('.skill-node-g')) return;
      isDragging = true;
      hasDragged = false;
      dragStartClient = { x: e.clientX, y: e.clientY };
      dragStartVB = { x: vb.x, y: vb.y };
      svg.style.cursor = 'grabbing';
      e.preventDefault();
    });

    svg.addEventListener('wheel', function(e) {
      e.preventDefault();
      doZoom(e.deltaY > 0 ? 1.15 : 0.87, svg);
    }, { passive: false });

    svg.addEventListener('mousemove', function(e) {
      if (isDragging) { hasDragged = true; return; }
      var nodeG = e.target.closest && e.target.closest('.skill-node-g');
      if (nodeG) {
        var nodeId = nodeG.dataset.id;
        var node = null;
        for (var i = 0; i < nodes.length; i++) { if (nodes[i].id === nodeId) { node = nodes[i]; break; } }
        if (node) {
          var rank = skills[nodeId] || 0;
          var locked = !isUnlocked(className, node);
          showTooltip(node, rank, locked, color, e.clientX, e.clientY);
        }
      } else {
        hideTooltip();
      }
    });

    svg.addEventListener('mouseleave', function() {
      hideTooltip();
    });

    svg.addEventListener('click', function(e) {
      if (hasDragged) return;
      var nodeG = e.target.closest && e.target.closest('.skill-node-g');
      if (!nodeG) return;
      var nodeId = nodeG.dataset.id;
      var node = null;
      for (var i = 0; i < nodes.length; i++) { if (nodes[i].id === nodeId) { node = nodes[i]; break; } }
      if (!node) return;
      if (!isUnlocked(className, node)) {
        showToast('Necesitas más puntos en categorías anteriores');
        return;
      }
      var cur = skills[nodeId] || 0;
      if (cur >= node.max) return;
      if (puntosGastados() >= MAX_SKILLS) {
        showToast('Has gastado todos los puntos de habilidad (' + MAX_SKILLS + ')');
        return;
      }
      skills[nodeId] = cur + 1;
      updateNodeVisual(svg, className, nodeId, nodes);
      updateAllConnections(svg, className, edges);
      var ptEl = document.getElementById('d4-puntos-gastados');
      if (ptEl) ptEl.textContent = puntosGastados();
      renderResults();
    });

    svg.addEventListener('contextmenu', function(e) {
      e.preventDefault();
      if (hasDragged) return;
      var nodeG = e.target.closest && e.target.closest('.skill-node-g');
      if (!nodeG) return;
      var nodeId = nodeG.dataset.id;
      var cur = skills[nodeId] || 0;
      if (cur <= 0) return;
      skills[nodeId] = cur - 1;
      if (skills[nodeId] === 0) delete skills[nodeId];
      updateAllNodes(svg, className, nodes);
      updateAllConnections(svg, className, edges);
      var ptEl = document.getElementById('d4-puntos-gastados');
      if (ptEl) ptEl.textContent = puntosGastados();
      renderResults();
    });

    // Touch
    svg.addEventListener('touchstart', function(e) {
      if (e.touches.length === 1) {
        isDragging = true;
        hasDragged = false;
        dragStartClient = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        dragStartVB = { x: vb.x, y: vb.y };
      } else if (e.touches.length === 2) {
        lastTouchDist = Math.hypot(
          e.touches[1].clientX - e.touches[0].clientX,
          e.touches[1].clientY - e.touches[0].clientY
        );
      }
      e.preventDefault();
    }, { passive: false });

    svg.addEventListener('touchmove', function(e) {
      if (e.touches.length === 1 && isDragging) {
        hasDragged = true;
        var rect = svg.getBoundingClientRect();
        var dx = (e.touches[0].clientX - dragStartClient.x) * (vb.w / rect.width);
        var dy = (e.touches[0].clientY - dragStartClient.y) * (vb.h / rect.height);
        vb.x = dragStartVB.x - dx;
        vb.y = dragStartVB.y - dy;
        updateViewBox(svg);
      } else if (e.touches.length === 2) {
        var dist = Math.hypot(
          e.touches[1].clientX - e.touches[0].clientX,
          e.touches[1].clientY - e.touches[0].clientY
        );
        if (lastTouchDist > 0 && dist > 0) doZoom(lastTouchDist / dist, svg);
        lastTouchDist = dist;
      }
      e.preventDefault();
    }, { passive: false });

    svg.addEventListener('touchend', function(e) {
      if (!hasDragged && e.changedTouches.length === 1) {
        var touch = e.changedTouches[0];
        var el = document.elementFromPoint(touch.clientX, touch.clientY);
        if (el) el.click();
      }
      isDragging = false;
      hasDragged = false;
      lastTouchDist = 0;
    });

    svg.style.cursor = 'grab';

    var btnIn    = document.getElementById('zoom-in-btn');
    var btnOut   = document.getElementById('zoom-out-btn');
    var btnReset = document.getElementById('zoom-reset-btn');
    if (btnIn)    btnIn.onclick    = function() { doZoom(0.8, svg); };
    if (btnOut)   btnOut.onclick   = function() { doZoom(1.25, svg); };
    if (btnReset) btnReset.onclick = function() { vb = { x: 0, y: 0, w: 800, h: 600 }; updateViewBox(svg); };
  }

  // ── Render árbol SVG ──
  function renderSkillTree(className) {
    className = className || claseActual;
    var wrapper = document.getElementById('skill-tree-container');
    if (!wrapper) return;

    var color = CLASES[className].color;
    var arbol = CLASES[className].arbol;
    var tree  = buildSkillNodes(className);
    var nodes = tree.nodes;
    var edges = tree.edges;

    vb = { x: 0, y: 0, w: 800, h: 600 };

    // Remove previous SVG only, keep static zoom controls
    var oldSvg = wrapper.querySelector('svg');
    if (oldSvg) oldSvg.parentNode.removeChild(oldSvg);

    var zoomCtrl = wrapper.querySelector('.zoom-controls');

    // SVG
    var svgNS = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(svgNS, 'svg');
    svg.id = 'd4-tree-svg';
    svg.setAttribute('viewBox', '0 0 800 600');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '520');
    svg.style.display = 'block';
    currentSVG = svg;

    // Defs: glow filter per node
    var defs = document.createElementNS(svgNS, 'defs');
    nodes.forEach(function(n) {
      var filter = document.createElementNS(svgNS, 'filter');
      filter.id = 'glow-' + n.id;
      filter.setAttribute('x', '-60%'); filter.setAttribute('y', '-60%');
      filter.setAttribute('width', '220%'); filter.setAttribute('height', '220%');
      var blur = document.createElementNS(svgNS, 'feGaussianBlur');
      blur.setAttribute('stdDeviation', '5');
      blur.setAttribute('result', 'coloredBlur');
      var merge = document.createElementNS(svgNS, 'feMerge');
      var mn1 = document.createElementNS(svgNS, 'feMergeNode');
      mn1.setAttribute('in', 'coloredBlur');
      var mn2 = document.createElementNS(svgNS, 'feMergeNode');
      mn2.setAttribute('in', 'SourceGraphic');
      merge.appendChild(mn1); merge.appendChild(mn2);
      filter.appendChild(blur); filter.appendChild(merge);
      defs.appendChild(filter);
    });
    svg.appendChild(defs);

    // Connection lines
    edges.forEach(function(edge) {
      var fromNode = null, toNode = null;
      nodes.forEach(function(n) {
        if (n.id === edge.from) fromNode = n;
        if (n.id === edge.to)   toNode   = n;
      });
      if (!fromNode || !toNode) return;
      var line = document.createElementNS(svgNS, 'line');
      line.id = connId(edge.from, edge.to);
      line.setAttribute('x1', fromNode.x); line.setAttribute('y1', fromNode.y);
      line.setAttribute('x2', toNode.x);   line.setAttribute('y2', toNode.y);
      line.setAttribute('stroke', '#2a2b3e');
      line.setAttribute('stroke-width', '1.5');
      line.setAttribute('stroke-linecap', 'round');
      svg.appendChild(line);
    });

    // Category label strips
    arbol.forEach(function(cat, catIdx) {
      var y = nodes.filter(function(n) { return n.cat === catIdx; });
      if (!y.length) return;
      var catY = y[0].y;
      var labelEl = document.createElementNS(svgNS, 'text');
      labelEl.setAttribute('x', '6');
      labelEl.setAttribute('y', catY + 5);
      labelEl.setAttribute('fill', color);
      labelEl.setAttribute('font-size', '9');
      labelEl.setAttribute('font-weight', '700');
      labelEl.setAttribute('opacity', '0.65');
      labelEl.setAttribute('pointer-events', 'none');
      labelEl.setAttribute('font-family', 'inherit');
      labelEl.textContent = cat.cat;
      svg.appendChild(labelEl);

      if (cat.req > 0) {
        var reqEl = document.createElementNS(svgNS, 'text');
        reqEl.setAttribute('x', '6');
        reqEl.setAttribute('y', catY + 16);
        reqEl.setAttribute('fill', '#888');
        reqEl.setAttribute('font-size', '7.5');
        reqEl.setAttribute('pointer-events', 'none');
        reqEl.setAttribute('font-family', 'inherit');
        reqEl.textContent = 'req. ' + cat.req;
        svg.appendChild(reqEl);
      }
    });

    // Node groups
    var R = 26;
    nodes.forEach(function(n) {
      var rank   = skills[n.id] || 0;
      var locked = !isUnlocked(className, n);
      var isMaxed = rank > 0 && rank >= n.max;
      var isActive = rank > 0;

      var g = document.createElementNS(svgNS, 'g');
      g.id = 'ng-' + n.id;
      g.setAttribute('class', 'skill-node-g');
      g.setAttribute('data-id', n.id);
      g.setAttribute('data-cat', n.cat);
      g.style.cursor = locked ? 'not-allowed' : 'pointer';

      // Main circle
      var circle = document.createElementNS(svgNS, 'circle');
      circle.id = 'nc-' + n.id;
      circle.setAttribute('cx', n.x); circle.setAttribute('cy', n.y); circle.setAttribute('r', R);
      circle.setAttribute('stroke-width', '2.5');
      if (locked) {
        circle.setAttribute('fill', '#1a1b1e');
        circle.setAttribute('stroke', '#3a3b3e');
        circle.setAttribute('opacity', '0.4');
      } else if (isMaxed) {
        circle.setAttribute('fill', color);
        circle.setAttribute('stroke', brighten(color));
        circle.setAttribute('filter', 'url(#glow-' + n.id + ')');
      } else if (isActive) {
        circle.setAttribute('fill', hexToRgba(color, 0.35));
        circle.setAttribute('stroke', color);
      } else {
        circle.setAttribute('fill', '#1e1f23');
        circle.setAttribute('stroke', color);
      }

      // Icon initials
      var iconFill = locked ? '#444' : isMaxed ? '#fff' : color;
      var icon = document.createElementNS(svgNS, 'text');
      icon.id = 'ni-' + n.id;
      icon.setAttribute('x', n.x); icon.setAttribute('y', n.y - 5);
      icon.setAttribute('text-anchor', 'middle'); icon.setAttribute('dominant-baseline', 'middle');
      icon.setAttribute('fill', iconFill);
      icon.setAttribute('font-size', '11'); icon.setAttribute('font-weight', '700');
      icon.setAttribute('pointer-events', 'none'); icon.setAttribute('font-family', 'inherit');
      icon.textContent = getNodeIcon(n.nombre);

      // Short name below icon
      var shortName = n.nombre.length > 11 ? n.nombre.slice(0, 10) + '…' : n.nombre;
      var nameText = document.createElementNS(svgNS, 'text');
      nameText.setAttribute('x', n.x); nameText.setAttribute('y', n.y + 9);
      nameText.setAttribute('text-anchor', 'middle'); nameText.setAttribute('dominant-baseline', 'middle');
      nameText.setAttribute('fill', locked ? '#444' : '#bbb');
      nameText.setAttribute('font-size', '7.5');
      nameText.setAttribute('pointer-events', 'none'); nameText.setAttribute('font-family', 'inherit');
      nameText.textContent = shortName;

      // Rank badge circle
      var rankBg = document.createElementNS(svgNS, 'circle');
      rankBg.id = 'nrb-' + n.id;
      rankBg.setAttribute('cx', n.x + R - 5); rankBg.setAttribute('cy', n.y - R + 5);
      rankBg.setAttribute('r', '9');
      rankBg.setAttribute('fill', '#111');
      rankBg.setAttribute('stroke', color); rankBg.setAttribute('stroke-width', '1.5');
      rankBg.setAttribute('pointer-events', 'none');
      rankBg.style.display = rank > 0 ? '' : 'none';

      // Rank text
      var rankTx = document.createElementNS(svgNS, 'text');
      rankTx.id = 'nr-' + n.id;
      rankTx.setAttribute('x', n.x + R - 5); rankTx.setAttribute('y', n.y - R + 5);
      rankTx.setAttribute('text-anchor', 'middle'); rankTx.setAttribute('dominant-baseline', 'middle');
      rankTx.setAttribute('fill', color);
      rankTx.setAttribute('font-size', '9'); rankTx.setAttribute('font-weight', '700');
      rankTx.setAttribute('pointer-events', 'none'); rankTx.setAttribute('font-family', 'inherit');
      rankTx.textContent = rank;
      rankTx.style.display = rank > 0 ? '' : 'none';

      g.appendChild(circle);
      g.appendChild(icon);
      g.appendChild(nameText);
      g.appendChild(rankBg);
      g.appendChild(rankTx);
      svg.appendChild(g);
    });

    // Insert SVG before zoom controls so it sits behind them
    if (zoomCtrl) {
      wrapper.insertBefore(svg, zoomCtrl);
    } else {
      wrapper.appendChild(svg);
    }

    attachSVGEvents(svg, className, nodes, edges);
    updateAllConnections(svg, className, edges);

    var ptEl = document.getElementById('d4-puntos-gastados');
    if (ptEl) ptEl.textContent = puntosGastados();
  }

  // ── Render Paragón ──
  function renderParagon() {
    var container = document.getElementById("d4-paragon-cats");
    if (!container) return;

    container.innerHTML = PAR_CATS.map(function(c) {
      return '<div class="paragon-cat">' +
        '<div class="paragon-cat-name" style="color:' + c.color + '">' + c.label +
        ' <span style="font-size:10px;color:var(--text-hint)">(' + c.bonusLabel + ': ' + c.bonusFn(paragonStats[c.key]) + ')</span></div>' +
        '<div style="display:flex;align-items:center;gap:8px">' +
        '<input type="range" class="paragon-slider" id="par-' + c.key + '" min="0" max="' + nivelParagon + '" value="' + paragonStats[c.key] + '" />' +
        '<span style="font-size:13px;font-weight:600;color:' + c.color + ';min-width:28px;text-align:right">' + paragonStats[c.key] + '</span>' +
        '</div></div>';
    }).join("");

    PAR_CATS.forEach(function(c) {
      var sl = document.getElementById('par-' + c.key);
      if (!sl) return;
      sl.addEventListener("input", function() {
        var newVal = parseInt(sl.value);
        var others = PAR_CATS.filter(function(x) { return x.key !== c.key; }).reduce(function(s, x) { return s + paragonStats[x.key]; }, 0);
        paragonStats[c.key] = Math.min(newVal, nivelParagon - others);
        renderParagon();
        renderResults();
      });
    });
  }

  // ── Render aspectos ──
  function renderAspectos() {
    var opts = ASPECTOS_OFENSIVOS[claseActual] || ASPECTOS_OFENSIVOS["Nigromante"];

    var ofeContainer = document.getElementById("d4-aspectos-ofe");
    if (ofeContainer) {
      ofeContainer.innerHTML = aspectosOfe.map(function(val, i) {
        return '<div class="aspecto-slot">' +
          '<span class="aspecto-icon">⚔️</span>' +
          '<select class="aspecto-select" data-tipo="ofe" data-idx="' + i + '">' +
          opts.map(function(o) { return '<option' + (o === val ? ' selected' : '') + '>' + o + '</option>'; }).join('') +
          '</select></div>';
      }).join("");
    }

    var defContainer = document.getElementById("d4-aspectos-def");
    if (defContainer) {
      defContainer.innerHTML = aspectosDef.map(function(val, i) {
        return '<div class="aspecto-slot">' +
          '<span class="aspecto-icon">🛡️</span>' +
          '<select class="aspecto-select" data-tipo="def" data-idx="' + i + '">' +
          ASPECTOS_DEFENSIVOS.map(function(o) { return '<option' + (o === val ? ' selected' : '') + '>' + o + '</option>'; }).join('') +
          '</select></div>';
      }).join("");
    }

    var gliContainer = document.getElementById("d4-glifos-grid");
    if (gliContainer) {
      gliContainer.innerHTML = glifos.map(function(g, i) {
        return '<div class="aspecto-slot" style="gap:8px">' +
          '<span class="aspecto-icon">💎</span>' +
          '<select class="aspecto-select" data-tipo="glifo" data-idx="' + i + '" style="flex:2">' +
          GLIFOS.map(function(o) { return '<option' + (o === g.id ? ' selected' : '') + '>' + o + '</option>'; }).join('') +
          '</select>' +
          '<span style="font-size:11px;color:var(--text-hint);flex-shrink:0">Nv.</span>' +
          '<input type="number" min="1" max="21" value="' + g.nivel + '" data-tipo="glifo-nivel" data-idx="' + i + '" ' +
          'style="width:44px;background:var(--bg-base);border:0.5px solid var(--border);border-radius:4px;padding:4px;color:var(--text-main);font-size:12px;text-align:center">' +
          '</div>';
      }).join("");
    }

    document.querySelectorAll(".aspecto-select").forEach(function(sel) {
      sel.addEventListener("change", function() {
        var tipo = sel.dataset.tipo;
        var idx  = parseInt(sel.dataset.idx);
        if (tipo === "ofe")   aspectosOfe[idx] = sel.value;
        if (tipo === "def")   aspectosDef[idx] = sel.value;
        if (tipo === "glifo") glifos[idx].id   = sel.value;
        renderResults();
      });
    });
    document.querySelectorAll("[data-tipo='glifo-nivel']").forEach(function(inp) {
      inp.addEventListener("change", function() {
        glifos[parseInt(inp.dataset.idx)].nivel = Math.min(21, Math.max(1, parseInt(inp.value) || 1));
        renderResults();
      });
    });
  }

  // ── Render results ──
  function renderResults() {
    var clase    = CLASES[claseActual];
    var gastados = puntosGastados();
    var parTotal = PAR_CATS.reduce(function(s, c) { return s + paragonStats[c.key]; }, 0);
    var aofe = aspectosOfe.filter(function(a) { return !a.startsWith("Ning"); }).length;
    var adef = aspectosDef.filter(function(a) { return !a.startsWith("Ning"); }).length;
    var gl   = glifos.filter(function(g) { return g.id !== "Ninguno"; }).length;
    var pot  = calcPotencia();

    function set(id, val)            { var el = document.getElementById(id); if (el) el.textContent = val; }
    function setStyle(id, prop, val) { var el = document.getElementById(id); if (el) el.style[prop] = val; }

    set("d4-res-skills",  gastados + " / " + MAX_SKILLS);
    set("d4-res-paragon", parTotal + " / " + nivelParagon);
    set("d4-res-buildtype", detectBuild());
    setStyle("d4-res-buildtype", "color", clase.color);
    set("d4-res-potencia", pot.toLocaleString("es"));
    setStyle("d4-res-potencia", "color", pot > 7000 ? "#E24B4A" : pot > 4000 ? "#EF9F27" : "#97C459");
    set("d4-res-aofe",   aofe + " / 6");
    set("d4-res-adef",   adef + " / 3");
    set("d4-res-glifos", gl   + " / 4");

    var parStatsEl = document.getElementById("d4-res-parstats");
    if (parStatsEl) {
      parStatsEl.innerHTML = PAR_CATS.map(function(c) {
        return '<div style="display:flex;justify-content:space-between">' +
          '<span style="color:var(--text-muted)">' + c.label + '</span>' +
          '<span style="color:' + c.color + ';font-weight:600">' + c.bonusFn(paragonStats[c.key]) + '</span></div>';
      }).join("");
    }
  }

  function renderAll() {
    renderSkillTree(claseActual);
    renderParagon();
    renderAspectos();
    renderResults();
  }

  // ── localStorage ──
  function loadSaves() {
    try { return JSON.parse(localStorage.getItem(LS_KEY)) || []; } catch(e) { return []; }
  }
  function saveSaves(arr) {
    localStorage.setItem(LS_KEY, JSON.stringify(arr));
  }

  function renderSaved() {
    var saves = loadSaves();
    var el = document.getElementById("d4-saved-list");
    if (!el) return;
    if (!saves.length) {
      el.innerHTML = '<span style="font-size:12px;color:var(--text-hint)">No hay builds guardadas.</span>';
      return;
    }
    el.innerHTML = saves.map(function(s, i) {
      return '<div class="build-saved-item">' +
        '<span>' + s.nombre + ' <span style="color:var(--text-hint);font-size:10px">(' + s.clase + ')</span></span>' +
        '<div class="build-saved-actions">' +
        '<button class="build-saved-btn" data-action="load" data-idx="' + i + '">Cargar</button>' +
        '<button class="build-saved-btn" data-action="del"  data-idx="' + i + '" style="color:#E24B4A">Eliminar</button>' +
        '</div></div>';
    }).join("");

    el.querySelectorAll("[data-action='load']").forEach(function(btn) {
      btn.addEventListener("click", function() {
        var s = loadSaves()[parseInt(btn.dataset.idx)];
        if (!s) return;
        claseActual  = s.clase;
        skills       = Object.assign({}, s.skills);
        nivelParagon = s.nivelParagon || 0;
        paragonStats = Object.assign({}, s.paragonStats);
        aspectosOfe  = s.aspectosOfe || ["Ningún aspecto","Ningún aspecto","Ningún aspecto","Ningún aspecto","Ningún aspecto","Ningún aspecto"];
        aspectosDef  = s.aspectosDef || ["Ningún aspecto","Ningún aspecto","Ningún aspecto"];
        glifos       = s.glifos || glifos;
        var sl = document.getElementById("d4-paragon-slider");
        if (sl) sl.value = nivelParagon;
        var numEl = document.getElementById("d4-paragon-num");
        if (numEl) numEl.textContent = nivelParagon;
        var nivEl = document.getElementById("d4-paragon-nivel");
        if (nivEl) nivEl.textContent = nivelParagon;
        updateClaseUI();
        renderAll();
      });
    });
    el.querySelectorAll("[data-action='del']").forEach(function(btn) {
      btn.addEventListener("click", function() {
        var arr = loadSaves();
        arr.splice(parseInt(btn.dataset.idx), 1);
        saveSaves(arr);
        renderSaved();
      });
    });
  }

  // ── URL share ──
  function buildShareURL() {
    var params = new URLSearchParams();
    params.set("clase", claseActual);
    params.set("nivel", nivelParagon);
    Object.entries(skills).forEach(function(kv) { params.set("sk_" + kv[0], kv[1]); });
    PAR_CATS.forEach(function(c) { params.set("par_" + c.key, paragonStats[c.key]); });
    return window.location.origin + window.location.pathname + "?" + params.toString();
  }

  function loadFromURL() {
    var params = new URLSearchParams(window.location.search);
    if (!params.has("clase")) return;
    var cl = params.get("clase");
    if (CLASES[cl]) claseActual = cl;
    nivelParagon = parseInt(params.get("nivel")) || 0;
    params.forEach(function(val, key) {
      if (key.startsWith("sk_"))  skills[key.slice(3)]       = parseInt(val) || 0;
      if (key.startsWith("par_")) paragonStats[key.slice(4)] = parseInt(val) || 0;
    });
  }

  function updateClaseUI() {
    document.querySelectorAll(".d4-clase-card").forEach(function(c) {
      var active = c.dataset.clase === claseActual;
      c.classList.toggle("active", active);
      c.style.borderColor = active ? CLASES[c.dataset.clase].color : "";
    });
  }

  // ── Window-level pan listeners (added once) ──
  window.addEventListener('mousemove', function(e) {
    if (!isDragging || !currentSVG) return;
    hasDragged = true;
    var rect = currentSVG.getBoundingClientRect();
    var dx = (e.clientX - dragStartClient.x) * (vb.w / rect.width);
    var dy = (e.clientY - dragStartClient.y) * (vb.h / rect.height);
    vb.x = dragStartVB.x - dx;
    vb.y = dragStartVB.y - dy;
    updateViewBox(currentSVG);
    currentSVG.style.cursor = 'grabbing';
  });

  window.addEventListener('mouseup', function() {
    if (isDragging) {
      isDragging = false;
      if (currentSVG) currentSVG.style.cursor = 'grab';
    }
  });

  // ── Init ──
  document.addEventListener("DOMContentLoaded", function() {
    loadFromURL();

    var claseGrid = document.getElementById("d4-clase-grid");
    if (claseGrid) {
      claseGrid.innerHTML = Object.entries(CLASES).map(function(entry) {
        var nombre = entry[0], cl = entry[1];
        return '<div class="d4-clase-card' + (nombre === claseActual ? ' active' : '') + '" data-clase="' + nombre + '" ' +
          'style="border-color:' + (nombre === claseActual ? cl.color : '') + '">' +
          '<div class="d4-clase-emoji">' + cl.emoji + '</div>' +
          '<div class="d4-clase-name" style="color:' + cl.color + '">' + nombre + '</div>' +
          '<div class="d4-clase-desc">' + cl.desc + '</div>' +
          '</div>';
      }).join("");

      claseGrid.querySelectorAll(".d4-clase-card").forEach(function(card) {
        card.addEventListener("click", function() {
          claseActual = card.dataset.clase;
          skills = {};
          updateClaseUI();
          renderAll();
        });
      });
    }

    var parSlider = document.getElementById("d4-paragon-slider");
    if (parSlider) {
      parSlider.value = nivelParagon;
      parSlider.addEventListener("input", function() {
        nivelParagon = parseInt(parSlider.value);
        var numEl = document.getElementById("d4-paragon-num");
        if (numEl) numEl.textContent = nivelParagon;
        var nivEl = document.getElementById("d4-paragon-nivel");
        if (nivEl) nivEl.textContent = nivelParagon;
        var total = PAR_CATS.reduce(function(s, c) { return s + paragonStats[c.key]; }, 0);
        if (total > nivelParagon) {
          paragonStats = { fuerza: 0, vitalidad: 0, voluntad: 0, destreza: 0 };
        }
        renderParagon();
        renderResults();
      });
    }

    var btnGuardar = document.getElementById("d4-btn-guardar");
    if (btnGuardar) {
      btnGuardar.addEventListener("click", function() {
        var nameEl = document.getElementById("d4-build-name");
        var nombre = nameEl ? nameEl.value.trim() : "";
        if (!nombre) return;
        var arr = loadSaves();
        arr.unshift({
          nombre: nombre, clase: claseActual,
          skills: Object.assign({}, skills),
          nivelParagon: nivelParagon,
          paragonStats: Object.assign({}, paragonStats),
          aspectosOfe: aspectosOfe.slice(),
          aspectosDef: aspectosDef.slice(),
          glifos: glifos.map(function(g) { return Object.assign({}, g); }),
        });
        if (arr.length > 20) arr.length = 20;
        saveSaves(arr);
        if (nameEl) nameEl.value = "";
        renderSaved();
      });
    }

    var btnCompartir = document.getElementById("d4-btn-compartir");
    if (btnCompartir) {
      btnCompartir.addEventListener("click", function() {
        var url = buildShareURL();
        navigator.clipboard.writeText(url).then(function() {
          var orig = btnCompartir.innerHTML;
          btnCompartir.textContent = "¡Copiado!";
          setTimeout(function() { btnCompartir.innerHTML = orig; }, 2000);
        }).catch(function() { prompt("Copia esta URL:", url); });
      });
    }

    renderSaved();
    renderAll();
  });
})();
