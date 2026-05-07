const DB = {
  bosses: {
    "malenia": {
      id: "malenia",
      nombre: "Malenia, Azote del Árbol",
      subtitulo: "Diosa de la Putrefacción",
      juego: "Elden Ring",
      juegoId: "elden-ring",
      juegoBg: "#1a1510",
      emoji: "🌸",
      zona: "Raíz del Árbol de Haligtree",
      tipo: "Jefe opcional",
      dificultad: "Extremo",
      hp: "33.251",
      runas: "480.000",
      fases: 2,
      debilidades_texto: ["Fuego", "Trueno"],
      stats: {
        hp:     { val: "33.251", label: "HP total" },
        runas:  { val: "480k",   label: "Runas" },
        fases:  { val: "2",      label: "Fases" },
        nivel:  { val: "~120",   label: "Nivel rec." }
      },
      descripcion: "Malenia es hija de Marika y Radagon, y gemela de Miquella. Nacida con la Putrefacción Escarlata, jamás ha conocido la derrota en combate. Es considerada el boss más difícil de Elden Ring y uno de los más desafiantes de la historia de FromSoftware. Su habilidad para recuperar salud con cada golpe que conecta la hace especialmente brutal.",
      estrategia: [
        { titulo: "Domina el esquive en su dirección", texto: "La mayoría de sus combos se cancelan esquivando hacia ella, no alejándote. Aprende el timing del esquive hacia adelante para sus cadenas de espadazos." },
        { titulo: "Nunca uses escudo sin la habilidad correcta", texto: "Sus golpes rompen la guardia de casi cualquier escudo y además le recuperan vida. Esquiva siempre, nunca bloquees." },
        { titulo: "Aprende a identificar la Flor de la Putrefacción", texto: "En fase 2 salta al aire antes de lanzar la explosión. Corre al máximo alejándote en línea recta durante 3-4 segundos para sobrevivir." },
        { titulo: "Usa invocaciones de ceniza en fase 1", texto: "Mimic Tear o Black Knife Tiche son las mejores opciones. Tiche especialmente porque esquiva bien y no recibe curaciones de Malenia." },
        { titulo: "Construye resistencia a la Putrefacción", texto: "Lleva consumibles de Preserving Boluses para curar la acumulación de Putrefacción Escarlata en fase 2." }
      ],
      resistencias: [
        { nombre: "Físico",  icono: "ti-sword",  valor: 20, color: "#85B7EB" },
        { nombre: "Magia",   icono: "ti-wand",   valor: 60, color: "#AFA9EC" },
        { nombre: "Fuego",   icono: "ti-flame",  valor: 0,  color: "#EF9F27" },
        { nombre: "Trueno",  icono: "ti-bolt",   valor: 0,  color: "#FAC775" },
        { nombre: "Sagrado", icono: "ti-sun",    valor: 90, color: "#EF9F27" }
      ],
      debilidades: [
        { nombre: "Fuego",       icono: "ti-flame", valor: 85, color: "#EF9F27" },
        { nombre: "Trueno",      icono: "ti-bolt",  valor: 75, color: "#FAC775" },
        { nombre: "Hemorragia",  icono: "ti-drop",  valor: 70, color: "#E24B4A" }
      ],
      fases_data: [
        {
          num: "I",
          color: "#EF9F27",
          titulo: "La Espadachina de Oro",
          sub: "100% — 50% HP",
          hp_trigger: "100% HP",
          desc: "Malenia combate con su espada y brazo prostético. Sus movimientos son rápidos y encadenados, con alcance medio-largo. El ataque más peligroso en esta fase es la secuencia de vuelo rasante que repite hasta 4 veces consecutivas.",
          nuevos: "Vuelo rasante, combo de espadazos en L, ataque de salto vertical"
        },
        {
          num: "II",
          color: "#E24B4A",
          titulo: "Diosa de la Putrefacción",
          sub: "Se activa al llegar a 0 HP en fase 1",
          hp_trigger: "0% HP fase 1",
          desc: "Al morir en fase 1, Malenia renace con alas de flores putrefactas y HP completamente restaurado. Añade la Flor de la Putrefacción — una explosión masiva que cubre casi toda el área — y potencia todos sus ataques con Putrefacción Escarlata.",
          nuevos: "Flor de la Putrefacción, combo aéreo extendido, ataques infundidos con Escarlata"
        }
      ],
      ataques: [
        {
          nombre: "Vuelo rasante",
          tipo: "fisico",
          tipoLabel: "Físico",
          desc: "Malenia se lanza hacia adelante a gran velocidad con la espada extendida. Puede repetirse hasta 4 veces seguidas cambiando dirección.",
          tip: "Esquiva hacia ella en el último momento. Si la secuencia se repite, mantén el mismo timing."
        },
        {
          nombre: "Combo en L",
          tipo: "fisico",
          tipoLabel: "Físico",
          desc: "Serie de 3-5 espadazos rápidos terminando con un giro. El último golpe tiene mayor radio de daño.",
          tip: "Los primeros golpes admiten esquive continuo hacia ella. El giro final esquívalo hacia atrás o con iframes."
        },
        {
          nombre: "Flor de la Putrefacción",
          tipo: "magico",
          tipoLabel: "Escarlata",
          desc: "Solo en fase 2. Salta al aire, el escenario se llena de flores, explota en una onda masiva de Putrefacción. Daño extremo en área.",
          tip: "En cuanto la veas saltar alto, corre en línea recta alejándote sin parar durante 3-4 segundos."
        },
        {
          nombre: "Ataque de salto vertical",
          tipo: "fisico",
          tipoLabel: "Físico",
          desc: "Salta verticalmente y cae sobre el jugador con la espada. Tiene un pequeño delay antes del impacto.",
          tip: "Esquiva justo cuando empieza a bajar, no cuando salta."
        },
        {
          nombre: "Combo aéreo extendido",
          tipo: "magico",
          tipoLabel: "Escarlata",
          desc: "Solo en fase 2. Realiza una serie de ataques aéreos flotando, terminando con una explosión de Putrefacción.",
          tip: "Corre alejándote durante toda la secuencia y aleja también a tu summon del área."
        }
      ],
      drops: [
        {
          emoji: "💍",
          nombre: "Gran Runa de Malenia",
          desc: "Requiere activación en la Torre de Miquella. Aumenta todos los atributos en 5 puntos.",
          tasa: "100%",
          rareza: "legendario"
        },
        {
          emoji: "📜",
          nombre: "Recuerdo de la Diosa Putrefacta",
          desc: "Puede canjearse por el Hacha de Malenia o el Hechizo Flor de la Putrefacción en Enia.",
          tasa: "100%",
          rareza: "legendario"
        },
        {
          emoji: "🌸",
          nombre: "Prótesis de Malenia",
          desc: "Arma única. Skill especial: Flor de la Putrefacción. Escala con Destreza y Fuerza.",
          tasa: "Recuerdo",
          rareza: "legendario"
        },
        {
          emoji: "✨",
          nombre: "Hechizo: Flor de la Putrefacción",
          desc: "Invoca la explosión de Putrefacción Escarlata característica de Malenia. Requiere 23 de Fe.",
          tasa: "Recuerdo",
          rareza: "raro"
        }
      ],
      builds: [
        {
          rank: "1",
          rankColor: "#EF9F27",
          nombre: "Bleed Arcane — Katana",
          desc: "La build más efectiva contra Malenia. La Hemorragia ignora su regeneración y el daño explosivo de los stacks es brutal. Rivers of Blood o Nagakiba con Occult.",
          efectividad: 95,
          tags: ["Destreza", "Arcano", "Hemorragia"]
        },
        {
          rank: "2",
          rankColor: "#97C459",
          nombre: "Black Knife Tiche + Fuego",
          desc: "Tiche como ceniza esquiva sus ataques y no activa la curación. Complementa con hechizos o armas de fuego para explotar su debilidad elemental.",
          efectividad: 88,
          tags: ["Magia", "Fuego", "Summon"]
        },
        {
          rank: "3",
          rankColor: "#85B7EB",
          nombre: "Quality Colossal — Endure",
          desc: "Arma colosal con habilidad Endure para absorber golpes mientras contraatacas. Lento pero seguro. Requiere conocer bien sus ventanas de ataque.",
          efectividad: 75,
          tags: ["Fuerza", "Destreza", "Defensivo"]
        }
      ]
    },
    "radahn": {
      id: "radahn",
      nombre: "Starscourge Radahn",
      subtitulo: "Conquistador de las Estrellas",
      juego: "Elden Ring",
      juegoId: "elden-ring",
      juegoBg: "#1a1510",
      emoji: "⚔️",
      zona: "Caelid — Festival de Radahn",
      tipo: "Jefe mayor",
      dificultad: "Extremo",
      hp: "35.990",
      runas: "70.000",
      fases: 2,
      debilidades_texto: ["Hemorragia", "Frío"],
      stats: {
        hp:    { val: "35.990", label: "HP total" },
        runas: { val: "70k",    label: "Runas" },
        fases: { val: "2",      label: "Fases" },
        nivel: { val: "~80",    label: "Nivel rec." }
      },
      descripcion: "Radahn es uno de los semidioses más poderosos de Las Tierras Intermedias, hijo de Radagon y Rennala. Conquistó las estrellas con su magia gravitacional para mantenerlas quietas y proteger el destino de su amigo Torrent. La Putrefacción Escarlata lo corrompió y enloquecida, siendo ahora una amenaza constante en Caelid.",
      estrategia: [
        { titulo: "Usa las invocaciones del festival", texto: "Durante la batalla puedes invocar a varios NPCs que distraen a Radahn. Úsalos para acercarte y atacar mientras está ocupado con ellos." },
        { titulo: "Monta a Torrent para la fase 1", texto: "Radahn tiene un alcance enorme con sus flechas y magia gravitacional. Montar a Torrent te permite esquivar sus proyectiles y acercarte rápidamente." },
        { titulo: "Fase 2 — aléjate cuando caiga del cielo", texto: "Al morir en fase 1 Radahn cae literalmente desde el espacio. Aléjate lo máximo posible del punto de impacto o morirás instantáneamente." },
        { titulo: "Hemorragia es muy efectiva", texto: "Radahn es vulnerable a la hemorragia. Rivers of Blood o cualquier arma con bleed acumula rápidamente el estado y hace daño masivo." }
      ],
      resistencias: [
        { nombre: "Físico",  icono: "ti-sword", valor: 30, color: "#85B7EB" },
        { nombre: "Magia",   icono: "ti-wand",  valor: 50, color: "#AFA9EC" },
        { nombre: "Fuego",   icono: "ti-flame", valor: 40, color: "#EF9F27" },
        { nombre: "Trueno",  icono: "ti-bolt",  valor: 40, color: "#FAC775" },
        { nombre: "Sagrado", icono: "ti-sun",   valor: 20, color: "#EF9F27" }
      ],
      debilidades: [
        { nombre: "Hemorragia", icono: "ti-drop",       valor: 80, color: "#E24B4A" },
        { nombre: "Frío",       icono: "ti-snowflake",  valor: 70, color: "#85B7EB" }
      ],
      fases_data: [
        {
          num: "I",
          color: "#EF9F27",
          titulo: "Conquistador de las Estrellas",
          sub: "100% — 50% HP",
          hp_trigger: "100% HP",
          desc: "Radahn combate a caballo usando magia gravitacional y flechas gigantes. Sus ataques tienen un alcance enorme y puede lanzar proyectiles que persiguen al jugador. En esta fase lo más peligroso son sus flechas de seguimiento y los campos gravitacionales.",
          nuevos: "Flechas de seguimiento, campo gravitacional, aplastamiento con espadas"
        },
        {
          num: "II",
          color: "#E24B4A",
          titulo: "Meteoro de Caelid",
          sub: "Se activa al llegar a 0 HP en fase 1",
          hp_trigger: "0% HP fase 1",
          desc: "Radahn cae del cielo como un meteoro causando daño masivo en área. Resucita más agresivo y rápido, ahora sin caballo, atacando cuerpo a cuerpo con sus dos espadas colosales. Añade un ataque de carga meteórico y combos devastadores.",
          nuevos: "Impacto meteórico, combo de espadas dobles, carga a gran velocidad"
        }
      ],
      ataques: [
        { nombre: "Flechas de seguimiento", tipo: "fisico",  tipoLabel: "Físico", desc: "Dispara una lluvia de flechas gigantes que siguen al jugador. En fase 1 es el ataque más frecuente a larga distancia.", tip: "Monta a Torrent y esquiva en zigzag. Las flechas tienen delay antes de cambiar dirección." },
        { nombre: "Campo gravitacional",    tipo: "magico",  tipoLabel: "Magia",  desc: "Crea zonas de gravedad extrema que atraen al jugador hacia el centro causando daño continuo.", tip: "Aleja a Torrent del área afectada inmediatamente. No intentes luchar dentro del campo." },
        { nombre: "Impacto meteórico",      tipo: "fisico",  tipoLabel: "Físico", desc: "Solo fase 2. Radahn cae del cielo al inicio de la fase causando daño masivo en un radio enorme.", tip: "Al ver que fase 1 termina corre lo máximo posible en línea recta del punto central." },
        { nombre: "Combo espadas dobles",   tipo: "fisico",  tipoLabel: "Físico", desc: "Solo fase 2. Serie de 4-6 golpes con sus espadas colosales terminando con un slam.", tip: "Esquiva hacia él en cada golpe individual. El slam final tiene un área mayor — esquiva hacia un lado." }
      ],
      drops: [
        { emoji: "💍", nombre: "Gran Runa de Radahn",                desc: "Aumenta el máximo de HP, FP y Stamina. Una de las runas más versátiles del juego.", tasa: "100%",    rareza: "legendario" },
        { emoji: "📜", nombre: "Recuerdo del Conquistador de Estrellas", desc: "Canjeable por las Espadas de Radahn o el hechizo Lluvia de Estrellas.",           tasa: "100%",    rareza: "legendario" },
        { emoji: "⚔️", nombre: "Espadas de Radahn",                   desc: "Par de espadas colosales única. Skill: Lluvia de Estrellas. Escala con Fuerza.",      tasa: "Recuerdo", rareza: "legendario" }
      ],
      builds: [
        { rank: "1", rankColor: "#EF9F27", nombre: "Bleed Rivers of Blood", desc: "La hemorragia es la debilidad principal de Radahn. Rivers of Blood con Arcano alto acumula bleed en 2-3 hits y hace daño explosivo.", efectividad: 92, tags: ["Arcano", "Destreza", "Hemorragia"] },
        { rank: "2", rankColor: "#97C459", nombre: "Frost + Bleed combo",   desc: "Combinar frío y hemorragia activa Frostbite primero y luego bleed para daño masivo. Requiere dos armas con estados alterados.", efectividad: 85, tags: ["Frío", "Hemorragia", "Dual"] },
        { rank: "3", rankColor: "#85B7EB", nombre: "Summon + Ranged",       desc: "Usar múltiples summons del festival más ataques a distancia es la opción más segura para jugadores nuevos.", efectividad: 78, tags: ["Magia", "Invocación", "Seguro"] }
      ]
    },
    "margit": {
      id: "margit",
      nombre: "Margit, el Presagio Ominoso",
      subtitulo: "Guardián de Stormveil",
      juego: "Elden Ring",
      juegoId: "elden-ring",
      juegoBg: "#1a1510",
      emoji: "👹",
      zona: "Camino a Castillo Stormveil",
      tipo: "Jefe mayor",
      dificultad: "Alto",
      hp: "12.070",
      runas: "12.000",
      fases: 2,
      debilidades_texto: ["Hemorragia", "Sagrado"],
      stats: {
        hp:    { val: "12.070", label: "HP total" },
        runas: { val: "12k",    label: "Runas" },
        fases: { val: "2",      label: "Fases" },
        nivel: { val: "~25",    label: "Nivel rec." }
      },
      descripcion: "Margit es el primer jefe mayor de Elden Ring y una de las batallas más memorables de FromSoftware. Su repertorio de ataques es engañosamente amplio para ser el primer boss del juego, y su agresividad en fase 2 sorprende a muchos jugadores. En realidad es Morgott, el Rey de Gracia disfrazado.",
      estrategia: [
        { titulo: "Aprende a contar sus combos", texto: "Margit tiene combos de 2, 3 y 4 golpes. Aprende cuándo termina cada uno antes de contraatacar. Atacar demasiado pronto te deja expuesto a sus continuaciones." },
        { titulo: "Usa la Cadena de Margit", texto: "Puedes comprar la Cadena de Margit a Patches en las Colinas Lacrimosas. Inmoviliza a Margit brevemente dándote ventana de ataque segura." },
        { titulo: "El martillo sagrado aparece en fase 2", texto: "Al 50% HP Margit invoca un martillo de luz sagrada con alcance y daño mucho mayor. No te confíes cuando baje su HP." },
        { titulo: "Tankea con escudo en los primeros intentos", texto: "Un escudo con buena estabilidad física bloquea la mayoría de sus ataques. Es una forma más fácil de aprender sus patrones antes de pasar a esquivar." }
      ],
      resistencias: [
        { nombre: "Físico",  icono: "ti-sword", valor: 25, color: "#85B7EB" },
        { nombre: "Magia",   icono: "ti-wand",  valor: 45, color: "#AFA9EC" },
        { nombre: "Fuego",   icono: "ti-flame", valor: 35, color: "#EF9F27" },
        { nombre: "Trueno",  icono: "ti-bolt",  valor: 35, color: "#FAC775" },
        { nombre: "Sagrado", icono: "ti-sun",   valor: 5,  color: "#EF9F27" }
      ],
      debilidades: [
        { nombre: "Hemorragia", icono: "ti-drop", valor: 75, color: "#E24B4A" },
        { nombre: "Sagrado",    icono: "ti-sun",  valor: 80, color: "#EF9F27" }
      ],
      fases_data: [
        { num: "I",  color: "#EF9F27", titulo: "El Presagio",      sub: "100% — 50% HP", hp_trigger: "100% HP", desc: "Margit ataca con su bastón y dagas de luz sagrada. Sus movimientos son rápidos y variados. El peligro principal son sus combos extendidos y el salto desde altura.", nuevos: "Combo de bastón, dagas aéreas, salto con bastón" },
        { num: "II", color: "#E24B4A", titulo: "Ira del Presagio", sub: "50% HP",         hp_trigger: "50% HP",  desc: "Invoca un martillo de luz sagrada con mayor alcance y daño. Sus combos se alargan y añade nuevos ataques de área.", nuevos: "Martillo sagrado, combo extendido x5, slam de área" }
      ],
      ataques: [
        { nombre: "Combo de bastón",  tipo: "fisico",  tipoLabel: "Físico",  desc: "Serie de 2-4 golpes con el bastón. El último golpe suele ser más lento con mayor área.", tip: "Esquiva hacia él en cada golpe. El último siempre tiene un pequeño delay — espéralo." },
        { nombre: "Dagas aéreas",     tipo: "sagrado", tipoLabel: "Sagrado", desc: "Invoca dagas de luz que lanza en abanico. Puede hacerlo en el aire o en tierra.", tip: "Esquiva hacia un lateral cuando las veas formarse. Nunca esquives hacia atrás." },
        { nombre: "Martillo sagrado", tipo: "sagrado", tipoLabel: "Sagrado", desc: "Solo fase 2. Golpe de martillo con alta área de impacto y daño masivo.", tip: "Espera a que caiga el martillo y esquiva justo en el impacto. La ventana es corta pero hay tiempo." }
      ],
      drops: [
        { emoji: "💰", nombre: "Runas x12.000",             desc: "Recompensa principal por derrotar a Margit.", tasa: "100%", rareza: "comun" },
        { emoji: "📿", nombre: "Talismán de Bastón Retorcido", desc: "Aumenta el daño de los hechizos lanzados con bastones.", tasa: "100%", rareza: "raro" }
      ],
      builds: [
        { rank: "1", rankColor: "#EF9F27", nombre: "Sagrado — Arma consagrada", desc: "Margit tiene baja resistencia al sagrado. Un arma consagrada con Incantation hace daño extra notable.", efectividad: 88, tags: ["Fe", "Sagrado", "Incantation"] },
        { rank: "2", rankColor: "#97C459", nombre: "Bleed básico",               desc: "Incluso con un arma de bleed básica del early game la hemorragia acumula bien y simplifica la pelea.", efectividad: 82, tags: ["Destreza", "Hemorragia"] },
        { rank: "3", rankColor: "#85B7EB", nombre: "Escudo + espada quality",    desc: "La opción más segura para el primer boss. Bloquea la mayoría de ataques y contraataca en las ventanas.", efectividad: 75, tags: ["Fuerza", "Destreza", "Defensivo"] }
      ]
    }
  },
  juegos: [
    {
      id: "dark-souls-1",
      titulo: "Dark Souls",
      emoji: "🔥",
      thumbBg: "#120f0a",
      tag: "souls",
      tagLabel: "Souls",
      rating: 9.3,
      año: 2011,
      developer: "FromSoftware",
      descripcionCorta: "El que lo empezó todo. Dark Souls definió un género con su mundo interconectado, lore ambiental y dificultad que recompensa la perseverancia.",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/211420/header.jpg"
    },
    {
      id: "elden-ring",
      titulo: "Elden Ring",
      emoji: "🌟",
      thumbBg: "#1a1510",
      tag: "souls",
      tagLabel: "Souls",
      rating: 9.8,
      año: 2022,
      developer: "FromSoftware",
      descripcionCorta: "RPG de acción de FromSoftware ambientado en Las Tierras Intermedias. Mundo abierto con jefes memorables y lore profundo escrito con G.R.R. Martin.",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg"
    },
    {
      id: "dark-souls-3",
      titulo: "Dark Souls III",
      emoji: "🩶",
      thumbBg: "#101418",
      tag: "souls",
      tagLabel: "Souls",
      rating: 9.5,
      año: 2016,
      developer: "FromSoftware",
      descripcionCorta: "El capítulo final de la trilogía Souls. Combate rápido y preciso, con los mejores jefes de la saga y una narrativa oscura sobre el ciclo del fuego.",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/374320/header.jpg"
    },
    {
      id: "diablo-4",
      titulo: "Diablo IV",
      emoji: "🔥",
      thumbBg: "#150f0f",
      tag: "arpg",
      tagLabel: "ARPG",
      rating: 8.9,
      año: 2023,
      developer: "Blizzard",
      descripcionCorta: "ARPG de Blizzard con sistema de temporadas, endgame profundo y ambientación oscura. El regreso de Lilith amenaza a Santuario.",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/2344520/header.jpg"
    },
    {
      id: "bloodborne",
      titulo: "Bloodborne",
      emoji: "🩸",
      thumbBg: "#120f14",
      tag: "souls",
      tagLabel: "Souls",
      rating: 9.7,
      año: 2015,
      developer: "FromSoftware",
      descripcionCorta: "Souls gótico victoriano exclusivo de PS4. Combate agresivo, lore lovecraftiano y una atmósfera única que lo convierten en una obra maestra.",
      imagen: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.jpg"
    },
    {
      id: "sekiro",
      titulo: "Sekiro",
      emoji: "⚔️",
      thumbBg: "#0f1410",
      tag: "accion",
      tagLabel: "Acción",
      rating: 9.6,
      año: 2019,
      developer: "FromSoftware",
      descripcionCorta: "Acción samurái de FromSoftware centrada en el sistema de postura. Sin estadísticas, pura habilidad. Historia de redención en el Japón feudal.",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/814380/header.jpg"
    },
    {
      id: "poe2",
      titulo: "Path of Exile 2",
      emoji: "💀",
      thumbBg: "#10100a",
      tag: "arpg",
      tagLabel: "ARPG",
      rating: 9.1,
      año: 2024,
      developer: "GGG",
      descripcionCorta: "ARPG free-to-play de Grinding Gear Games. Sistema de habilidades profundo, economía compleja y endgame casi infinito para los amantes del género.",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/2694490/header.jpg"
    },
    {
      id: "final-fantasy-7-remake",
      titulo: "Final Fantasy VII Remake",
      emoji: "⚔️",
      thumbBg: "#0a0f1a",
      tag: "rpg",
      tagLabel: "RPG",
      rating: 9.0,
      año: 2020,
      developer: "Square Enix",
      descripcionCorta: "Reimaginación de uno de los JRPGs más influyentes. Cloud Strife y AVALANCHE contra Shinra en un Midgar completamente reconstruido en 3D.",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/1462040/header.jpg"
    },
    {
      id: "final-fantasy-16",
      titulo: "Final Fantasy XVI",
      emoji: "🔥",
      thumbBg: "#0f0a0a",
      tag: "rpg",
      tagLabel: "RPG",
      rating: 8.7,
      año: 2023,
      developer: "Square Enix",
      descripcionCorta: "JRPG de acción ambientado en Valisthea, un mundo de cristales y Eikons. Historia épica con combate espectacular y temática política madura.",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/2515020/header.jpg"
    },
    {
      id: "final-fantasy-14",
      titulo: "Final Fantasy XIV",
      emoji: "🌙",
      thumbBg: "#0a0f14",
      tag: "rpg",
      tagLabel: "RPG",
      rating: 9.2,
      año: 2013,
      developer: "Square Enix",
      descripcionCorta: "MMORPG considerado el mejor del género tras su relanzamiento. Hydaelyn te espera con cientos de horas de historia, raids y contenido endgame.",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/39210/header.jpg"
    },
    {
      id: "final-fantasy-10",
      titulo: "Final Fantasy X",
      emoji: "💎",
      thumbBg: "#0a1018",
      tag: "rpg",
      tagLabel: "RPG",
      rating: 9.4,
      año: 2001,
      developer: "Square Enix",
      descripcionCorta: "JRPG clásico de Square Enix con el sistema de Esfera de Cristal. Historia de amor y sacrificio entre Tidus y Yuna en el mundo de Spira.",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/359870/header.jpg"
    },
    {
      id: "final-fantasy-6",
      titulo: "Final Fantasy VI",
      emoji: "🎭",
      thumbBg: "#0f0f18",
      tag: "rpg",
      tagLabel: "RPG",
      rating: 9.5,
      año: 1994,
      developer: "Square Enix",
      descripcionCorta: "Considerado el mejor FF clásico. 14 personajes jugables, historia coral sin protagonista único y el mejor villano de la saga: Kefka Palazzo.",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/1173820/header.jpg"
    },
    {
      id: "expedition-33",
      titulo: "Clair Obscur: Expedition 33",
      emoji: "🎨",
      thumbBg: "#0f0a14",
      tag: "rpg",
      tagLabel: "RPG",
      rating: 9.3,
      año: 2025,
      developer: "Sandfall Interactive",
      descripcionCorta: "RPG por turnos francés inspirado en la Belle Époque. Cada año la Pintora borra a los humanos de cierta edad. La Expedición 33 parte a detenerla.",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/2973300/header.jpg"
    },
    {
      id: "persona-5",
      titulo: "Persona 5 Royal",
      emoji: "🃏",
      thumbBg: "#1a0a0a",
      tag: "rpg",
      tagLabel: "RPG",
      rating: 9.5,
      año: 2019,
      developer: "Atlus",
      descripcionCorta: "JRPG de Atlus que combina dungeons con simulación social. Los Ladrones Fantasma roban los corazones de adultos corruptos desde el Metaverso.",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/1687950/header.jpg"
    },
    {
      id: "disco-elysium",
      titulo: "Disco Elysium",
      emoji: "🕵️",
      thumbBg: "#0a100f",
      tag: "rpg",
      tagLabel: "RPG",
      rating: 9.1,
      año: 2019,
      developer: "ZA/UM",
      descripcionCorta: "RPG de detectives sin combate, puro roleplay y diálogo. Juegas como un detective amnésico con una ciudad llena de política, filosofía y humor negro.",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/632470/header.jpg"
    },
    {
      id: "baldurs-gate-3",
      titulo: "Baldur's Gate 3",
      emoji: "🐉",
      thumbBg: "#0a0f0a",
      tag: "rpg",
      tagLabel: "RPG",
      rating: 9.8,
      año: 2023,
      developer: "Larian Studios",
      descripcionCorta: "RPG por turnos basado en D&D 5ª edición con libertad narrativa casi total. Co-op para 4 jugadores y consecuencias reales en cada decisión.",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg"
    },
    {
      id: "binding-of-isaac",
      titulo: "The Binding of Isaac: Repentance",
      emoji: "😢",
      thumbBg: "#100a0a",
      tag: "roguelike",
      tagLabel: "Roguelike",
      rating: 9.6,
      año: 2021,
      developer: "Nicalis",
      descripcionCorta: "Roguelike de mazmorras con temática bíblica y miles de sinergias. Cada run es única. Con Repentance tiene el mejor contenido de la saga.",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/1426300/header.jpg"
    },
    {
      id: "hades-2",
      titulo: "Hades II",
      emoji: "🌊",
      thumbBg: "#0a0a18",
      tag: "roguelike",
      tagLabel: "Roguelike",
      rating: 9.4,
      año: 2024,
      developer: "Supergiant Games",
      descripcionCorta: "Secuela del aclamado roguelike de Supergiant. Melinoe, hija de Hades, busca derrotar a Cronos con un combate fluido y narrativa entre runs.",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/1145350/header.jpg"
    },
    {
      id: "dead-cells",
      titulo: "Dead Cells",
      emoji: "🧟",
      thumbBg: "#0f1008",
      tag: "roguelike",
      tagLabel: "Roguelike",
      rating: 9.0,
      año: 2018,
      developer: "Motion Twin",
      descripcionCorta: "Roguelite metroidvania con combate frenético. Cada muerte te hace más fuerte. Biomas variados, builds infinitas y una curva de dificultad perfecta.",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/588650/header.jpg"
    },
    {
      id: "slay-the-spire",
      titulo: "Slay the Spire",
      emoji: "🃏",
      thumbBg: "#100f08",
      tag: "roguelike",
      tagLabel: "Roguelike",
      rating: 9.2,
      año: 2019,
      developer: "Mega Crit",
      descripcionCorta: "El roguelike de cartas que definió el género. Construye un mazo poderoso mientras subes la Aguja. Cuatro personajes con mecánicas radicalmente distintas.",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/646570/header.jpg"
    },
    {
      id: "returnal",
      titulo: "Returnal",
      emoji: "🔄",
      thumbBg: "#080f14",
      tag: "roguelike",
      tagLabel: "Roguelike",
      rating: 8.9,
      año: 2021,
      developer: "Housemarque",
      descripcionCorta: "Shooter roguelike de ciencia ficción de Housemarque. Selene queda atrapada en un bucle temporal en un planeta alienígena hostil. Narrativa críptica y combate brutal.",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/1649240/header.jpg"
    },
    {
      id: "monster-hunter-wilds",
      titulo: "Monster Hunter Wilds",
      emoji: "🦖",
      thumbBg: "#0f1008",
      tag: "accion",
      tagLabel: "Acción",
      rating: 9.1,
      año: 2025,
      developer: "Capcom",
      descripcionCorta: "La entrega más ambiciosa de Monster Hunter. Ecosistemas vivos, cacerías épicas y el mejor sistema de combate de la saga en un mundo abierto.",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/2246340/header.jpg"
    },
    {
      id: "lies-of-p",
      titulo: "Lies of P",
      emoji: "🎭",
      thumbBg: "#0f0f0a",
      tag: "souls",
      tagLabel: "Souls",
      rating: 8.6,
      año: 2023,
      developer: "Neowiz",
      descripcionCorta: "Soulslike basado en Pinocho ambientado en la Belle Époque. Mentir cambia el mundo. Uno de los mejores soulslike no-FromSoftware jamás creados.",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/1627720/header.jpg"
    },
    {
      id: "lords-of-the-fallen",
      titulo: "Lords of the Fallen",
      emoji: "⚰️",
      thumbBg: "#100a0f",
      tag: "souls",
      tagLabel: "Souls",
      rating: 7.8,
      año: 2023,
      developer: "Hexworks",
      descripcionCorta: "Soulslike con mundo dual — el mundo de los vivos y el de los muertos se superponen. Mecánica innovadora de la linterna para explorar Umbral.",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/1501750/header.jpg"
    },
    {
      id: "nioh-2",
      titulo: "Nioh 2",
      emoji: "👹",
      thumbBg: "#0f0a08",
      tag: "souls",
      tagLabel: "Souls",
      rating: 9.0,
      año: 2020,
      developer: "Team Ninja",
      descripcionCorta: "Soulslike de Team Ninja ambientado en el Japón feudal con mecánicas de Yokai. Sistema de botín profundo y combate con una de las curvas más altas del género.",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/1325200/header.jpg"
    },
    {
      id: "last-epoch",
      titulo: "Last Epoch",
      emoji: "⏳",
      thumbBg: "#100f08",
      tag: "arpg",
      tagLabel: "ARPG",
      rating: 8.8,
      año: 2024,
      developer: "Eleventh Hour Games",
      descripcionCorta: "ARPG con viajes en el tiempo como mecánica narrativa. Sistema de crafting único, 15 clases maestras y endgame sólido. El rival directo de Diablo.",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/899770/header.jpg"
    },
    {
      id: "torchlight-infinite",
      titulo: "Torchlight Infinite",
      emoji: "🔦",
      thumbBg: "#0f0a08",
      tag: "arpg",
      tagLabel: "ARPG",
      rating: 7.9,
      año: 2022,
      developer: "XD Inc.",
      descripcionCorta: "ARPG free-to-play con sistema de héroes únicos, viajes temporales y temporadas de contenido regular. Accesible pero con profundidad para los más dedicados.",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/1974050/header.jpg"
    }
  ],

  tier: [
    { letra: "S", color: "#E24B4A", juegos: ["Elden Ring", "Bloodborne"] },
    { letra: "A", color: "#EF9F27", juegos: ["Sekiro", "DS III"] },
    { letra: "B", color: "#97C459", juegos: ["DS I", "PoE 2"] },
    { letra: "C", color: "#378ADD", juegos: ["DS II", "Remnant"] },
  ],

  stats: {
    juegos: 48,
    guias: 1240,
    bosses: 3800,
    builds: 620,
  },
  fichas: {
    "elden-ring": {
      descripcion:
        "Elden Ring es un RPG de acción y aventura desarrollado por FromSoftware en colaboración con George R. R. Martin. Ambientado en Las Tierras Intermedias, ofrece un mundo abierto repleto de peligros, secretos y una narrativa profunda contada a través del entorno y los objetos.",
      developer: "FromSoftware",
      publisher: "Bandai Namco",
      año: 2022,
      plataformas: "PC, PS5, PS4, Xbox",
      modos: "Un jugador, Co-op, PvP",
      dificultad: {
        "Dificultad global": 85,
        "Primer boss": 70,
        "Jefes opcionales": 95,
        Exploración: 60,
      },
      bosses: [
        {
          nombre: "Malenia, Azote del Árbol",
          zona: "Raíz del Árbol de Haligtree",
          emoji: "🌸",
          dificultad: "Extremo",
          drops: "Gran Runa de Malenia",
        },
        {
          nombre: "Radahn, Conquistador de las Estrellas",
          zona: "Caelid — Redmane",
          emoji: "⚔️",
          dificultad: "Alto",
          drops: "Gran Runa de Radahn",
        },
        {
          nombre: "Rykard, Señor de la Blasfemia",
          zona: "Volcán Manor",
          emoji: "🐍",
          dificultad: "Medio",
          drops: "Gran Runa de Rykard",
        },
        {
          nombre: "Margit, el Presagio Ominoso",
          zona: "Castillo Stormveil",
          emoji: "👹",
          dificultad: "Alto",
          drops: "Pergamino de gracia",
        },
        {
          nombre: "Godfrey, Primer Señor Exaltado",
          zona: "Capital Real Leyndell",
          emoji: "🦁",
          dificultad: "Alto",
          drops: "Sombra de Godfrey",
        },
        {
          nombre: "Maliketh, la Espada Negra",
          zona: "Farum Azula",
          emoji: "🖤",
          dificultad: "Extremo",
          drops: "Recuerdo de la Espada Negra",
        },
      ],
      guias: [
        {
          titulo: "Guía completa — Cómo vencer a Malenia",
          tipo: "Boss",
          minutos: 12,
          badge: "hot",
        },
        {
          titulo: "Walkthrough Las Tierras Intermedias — Inicio",
          tipo: "Zona",
          minutos: 25,
          badge: "updated",
        },
        {
          titulo: "Mejor build para empezar — Guerrero clase S",
          tipo: "Build",
          minutos: 8,
          badge: "new",
        },
        {
          titulo: "Todos los finales explicados",
          tipo: "Lore",
          minutos: 15,
          badge: "hot",
        },
      ],
      galeria: [
        { emoji: "🌅", label: "Las Tierras Intermedias al amanecer" },
        { emoji: "🏰", label: "Castillo Stormveil" },
        { emoji: "🌸", label: "Haligtree en flor" },
        { emoji: "🌋", label: "Volcán Manor" },
        { emoji: "⚡", label: "Batalla contra Radahn" },
        { emoji: "🌙", label: "Nokron, ciudad eterna" },
      ],
      lore: [
        {
          titulo: "El Árbol Exaltado y la Gracia Mayor",
          texto:
            "El Árbol Exaltado es la fuente de vida y poder en Las Tierras Intermedias. Su luz dorada, conocida como Gracia Mayor, guiaba a los Señores Exaltados...",
          tag: "Cosmología",
        },
        {
          titulo: "Marika y la ruptura del Élder",
          texto:
            "La Reina Marika, vehículo del Demiurgo, rompió el Élder Anillo tras la muerte de su hijo Godwyn el Dorado, desencadenando la guerra que fragmentó Las Tierras Intermedias...",
          tag: "Historia",
        },
        {
          titulo: "Los Señores Exaltados y sus runas",
          texto:
            "Cada Señor Exaltado porta una Gran Runa, fragmento del Élder Anillo. Radahn, Rykard, Ranni, Malenia y Miquella son los hijos demigod de Marika...",
          tag: "Personajes",
        },
      ],
    },
    "final-fantasy-10": {
      descripcion: "Final Fantasy X es un JRPG desarrollado por Square Enix, el primero de la saga en usar voces y entornos 3D completos. Ambientado en Spira, sigue a Tidus y Yuna en un viaje para derrotar a Sin, una criatura colosal que destruye la civilización. Su sistema de combate por turnos con la Esfera de Cristal es considerado uno de los más profundos de la saga.",
      developer: "Square Enix",
      publisher: "Square Enix",
      año: 2001,
      plataformas: "PS2, PS3, PS4, PC, Switch",
      modos: "Un jugador",
      dificultad: {
        "Dificultad global": 55,
        "Jefes principales": 65,
        "Jefes opcionales": 95,
        "Exploración": 40
      },
      bosses: [
        { id: "yunalesca",    nombre: "Yunalesca",        zona: "Cúpula de Zanarkand",  emoji: "💀", dificultad: "Alto",   drops: "Habilidad Granserpiente" },
        { id: "seymour-flux", nombre: "Seymour Flux",     zona: "Monte Gagazet",        emoji: "👁️", dificultad: "Alto",   drops: "Esfera de magia" },
        { id: "braska-sin",   nombre: "Yu Yevon",         zona: "Dentro de Sin",        emoji: "🌀", dificultad: "Medio",  drops: "Final del juego" },
        { id: "omega-ruins",  nombre: "Omega Weapon",     zona: "Ruinas Omega",         emoji: "⚡", dificultad: "Extremo", drops: "Objetos raros" },
        { id: "dark-aeons",   nombre: "Eones Oscuros",    zona: "Varios",               emoji: "🌑", dificultad: "Extremo", drops: "Esferas maestras" }
      ],
      guias: [
        { titulo: "Cómo derrotar a Yunalesca — guía completa",          tipo: "Boss",  minutos: 10, badge: "hot" },
        { titulo: "Esfera de Cristal — optimización completa",           tipo: "Build", minutos: 20, badge: "updated" },
        { titulo: "Todos los Eones Oscuros — requisitos y estrategia",   tipo: "Boss",  minutos: 25, badge: "hot" },
        { titulo: "Guía de trofeos al 100%",                            tipo: "Zona",  minutos: 30, badge: "new" }
      ],
      galeria: [
        { emoji: "🌊", label: "Zanarkand en llamas" },
        { emoji: "🏖️", label: "Besaid — isla tropical" },
        { emoji: "❄️", label: "Macalania — lago helado" },
        { emoji: "🌋", label: "Monte Gagazet" },
        { emoji: "💀", label: "Cúpula de Zanarkand" },
        { emoji: "🌀", label: "Dentro de Sin" }
      ],
      lore: [
        { titulo: "El ciclo de Sin y la mentira de Yevon",  texto: "Spira vive bajo el ciclo eterno de Sin, una criatura que destruye la civilización cada vez que alcanza cierto nivel tecnológico. La Iglesia de Yevon oculta la verdad: Sin nunca puede ser derrotado permanentemente con la Invocación Final.", tag: "Historia" },
        { titulo: "Tidus y Zanarkand Sueño",                texto: "Tidus no es de Spira sino de Zanarkand Sueño, una ciudad conjurada por los Fayth hace mil años. Su existencia entera es parte del sueño colectivo de los Fayth que mantienen a Yu Yevon.", tag: "Lore" },
        { titulo: "Los Fayth y las Invocaciones",           texto: "Las Invocaciones son espíritus de personas que se sacrificaron voluntariamente para ser esculpidas en piedra. Los Fayth sueñan eternamente invocando a Zanarkand y a los Eones.", tag: "Cosmología" }
      ]
    },
    "persona-5": {
      descripcion: "Persona 5 Royal es un JRPG de Atlus que sigue a Ryuji Sakamoto y sus amigos como los Ladrones Fantasma de Corazones, estudiantes que usan poderes del Metaverso para reformar a adultos corruptos. Combina mecánicas de dungeon crawler con simulación de vida social, con una estética visual y musical única.",
      developer: "Atlus",
      publisher: "Atlus / SEGA",
      año: 2019,
      plataformas: "PS4, PS5, PC, Switch, Xbox",
      modos: "Un jugador",
      dificultad: {
        "Dificultad global": 60,
        "Jefes principales": 70,
        "Jefes opcionales": 88,
        "Gestión de tiempo": 75
      },
      bosses: [
        { id: "kamoshida",   nombre: "Asmodeus — Kamoshida",          zona: "Palacio de Kamoshida", emoji: "👑", dificultad: "Medio", drops: "Máscara de la lujuria" },
        { id: "madarame",    nombre: "Azazel — Madarame",             zona: "Palacio de Madarame",  emoji: "🎨", dificultad: "Medio", drops: "Cuadro del ego" },
        { id: "kaneshiro",   nombre: "Bael — Kaneshiro",              zona: "Palacio de Kaneshiro", emoji: "💰", dificultad: "Alto",  drops: "Maletín dorado" },
        { id: "okumura",     nombre: "Mammon — Okumura",              zona: "Palacio de Okumura",   emoji: "🚀", dificultad: "Alto",  drops: "Traje espacial" },
        { id: "yaldabaoth",  nombre: "Yaldabaoth — Dios del Control", zona: "Torre de Qliphoth",    emoji: "🌟", dificultad: "Extremo", drops: "Final verdadero" }
      ],
      guias: [
        { titulo: "Guía de confidentes al máximo — todas las rutas", tipo: "Build", minutos: 35, badge: "hot" },
        { titulo: "Cómo vencer a Yaldabaoth — fase final",          tipo: "Boss",  minutos: 12, badge: "updated" },
        { titulo: "Todas las Personas raras — Fusion guide",         tipo: "Build", minutos: 18, badge: "new" },
        { titulo: "Gestión de tiempo — guía día a día",              tipo: "Zona",  minutos: 40, badge: "hot" }
      ],
      galeria: [
        { emoji: "🃏", label: "Leblanc — cuartel general" },
        { emoji: "🏫", label: "Academia Shujin" },
        { emoji: "🌃", label: "Shibuya de noche" },
        { emoji: "👑", label: "Palacio de Kamoshida" },
        { emoji: "🚀", label: "Palacio espacial de Okumura" },
        { emoji: "🌟", label: "Torre de Qliphoth" }
      ],
      lore: [
        { titulo: "El Metaverso y los Palacios",          texto: "El Metaverso es una dimensión cognitiva donde los deseos distorsionados de las personas toman forma física. Los Palacios son manifestaciones de la psique corrupta de individuos poderosos, y los Tesoros son la encarnación de sus deseos más profundos.", tag: "Cosmología" },
        { titulo: "Yaldabaoth y el Juego del Destino",   texto: "Yaldabaoth, el Dios del Control, manipuló la humanidad para que abandonara su libre albedrío. Creó un juego entre Igor falso y los Ladrones Fantasma para determinar si la humanidad merece la salvación o la esclavitud.", tag: "Historia" },
        { titulo: "Las Personas y las Máscaras",          texto: "Las Personas son la manifestación del yo verdadero, arrancado violentamente mediante la rebeldía contra la opresión social. Cada Ladrón Fantasma despierta su Persona al rechazar una figura de autoridad abusiva.", tag: "Personajes" }
      ]
    },
    "expedition-33": {
      descripcion: "Clair Obscur: Expedition 33 es un RPG por turnos desarrollado por Sandfall Interactive, ambientado en un mundo inspirado en la Belle Époque francesa. Cada año la Pintora despierta y pinta un número en su monolito, exterminando a todos los humanos de esa edad. La Expedición 33 parte a destruirla antes de que pinte el 32.",
      developer: "Sandfall Interactive",
      publisher: "Kepler Interactive",
      año: 2025,
      plataformas: "PC, PS5, Xbox Series",
      modos: "Un jugador",
      dificultad: {
        "Dificultad global": 70,
        "Jefes principales": 75,
        "Jefes opcionales": 92,
        "Exploración": 55
      },
      bosses: [
        { id: "the-painter", nombre: "La Pintora — Renoir", zona: "El Monolito",      emoji: "🎨", dificultad: "Extremo", drops: "Pincel del fin" },
        { id: "verso",       nombre: "Verso — El Reflejo",  zona: "Ciudad Espejo",    emoji: "🪞", dificultad: "Alto",   drops: "Fragmento de alma" },
        { id: "grande-ourse",nombre: "Grande Ourse",        zona: "Bosque Celestial", emoji: "🐻", dificultad: "Alto",   drops: "Esencia estelar" },
        { id: "chromatic",   nombre: "El Cromático",        zona: "Galería Infinita", emoji: "🌈", dificultad: "Extremo", drops: "Paleta maestra" }
      ],
      guias: [
        { titulo: "Guía completa — sistema de combate y parry",         tipo: "Build", minutos: 15, badge: "new" },
        { titulo: "Cómo vencer a La Pintora — estrategia final",        tipo: "Boss",  minutos: 12, badge: "hot" },
        { titulo: "Todos los secretos del mundo — exploración completa", tipo: "Zona",  minutos: 28, badge: "new" },
        { titulo: "Builds óptimas para cada personaje",                 tipo: "Build", minutos: 20, badge: "new" }
      ],
      galeria: [
        { emoji: "🎨", label: "El Monolito al amanecer" },
        { emoji: "🏙️", label: "Ciudad Belle Époque" },
        { emoji: "🌸", label: "Jardines del olvido" },
        { emoji: "🪞", label: "Ciudad Espejo" },
        { emoji: "🌈", label: "Galería Infinita" },
        { emoji: "🐻", label: "Bosque Celestial" }
      ],
      lore: [
        { titulo: "El ciclo de la Pintora y los Números",  texto: "Cada año la Pintora despierta de su sueño eterno y pinta un número en su monolito. Todos los humanos que han alcanzado esa edad desaparecen instantáneamente. El número decrece cada año, acercando la extinción de la humanidad.", tag: "Historia" },
        { titulo: "Los Expedicionarios y el sacrificio",   texto: "Las Expediciones son grupos de humanos que parten a destruir a la Pintora antes de que pinte el siguiente número. Todas han fracasado. La Expedición 33 es la última oportunidad antes de que pinte el 32.", tag: "Personajes" },
        { titulo: "El mundo de Lumière",                   texto: "El mundo está construido sobre capas de realidad pictórica. La Pintora no solo mata sino que literalmente borra a las personas de la existencia, como si nunca hubieran sido pintadas en el lienzo del mundo.", tag: "Cosmología" }
      ]
    },
    "baldurs-gate-3": {
      descripcion: "Baldur's Gate 3 es un RPG por turnos de Larian Studios basado en las reglas de D&D 5ª edición. Los jugadores crean un personaje infectado con un huevo de Nautiloid y deben encontrar una cura mientras navegan un mundo de consecuencias narrativas profundas, con libertad casi total para resolver cada situación.",
      developer: "Larian Studios",
      publisher: "Larian Studios",
      año: 2023,
      plataformas: "PC, PS5, Xbox Series",
      modos: "Un jugador, Co-op 4 jugadores",
      dificultad: {
        "Dificultad global": 65,
        "Combate táctico": 80,
        "Jefes opcionales": 90,
        "Exploración": 50
      },
      bosses: [
        { id: "ketheric-thorm", nombre: "Ketheric Thorm",     zona: "Moonrise Towers",   emoji: "💀", dificultad: "Alto",   drops: "Armadura de Ketheric" },
        { id: "orin",           nombre: "Orin la Roja",       zona: "Ciudad de Baldur",  emoji: "🩸", dificultad: "Alto",   drops: "Daga de Bhaal" },
        { id: "gortash",        nombre: "Enver Gortash",      zona: "Wyrm's Rock",       emoji: "⚙️", dificultad: "Alto",   drops: "Guantes de Gortash" },
        { id: "netherbrain",    nombre: "El Cerebro Inferior", zona: "Ciudad de Baldur",  emoji: "🧠", dificultad: "Extremo", drops: "Final del juego" },
        { id: "raphael",        nombre: "Raphael — Casa de la Esperanza", zona: "Averno", emoji: "😈", dificultad: "Extremo", drops: "Contrato roto" }
      ],
      guias: [
        { titulo: "Guía de clases — cuál elegir para cada estilo",           tipo: "Build", minutos: 22, badge: "hot" },
        { titulo: "Cómo vencer a Raphael — el boss secreto más difícil",     tipo: "Boss",  minutos: 14, badge: "hot" },
        { titulo: "Acto 3 completo — todas las decisiones y consecuencias",  tipo: "Zona",  minutos: 45, badge: "updated" },
        { titulo: "Co-op multijugador — guía de inicio",                     tipo: "Build", minutos: 10, badge: "new" }
      ],
      galeria: [
        { emoji: "🏰", label: "Moonrise Towers" },
        { emoji: "🌿", label: "Bosque Silvanus" },
        { emoji: "🏙️", label: "Ciudad de Baldur" },
        { emoji: "😈", label: "Casa de la Esperanza — Averno" },
        { emoji: "🧠", label: "El Nautiloid" },
        { emoji: "🎲", label: "Combate táctico D&D" }
      ],
      lore: [
        { titulo: "El Huevo de Nautiloid y los Elegidos",    texto: "Un huevo de Nautiloid transforma lentamente al portador en un Illithid. Los tres Elegidos de los Dioses Muertos — Ketheric, Orin y Gortash — buscan usar el Cerebro Inferior para conquistar Faerûn mediante el control mental masivo.", tag: "Historia" },
        { titulo: "Los Compañeros y sus historias",          texto: "Cada compañero tiene una historia profunda conectada con los eventos principales: Shadowheart guarda un secreto sobre Shar, Astarion es un vampiro que busca su libertad, Gale es un mago con un orbe de destrucción en el pecho.", tag: "Personajes" },
        { titulo: "El Tejido y la magia de Faerûn",         texto: "Faerûn opera bajo el Sistema de magia del Tejido de Mystra. Tras los eventos de la Spellplague, la magia es menos estable. Los Illithid operan fuera del Tejido usando magia psiónica que no puede ser contrarrestada con métodos convencionales.", tag: "Cosmología" }
      ]
    },
  },
  guias: [
    {
      id: 1,
      titulo: "Guía completa — Cómo vencer a Malenia, Azote del Árbol",
      juego: "Elden Ring",
      juegoEmoji: "🌟",
      juegoBg: "#1a1510",
      tipo: "boss",
      tipoLabel: "Boss",
      minutos: 12,
      badge: "hot",
      descripcion:
        "Malenia es considerada el boss más difícil de Elden Ring. En esta guía cubrimos sus dos fases, el movimiento Flor de la Putrefacción y las mejores builds para derrotarla.",
      fecha: "2026-04-15",
      visitas: 48200,
    },
    {
      id: 2,
      titulo: "Build Nigromante S-Tier — Temporada 8 Diablo IV",
      juego: "Diablo IV",
      juegoEmoji: "🔥",
      juegoBg: "#150f0f",
      tipo: "build",
      tipoLabel: "Build",
      minutos: 8,
      badge: "new",
      descripcion:
        "La mejor build de Nigromante para la temporada 8. Incluye habilidades principales, gemas recomendadas, equipo de endgame y paragón completo.",
      fecha: "2026-05-01",
      visitas: 12400,
    },
    {
      id: 3,
      titulo: "Walkthrough Catedral del Abismo Profundo — Dark Souls III",
      juego: "Dark Souls III",
      juegoEmoji: "🩶",
      juegoBg: "#101418",
      tipo: "zona",
      tipoLabel: "Zona",
      minutos: 20,
      badge: "updated",
      descripcion:
        "Guía completa de la Catedral del Abismo Profundo: ruta óptima, todos los objetos, enemigos especiales y cómo acceder a las zonas secretas del área.",
      fecha: "2026-03-20",
      visitas: 31700,
    },
    {
      id: 4,
      titulo: "Todos los finales de Elden Ring explicados",
      juego: "Elden Ring",
      juegoEmoji: "🌟",
      juegoBg: "#1a1510",
      tipo: "lore",
      tipoLabel: "Lore",
      minutos: 15,
      badge: "hot",
      descripcion:
        "Los 6 finales de Elden Ring analizados en profundidad: requisitos para desbloquearlos, diferencias narrativas y cuál se considera el final canónico.",
      fecha: "2026-04-02",
      visitas: 55100,
    },
    {
      id: 5,
      titulo: "Guía de Radahn — Estrategia fase 1 y fase 2",
      juego: "Elden Ring",
      juegoEmoji: "🌟",
      juegoBg: "#1a1510",
      tipo: "boss",
      tipoLabel: "Boss",
      minutos: 10,
      badge: "updated",
      descripcion:
        "Radahn el Conquistador de Estrellas en su versión remasterizada tras el parche 1.09. Patrones de ataque, ventanas de daño y builds recomendadas.",
      fecha: "2026-04-28",
      visitas: 29800,
    },
    {
      id: 6,
      titulo: "Build Espadachín de fe — Sekiro early game",
      juego: "Sekiro",
      juegoEmoji: "⚔️",
      juegoBg: "#0f1410",
      tipo: "build",
      tipoLabel: "Build",
      minutos: 6,
      badge: "new",
      descripcion:
        "Cómo maximizar el daño desde el principio en Sekiro: habilidades prioritarias, prótesis recomendadas y técnica de postura para el early game.",
      fecha: "2026-05-03",
      visitas: 8900,
    },
  ],
  galeria: [
    {
      id: 1,
      titulo: "Las Tierras Intermedias al amanecer",
      juego: "Elden Ring",
      juegoBg: "#1a1510",
      juegoColor: "#9B7D3A",
      emoji: "🌅",
      tipo: "screenshot",
      altura: "lg",
      likes: 842,
      fecha: "2026-04-10",
    },
    {
      id: 2,
      titulo: "Artwork oficial — Malenia",
      juego: "Elden Ring",
      juegoBg: "#1a1510",
      juegoColor: "#9B7D3A",
      emoji: "🌸",
      tipo: "artwork",
      altura: "md",
      likes: 1240,
      fecha: "2026-03-22",
    },
    {
      id: 3,
      titulo: "Castillo Stormveil interior",
      juego: "Elden Ring",
      juegoBg: "#1a1510",
      juegoColor: "#9B7D3A",
      emoji: "🏰",
      tipo: "screenshot",
      altura: "sm",
      likes: 390,
      fecha: "2026-04-01",
    },
    {
      id: 4,
      titulo: "Trailer cinematográfico oficial",
      juego: "Elden Ring",
      juegoBg: "#1a1510",
      juegoColor: "#9B7D3A",
      emoji: "🎬",
      tipo: "video",
      altura: "md",
      likes: 2100,
      fecha: "2022-01-14",
    },
    {
      id: 5,
      titulo: "Pontiff Sulyvahn — boss fight 4K",
      juego: "Dark Souls III",
      juegoBg: "#101418",
      juegoColor: "#4A7AB5",
      emoji: "🩶",
      tipo: "screenshot",
      altura: "lg",
      likes: 710,
      fecha: "2026-02-18",
    },
    {
      id: 6,
      titulo: "Irithyll del Valle Boreal",
      juego: "Dark Souls III",
      juegoBg: "#101418",
      juegoColor: "#4A7AB5",
      emoji: "❄️",
      tipo: "screenshot",
      altura: "sm",
      likes: 480,
      fecha: "2026-01-30",
    },
    {
      id: 7,
      titulo: "Artwork — Aldrich Devorador de Dioses",
      juego: "Dark Souls III",
      juegoBg: "#101418",
      juegoColor: "#4A7AB5",
      emoji: "🌑",
      tipo: "artwork",
      altura: "md",
      likes: 630,
      fecha: "2026-03-05",
    },
    {
      id: 8,
      titulo: "Gecco — Cleric Beast estatua",
      juego: "Bloodborne",
      juegoBg: "#120f14",
      juegoColor: "#8A4DA0",
      emoji: "🩸",
      tipo: "artwork",
      altura: "lg",
      likes: 1580,
      fecha: "2026-04-20",
    },
    {
      id: 9,
      titulo: "Yharnam lluvia nocturna",
      juego: "Bloodborne",
      juegoBg: "#120f14",
      juegoColor: "#8A4DA0",
      emoji: "🌧️",
      tipo: "screenshot",
      altura: "sm",
      likes: 920,
      fecha: "2026-03-14",
    },
    {
      id: 10,
      titulo: "Genichiro — Batalla del tejado",
      juego: "Sekiro",
      juegoBg: "#0f1410",
      juegoColor: "#3D8A4A",
      emoji: "⚔️",
      tipo: "screenshot",
      altura: "md",
      likes: 560,
      fecha: "2026-02-05",
    },
    {
      id: 11,
      titulo: "Guía vídeo — Boss rush Sekiro",
      juego: "Sekiro",
      juegoBg: "#0f1410",
      juegoColor: "#3D8A4A",
      emoji: "🎥",
      tipo: "video",
      altura: "sm",
      likes: 330,
      fecha: "2026-04-28",
    },
    {
      id: 12,
      titulo: "Endgame Nigromante T8",
      juego: "Diablo IV",
      juegoBg: "#150f0f",
      juegoColor: "#A83030",
      emoji: "💀",
      tipo: "screenshot",
      altura: "md",
      likes: 440,
      fecha: "2026-05-02",
    },
  ],
  tierData: {
    global: {
      descripcion:
        "Ranking global basado en puntuación, impacto en el género y valoración de la comunidad.",
      tiers: {
        S: ["elden-ring", "bloodborne", "final-fantasy-6", "persona-5", "baldurs-gate-3", "binding-of-isaac"],
        A: ["sekiro", "dark-souls-3", "final-fantasy-10", "expedition-33", "hades-2", "nioh-2"],
        B: ["poe2", "dark-souls-1", "final-fantasy-7-remake", "dead-cells", "slay-the-spire", "lies-of-p"],
        C: ["diablo-4", "final-fantasy-16", "last-epoch", "returnal"],
        D: [],
      },
    },
    dificultad: {
      descripcion:
        "Ranking por dificultad real percibida — jefes, curva de aprendizaje y penalización por muerte.",
      tiers: {
        S: ["bloodborne", "sekiro"],
        A: ["elden-ring", "dark-souls-3"],
        B: ["dark-souls-1"],
        C: ["diablo-4", "poe2"],
        D: [],
      },
    },
    historia: {
      descripcion:
        "Ranking por profundidad narrativa, worldbuilding y lore ambiental.",
      tiers: {
        S: ["elden-ring", "bloodborne"],
        A: ["dark-souls-1", "sekiro"],
        B: ["dark-souls-3"],
        C: ["poe2"],
        D: ["diablo-4"],
      },
    },
    rejugabilidad: {
      descripcion:
        "Ranking por horas de contenido endgame, builds distintas y motivación para repetir.",
      tiers: {
        S: ["poe2", "diablo-4"],
        A: ["elden-ring"],
        B: ["bloodborne", "dark-souls-3"],
        C: ["sekiro", "dark-souls-1"],
        D: [],
      },
    },
  },
};
