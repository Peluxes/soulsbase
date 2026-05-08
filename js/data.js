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
    },
    "pontiff": {
      id: "pontiff",
      nombre: "Pontiff Sulyvahn",
      subtitulo: "Tirano de Irithyll",
      juego: "Dark Souls III",
      juegoId: "dark-souls-3",
      juegoBg: "#101418",
      emoji: "⚔️",
      zona: "Irithyll del Valle Boreal — Iglesia de Yorshka",
      tipo: "Jefe mayor",
      dificultad: "Extremo",
      hp: "13.728",
      runas: "38.000",
      fases: 2,
      debilidades_texto: ["Llama", "Magia oscura"],
      stats: {
        hp:    { val: "13.728", label: "HP total" },
        runas: { val: "38k",    label: "Almas" },
        fases: { val: "2",      label: "Fases" },
        nivel: { val: "~75",    label: "Nivel rec." }
      },
      descripcion: "Pontiff Sulyvahn es el tirano que gobierna Irithyll del Valle Boreal y ha sometido a los dioses de Anor Londo. Blandiendo dos espadones —uno de fuego y uno de magia oscura— su combate es frenético y puede invocar un clon de sí mismo en fase 2. Es considerado uno de los jefes más difíciles y mejor diseñados de toda la saga Souls.",
      estrategia: [
        { titulo: "Aprende a esquivar hacia él siempre", texto: "La mayoría de sus combos se cancelan esquivando hacia adelante, hacia él. Alejarse es la peor opción porque puede cerrar distancia instantáneamente con el salto." },
        { titulo: "Elimina el clon antes que a Sulyvahn", texto: "En fase 2 invoca un espectro que replica sus movimientos. Eliminar el clon en cuanto aparece es crítico — dos Pontiff simultáneos son casi imposibles de gestionar." },
        { titulo: "Usa fuego o magia oscura para explotar sus debilidades", texto: "El Pontiff tiene una debilidad notable a la llama y a la magia oscura. Resinas o hechizos del tipo correcto añaden daño extra significativo." },
        { titulo: "El salto con espada es el ataque más traicionero", texto: "Salta hacia el jugador desde cualquier distancia con velocidad engañosa. Esquiva hacia un lateral en el último segundo, no al verlo saltar." }
      ],
      resistencias: [
        { nombre: "Físico",      icono: "ti-sword", valor: 20, color: "#85B7EB" },
        { nombre: "Magia",       icono: "ti-wand",  valor: 30, color: "#AFA9EC" },
        { nombre: "Fuego",       icono: "ti-flame", valor: 5,  color: "#EF9F27" },
        { nombre: "Trueno",      icono: "ti-bolt",  valor: 40, color: "#FAC775" },
        { nombre: "Oscuridad",   icono: "ti-moon",  valor: 5,  color: "#8B5CF6" }
      ],
      debilidades: [
        { nombre: "Llama",        icono: "ti-flame", valor: 85, color: "#EF9F27" },
        { nombre: "Magia oscura", icono: "ti-moon",  valor: 80, color: "#8B5CF6" }
      ],
      fases_data: [
        {
          num: "I",
          color: "#EF9F27",
          titulo: "El Pontiff",
          sub: "100% — 50% HP",
          hp_trigger: "100% HP",
          desc: "Sulyvahn combate con sus dos espadones: el derecho de llamas y el izquierdo de magia oscura. Sus combos son rápidos y de gran alcance. El ataque de salto puede venir en cualquier momento y cierra distancias enormes instantáneamente.",
          nuevos: "Salto con espada, combo cruzado de dos espadas, ataque barrido giratorio"
        },
        {
          num: "II",
          color: "#8B5CF6",
          titulo: "El Tirano y su Sombra",
          sub: "50% HP",
          hp_trigger: "50% HP",
          desc: "Al llegar al 50% de vida invoca un espectro de sí mismo que replica sus movimientos con ligero delay. Los dos Pontiff atacan simultáneamente y la gestión del espacio se vuelve crítica. El clon tiene menos HP y debe eliminarse primero.",
          nuevos: "Espectro clon, ataques sincronizados, mayor agresividad general"
        }
      ],
      ataques: [
        { nombre: "Salto con espada",       tipo: "fisico",  tipoLabel: "Físico",   desc: "Se lanza hacia el jugador con el espadón alzado desde cualquier distancia. Muy rápido y difícil de anticipar.", tip: "Esquiva lateral en el último momento. No esquives hacia atrás — te sigue hasta el muro." },
        { nombre: "Combo cruzado",          tipo: "fisico",  tipoLabel: "Físico",   desc: "Encadena 3-5 golpes alternando los dos espadones en abanico. Cada golpe añade llama u oscuridad.", tip: "Esquiva hacia él en cada golpe alternando izquierda y derecha ligeramente." },
        { nombre: "Barrido giratorio",      tipo: "magico",  tipoLabel: "Oscuridad", desc: "Gira 360° con ambas espadas extendidas. Alto daño en área, difícil de esquivar desde cerca.", tip: "Crea distancia en cuanto empiece a girar o esquiva a través de él con iframes." },
        { nombre: "Ataque del espectro",    tipo: "magico",  tipoLabel: "Oscuridad", desc: "Solo fase 2. El clon replica cualquier ataque del Pontiff con un pequeño delay.", tip: "Mantén al clon siempre en tu campo de visión. Prioriza eliminarlo aunque descuides a Sulyvahn." }
      ],
      drops: [
        { emoji: "💍", nombre: "Anillo de Sulyvahn",       desc: "Aumenta la carga máxima de equipo en un 15%. Útil para builds pesadas.", tasa: "100%",     rareza: "raro" },
        { emoji: "💀", nombre: "Alma del Pontiff Sulyvahn", desc: "Puede canjearse por el Espadón de Profundidad o el Hechizo Visión Frígida.", tasa: "100%",     rareza: "legendario" },
        { emoji: "⚔️", nombre: "Espadón de Profundidad",   desc: "Arma colosal de oscuridad. Escala con Inteligencia y Fuerza. Habilidad: Ola Oscura.", tasa: "Canje alma", rareza: "legendario" }
      ],
      builds: [
        { rank: "1", rankColor: "#EF9F27", nombre: "Pyromancer — Doble fuego", desc: "Sus debilidades al fuego hacen al Pyromancer especialmente efectivo. Chaos Bed Vestiges o fuego en el arma durante la pelea.", efectividad: 90, tags: ["Fe", "Inteligencia", "Fuego"] },
        { rank: "2", rankColor: "#97C459", nombre: "Dark Sorcerer — Oscuridad", desc: "La magia oscura explota su segunda debilidad. Hechizos como Affinity o Dark Edge hacen daño masivo.", efectividad: 85, tags: ["Inteligencia", "Fe", "Oscuridad"] },
        { rank: "3", rankColor: "#85B7EB", nombre: "Quality Greatsword — Esquive", desc: "Un espadón quality con buena estabilidad física. Requiere dominar el esquive pero el daño por apertura es sólido.", efectividad: 78, tags: ["Fuerza", "Destreza", "Físico"] }
      ]
    },
    "genichiro": {
      id: "genichiro",
      nombre: "Genichiro Ashina",
      subtitulo: "Heredero del Arte de Ashina",
      juego: "Sekiro",
      juegoId: "sekiro",
      juegoBg: "#0f1410",
      emoji: "⚡",
      zona: "Castillo Ashina — Cima de la Torre",
      tipo: "Jefe mayor",
      dificultad: "Extremo",
      hp: "3 barras de postura",
      runas: "Memoria de Genichiro",
      fases: 3,
      debilidades_texto: ["Fuego", "Shuriken + seguimiento"],
      stats: {
        hp:    { val: "3 barras", label: "Postura" },
        runas: { val: "Memoria",  label: "Recompensa" },
        fases: { val: "3",        label: "Fases" },
        nivel: { val: "Temprano", label: "Momento" }
      },
      descripcion: "Genichiro Ashina es el nieto de Isshin y el guardián del castillo. Sirve como tutorial avanzado de Sekiro: es el boss que enseña al jugador que solo dominando el sistema de postura puede avanzar. En la fase final invoca el Rayo del Cielo, transformándose en Way of Tomoe. Es el antagonista principal del juego.",
      estrategia: [
        { titulo: "Aprende a deflectar, no a esquivar", texto: "Sekiro basa su combate en deflectar (bloquear en el momento exacto). Contra Genichiro, intentar esquivar todo es un error — deflectar sus ataques llena su barra de postura y lleva a la ejecución." },
        { titulo: "El Mikiri Counter destruye sus thrusts", texto: "Muchos de sus ataques son thrusts (estocadas). El Mikiri Counter los convierte en grandes aperturas de daño de postura. Si no lo tienes aprendido, este boss enseña por qué es esencial." },
        { titulo: "Fase 3 — cuidado con el Rayo del Cielo", texto: "En su última fase puede lanzar rayos desde el cielo. Usa el Shuriken Espiral para devolver el rayo o esquiva lateralmente. Si te impacta directamente, mueres casi instantáneamente." },
        { titulo: "Presión constante llena su postura", texto: "Genichiro recupera postura rápidamente si le das respiro. La clave es atacar sin parar, intercalando deflects en sus ataques para mantener su postura acumulada y llegar a la ejecución final." }
      ],
      resistencias: [
        { nombre: "Filo",    icono: "ti-sword",    valor: 15, color: "#85B7EB" },
        { nombre: "Fuego",   icono: "ti-flame",    valor: 0,  color: "#EF9F27" },
        { nombre: "Veneno",  icono: "ti-skull",    valor: 40, color: "#97C459" },
        { nombre: "Rayo",    icono: "ti-bolt",     valor: 80, color: "#FAC775" }
      ],
      debilidades: [
        { nombre: "Fuego",       icono: "ti-flame",     valor: 90, color: "#EF9F27" },
        { nombre: "Shuriken",    icono: "ti-star",      valor: 75, color: "#85B7EB" }
      ],
      fases_data: [
        {
          num: "I",
          color: "#97C459",
          titulo: "Espadachín de Ashina",
          sub: "Primera barra de postura",
          hp_trigger: "Postura llena",
          desc: "Genichiro usa el estilo de espadachín de Ashina. Sus ataques son variados: combos de filo, thrusts y barridos. Esta fase es la introducción a sus patrones y la más accesible de las tres.",
          nuevos: "Combo de filo, thrust directo, barrido bajo"
        },
        {
          num: "II",
          color: "#EF9F27",
          titulo: "Tormenta de Flechas",
          sub: "Segunda barra de postura",
          hp_trigger: "Tras primera ejecución",
          desc: "Añade ataques con arco y flechas explosivas. Puede disparar ráfagas de flechas desde distancia y mezclarlo con combos de espada. La presión aumenta notablemente y requiere gestionar bien la distancia.",
          nuevos: "Disparo de flechas, flecha explosiva, combo arco-espada"
        },
        {
          num: "III",
          color: "#8B5CF6",
          titulo: "Way of Tomoe — El Rayo del Cielo",
          sub: "Tercera barra de postura",
          hp_trigger: "Tras segunda ejecución",
          desc: "Genichiro invoca el poder del rayo usando el arte proibido Way of Tomoe. Puede lanzar rayos del cielo que te matan en un golpe y empuña una espada eléctrica. El Shuriken Espiral devuelve el rayo. Es la fase más agresiva.",
          nuevos: "Rayo del Cielo, espada eléctrica, combo eléctrico"
        }
      ],
      ataques: [
        { nombre: "Thrust directo",    tipo: "fisico",  tipoLabel: "Filo",    desc: "Estocada rápida en línea recta. Señal roja indica que viene. Ideal para Mikiri Counter.", tip: "Espera la señal roja y aplica Mikiri Counter pisando hacia adelante en el último instante." },
        { nombre: "Barrido bajo",      tipo: "fisico",  tipoLabel: "Filo",    desc: "Barrido a nivel del suelo. Señal roja. Solo puede evitarse saltando.", tip: "Salta sobre el barrido y usa el salto de ataque en el aire para daño de postura extra." },
        { nombre: "Lluvia de flechas", tipo: "fisico",  tipoLabel: "Físico",  desc: "Dispara una ráfaga de flechas en abanico desde media distancia. Fase 2.", tip: "Deflecta la primera flecha y corre hacia él antes de que dispare más." },
        { nombre: "Rayo del Cielo",    tipo: "magico",  tipoLabel: "Rayo",    desc: "Salta al aire y convoca un rayo que cae sobre el jugador. Daño mortal. Fase 3.", tip: "Usa el Shuriken Espiral justo cuando cae el rayo para devolverlo. O esquiva lateral al ver el salto." }
      ],
      drops: [
        { emoji: "📜", nombre: "Memoria de Genichiro",        desc: "Se intercambia con el escultor de Buda para obtener un punto de habilidad extra.", tasa: "100%", rareza: "legendario" },
        { emoji: "🏹", nombre: "Habilidad: Tormenta de Flechas", desc: "Técnica de combate de Ashina aprendida al estudiar la memoria de Genichiro.", tasa: "Memoria", rareza: "raro" }
      ],
      builds: [
        { rank: "1", rankColor: "#EF9F27", nombre: "Mikiri + Deflect puro", desc: "La forma óptima: dominar el Mikiri Counter para los thrusts y deflectar todo lo demás. Fuego en el Shuriken para daño extra.", efectividad: 95, tags: ["Habilidad", "Deflect", "Mikiri"] },
        { rank: "2", rankColor: "#97C459", nombre: "Aceite + Antorcha",     desc: "Aplicar aceite y después la antorcha de la prótesis hace daño masivo y staggerea a Genichiro brevemente. Útil en fase 1.", efectividad: 80, tags: ["Fuego", "Prótesis", "Aceite"] },
        { rank: "3", rankColor: "#85B7EB", nombre: "Shuriken Espiral — Rayo", desc: "En fase 3, el Shuriken Espiral devuelve el rayo a Genichiro. Si se domina, elimina la amenaza más letal de la pelea.", efectividad: 75, tags: ["Prótesis", "Shuriken", "Rayo"] }
      ]
    },
    "father-gascoigne": {
      id: "father-gascoigne",
      nombre: "Father Gascoigne",
      subtitulo: "El Cazador Caído",
      juego: "Bloodborne",
      juegoId: "bloodborne",
      juegoBg: "#120f14",
      emoji: "🎻",
      zona: "Patio de la Catedral — Cementerio de Oedon",
      tipo: "Jefe mayor",
      dificultad: "Alto",
      hp: "3.064",
      runas: "Ojo del Cazador Interno",
      fases: 2,
      debilidades_texto: ["Fuego", "Música (caja de música)"],
      stats: {
        hp:    { val: "3.064",   label: "HP total" },
        runas: { val: "Ítem",    label: "Recompensa" },
        fases: { val: "2",       label: "Fases" },
        nivel: { val: "~15–20",  label: "Nivel rec." }
      },
      descripcion: "Father Gascoigne es el primer boss verdaderamente desafiante de Bloodborne y una de las peleas más recordadas de FromSoftware. Antes fue un gran cazador, pero la bestialidad de la noche lo consumió. Su hija lleva una caja de música que puede interrumpir su frenético avance. En fase 2 se transforma en una bestia que ataca con velocidad brutal.",
      estrategia: [
        { titulo: "Usa la caja de música en el momento correcto", texto: "Si tienes la Caja de Música (obtenida de la niña del edificio inicial), úsala cuando Gascoigne esté cerca. Lo detiene brevemente dándote una gran ventana de ataque gratuita. Funciona una sola vez por intento." },
        { titulo: "Fuego en fase 2 es devastador", texto: "Cuando se transforma en bestia tiene debilidad alta al fuego. Los Cócteles Molotov o el aceite+antorcha hacen daño masivo. Guarda los Molotov para fase 2." },
        { titulo: "Mantén distancia media, nunca lejos", texto: "A larga distancia usa la escopeta de forma impredecible. A distancia media puedes castigar sus combos con facilidad y es más difícil que te acorrale." },
        { titulo: "La escopeta interrumpe su carga", texto: "Disparar la escopeta en el momento exacto del ataque de Gascoigne lo interrumpe (parry de Bloodborne). Esto es especialmente útil en fase 1 cuando se acerca a cargar." }
      ],
      resistencias: [
        { nombre: "Físico",  icono: "ti-sword", valor: 20, color: "#85B7EB" },
        { nombre: "Fuego",   icono: "ti-flame", valor: 0,  color: "#EF9F27" },
        { nombre: "Rayo",    icono: "ti-bolt",  valor: 30, color: "#FAC775" },
        { nombre: "Sagrado", icono: "ti-sun",   valor: 25, color: "#EF9F27" }
      ],
      debilidades: [
        { nombre: "Fuego",   icono: "ti-flame", valor: 90, color: "#EF9F27" },
        { nombre: "Música",  icono: "ti-music", valor: 85, color: "#AFA9EC" }
      ],
      fases_data: [
        {
          num: "I",
          color: "#EF9F27",
          titulo: "El Cazador",
          sub: "100% — 50% HP",
          hp_trigger: "100% HP",
          desc: "Gascoigne combate como cazador: usa hacha y escopeta con movimientos predecibles pero rápidos. Sus combos tienen ventanas de castigo claras. La escopeta interrumpe al jugador si ataca desde lejos. Es manejable una vez que se aprende su cadencia.",
          nuevos: "Combo de hacha, disparo de escopeta, giro con hacha"
        },
        {
          num: "II",
          color: "#8B5CF6",
          titulo: "La Bestia",
          sub: "50% HP",
          hp_trigger: "50% HP",
          desc: "Se transforma en una bestia mucho más grande, rápida y feroz. Pierde la escopeta pero sus zarpazos y saltos cubren distancias enormes. El fuego es su mayor debilidad en esta fase. La Caja de Música ya no funciona.",
          nuevos: "Zarpazo en cadena, salto con embestida, aullido de furia"
        }
      ],
      ataques: [
        { nombre: "Combo de hacha",      tipo: "fisico",  tipoLabel: "Físico", desc: "Serie de 2-3 golpes de hacha con buena cadencia. El último golpe tiene mayor radio.", tip: "Esquiva hacia él en el primer golpe y contraataca después del segundo o tercero." },
        { nombre: "Disparo de escopeta", tipo: "fisico",  tipoLabel: "Físico", desc: "Dispara desde distancia media-larga. Interrumpe al jugador si está atacando.", tip: "Mantén distancia media y ataca después de sus combos de hacha, no durante." },
        { nombre: "Zarpazo en cadena",   tipo: "fisico",  tipoLabel: "Bestia", desc: "Solo fase 2. Serie rápida de zarpazos con la zarpa de bestia. Muy poca ventana entre golpes.", tip: "Esquiva continuamente hacia un lateral. No intentes atacar durante la cadena." },
        { nombre: "Salto con embestida", tipo: "fisico",  tipoLabel: "Bestia", desc: "Solo fase 2. Salta hacia el jugador desde distancia larga con embestida brutal.", tip: "Espera a que aterrice, esquiva hacia un lado y ataca por la espalda con 1-2 golpes." }
      ],
      drops: [
        { emoji: "👁️", nombre: "Ojo del Cazador Interno", desc: "Ítem clave que muestra la ubicación del primer taller del cazador en el mapa.", tasa: "100%", rareza: "raro" },
        { emoji: "🩸", nombre: "Sangre de Gascoigne",     desc: "Fragmento de sangre del cazador caído. Puede usarse para fabricar balas de sangre.", tasa: "100%", rareza: "comun" },
        { emoji: "🪦", nombre: "Insignia del cazador",    desc: "La chapa de identificación de Gascoigne. No tiene uso práctico, pero narra su historia.", tasa: "100%", rareza: "comun" }
      ],
      builds: [
        { rank: "1", rankColor: "#EF9F27", nombre: "Cócteles Molotov + Saw Cleaver", desc: "Guarda los Molotov para fase 2 cuando se transforma en bestia. La Saw Cleaver hace daño extra a bestias. Combinación óptima para principiantes.", efectividad: 92, tags: ["Fuego", "Bestia", "Física"] },
        { rank: "2", rankColor: "#97C459", nombre: "Parry de escopeta + Saw Spear",   desc: "Dominar el parry con la escopeta interrumpe sus ataques constantemente. Requiere práctica pero transforma la pelea.", efectividad: 85, tags: ["Habilidad", "Parry", "Escopeta"] },
        { rank: "3", rankColor: "#85B7EB", nombre: "Hunter Axe — Daño bruto",         desc: "El hacha grande hace daño masivo por golpe. Más lento pero cada impacto cuenta. Buena opción para aprender sus patrones sin morir rápido.", efectividad: 75, tags: ["Fuerza", "Lento", "Seguro"] }
      ]
    },
    "nameless-king": {
      id: "nameless-king",
      nombre: "Nameless King",
      subtitulo: "El Rey sin Nombre — Hijo de Gwyn",
      juego: "Dark Souls III",
      juegoId: "dark-souls-3",
      juegoBg: "#101418",
      emoji: "⚡",
      zona: "Pico de Archdragon",
      tipo: "Jefe opcional",
      dificultad: "Extremo",
      hp: "16.914",
      runas: "80.000",
      fases: 2,
      debilidades_texto: ["Oscuro", "Magia"],
      stats: {
        hp:    { val: "16.914", label: "HP total" },
        runas: { val: "80k",    label: "Almas" },
        fases: { val: "2",      label: "Fases" },
        nivel: { val: "~120",   label: "Nivel rec." }
      },
      descripcion: "El Nameless King es considerado por muchos el boss más difícil de Dark Souls III y uno de los más desafiantes de toda la saga. Es el hijo mayor de Gwyn que fue borrado de la historia por renegar de los dioses y aliarse con los dragones. En fase 1 combate montado en el Rey de los Dragones de Tormenta, y en fase 2 a pie con su lanza y magia de relámpago.",
      estrategia: [
        { titulo: "Fase 1 — ataca al dragón, no al jinete", texto: "En fase 1 el objetivo es el dragón — el Nameless King encima es inalcanzable. Enfócate en el cuello y la cabeza del dragón para hacer daño. Cuando el dragón baja la cabeza al suelo es tu mejor ventana." },
        { titulo: "Usa lock-on solo en momentos clave", texto: "El lock-on puede traicionarte en fase 1 cuando el dragón vuela. Desactívalo para correr libremente y actívalo solo cuando el dragón esté en tierra." },
        { titulo: "Fase 2 — aprende el combo de lanza", texto: "Su combo principal en fase 2 es 3-4 golpes de lanza seguidos de un slam. Esquiva hacia él en los primeros golpes. El slam final tiene área grande — esquiva hacia atrás." },
        { titulo: "Los relámpagos son su mayor peligro", texto: "En fase 2 invoca relámpagos del cielo que caen con delay. Aprende a leer las nubes — los relámpagos caen donde estás parado, no donde irás. Sigue moviéndote." },
        { titulo: "La oscuridad es su punto débil", texto: "El Nameless King tiene baja resistencia a la magia oscura y hechizos de oscuridad. Dark Edge o Affinity son especialmente efectivos en fase 2." }
      ],
      resistencias: [
        { nombre: "Físico",  icono: "ti-sword",  valor: 25, color: "#85B7EB" },
        { nombre: "Fuego",   icono: "ti-flame",  valor: 70, color: "#EF9F27" },
        { nombre: "Trueno",  icono: "ti-bolt",   valor: 80, color: "#FAC775" },
        { nombre: "Magia",   icono: "ti-wand",   valor: 10, color: "#AFA9EC" },
        { nombre: "Oscuro",  icono: "ti-moon",   valor: 5,  color: "#8A4DA0" }
      ],
      debilidades: [
        { nombre: "Oscuro", icono: "ti-moon",  valor: 90, color: "#8A4DA0" },
        { nombre: "Magia",  icono: "ti-wand",  valor: 80, color: "#AFA9EC" }
      ],
      fases_data: [
        { num: "I",  color: "#EF9F27", titulo: "Rey de los Dragones de Tormenta", sub: "100% — hasta matar al dragón",   hp_trigger: "100% HP",           desc: "El Nameless King combate montado en su dragón. El objetivo es el dragón — el jinete es inalcanzable. El dragón ataca con mordiscos, embestidas y aliento de relámpago. El Nameless King lanza rayos desde arriba. La cámara puede ser el mayor enemigo en esta fase.", nuevos: "Aliento de relámpago del dragón, rayos del jinete, mordisco aéreo, embestida" },
        { num: "II", color: "#E24B4A", titulo: "El Rey sin Nombre",               sub: "Tras matar al dragón",           hp_trigger: "Dragón derrotado",  desc: "El Nameless King desciende a pie tras la muerte de su dragón. Combate con una lanza divina y magia de relámpago masiva. Sus ataques tienen gran alcance y los relámpagos del cielo son impredecibles. Es más lento que otros bosses de DS3 pero cada golpe hace daño enorme.", nuevos: "Combo de lanza, relámpagos del cielo, slam de área, ataque de carga" }
      ],
      ataques: [
        { nombre: "Aliento de relámpago", tipo: "rayo",    tipoLabel: "Rayo",    desc: "El dragón exhala un rayo horizontal que barre el área delante de él.", tip: "Corre hacia el lado del dragón opuesto al aliento. Debajo del cuello es la zona más segura." },
        { nombre: "Relámpagos del cielo", tipo: "rayo",    tipoLabel: "Rayo",    desc: "Solo fase 2. Invoca múltiples rayos que caen del cielo con un pequeño delay.", tip: "Los rayos caen donde estabas parado. Mantente en movimiento constante — nunca pares más de un segundo." },
        { nombre: "Combo de lanza",       tipo: "fisico",  tipoLabel: "Físico",  desc: "Serie de 3-4 golpes de lanza con gran alcance horizontal. El último suele ser un slam descendente.", tip: "Esquiva hacia él en los primeros golpes. Para el slam final esquiva hacia atrás o lateral." },
        { nombre: "Ataque de carga",      tipo: "fisico",  tipoLabel: "Físico",  desc: "Carga hacia el jugador a gran velocidad con la lanza en ristre.", tip: "Esquiva hacia un lateral en el último momento. La ventana es tarde — espera más de lo que crees." }
      ],
      drops: [
        { emoji: "⚡", nombre: "Recuerdo del Nameless King", desc: "Canjeable por las Swordspear of the Storm o el hechizo Lightning Storm.", tasa: "100%", rareza: "legendario" },
        { emoji: "💰", nombre: "Almas x80.000",              desc: "Recompensa de almas por derrotar al Nameless King.",                       tasa: "100%", rareza: "comun" }
      ],
      builds: [
        { rank: "1", rankColor: "#EF9F27", nombre: "Dark Sorcery — Affinity",    desc: "La magia oscura es la mayor debilidad del Nameless King. Affinity o Dark Edge hacen daño masivo especialmente en fase 2.", efectividad: 92, tags: ["Inteligencia", "Fe", "Oscuro"] },
        { rank: "2", rankColor: "#97C459", nombre: "Quality — Hyperarmor",       desc: "Arma colosal con Perseverance para fase 2. El Nameless King tiene ventanas de ataque claras entre sus combos.", efectividad: 80, tags: ["Fuerza", "Destreza", "Defensivo"] },
        { rank: "3", rankColor: "#85B7EB", nombre: "Bleed — Fase 2 eficiente",   desc: "La hemorragia acumula bien en fase 2 donde estás cerca constantemente. Carthus Rouge en arma rápida.", efectividad: 75, tags: ["Destreza", "Hemorragia"] }
      ]
    },
    "sister-friede": {
      id: "sister-friede",
      nombre: "Sister Friede",
      subtitulo: "Friede y el Padre Ariandel",
      juego: "Dark Souls III",
      juegoId: "dark-souls-3",
      juegoBg: "#101418",
      emoji: "❄️",
      zona: "Painted World of Ariandel (DLC)",
      tipo: "Jefe DLC",
      dificultad: "Extremo",
      hp: "12.786",
      runas: "70.000",
      fases: 3,
      debilidades_texto: ["Fuego", "Pyromancy"],
      stats: {
        hp:    { val: "12.786", label: "HP total" },
        runas: { val: "70k",    label: "Almas" },
        fases: { val: "3",      label: "Fases" },
        nivel: { val: "~100",   label: "Nivel rec." }
      },
      descripcion: "Sister Friede es el boss del DLC Ashes of Ariandel y está considerado uno de los mejores de toda la saga por su diseño de 3 fases dramáticamente distintas. Friede es una ex-Ceniza que abandonó el ciclo del fuego para proteger el Painted World. La batalla es una obra maestra narrativa — cada fase revela más sobre su historia y desesperación.",
      estrategia: [
        { titulo: "Fase 1 — aprende sus patrones antes de presionar", texto: "Fase 1 es relativamente amable. Úsala para aprender el timing de sus ataques invisibles y su esquema de movimiento. Guarda Estus para las fases siguientes." },
        { titulo: "Fase 2 — Padre Ariandel es la prioridad", texto: "En fase 2 el Padre Ariandel aparece. Mientras viva regenera la vida de Friede constantemente. Mata al Padre primero, luego remata a Friede." },
        { titulo: "El fuego destruye fase 2 rápidamente", texto: "El Padre Ariandel tiene enorme vulnerabilidad al fuego. Cócteles molotov o Fireball hacen daño masivo. La fase 2 puede terminar en 30 segundos con buenas pyromancies." },
        { titulo: "Fase 3 — Friede oscura es más agresiva", texto: "En fase 3 Friede resucita potenciada con magia oscura. Sus movimientos son más rápidos y añade nuevos ataques. Mantén presión constante — no le des tiempo para recuperarse." }
      ],
      resistencias: [
        { nombre: "Físico", icono: "ti-sword",      valor: 20, color: "#85B7EB" },
        { nombre: "Fuego",  icono: "ti-flame",      valor: 5,  color: "#EF9F27" },
        { nombre: "Frío",   icono: "ti-snowflake",  valor: 90, color: "#85B7EB" },
        { nombre: "Oscuro", icono: "ti-moon",       valor: 15, color: "#8A4DA0" }
      ],
      debilidades: [
        { nombre: "Fuego",     icono: "ti-flame", valor: 92, color: "#EF9F27" },
        { nombre: "Pyromancy", icono: "ti-flame", valor: 88, color: "#EF9F27" }
      ],
      fases_data: [
        { num: "I",   color: "#85B7EB", titulo: "Sister Friede",                    sub: "Primera vida",                          hp_trigger: "100% HP",             desc: "Friede combate con su guadaña de hielo. Su característica más peligrosa es la invisibilidad — desaparece y reaparece para atacar por sorpresa. Aprende a leer las marcas de escarcha en el suelo que indican dónde reaparecerá.", nuevos: "Invisibilidad, guadaña de hielo, deslizamiento helado, combo aéreo" },
        { num: "II",  color: "#EF9F27", titulo: "Padre Ariandel y Friede",          sub: "Tras matar a Friede por primera vez",   hp_trigger: "Friede a 0 HP",       desc: "El Padre Ariandel surge de su caldero y regenera a Friede. Mientras Ariandel viva, Friede se cura constantemente. Ariandel es lento pero sus azotes con el caldero tienen área masiva. Matar a Ariandel termina la fase.", nuevos: "Padre Ariandel activo, regeneración de Friede, azote de caldero, lluvia de sangre" },
        { num: "III", color: "#E24B4A", titulo: "Friede Oscura — La Verdadera Ceniza", sub: "Tras matar al Padre Ariandel",      hp_trigger: "Ariandel derrotado",  desc: "Friede resucita transformada — su guadaña ahora tiene magia oscura además del hielo. Es más rápida, más agresiva y añade nuevos ataques. Es la fase más intensa y la que más sorprende a los jugadores.", nuevos: "Guadaña oscura, combo de triple guadaña, slam oscuro de área, velocidad aumentada" }
      ],
      ataques: [
        { nombre: "Invisibilidad y ataque sorpresa", tipo: "fisico",  tipoLabel: "Físico",        desc: "Friede se vuelve invisible y reaparece para atacar. Las marcas de escarcha en el suelo indican su posición.", tip: "Observa las marcas de escarcha. Cuando veas escarcha moviéndose hacia ti prepara el esquive o aléjate." },
        { nombre: "Azote del caldero",               tipo: "fisico",  tipoLabel: "Físico",        desc: "Solo fase 2. El Padre Ariandel golpea con su caldero en un arco enorme con splash de sangre.", tip: "El alcance es mayor de lo que parece. Corre alejándote en línea recta cuando el Padre alce el caldero." },
        { nombre: "Triple guadaña oscura",           tipo: "magico",  tipoLabel: "Oscuro/Hielo",  desc: "Solo fase 3. Combo de tres guadañazos seguidos con magia oscura en cada uno.", tip: "Esquiva cada guadañazo individualmente hacia ella. El timing es diferente al de fases anteriores — más rápido." }
      ],
      drops: [
        { emoji: "❄️", nombre: "Recuerdo de la Ceniza", desc: "Canjeable por la guadaña de Friede o el hechizo Snap Freeze.", tasa: "100%", rareza: "legendario" },
        { emoji: "💰", nombre: "Almas x70.000",         desc: "Recompensa de almas por derrotar a Sister Friede.",              tasa: "100%", rareza: "comun" }
      ],
      builds: [
        { rank: "1", rankColor: "#EF9F27", nombre: "Pyromancy — Fuego masivo", desc: "El fuego destruye fase 2 en segundos. Fireball o Fire Orb en el Padre Ariandel es la estrategia más eficiente.", efectividad: 95, tags: ["Fe", "Inteligencia", "Pyromancy"] },
        { rank: "2", rankColor: "#97C459", nombre: "Bleed — Presión constante", desc: "La hemorragia funciona bien en fase 3 donde Friede está expuesta constantemente. Carthus Rouge.", efectividad: 82, tags: ["Destreza", "Hemorragia"] },
        { rank: "3", rankColor: "#85B7EB", nombre: "Quality — Paciencia",       desc: "Build equilibrada para aprender los patrones de las 3 fases. Más segura pero requiere más tiempo.", efectividad: 72, tags: ["Fuerza", "Destreza", "Paciente"] }
      ]
    },
    "isshin": {
      id: "isshin",
      nombre: "Isshin, el Santo Espadachín",
      subtitulo: "El fundador del clan Ashina",
      juego: "Sekiro",
      juegoId: "sekiro",
      juegoBg: "#0f1410",
      emoji: "🌸",
      zona: "Torre de Ashina — Batalla final",
      tipo: "Jefe final",
      dificultad: "Extremo",
      hp: "4 barras de postura",
      runas: "Recuerdo de Isshin",
      fases: 4,
      debilidades_texto: ["Fuego", "Relámpago devuelto"],
      stats: {
        hp:    { val: "4 vidas",  label: "Vidas de postura" },
        runas: { val: "Recuerdo", label: "Recompensa" },
        fases: { val: "4",        label: "Fases" },
        nivel: { val: "Final",    label: "Momento del juego" }
      },
      descripcion: "Isshin el Santo Espadachín es el boss final del verdadero final de Sekiro y está considerado uno de los mejores jefes de la historia de los videojuegos. Surge del cuerpo de Genichiro — que absorbió su alma — para dar su último combate. Cuatro fases de pura maestría en esgrima japonesa, con una banda sonora épica y una conclusión perfecta para el juego.",
      estrategia: [
        { titulo: "Es el mismo lenguaje que Genichiro pero llevado al límite", texto: "Isshin usa los mismos fundamentos que Genichiro — desvía, ataca, sé agresivo — pero todo es más rápido, más largo y más peligroso. Si venciste a Genichiro con desvíos, Isshin es el examen final de esa habilidad." },
        { titulo: "Fuego en fases 1 y 2", texto: "Isshin tiene alta vulnerabilidad al fuego en las dos primeras fases. Aceite + antorcha o Flame Vent hacen daño masivo. Aprovéchalo antes de que cambie de estilo." },
        { titulo: "Fase 3 — devuelve el relámpago", texto: "En fase 3 usa relámpagos exactamente como Genichiro de Tomoe. Usa el contraataque de rayo para devolvérselos. Es la mecánica más espectacular del juego." },
        { titulo: "Mantén presión constante", texto: "Isshin tiene más vidas que ningún otro boss de Sekiro. La clave es no darle respiro — cada vez que retrocede es una oportunidad perdida. Sé el agresor." },
        { titulo: "La lanza en fase 4 tiene puntos ciegos", texto: "Cuando usa la lanza sus combos tienen punto ciego lateral. Posicionarte a su lado corta muchos de sus ataques más peligrosos." }
      ],
      resistencias: [
        { nombre: "Físico", icono: "ti-sword",   valor: 25, color: "#85B7EB" },
        { nombre: "Fuego",  icono: "ti-flame",   valor: 0,  color: "#EF9F27" },
        { nombre: "Veneno", icono: "ti-droplet", valor: 70, color: "#97C459" }
      ],
      debilidades: [
        { nombre: "Fuego",              icono: "ti-flame", valor: 95,  color: "#EF9F27" },
        { nombre: "Relámpago devuelto", icono: "ti-bolt",  valor: 100, color: "#FAC775" }
      ],
      fases_data: [
        { num: "I",   color: "#97C459", titulo: "Isshin con katana",       sub: "Primera vida de postura",          hp_trigger: "Deathblow 1",          desc: "Isshin combate con katana. Sus movimientos son elegantes y precisos, con combos de 3-5 golpes y un barrido bajo característico. Alta vulnerabilidad al fuego en esta fase.", nuevos: "Combo de katana, barrido bajo, dash de ataque, postura de guardia" },
        { num: "II",  color: "#EF9F27", titulo: "Isshin — Segunda Vida",   sub: "Segunda vida de postura",         hp_trigger: "Deathblow 2",          desc: "Isshin saca la pistola además de la katana. Alterna ataques de espada con disparos a quemarropa. Sus combos se vuelven más mixtos y el ritmo aumenta. El fuego sigue siendo efectivo.", nuevos: "Pistola de disparo, combo espada-pistola, mayor velocidad" },
        { num: "III", color: "#E24B4A", titulo: "Isshin — El Relámpago",   sub: "Tercera vida",                    hp_trigger: "Deathblow 3",          desc: "Isshin añade relámpagos de Tomoe como Genichiro. Salta al aire y lanza rayos que deben ser devueltos. Sus combos son ahora mezcla de katana, pistola y rayo. El contraataque de rayo devuelto hace daño masivo.", nuevos: "Relámpago de Tomoe, combo triple katana-pistola-rayo" },
        { num: "IV",  color: "#8A4DA0", titulo: "Isshin — La Lanza",       sub: "Cuarta vida — la última",         hp_trigger: "Deathblow 4 necesario", desc: "Isshin desenfunda su lanza de hojas. Sus movimientos son más lentos pero con mayor alcance y daño. Esta fase es la más larga y requiere aplicar todo lo aprendido en las tres anteriores.", nuevos: "Lanza de hojas, combo de lanza, embestida con lanza" }
      ],
      ataques: [
        { nombre: "Combo de katana",       tipo: "fisico", tipoLabel: "Físico", desc: "Serie de 3-5 cortes con la katana. Siempre termina con barrido bajo o ataque vertical.", tip: "Desvía cada golpe. El barrido bajo requiere salto — busca el símbolo rojo de peligro." },
        { nombre: "Disparo de pistola",    tipo: "fisico", tipoLabel: "Físico", desc: "Dispara a quemarropa, a menudo mezclado con combos de katana.", tip: "El disparo tiene el mismo símbolo de peligro que las flechas. Usa Mikiri Counter o desvía." },
        { nombre: "Relámpago de Tomoe",    tipo: "rayo",   tipoLabel: "Rayo",   desc: "Solo fases 3 y 4. Salta al aire y lanza un rayo que sigue al jugador.", tip: "Prepara el contraataque de rayo cuando salte. El rayo devuelto hace daño enorme de postura." },
        { nombre: "Embestida con lanza",   tipo: "fisico", tipoLabel: "Físico", desc: "Solo fase 4. Carga con la lanza en ristre a gran velocidad.", tip: "Mikiri Counter en el momento exacto. La ventana es generosa comparada con otros ataques peikaku." }
      ],
      drops: [
        { emoji: "📜", nombre: "Recuerdo de Isshin el Santo Espadachín", desc: "Desbloquea el arte de combate definitivo de Isshin en el árbol de habilidades.", tasa: "100%", rareza: "legendario" },
        { emoji: "💎", nombre: "Cuentas de oración x3",                  desc: "Aumentan la salud y vigor de Wolf.",                                                tasa: "100%", rareza: "raro" }
      ],
      builds: [
        { rank: "1", rankColor: "#EF9F27", nombre: "Fuego en fases 1-2 + relámpago en 3-4", desc: "Aceite + Flame Vent en fases 1 y 2 hace daño masivo. Guardar el contraataque de rayo para fases 3 y 4.", efectividad: 95, tags: ["Fuego", "Relámpago", "Prótesis"] },
        { rank: "2", rankColor: "#97C459", nombre: "Desvío puro — sin prótesis",            desc: "La forma más elegante y satisfactoria. Solo katana y desvíos perfectos. Para jugadores que dominan el sistema.", efectividad: 88, tags: ["Postura", "Desvío", "Puro"] },
        { rank: "3", rankColor: "#85B7EB", nombre: "Shuriken en saltos",                    desc: "Cada vez que Isshin salte usa el shuriken para interrumpir. Rompe su postura aérea y da ventanas de deathblow.", efectividad: 78, tags: ["Shuriken", "Prótesis", "Aéreo"] }
      ]
    },
    "guardian-ape": {
      id: "guardian-ape",
      nombre: "Guardian Ape",
      subtitulo: "El mono guardián del santuario",
      juego: "Sekiro",
      juegoId: "sekiro",
      juegoBg: "#0f1410",
      emoji: "🦍",
      zona: "Santuario de Sunken Valley",
      tipo: "Jefe mayor",
      dificultad: "Alto",
      hp: "2 barras de postura",
      runas: "Recuerdo del Guardián",
      fases: 2,
      debilidades_texto: ["Fuego", "Slash en cuello fase 2"],
      stats: {
        hp:    { val: "2 vidas",  label: "Vidas de postura" },
        runas: { val: "Recuerdo", label: "Recompensa" },
        fases: { val: "2",        label: "Fases" },
        nivel: { val: "Mid-game", label: "Momento del juego" }
      },
      descripcion: "El Guardian Ape es uno de los bosses más memorables de Sekiro por su sorpresa de diseño — tras una batalla intensa en fase 1, el mono coge su propia cabeza cortada y continúa combatiendo en fase 2. Es un ejemplo perfecto del diseño de FromSoftware para subvertir expectativas. En fase 2 el mecanismo de Deathblow cambia completamente.",
      estrategia: [
        { titulo: "Fase 1 — sé agresivo desde el principio", texto: "El Guardian Ape es enorme y sus ataques son caóticos, pero tiene ventanas de daño claras entre movimientos. Ataca constantemente su espalda cuando está erguido o su vientre cuando cae al suelo." },
        { titulo: "Aléjate cuando se prepare para el gas", texto: "El mono se agacha y libera un gas venenoso en área. Es fácil de leer — aléjate inmediatamente cuando veas que se agacha." },
        { titulo: "Fase 2 sorpresa — no bajes la guardia", texto: "Cuando hagas el Deathblow en fase 1 el mono parece muerto. Espera — coge su cabeza y continúa. La fase 2 comienza inmediatamente sin descanso." },
        { titulo: "Fase 2 — el chillido requiere Deathblow especial", texto: "En fase 2 el mono usa un chillido fantasmal que no puede dañarse con katana normal. Necesitas el Mortal Blade para hacer el Deathblow final — asegúrate de tenerlo antes de enfrentarlo." }
      ],
      resistencias: [
        { nombre: "Físico", icono: "ti-sword",   valor: 20, color: "#85B7EB" },
        { nombre: "Fuego",  icono: "ti-flame",   valor: 0,  color: "#EF9F27" },
        { nombre: "Veneno", icono: "ti-droplet", valor: 40, color: "#97C459" }
      ],
      debilidades: [
        { nombre: "Fuego",        icono: "ti-flame", valor: 90,  color: "#EF9F27" },
        { nombre: "Mortal Blade", icono: "ti-sword", valor: 100, color: "#E24B4A" }
      ],
      fases_data: [
        { num: "I",  color: "#97C459", titulo: "El Guardián",         sub: "Primera vida de postura",               hp_trigger: "Deathblow 1",          desc: "El mono gigante combate con ataques de zarpa, lanzamiento de excrementos, gas venenoso y embestidas. Sus movimientos son grandes y lentos pero con mucho alcance. Busca su espalda para atacar de forma segura.", nuevos: "Zarpa de barrido, gas venenoso, lanzamiento de proyectiles, embestida" },
        { num: "II", color: "#E24B4A", titulo: "El Mono Sin Cabeza",  sub: "Tras el primer Deathblow — sorpresa",   hp_trigger: "Deathblow 1 completado", desc: "El mono recoge su propia cabeza y la usa como arma, lanzando el chillido fantasmal que corrompe el alma. Sus movimientos en fase 2 son diferentes y más erráticos. El Deathblow final requiere el Mortal Blade.", nuevos: "Chillido fantasmal, cabeza como arma, movimientos erráticos, vulnerable solo a Mortal Blade" }
      ],
      ataques: [
        { nombre: "Zarpa de barrido",    tipo: "fisico",  tipoLabel: "Físico",    desc: "Barre horizontalmente con una o ambas zarpas. Gran alcance lateral.", tip: "Salta o esquiva hacia él pasando por debajo de la zarpa. La zona pegada a su cuerpo es segura." },
        { nombre: "Gas venenoso",        tipo: "veneno",  tipoLabel: "Veneno",    desc: "Se agacha y libera un gas venenoso en área alrededor suyo.", tip: "Muy fácil de leer. Cuando se agache aléjate inmediatamente en cualquier dirección." },
        { nombre: "Chillido fantasmal",  tipo: "magico",  tipoLabel: "Fantasmal", desc: "Solo fase 2. Lanza la cabeza hacia adelante emitiendo un chillido que corrompe el alma y hace daño espiritual.", tip: "Bloquea o esquiva hacia un lateral. El chillido viaja en línea recta — sal de su trayectoria." }
      ],
      drops: [
        { emoji: "📜", nombre: "Recuerdo del Mono Guardián",  desc: "Desbloquea el arte de combate del Guardian Ape.",     tasa: "100%", rareza: "legendario" },
        { emoji: "💎", nombre: "Cuentas de oración x2",       desc: "Aumentan la salud y vigor de Wolf.",                  tasa: "100%", rareza: "raro" },
        { emoji: "🌿", nombre: "Flor de Loto de la Nieve",    desc: "Ingrediente para la cura de la inmortalidad.",        tasa: "100%", rareza: "raro" }
      ],
      builds: [
        { rank: "1", rankColor: "#EF9F27", nombre: "Fuego — Flame Vent",     desc: "El fuego hace daño enorme en ambas fases. Aceite + Flame Vent en fase 1 acelera mucho la pelea.", efectividad: 90, tags: ["Fuego", "Prótesis", "Agresivo"] },
        { rank: "2", rankColor: "#97C459", nombre: "Agresivo directo",        desc: "Sin prótesis especiales — atacar constantemente la espalda en fase 1 y el cuello en fase 2.", efectividad: 82, tags: ["Postura", "Agresivo", "Directo"] },
        { rank: "3", rankColor: "#85B7EB", nombre: "Shuriken + seguimiento",  desc: "Para sus saltos y embestidas el shuriken interrumpe bien. Útil para cortar sus movimientos más largos.", efectividad: 72, tags: ["Shuriken", "Interrupción"] }
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
      imagen: "img/bloodborne.png"
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
      imagen: "img/expedition-33.jpg"
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
    "bloodborne": {
      descripcion: "Bloodborne es un action-RPG de FromSoftware exclusivo de PlayStation ambientado en Yharnam, una ciudad victoriana maldita por una plaga de bestias. A diferencia de Dark Souls, el combate es ofensivo y agresivo — no hay escudo, hay que atacar para recuperar vida. El lore lovecraftiano, los grandes seres cósmicos y la atmósfera única lo sitúan entre las mejores obras del estudio.",
      developer: "FromSoftware",
      publisher: "Sony Interactive Entertainment",
      año: 2015,
      plataformas: "PS4, PS5",
      modos: "Un jugador, Co-op online",
      dificultad: {
        "Dificultad global": 88,
        "Combate agresivo": 80,
        "Jefes opcionales": 96,
        "Exploración": 70
      },
      bosses: [
        { id: "cleric-beast",     nombre: "Cleric Beast",           zona: "Gran Puente",          emoji: "👹", dificultad: "Medio",   drops: "Sangre de Cleric" },
        { id: "father-gascoigne", nombre: "Father Gascoigne",       zona: "Patio de la Catedral", emoji: "🎻", dificultad: "Alto",    drops: "Ojo del Cazador" },
        { id: "vicar-amelia",     nombre: "Vicar Amelia",           zona: "Catedral de Yharnam",  emoji: "✝️", dificultad: "Alto",    drops: "Colgante Divino" },
        { id: "rom",              nombre: "Rom, the Vacuous Spider", zona: "Lago Byrgenwerth",     emoji: "🕷️", dificultad: "Medio",   drops: "Runas de Rom" },
        { id: "micolash",         nombre: "Micolash, Host of the Nightmare", zona: "Pesadilla del Menis", emoji: "🎭", dificultad: "Alto", drops: "Eco de Micolash" },
        { id: "mergo-wet-nurse",  nombre: "Mergo's Wet Nurse",      zona: "Pesadilla del Menis",  emoji: "🌑", dificultad: "Extremo", drops: "Tercer Cordón" },
        { id: "gehrman",          nombre: "Gehrman, the First Hunter", zona: "Jardín del Sueño", emoji: "🌾", dificultad: "Extremo", drops: "Recuerdo de Gehrman" },
        { id: "moon-presence",    nombre: "Moon Presence",          zona: "Jardín del Sueño",     emoji: "🌕", dificultad: "Extremo", drops: "Final True" }
      ],
      guias: [
        { titulo: "Guía completa — Cómo vencer a Father Gascoigne", tipo: "Boss",  minutos: 8,  badge: "hot" },
        { titulo: "Build Arcano — Transforming Weapons maximizadas", tipo: "Build", minutos: 18, badge: "new" },
        { titulo: "Chalice Dungeons — todo lo que necesitas saber",  tipo: "Zona",  minutos: 25, badge: "updated" },
        { titulo: "Lore completo — los Grandes Seres y Yharnam",    tipo: "Lore",  minutos: 30, badge: "hot" }
      ],
      galeria: [
        { emoji: "🏙️", label: "Yharnam bajo la lluvia" },
        { emoji: "🕯️", label: "Catedral Ward" },
        { emoji: "🌊", label: "Lago Byrgenwerth" },
        { emoji: "🌑", label: "Pesadilla del Menis" },
        { emoji: "🌕", label: "El sueño del cazador" },
        { emoji: "🩸", label: "La plaga de las bestias" }
      ],
      lore: [
        { titulo: "La Sangre Antigua y la plaga de bestias",     texto: "Yharnam prosperó gracias a la sangre curativa descubierta bajo la ciudad. Pero la sobreexposición a la sangre de los Grandes Seres desencadenó la transformación de sus habitantes en bestias. La noche de la caza es el intento de la iglesia de controlar la plaga.", tag: "Historia" },
        { titulo: "Los Grandes Seres cósmicos",                  texto: "Bloodborne bebe del horror cósmico de Lovecraft. Entidades como Ébrietas, Rom o la Presencia Lunar existen en dimensiones más allá de la comprensión humana. La investigación de Byrgenwerth buscaba elevar a la humanidad al nivel de estos seres.", tag: "Cosmología" },
        { titulo: "Gehrman y el Sueño del Cazador",              texto: "El Primer Cazador está atrapado en el sueño por la Presencia Lunar, sirviendo como guía para los cazadores que llegan. Al final, el jugador puede liberarlo — o tomar su lugar como nuevo guardián del sueño eterno.", tag: "Personajes" }
      ]
    },
    "sekiro": {
      descripcion: "Sekiro: Shadows Die Twice es un juego de acción de FromSoftware ambientado en el Japón Sengoku tardío. A diferencia de la saga Souls, no hay estadísticas que subir ni equipamiento que cambiar: el progreso se basa exclusivamente en dominar el sistema de combate por postura. El jugador encarna a Wolf, un shinobi que debe rescatar a su señor del clan Ashina.",
      developer: "FromSoftware",
      publisher: "Activision / FromSoftware",
      año: 2019,
      plataformas: "PC, PS4, PS5, Xbox One, Xbox Series",
      modos: "Un jugador",
      dificultad: {
        "Dificultad global": 87,
        "Sistema de postura": 75,
        "Jefes principales": 94,
        "Exploración": 55
      },
      bosses: [
        { id: "genichiro",      nombre: "Genichiro Ashina",          zona: "Castillo Ashina — Cima",  emoji: "⚡", dificultad: "Extremo", drops: "Memoria: Genichiro" },
        { id: "lady-butterfly", nombre: "Lady Butterfly",            zona: "Hirata Estate",           emoji: "🦋", dificultad: "Alto",    drops: "Hilo de Seda" },
        { id: "guardian-ape",   nombre: "Guardian Ape",              zona: "Bosque de Sunken Valley",  emoji: "🦍", dificultad: "Extremo", drops: "Medicina Eterna" },
        { id: "corrupted-monk", nombre: "Corrupted Monk",            zona: "Santuario Mibu",          emoji: "☯️", dificultad: "Alto",    drops: "Flor Iluminada" },
        { id: "owl-father",     nombre: "Great Shinobi Owl — Father", zona: "Castillo Ashina — NG+", emoji: "🦉", dificultad: "Extremo", drops: "Memoria: Búho" },
        { id: "isshin",         nombre: "Isshin, Sword Saint",       zona: "Castillo Ashina — Final", emoji: "🌸", dificultad: "Extremo", drops: "Ruinas de Ashina" }
      ],
      guias: [
        { titulo: "Guía de postura — cómo romper la guardia de cualquier jefe", tipo: "Build", minutos: 15, badge: "hot" },
        { titulo: "Cómo vencer a Isshin Sword Saint — el boss final",          tipo: "Boss",  minutos: 20, badge: "hot" },
        { titulo: "Todas las prótesis — cuándo y cómo usarlas",                tipo: "Zona",  minutos: 12, badge: "updated" },
        { titulo: "Sekiro lore — el Dragón de la Herencia y la inmortalidad",   tipo: "Lore",  minutos: 22, badge: "new" }
      ],
      galeria: [
        { emoji: "🏯", label: "Castillo Ashina" },
        { emoji: "🌸", label: "Hirata Estate en flor" },
        { emoji: "🌊", label: "Reserva del Valle Hundido" },
        { emoji: "🎋", label: "Bosques de bambú de Senpou" },
        { emoji: "⛩️", label: "Templo de Senpou" },
        { emoji: "🌙", label: "Ashina en llamas" }
      ],
      lore: [
        { titulo: "El Dragón de la Herencia y la inmortalidad",  texto: "El Dragón de la Herencia otorga inmortalidad a quien lo porte. Kuro, el joven señor de Wolf, nació con este poder. Tanto el clan Ashina como los guerreros del Interior buscan a Kuro para aprovechar o erradicar el poder del dragón.", tag: "Historia" },
        { titulo: "Wolf y el código shinobi",                    texto: "Wolf (Sekiro) es un shinobi entrenado por el Gran Shinobi Búho. Su código de lealtad absoluta hacia Kuro entra en conflicto con las órdenes de su maestro. El juego explora el honor shinobi a través de sus finales múltiples.", tag: "Personajes" },
        { titulo: "El clan Ashina y su decadencia",              texto: "Isshin Ashina fundó el clan con su espada legendaria, pero el clan envejece y los ejércitos imperiales avanzan. Genichiro, nieto de Isshin, busca la inmortalidad del Dragón para salvar Ashina — a cualquier precio.", tag: "Política" }
      ]
    },
    "dark-souls-3": {
      descripcion: "Dark Souls III es el capítulo final de la trilogía Souls de FromSoftware. Ambientado en el reino de Lothric al borde del apocalipsis cíclico, el jugador encarna al Sin Llama — un guerrero muerto resucitado para reunir a los Señores de las Cenizas y retrasar el fin. Con el combate más rápido de la saga y algunos de los mejores jefes de la historia del género.",
      developer: "FromSoftware",
      publisher: "Bandai Namco Entertainment",
      año: 2016,
      plataformas: "PC, PS4, PS5, Xbox One, Xbox Series",
      modos: "Un jugador, Co-op/PvP online",
      dificultad: {
        "Dificultad global": 82,
        "Velocidad de combate": 65,
        "Jefes opcionales": 93,
        "Exploración": 58
      },
      bosses: [
        { id: "pontiff",       nombre: "Pontiff Sulyvahn",         zona: "Irithyll del Valle Boreal", emoji: "⚔️", dificultad: "Extremo", drops: "Anillo de Sulyvahn" },
        { id: "nameless-king", nombre: "Nameless King",            zona: "Archdragon Peak",           emoji: "⚡", dificultad: "Extremo", drops: "Memoria del Rey Sin Nombre" },
        { id: "soul-of-cinder", nombre: "Soul of Cinder",          zona: "Llama de la Primera Hoguera", emoji: "🔥", dificultad: "Extremo", drops: "Recuerdo de las Cenizas" },
        { id: "sister-friede", nombre: "Sister Friede",            zona: "Pinwheel — DLC Ariandel",   emoji: "❄️", dificultad: "Extremo", drops: "Manto de Friede" },
        { id: "midir",         nombre: "Darkeater Midir",          zona: "El Ringed City — DLC",      emoji: "🐉", dificultad: "Extremo", drops: "Alma de Midir" },
        { id: "dancer",        nombre: "Dancer of the Boreal Valley", zona: "Lothric High Wall",     emoji: "💃", dificultad: "Alto",    drops: "Alma de la Bailarina" }
      ],
      guias: [
        { titulo: "Guía de Pontiff Sulyvahn — movimientos y estrategia", tipo: "Boss",  minutos: 12, badge: "hot" },
        { titulo: "Build Pyromancer — mejor clase para early y endgame",  tipo: "Build", minutos: 16, badge: "updated" },
        { titulo: "Irithyll del Valle Boreal — guía completa de zona",   tipo: "Zona",  minutos: 18, badge: "new" },
        { titulo: "Lore — el ciclo del fuego y los Señores de Cenizas",  tipo: "Lore",  minutos: 20, badge: "hot" }
      ],
      galeria: [
        { emoji: "🏰", label: "Castillo de Lothric" },
        { emoji: "❄️", label: "Irithyll bajo la nieve" },
        { emoji: "🐉", label: "Archdragon Peak" },
        { emoji: "⛪", label: "Catedral del Abismo Profundo" },
        { emoji: "🔥", label: "Hoguera de las Cenizas" },
        { emoji: "🌑", label: "The Ringed City — DLC" }
      ],
      lore: [
        { titulo: "El ciclo del fuego y la Primera Llama",          texto: "Dark Souls III concluye el ciclo iniciado en el primer juego. La Primera Llama se apaga inevitablemente y los no-muertos son convocados para atizar el fuego con sus almas. Los Señores de las Cenizas — los más poderosos — rechazaron este destino y deben ser traídos de vuelta.", tag: "Historia" },
        { titulo: "Lothric y los Príncipes Gemelos",                texto: "Lothric y Lorian son los príncipes de la última línea real. Lothric, enfermizo desde su nacimiento, rechazó su destino como Portador de la Llama. Su hermano Lorian asumió su maldición y juntos se convirtieron en uno de los jefes más trágicos de la saga.", tag: "Personajes" },
        { titulo: "Los caballeros de Irithyll y Sulyvahn",          texto: "Pontiff Sulyvahn corrompió a los caballeros de Anor Londo con su veneno y esclavizó a los dioses. Irithyll del Valle Boreal era la ciudad sagrada de Gwyn, ahora sometida a un tirano que usa gemelos fantasmales para sus propios fines.", tag: "Política" }
      ]
    },
    "diablo-4": {
      descripcion: "Diablo IV es el ARPG de Blizzard Entertainment que regresa a las raíces oscuras de la saga. Ambientado en el mundo de Santuario, la hija de Mephisto, Lilith, ha sido invocada y amenaza con sumergir el mundo en el caos. Con cinco clases, un mundo abierto compartido y un sistema de temporadas continuo, ofrece cientos de horas de juego.",
      developer: "Blizzard Entertainment",
      publisher: "Blizzard Entertainment",
      año: 2023,
      plataformas: "PC, PS4, PS5, Xbox One, Xbox Series",
      modos: "Un jugador, Co-op 4 jugadores, Mundo compartido",
      dificultad: {
        "Dificultad global": 58,
        "Curva de nivel": 45,
        "Tormentos de endgame": 85,
        "Builds complejas": 75
      },
      bosses: [
        { id: "lilith",       nombre: "Lilith, Hija del Odio",  zona: "Argent D'Nal — Final",  emoji: "👹", dificultad: "Extremo", drops: "Corazón de Lilith" },
        { id: "ashava",       nombre: "Ashava the Pestilent",   zona: "Campos del Odio — Mundial", emoji: "🐍", dificultad: "Alto",    drops: "Cenizas de Ashava" },
        { id: "duriel",       nombre: "Lord of Pain Duriel",    zona: "Alcantarillas de Tortura", emoji: "🦂", dificultad: "Alto",    drops: "Materiales únicos" },
        { id: "andariel",     nombre: "Andariel, Maiden of Anguish", zona: "Fortaleza de Guulrahn", emoji: "🕷️", dificultad: "Medio",   drops: "Susurros de Andariel" },
        { id: "uber-duriel",  nombre: "Echo of Duriel",         zona: "Ureh — Endgame",           emoji: "⚡", dificultad: "Extremo", drops: "Únicos Ancestrales" }
      ],
      guias: [
        { titulo: "Mejor build Nigromante Temporada 8 — guía completa", tipo: "Build", minutos: 20, badge: "hot" },
        { titulo: "Cómo farmear Uber Duriel — materiales y estrategia", tipo: "Boss",  minutos: 10, badge: "new" },
        { titulo: "Tormento 4 — cómo preparar el salto de dificultad", tipo: "Zona",  minutos: 14, badge: "updated" },
        { titulo: "Lore de Santuario — la guerra entre ángeles y demonios", tipo: "Lore", minutos: 18, badge: "hot" }
      ],
      galeria: [
        { emoji: "🏜️", label: "Desierto de Kehjistan" },
        { emoji: "❄️", label: "Fractured Peaks nevado" },
        { emoji: "🌿", label: "Scosglen — bosques celtas" },
        { emoji: "🩸", label: "Campos del Odio" },
        { emoji: "🌑", label: "Hawezar — pantanos" },
        { emoji: "👹", label: "El trono de Lilith" }
      ],
      lore: [
        { titulo: "Lilith y la creación de Santuario",               texto: "Lilith, hija de Mephisto y madre de la humanidad, creó Santuario junto al arcángel Inarius para escapar del conflicto eterno. Cuando fue desterrada, los humanos quedaron atrapados entre el Cielo Alto y los Infiernos Ardientes.", tag: "Historia" },
        { titulo: "Las cinco clases y su conexión con el lore",      texto: "Bárbaro, Druida, Nigromante, Pícaro y Hechicero representan linajes y tradiciones de Santuario. Cada clase tiene una motivación narrativa propia para enfrentarse a Lilith, conectada con el lore de los juegos anteriores.", tag: "Personajes" },
        { titulo: "El sistema de temporadas y la narrativa viva",    texto: "Diablo IV se actualiza con temporadas que añaden nuevos arcos narrativos. Cada temporada introduce mecánicas únicas, jefes temporales y fragmentos de historia que expanden el universo de Santuario de forma continua.", tag: "Sistema" }
      ]
    },
    "dark-souls-1": {
      descripcion: "Dark Souls, el primer título de la saga de FromSoftware, estableció los pilares del género soulslike: muerte como aprendizaje, mundo interconectado sin pantallas de carga y un lore críptico contado a través de descripciones de objetos. Ambientado en Lordran, el jugador debe encender la Primera Llama o dejarla extinguir, enfrentándose a dioses caídos, caballeros malditos y criaturas del Abismo.",
      developer: "FromSoftware",
      publisher: "Namco Bandai Games",
      año: 2011,
      plataformas: "PC, PS3, PS4, Xbox 360, Xbox One, Switch",
      modos: "Un jugador, Multijugador asíncrono, Co-op, PvP invasiones",
      dificultad: {
        "Dificultad global": 88,
        "Jefes opcionales": 95,
        "Navegación del mundo": 80,
        "Curva de aprendizaje": 85
      },
      bosses: [
        { id: "ornstein-smough",   nombre: "Ornstein y Smough",       zona: "Catedral de Anor Londo",     emoji: "⚡", dificultad: "Extremo", drops: "Alma de Smough / Alma de Ornstein" },
        { id: "sif",               nombre: "Sif, el Gran Lobo Gris",  zona: "Jardín de Artorias",         emoji: "🐺", dificultad: "Alto",    drops: "Alma de Sif" },
        { id: "four-kings",        nombre: "Los Cuatro Reyes",        zona: "El Abismo — New Londo",      emoji: "👑", dificultad: "Alto",    drops: "Alma de los Reyes" },
        { id: "gwyn",              nombre: "Gwyn, Señor del Fuego",   zona: "Llama de Kiln — Final",      emoji: "🔥", dificultad: "Medio",   drops: "Alma de Gwyn" },
        { id: "artorias",          nombre: "Caballero Artorias",      zona: "Jardín de Artorias — DLC",   emoji: "🗡️", dificultad: "Extremo", drops: "Alma de Artorias" }
      ],
      guias: [
        { titulo: "Ornstein y Smough — la estrategia definitiva para 2025", tipo: "Boss",  minutos: 12, badge: "hot" },
        { titulo: "Ruta óptima de progresión — Lordran sin perderse",       tipo: "Zona",  minutos: 20, badge: "updated" },
        { titulo: "Build mago puro — Soul Spear y Crystal Soul Spear",      tipo: "Build", minutos: 15, badge: "hot" },
        { titulo: "Lore completo de Gwyn y los Señores del Fuego",          tipo: "Lore",  minutos: 18, badge: "new" }
      ],
      galeria: [
        { emoji: "🏰", label: "Anor Londo — ciudad de los dioses" },
        { emoji: "🕷️", label: "Blighttown — pantanos tóxicos" },
        { emoji: "🏚️", label: "Sen's Fortress — trampa mortal" },
        { emoji: "🌊", label: "Ash Lake — lago primordial" },
        { emoji: "🐉", label: "Dragones de Piedra en el Puente" },
        { emoji: "🔥", label: "Kiln of the First Flame" }
      ],
      lore: [
        { titulo: "La Era del Fuego y los Señores",           texto: "Antes de la Llama, todo era gris. Cuando surgió la Primera Llama, los Señores hallaron las Almas de los Señores dentro de ella: Gwyn, Nito, la Bruja de Izalith y el Pigmeo Furtivo. Con ellas derrotaron a los Dragones Eternos e instauraron la Era del Fuego.", tag: "Historia" },
        { titulo: "La maldición del Ser No Muerto",           texto: "El Señal Oscura marca a los humanos convirtiéndolos en No Muertos. Si pierden la esperanza, se vuelven Huecos — cáscaras sin mente. Lordran es el destino de los No Muertos elegidos por la profecía, que deben encender o apagar la Llama.", tag: "Lore" },
        { titulo: "Artorias y la caída al Abismo",            texto: "El Caballero Artorias fue el único ser capaz de atravesar el Abismo. Cuando intentó salvar al hijo de Sif, el Abismo lo corrompió. Su escudo protegió al lobo, pero él fue consumido. El jugador debe viajar al pasado para enfrentarlo y salvar a Oolacile.", tag: "Personajes" }
      ]
    },
    "poe2": {
      descripcion: "Path of Exile 2 es la segunda parte del ARPG free-to-play de Grinding Gear Games. Con 6 clases base y 36 ascendencias, un árbol de habilidades pasivas con más de 1.500 nodos y un sistema de gemas 2.0, ofrece una profundidad de builds sin igual. El modo hardcore, las ligas de temporada y la economía de comercio entre jugadores lo convierten en uno de los ARPGs más complejos del mercado.",
      developer: "Grinding Gear Games",
      publisher: "Grinding Gear Games",
      año: 2024,
      plataformas: "PC, PS5, Xbox Series",
      modos: "Un jugador, Multijugador cooperativo, Hardcore, Temporadas (Ligas)",
      dificultad: {
        "Dificultad de campaña": 72,
        "Complejidad de builds": 98,
        "Endgame — Maps y Pinnacle": 90,
        "Economía y trading": 85
      },
      bosses: [
        { id: "the-arbiter",     nombre: "The Arbiter of Ash",      zona: "Cima del Mundo — Acto 6",    emoji: "🌋", dificultad: "Extremo", drops: "Runa divina, Orbe divino" },
        { id: "lachlann",        nombre: "Lachlann of Endless Lament", zona: "Cripta Lluviosa — Acto 2", emoji: "☠️", dificultad: "Alto",    drops: "Amuleto de Lachlann" },
        { id: "doryani",         nombre: "Doryani, el Corruptor",   zona: "Sala de los Eones — Endgame", emoji: "⚡", dificultad: "Extremo", drops: "Gema corrupta única" },
        { id: "xesht",           nombre: "Xesht, We That Are One",  zona: "Desierto de Vastiri — Acto 3", emoji: "🐛", dificultad: "Alto",   drops: "Piedra de liga" },
        { id: "the-king-in-shadows", nombre: "The King in Shadows", zona: "Depths — Endgame pinnacle",  emoji: "👁️", dificultad: "Extremo", drops: "Único pintácleo" }
      ],
      guias: [
        { titulo: "Mejor build starter Liga — Minions Infernalist",    tipo: "Build", minutos: 22, badge: "hot" },
        { titulo: "Árbol de habilidades explicado — guía para nuevos", tipo: "Mecánica", minutos: 30, badge: "new" },
        { titulo: "Endgame Maps — cómo progresar desde Tier 1 a 16",  tipo: "Zona",  minutos: 18, badge: "updated" },
        { titulo: "Economía y trading — cómo conseguir divisas rápido", tipo: "Guía", minutos: 15, badge: "hot" }
      ],
      galeria: [
        { emoji: "🌧️", label: "Wraeclast bajo la lluvia" },
        { emoji: "🏜️", label: "Desierto de Vastiri" },
        { emoji: "🌊", label: "Puertos de Utzaal" },
        { emoji: "🌋", label: "Cima de Keth" },
        { emoji: "🗺️", label: "Atlas del Endgame" },
        { emoji: "💎", label: "La ciudad de las gemas" }
      ],
      lore: [
        { titulo: "Wraeclast — el continente maldito",              texto: "Los exiliados son enviados al continente de Wraeclast como castigo. La tierra está impregnada de magia corrupta y sus civilizaciones anteriores —Vaal, Eternos, Thaumaturgia— dejaron ruinas llenas de peligros y conocimiento prohibido.", tag: "Historia" },
        { titulo: "Las Gemmas y el origen de la magia",             texto: "Las gemas de habilidad son restos de criaturas o espíritus cristalizados. Encajarlas en el equipo permite canalizar su poder. Esta magia fue desarrollada por los Eternos, cuyo abuso de las gemas causó la caída de su civilización.", tag: "Lore" },
        { titulo: "El ciclo de las Ligas y el tiempo fragmentado",  texto: "Cada liga en PoE2 representa un evento que altera las reglas del mundo. Los jugadores comienzan de cero en cada liga, y al terminar los personajes pasan a los servidores Legacy. Este ciclo mantiene la economía fresca y la comunidad unida.", tag: "Sistema" }
      ]
    },
    "final-fantasy-7-remake": {
      descripcion: "Final Fantasy VII Remake es la primera parte de la retelling del clásico de 1997, que expande y reimagina los eventos en la ciudad de Midgar. Con un sistema de combate en tiempo real combinado con menú de habilidades, gráficos de última generación y una banda sonora orquestal, profundiza en los personajes de Cloud, Aerith, Barret y Tifa de forma inédita.",
      developer: "Square Enix",
      publisher: "Square Enix",
      año: 2020,
      plataformas: "PS4, PS5, PC",
      modos: "Un jugador",
      dificultad: {
        "Dificultad estándar": 55,
        "Modo Difícil — sin objetos": 85,
        "Jefes de capítulo": 70,
        "Desafíos de arena": 80
      },
      bosses: [
        { id: "scorpion-sentinel",  nombre: "Scorpion Sentinel",       zona: "Reactor Mako 1 — Inicio",   emoji: "🦂", dificultad: "Medio",   drops: "Material de Hielo" },
        { id: "arsenal",            nombre: "Arsenal",                  zona: "Torre Shinra — Capítulo 16", emoji: "🤖", dificultad: "Alto",    drops: "Mejora de arma" },
        { id: "jenova-dreamweaver", nombre: "Jenova — Dreamweaver",     zona: "Corredor del Destino — Final", emoji: "👾", dificultad: "Alto",  drops: "Accesorio único" },
        { id: "sephiroth-final",    nombre: "Sephiroth",                zona: "Más allá del destino — Final", emoji: "🗡️", dificultad: "Extremo", drops: "Trofeo Platino" },
        { id: "hell-house",         nombre: "Hell House",               zona: "Estadio de Lucha — Cap. 9",  emoji: "🏠", dificultad: "Alto",    drops: "Material único" }
      ],
      guias: [
        { titulo: "Sephiroth en Difícil — guía completa sin objetos",  tipo: "Boss",  minutos: 14, badge: "hot" },
        { titulo: "Todos los materiales ocultos — localización exacta", tipo: "Zona",  minutos: 20, badge: "updated" },
        { titulo: "Build óptima para Modo Difícil con Cloud y Aerith",  tipo: "Build", minutos: 16, badge: "hot" },
        { titulo: "Lore de Jenova y el Proyecto S de Shinra",           tipo: "Lore",  minutos: 18, badge: "new" }
      ],
      galeria: [
        { emoji: "🏙️", label: "Midgar vista desde el aire" },
        { emoji: "💧", label: "Slums bajo las planchas" },
        { emoji: "🌸", label: "Invernadero de Aerith" },
        { emoji: "🎪", label: "Estadio de Wall Market" },
        { emoji: "⚡", label: "Reactor Mako en llamas" },
        { emoji: "🗡️", label: "El duelo con Sephiroth" }
      ],
      lore: [
        { titulo: "El Proyecto Jenova y la Nube oscura",    texto: "Jenova es una entidad alienígena que Shinra descubrió hace 2.000 años y confundió con un Cetra. Sus células fueron inyectadas en soldados SOLDIER, incluyendo a Cloud y Sephiroth, lo que les otorga habilidades sobrehumanas pero a un coste psicológico enorme.", tag: "Personajes" },
        { titulo: "Shinra y la explotación del Planeta",   texto: "La corporación Shinra absorbe la Corriente Vital del Planeta —la esencia de toda vida— para convertirla en energía Mako. Esto agota lentamente al Planeta. AVALANCHA lucha contra esta explotación, aunque sus métodos son vistos como terrorismo.", tag: "Historia" },
        { titulo: "Los Susurros del Destino",              texto: "En el Remake aparecen los Susurros, entidades que protegen la línea temporal original. El grupo los enfrenta y al destruirlos liberan el destino del Planeta, abriendo la posibilidad de un futuro diferente al canon original del juego de 1997.", tag: "Lore" }
      ]
    },
    "final-fantasy-16": {
      descripcion: "Final Fantasy XVI lleva la saga a un territorio oscuro y maduro, con un sistema de combate en tiempo real de acción pura inspirado en Devil May Cry. Ambientado en el mundo de Valisthea, la historia sigue a Clive Rosfield en su búsqueda de venganza, rodeado de guerras por los cristales madre y la amenaza de la Laceradura. El juego presenta los Eikons —los invocados de la saga— como seres de poder devastador.",
      developer: "Square Enix — Creative Business Unit III",
      publisher: "Square Enix",
      año: 2023,
      plataformas: "PS5, PC",
      modos: "Un jugador",
      dificultad: {
        "Modo Historia (asistido)": 30,
        "Dificultad estándar": 60,
        "Modo Final Fantasy — NG+": 82,
        "Jefes de Eikon": 75
      },
      bosses: [
        { id: "benedikta",    nombre: "Benedikta Harman — Garuda",  zona: "Lostwing — Acto I",           emoji: "🌪️", dificultad: "Medio",   drops: "Plumas de Garuda" },
        { id: "titan",        nombre: "Titan — El Colosal",         zona: "Dhalmekia — Acto II",         emoji: "🗻", dificultad: "Alto",    drops: "Fragmento de cristal" },
        { id: "bahamut",      nombre: "Bahamut — Dreadwyrm",        zona: "Mothercrystal Drake's Head",  emoji: "🐲", dificultad: "Extremo", drops: "Escama de Bahamut" },
        { id: "ultima",       nombre: "Ultima",                     zona: "Origin — Clímax final",       emoji: "✨", dificultad: "Extremo", drops: "Trofeo platino" },
        { id: "barnabas",     nombre: "Barnabas Tharmr — Odin",     zona: "Waloed — Clímax Acto III",    emoji: "⚔️", dificultad: "Alto",    drops: "Hoja del rey" }
      ],
      guias: [
        { titulo: "Bahamut — cómo superar la batalla de Eikons más épica", tipo: "Boss",  minutos: 12, badge: "hot" },
        { titulo: "Todas las misiones secundarias — guía y recompensas",    tipo: "Zona",  minutos: 25, badge: "updated" },
        { titulo: "Build de Clive para Modo Final Fantasy — habilidades",   tipo: "Build", minutos: 18, badge: "hot" },
        { titulo: "Lore de Valisthea y el origen de los Eikons",            tipo: "Lore",  minutos: 20, badge: "new" }
      ],
      galeria: [
        { emoji: "💎", label: "Cristal Madre de Phoenix Gate" },
        { emoji: "🏰", label: "Fortaleza de Rosaria" },
        { emoji: "🌊", label: "Costa de Dhalmekia" },
        { emoji: "🔥", label: "Duelo de Eikons en llamas" },
        { emoji: "🌑", label: "La Laceradura avanzando" },
        { emoji: "⚔️", label: "Clive en su armadura final" }
      ],
      lore: [
        { titulo: "Los cristales madre y la Laceradura",      texto: "Los cristales madre son inmensas formaciones que otorgan el don del éter a sus pueblos. Sin embargo, su uso excesivo alimenta la Laceradura, una plaga que petrifica la tierra y a sus habitantes. Los reinos de Valisthea luchan por el control de estos cristales mientras el mundo se consume.", tag: "Historia" },
        { titulo: "Los Dominantes y los Eikons",              texto: "Los Dominantes son humanos que pueden encarnar a los Eikons —los seres invocados de máximo poder. Dependiendo del reino, son adorados como figuras divinas o esclavizados como armas de guerra. Clive, como Dominante de Ifrit, porta una carga que dará forma al destino de Valisthea.", tag: "Personajes" },
        { titulo: "Ultima y el plan de los Inmortales",       texto: "Ultima es un ser de una raza de dioses que creó los Eikons como parte de un plan para absorber el éter del mundo y ascender. Toda la historia de los Dominantes y las guerras de Valisthea forman parte de su manipulación milenaria.", tag: "Lore" }
      ]
    },
    "final-fantasy-14": {
      descripcion: "Final Fantasy XIV es el MMORPG de Square Enix que resurgió de las cenizas con A Realm Reborn en 2013. Con cuatro expansiones principales (Heavensward, Stormblood, Shadowbringers, Endwalker) y una nueva saga iniciada con Dawntrail, ofrece una de las narraciones más aclamadas del género. Su comunidad es famosa por ser una de las más acogedoras de los juegos en línea.",
      developer: "Square Enix",
      publisher: "Square Enix",
      año: 2013,
      plataformas: "PC, PS4, PS5, Xbox Series",
      modos: "MMORPG — Mundo persistente multijugador masivo",
      dificultad: {
        "Historia principal": 35,
        "Raids extremas (EX)": 80,
        "Raids en Savage": 92,
        "Ultimate — cima del reto": 99
      },
      bosses: [
        { id: "zodiark",      nombre: "Zodiark, Source of Darkness",  zona: "Pillar of Heaven — Endwalker", emoji: "🌑", dificultad: "Alto",    drops: "Equipo Zodiark" },
        { id: "hydaelyn",     nombre: "Hydaelyn, Goddess of Light",   zona: "The Mothercrystal — Endwalker", emoji: "✨", dificultad: "Alto",   drops: "Arma de diosa" },
        { id: "endsinger",    nombre: "The Endsinger",                zona: "The Final Day — Endwalker Final", emoji: "🌟", dificultad: "Extremo", drops: "Trofeo narrativo" },
        { id: "golbez",       nombre: "Golbez",                       zona: "Aether — Patch 6.4",            emoji: "🖤", dificultad: "Alto",    drops: "Equipo de temporada" },
        { id: "zeromus",      nombre: "Zeromus",                      zona: "Zero's World — Patch 6.5",      emoji: "👁️", dificultad: "Extremo", drops: "Arma final de parche" }
      ],
      guias: [
        { titulo: "Guía para nuevos jugadores — por dónde empezar en 2025", tipo: "Guía", minutos: 25, badge: "hot" },
        { titulo: "Extreme Trials — cómo prepararse para el primer EX",     tipo: "Mecánica", minutos: 18, badge: "new" },
        { titulo: "Shadowbringers — la historia más aclamada resumida",     tipo: "Lore",  minutos: 30, badge: "updated" },
        { titulo: "Jobs para principiantes — cuál elegir y por qué",        tipo: "Build", minutos: 15, badge: "hot" }
      ],
      galeria: [
        { emoji: "🏙️", label: "Limsa Lominsa al atardecer" },
        { emoji: "🌿", label: "Gridania y el bosque eterno" },
        { emoji: "🏜️", label: "Ul'dah y sus arenas doradas" },
        { emoji: "🌌", label: "The First — mundo de luz eterna" },
        { emoji: "🌙", label: "Elpis — paraíso del pasado" },
        { emoji: "✨", label: "El Final — Endwalker climax" }
      ],
      lore: [
        { titulo: "A Realm Reborn — el renacimiento del mundo",     texto: "Tras el desastre del Umbral Séptimo, Eorzea fue destruida y reconstruida. Los Guerreros de la Luz son los únicos que recuerdan el futuro gracias a la Memoria del Eco. Su misión es proteger al Cristal Madre Hydaelyn de las fuerzas del Imperio Garlean y de entidades astrales.", tag: "Historia" },
        { titulo: "Shadowbringers y el mundo al revés",             texto: "En Shadowbringers, el Guerrero de la Luz viaja a The First, una versión paralela del mundo donde la Luz amenaza con aniquilarlo todo. Allí se convierte en Guerrero de la Oscuridad para salvar a sus habitantes. Es considerada una de las mejores historias en la historia de los MMORPG.", tag: "Personajes" },
        { titulo: "Endwalker y el fin del ciclo",                   texto: "Endwalker concluye la saga del Hidaelyn y Zodiark con una amenaza existencial: el Endsinger, nacido del desesperado llanto colectivo de la humanidad. La historia explora temas de depresión, esperanza y el valor de vivir, convirtiéndose en un fenómeno emocional para su comunidad.", tag: "Lore" }
      ]
    },
    "final-fantasy-6": {
      descripcion: "Final Fantasy VI (conocido como Final Fantasy III en Occidente en su lanzamiento original) es considerado por muchos el punto más alto del RPG clásico de Square. Con 14 protagonistas jugables, la historia de Terra Branford y sus aliados contra el Emperador Gestahl y el bufón-dios Kefka Palazzo ofreció una narrativa madura sobre trauma, esperanza y resistencia, acompañada de la legendaria banda sonora de Nobuo Uematsu.",
      developer: "Square",
      publisher: "Square",
      año: 1994,
      plataformas: "SNES, PS1, GBA, PC, iOS, Android",
      modos: "Un jugador",
      dificultad: {
        "Campaña principal": 50,
        "Jefes opcionales": 78,
        "Dragon's Den — GBA": 90,
        "Coliseo de Kohlingen": 65
      },
      bosses: [
        { id: "kefka-god",     nombre: "Kefka — Dios de la Magia",  zona: "Torre de Kefka — Final",      emoji: "🃏", dificultad: "Alto",    drops: "Esfera Aliento de Dios" },
        { id: "atma-weapon",   nombre: "Atma Weapon",               zona: "Tierra Flotante — Acto I",    emoji: "⚔️", dificultad: "Alto",    drops: "Esencia de Atma" },
        { id: "magic-master",  nombre: "Magic Master",              zona: "Thamasa — Acto II",            emoji: "🔮", dificultad: "Medio",   drops: "Runa mágica" },
        { id: "kaiser-dragon", nombre: "Kaiser Dragon",             zona: "Dragon's Den — GBA",           emoji: "🐉", dificultad: "Extremo", drops: "Esfera exclusiva GBA" },
        { id: "doom-gaze",     nombre: "Doom Gaze",                 zona: "Sobrevolando el mundo",        emoji: "👁️", dificultad: "Medio",   drops: "Esfera Bahamut" }
      ],
      guias: [
        { titulo: "Kefka en la Torre — estrategia para los tres cuerpos", tipo: "Boss",  minutos: 12, badge: "hot" },
        { titulo: "Todos los Espers — cómo conseguirlos todos",            tipo: "Zona",  minutos: 22, badge: "updated" },
        { titulo: "Build definitiva — Sabin y las técnicas Blitz",         tipo: "Build", minutos: 14, badge: "hot" },
        { titulo: "Kefka Palazzo — el primer villano que lo destruyó todo", tipo: "Lore", minutos: 18, badge: "new" }
      ],
      galeria: [
        { emoji: "🎪", label: "Ópera de Jidoor" },
        { emoji: "🏙️", label: "Ciudad de Vector y el Imperio" },
        { emoji: "🌋", label: "Narshe cubierta de nieve" },
        { emoji: "🃏", label: "Kefka como payaso y como dios" },
        { emoji: "🌍", label: "El mundo apocalíptico del Acto II" },
        { emoji: "✨", label: "Terra transformada en Esper" }
      ],
      lore: [
        { titulo: "Terra y los Espers — la magia como arma",         texto: "Terra Branford es una joven capaz de usar magia de forma natural en un mundo donde fue erradicada hace siglos. El Imperio Gestahl la controla mediante una corona de control mental. Su historia es una metáfora de la explotación y el descubrimiento de la propia identidad.", tag: "Personajes" },
        { titulo: "Kefka — el nihilismo encarnado como villano",     texto: "Kefka Palazzo comenzó como un bufón del Imperio, pero un experimento para crear el primer Mago de la Magia lo dejó psicológicamente roto. Su ascenso hasta convertirse en dios destructor —y el único villano de Final Fantasy que logra su objetivo de destruir el mundo— lo convierte en un personaje único.", tag: "Historia" },
        { titulo: "El Apocalipsis de Kefka y la resistencia",        texto: "En el punto medio del juego, Kefka reordena las Piedras del Mundo y destruye la civilización. El Acto II comienza en un mundo en ruinas donde los protagonistas deben reunirse de nuevo y hallar la voluntad de luchar. Es uno de los giros narrativos más audaces en la historia de los RPG.", tag: "Lore" }
      ]
    },
    "disco-elysium": {
      descripcion: "Disco Elysium es un RPG de investigación radicalmente único desarrollado por ZA/UM. Sin combate tradicional, todo se resuelve mediante habilidades de diálogo y tiradas de dado. El jugador encarna a un detective amnésico en la ciudad de Revachol, investigando un asesinato mientras intenta reconstruir su identidad política e ideológica. Sus 24 habilidades representan voces de la propia psique del protagonista.",
      developer: "ZA/UM",
      publisher: "ZA/UM",
      año: 2019,
      plataformas: "PC, PS4, PS5, Xbox One, Xbox Series",
      modos: "Un jugador",
      dificultad: {
        "Tiradas de habilidad": 60,
        "Builds especializadas": 70,
        "Narrativa y elecciones": 45,
        "Final verdadero": 65
      },
      bosses: [
        { id: "tribunal",      nombre: "El Tribunal — Confrontación final", zona: "Muelle de Martinaise — Final",  emoji: "⚖️", dificultad: "Alto",    drops: "Resolución del caso" },
        { id: "insulindian",   nombre: "La Fosa Insulindiana",               zona: "Mar del Norte",                 emoji: "🌊", dificultad: "Medio",   drops: "Visión psicodélica" },
        { id: "mega-rich",     nombre: "El Mega Rico Mercader",               zona: "Yatch — Investigación",         emoji: "💰", dificultad: "Medio",   drops: "Pista crucial" },
        { id: "clarence",      nombre: "Coupris Kineema",                     zona: "Proscenio de la muerte",        emoji: "🎪", dificultad: "Alto",    drops: "Cinta de música" },
        { id: "raphael-ambrosius", nombre: "Raphael Ambrosius Costeau",       zona: "Conversación en el bar",        emoji: "🍺", dificultad: "Medio",   drops: "Memoria recuperada" }
      ],
      guias: [
        { titulo: "Build Superstar Cop — todas las habilidades de persuasión", tipo: "Build", minutos: 15, badge: "hot" },
        { titulo: "Todas las tiradas ocultas — lista completa de checks",       tipo: "Mecánica", minutos: 20, badge: "updated" },
        { titulo: "Final verdadero de la Isla — cómo llegar al Pálido",        tipo: "Zona",  minutos: 18, badge: "new" },
        { titulo: "Lore de Revachol y el fracaso de la Revolución",            tipo: "Lore",  minutos: 25, badge: "hot" }
      ],
      galeria: [
        { emoji: "🏚️", label: "Cuarto del detective en ruinas" },
        { emoji: "🌧️", label: "Martinaise bajo la lluvia eterna" },
        { emoji: "🎨", label: "Arte callejero de Revachol" },
        { emoji: "🌊", label: "La Fosa Insulindiana" },
        { emoji: "🎪", label: "Carnaval de la investigación" },
        { emoji: "🍺", label: "El Whirling In Rags — bar de inicio" }
      ],
      lore: [
        { titulo: "Revachol y la Revolución fallida",              texto: "Revachol fue el centro de una revolución comunista que fue aplastada por una coalición de potencias internacionales décadas antes del juego. La ciudad sigue en ruinas bajo administración extranjera. El fracaso de la revolución impregna el ambiente de melancolía política y desilusión.", tag: "Historia" },
        { titulo: "El Pálido y la entropía del mundo",             texto: "El Pálido es una anomalía existencial que borra zonas de la realidad. Es una metáfora de la entropía cultural y del olvido colectivo. Las zonas que toca simplemente dejan de existir. Tiene connotaciones filosóficas sobre la memoria, el fin de las civilizaciones y la inevitabilidad del vacío.", tag: "Lore" },
        { titulo: "Las 24 habilidades como fragmentos del yo",    texto: "Las habilidades de Disco Elysium no son solo estadísticas —son voces de la psique del detective. Electrochemistry le empuja a las adicciones; Empathy le hace sentir el dolor ajeno; Inland Empire le habla de lo sobrenatural. El jugador moldea una identidad a partir de estas voces en conflicto.", tag: "Sistema" }
      ]
    },
    "hades-2": {
      descripcion: "Hades II es la secuela del aclamado roguelite de Supergiant Games. Protagonizado por Melinoë, princesa de la muerte e hija de Hades, el juego expande el mundo del Olimpo con nuevas divinidades griegas, un mayor número de biomas, hechizos y el sistema de Arcana Cards. La lucha contra el Titán Cronos ofrece más profundidad narrativa y mecánica que su predecesor.",
      developer: "Supergiant Games",
      publisher: "Supergiant Games",
      año: 2024,
      plataformas: "PC (Acceso Anticipado)",
      modos: "Un jugador",
      dificultad: {
        "Primeras runs": 65,
        "Pactos de castigo": 88,
        "Jefes intermedios": 72,
        "Cronos — jefe final": 85
      },
      bosses: [
        { id: "hecate",        nombre: "Hécate — La Bruja Oscura",   zona: "Campos Asfódelos — Tutorial", emoji: "🌙", dificultad: "Medio",   drops: "Cenizas de Hécate" },
        { id: "scylla",        nombre: "Scylla y las Sirenas",        zona: "Mar de la Soledad",            emoji: "🦑", dificultad: "Alto",    drops: "Escamas de Scylla" },
        { id: "eris",          nombre: "Eris — La Discordia",         zona: "Mar Cradle",                   emoji: "🍎", dificultad: "Extremo", drops: "Manzana dorada" },
        { id: "chronos",       nombre: "Cronos, Titán del Tiempo",    zona: "Tartarus — Final",             emoji: "⏳", dificultad: "Extremo", drops: "Fragmento de cronología" },
        { id: "cerberus",      nombre: "Cerberus",                    zona: "Puerta del Inframundo",        emoji: "🐕", dificultad: "Medio",   drops: "Collar de Cerbero" }
      ],
      guias: [
        { titulo: "Mejor build Melinoë — arma Eje del Caos + bendiciones", tipo: "Build", minutos: 18, badge: "hot" },
        { titulo: "Arcana Cards — cuáles priorizar en cada run",            tipo: "Mecánica", minutos: 14, badge: "new" },
        { titulo: "Cómo llegar a Cronos — progresión de biomas",           tipo: "Zona",  minutos: 16, badge: "updated" },
        { titulo: "Lore de Melinoë y su relación con Hades y Perséfone",   tipo: "Lore",  minutos: 20, badge: "hot" }
      ],
      galeria: [
        { emoji: "🌙", label: "Campos Asfódelos bañados de luna" },
        { emoji: "🌊", label: "El mar del Inframundo" },
        { emoji: "🌸", label: "Jardines de Elíseo" },
        { emoji: "⏳", label: "El dominio de Cronos" },
        { emoji: "🔮", label: "Melinoë y su magia de sombras" },
        { emoji: "🏛️", label: "El Olimpo reconstruido" }
      ],
      lore: [
        { titulo: "Melinoë y la familia de Hades",          texto: "Melinoë es la hija menor de Hades y Perséfone, criada en secreto por Hécate para convertirse en la única capaz de enfrentarse a Cronos. A diferencia de Zagreus, su hermano, Melinoë es seria, disciplinada y lleva la carga del deber desde su infancia.", tag: "Personajes" },
        { titulo: "El ascenso de Cronos desde el Tártaro",  texto: "Cronos, el Titán del Tiempo, ha escapado del Tártaro y sometido al propio Hades. Su poder sobre el tiempo le permite anticipar los ataques y manipular el campo de batalla. La misión de Melinoë es liberar a su padre y devolver el orden al Inframundo.", tag: "Historia" },
        { titulo: "El sistema de biomas y el Inframundo ampliado", texto: "Hades II expande el Inframundo con regiones inéditas: el Mar de la Soledad, los Campos del Pecado y el dominio de Cronos. Cada zona tiene su propio diseño visual, enemigos únicos y jefes con mecánicas propias, duplicando el contenido del primer juego.", tag: "Sistema" }
      ]
    },
    "dead-cells": {
      descripcion: "Dead Cells es un roguelite metroidvania de Motion Twin donde el jugador encarna a una masa de células que habita cadáveres en una isla-prisión maldita. Cada run genera un mapa procedural con encuentros, armas y mejoras aleatorias. El combate es veloz, con armas cuerpo a cuerpo, a distancia y habilidades, y los jefes requieren memorizar patrones muy exigentes.",
      developer: "Motion Twin / Evil Empire",
      publisher: "Motion Twin",
      año: 2018,
      plataformas: "PC, PS4, PS5, Xbox, Switch, iOS, Android",
      modos: "Un jugador",
      dificultad: {
        "Boss Cell 0 (Normal)": 60,
        "Boss Cell 3": 80,
        "Boss Cell 5 (Máximo)": 95,
        "Jefes principales": 75
      },
      bosses: [
        { id: "the-hand",       nombre: "The Hand of the King",      zona: "Trono del Rey — Final B.C.0",   emoji: "👑", dificultad: "Alto",    drops: "Célula de Jefe" },
        { id: "the-servants",   nombre: "The Servants",               zona: "Castillo del Oblivión — B.C.5", emoji: "🤺", dificultad: "Extremo", drops: "Runa de dificultad" },
        { id: "conjunctivius",  nombre: "Conjunctivius",              zona: "Aguas Residuales",               emoji: "👁️", dificultad: "Medio",   drops: "Ojo de Bestia" },
        { id: "giant",          nombre: "The Giant",                  zona: "Relojes de Arena — Mid",        emoji: "🗿", dificultad: "Alto",    drops: "Runa de Movimiento" },
        { id: "slumbering",     nombre: "The Slumbering Sanctuary Boss", zona: "Santuario Dormido",          emoji: "🐝", dificultad: "Medio",   drops: "Runa de bioma" }
      ],
      guias: [
        { titulo: "Boss Cell 5 — cómo llegar a la dificultad máxima",      tipo: "Guía", minutos: 20, badge: "hot" },
        { titulo: "Las mejores sinergias de armas — guía de combos",        tipo: "Build", minutos: 16, badge: "updated" },
        { titulo: "Todas las runas — localización y desbloqueo",            tipo: "Zona",  minutos: 18, badge: "hot" },
        { titulo: "Lore de la isla-prisión — la enfermedad y el Rey",       tipo: "Lore",  minutos: 14, badge: "new" }
      ],
      galeria: [
        { emoji: "🏰", label: "Castillo infestado al amanecer" },
        { emoji: "🌿", label: "Bioma de jardines letales" },
        { emoji: "🕯️", label: "Cripta en las profundidades" },
        { emoji: "🌊", label: "Costa de los Naufragios" },
        { emoji: "❄️", label: "Pico nevado de hielo" },
        { emoji: "🔥", label: "Relojes de Arena en llamas" }
      ],
      lore: [
        { titulo: "La Enfermedad Maligna y el origen de la isla",   texto: "La isla-prisión fue devastada por una enfermedad llamada La Maligna que convirtió a sus habitantes en criaturas. El Rey trató de contenerla encerrando a todos en la isla. La masa de células que controla el jugador es un experimento del alquimista que busca la forma de escapar.", tag: "Historia" },
        { titulo: "El ciclo de muerte y las células",               texto: "Al morir, el jugador regresa al inicio como una nueva célula que habita otro cadáver. Las memorias y habilidades permanecen en el castillo. Este ciclo está explicado por el experimento del alquimista que buscaba la inmortalidad a través de la transferencia de conciencia.", tag: "Lore" },
        { titulo: "Boss Cells y la dificultad escalada",            texto: "Cada vez que el jugador derrota al jefe final, puede activar una célula adicional que aumenta permanentemente la dificultad de todas las runs. Las Boss Cells añaden enemigos, reducen salud y potencian a los jefes, creando una escalada de desafío opcional pero extrema.", tag: "Sistema" }
      ]
    },
    "slay-the-spire": {
      descripcion: "Slay the Spire es el roguelite de cartas que popularizó el género deckbuilding roguelite. Desarrollado por MegaCrit, ofrece cuatro personajes con mazos únicos, reliquias que modifican las reglas del juego y una torre de tres actos con un jefe secreto. Cada run genera una combinación distinta de cartas y reliquias, haciendo que nunca dos partidas sean iguales.",
      developer: "MegaCrit",
      publisher: "Humble Bundle",
      año: 2019,
      plataformas: "PC, PS4, Xbox One, Switch, iOS, Android",
      modos: "Un jugador",
      dificultad: {
        "Actos 1-3 (Normal)": 55,
        "Heart Run (Acto 4)": 82,
        "Ascensión 20": 95,
        "Personaje Watcher": 70
      },
      bosses: [
        { id: "the-heart",      nombre: "The Corrupt Heart",          zona: "Acto 4 — Secreto",              emoji: "❤️", dificultad: "Extremo", drops: "Victoria del run" },
        { id: "act3-boss",      nombre: "Time Eater / Awakened One",  zona: "Acto 3 — Final",               emoji: "⏰", dificultad: "Alto",    drops: "Clave del Acto 4" },
        { id: "bronze-automaton", nombre: "Bronze Automaton",         zona: "Acto 2 — Final",               emoji: "🤖", dificultad: "Alto",    drops: "Reliquia de bronce" },
        { id: "guardian",       nombre: "The Guardian",               zona: "Acto 1 — Final",               emoji: "🛡️", dificultad: "Medio",   drops: "Reliquia de roca" },
        { id: "hexaghost",      nombre: "Hexaghost",                  zona: "Acto 1 — Alternativo",         emoji: "👻", dificultad: "Medio",   drops: "Reliquia fantasma" }
      ],
      guias: [
        { titulo: "Cómo conseguir la llave para el Corazón — guía paso a paso", tipo: "Zona",  minutos: 15, badge: "hot" },
        { titulo: "Las mejores reliquias del juego — tier list actualizada",     tipo: "Mecánica", minutos: 18, badge: "updated" },
        { titulo: "Build Watcher infinita — combo de stance y daño masivo",     tipo: "Build", minutos: 14, badge: "hot" },
        { titulo: "Ascensión 20 — cómo llegar al máximo desafío",              tipo: "Guía",  minutos: 20, badge: "new" }
      ],
      galeria: [
        { emoji: "🏰", label: "La Aguja ascendiendo en la niebla" },
        { emoji: "🌿", label: "Ruinas del Acto 1" },
        { emoji: "🕯️", label: "Catacumbas del Acto 2" },
        { emoji: "⛰️", label: "Cima de la Aguja — Acto 3" },
        { emoji: "❤️", label: "El Corazón Corrupto" },
        { emoji: "🃏", label: "Mano de cartas" }
      ],
      lore: [
        { titulo: "La Aguja y su misterio",                  texto: "La Aguja es una torre surgida misteriosamente en las tierras de Spire. Nadie conoce su origen exacto. Los aventureros que intentan escalarla rara vez regresan. Las entidades que la habitan parecen tener una conciencia propia que va más allá de simples monstruos.", tag: "Historia" },
        { titulo: "El Corazón Corrupto",                     texto: "Al final de la Aguja vive El Corazón, una entidad pulsante que parece ser el núcleo del mal de la torre. Solo aparece cuando el jugador ha recolectado tres objetos clave en los actos anteriores. Derrotarlo es el reto final del juego y revela fragmentos de la naturaleza de la Aguja.", tag: "Lore" },
        { titulo: "Los cuatro personajes y su visión del mundo", texto: "El Ironclad es un guerrero maldito que busca purgar su oscuridad. La Silent es una asesina envenenada. El Defect es un autómata que ganó conciencia. La Watcher es una monje cósmica que ve el futuro. Cada uno tiene motivaciones únicas para escalar la Aguja.", tag: "Personajes" }
      ]
    },
    "returnal": {
      descripcion: "Returnal es el roguelite de tercera persona de Housemarque que fusiona el bullet-hell con la exploración de ciencia ficción. La astronauta Selene queda atrapada en un bucle temporal en el planeta Atropos, muriendo y reviviendo sin cesar. Combina una narrativa psicológica profunda con un combate frenético de esquiva y armas alienígenas, y es uno de los roguelites más exigentes y aclamados de PS5.",
      developer: "Housemarque",
      publisher: "PlayStation Studios",
      año: 2021,
      plataformas: "PS5, PC",
      modos: "Un jugador, Co-op 2 jugadores (parches post-lanzamiento)",
      dificultad: {
        "Primeros Ciclos": 80,
        "Jefes de bioma": 88,
        "Acto II — Biomas 4-6": 92,
        "Final verdadero": 90
      },
      bosses: [
        { id: "phrike",        nombre: "Phrike",                     zona: "Bioma 1 — Bosque Overgrown",   emoji: "🕷️", dificultad: "Alto",    drops: "Artefacto Phrike" },
        { id: "ixion",         nombre: "Ixion",                      zona: "Bioma 2 — Las Colmenas",       emoji: "🦋", dificultad: "Alto",    drops: "Artefacto Ixion" },
        { id: "nemesis",       nombre: "Nemesis",                    zona: "Bioma 3 — Precipicio Decrépito", emoji: "⚡", dificultad: "Extremo", drops: "Artefacto Nemesis" },
        { id: "hyperion",      nombre: "Hyperion",                   zona: "Bioma 4 — Ribera de las Lamentaciones", emoji: "🎵", dificultad: "Extremo", drops: "Artefacto Hyperion" },
        { id: "ophion",        nombre: "Ophion",                     zona: "Bioma 6 — Catacumbas — Final", emoji: "🌀", dificultad: "Extremo", drops: "Resolución del bucle" }
      ],
      guias: [
        { titulo: "Cómo superar Phrike en el primer intento — consejos",  tipo: "Boss",  minutos: 12, badge: "hot" },
        { titulo: "Armas de Atropos — tier list y mejores combinaciones",  tipo: "Mecánica", minutos: 18, badge: "updated" },
        { titulo: "Final verdadero — cómo obtener las 6 claves",          tipo: "Zona",  minutos: 20, badge: "new" },
        { titulo: "Lore de Selene — teorías sobre el bucle y Atropos",    tipo: "Lore",  minutos: 22, badge: "hot" }
      ],
      galeria: [
        { emoji: "🌿", label: "Bosque bioluminiscente de Atropos" },
        { emoji: "🏚️", label: "Casa de Selene — recuerdo del bucle" },
        { emoji: "🌊", label: "Ribera de las Lamentaciones" },
        { emoji: "🌌", label: "El cielo alienígena de Atropos" },
        { emoji: "⚡", label: "Sala de Nemesis — bullet hell" },
        { emoji: "🔮", label: "El Obelisco y el final verdadero" }
      ],
      lore: [
        { titulo: "El bucle de Atropos y la psique de Selene",       texto: "Cada muerte de Selene reinicia el ciclo. A lo largo de las runs, encuentra grabaciones de audio, mensajes en las paredes y cadáveres de versiones anteriores de sí misma. El planeta Atropos parece estar construido por —o para— Selene específicamente, fusionando realidad y memoria.", tag: "Lore" },
        { titulo: "Los Xénoglifos y la civilización perdida",        texto: "Atropos está llena de ruinas de una civilización alienígena. Los Xénoglifos son inscripciones que Selene va descifrando progresivamente. Revelan que entidades antiguas transformaron el planeta en una máquina de ciclos temporales con un propósito que el jugador descubre en el final verdadero.", tag: "Historia" },
        { titulo: "El final de Icaro — metáfora y narrativa ambiental", texto: "La narrativa de Returnal es intencionalmente fragmentada. Selene parece haber estado en Atropos desde mucho antes de su misión. Las referencias al mito de Ícaro —volar demasiado alto y caer— impregnan el juego. El final sugiere que el bucle no es solo externo, sino también psicológico.", tag: "Personajes" }
      ]
    },
    "monster-hunter-wilds": {
      descripcion: "Monster Hunter Wilds es la entrega más reciente y ambiciosa de la saga de Capcom, presentando ecosistemas vivos que cambian con el clima y los ciclos naturales. Con caza cooperativa para 4 jugadores, 14 tipos de armas y un nuevo compañero Seikret además del Palico, ofrece la experiencia de cacería más cinematográfica hasta la fecha. El Terreno Árido y la mecánica de Tormenta desatan combates de enorme escala.",
      developer: "Capcom",
      publisher: "Capcom",
      año: 2025,
      plataformas: "PC, PS5, Xbox Series",
      modos: "Un jugador, Co-op 4 jugadores",
      dificultad: {
        "Historia principal": 55,
        "Tempered Monsters": 80,
        "Arch-Tempered": 92,
        "Armas de alta destreza": 75
      },
      bosses: [
        { id: "arkveld",        nombre: "Arkveld",                    zona: "Abismo Perdido — Final",       emoji: "🐉", dificultad: "Extremo", drops: "Escama de Arkveld" },
        { id: "nu-udra",        nombre: "Nu Udra",                    zona: "Pantanos Nocturnos",            emoji: "🐙", dificultad: "Alto",    drops: "Tentáculo de Nu Udra" },
        { id: "balahara",       nombre: "Balahara",                   zona: "Costa de las Mareas",           emoji: "🦈", dificultad: "Medio",   drops: "Aleta de Balahara" },
        { id: "doshaguma",      nombre: "Doshaguma",                  zona: "Llanuras del Viento",           emoji: "🦁", dificultad: "Medio",   drops: "Pelaje de Doshaguma" },
        { id: "gore-magala-w",  nombre: "Gore Magala",                zona: "Zona de Caos — Tormenta",      emoji: "🌑", dificultad: "Alto",    drops: "Escama de Caos" }
      ],
      guias: [
        { titulo: "Arkveld Arch-Tempered — guía de caza completa",           tipo: "Boss",  minutos: 18, badge: "hot" },
        { titulo: "Las 14 armas explicadas — cuál elegir para empezar",       tipo: "Mecánica", minutos: 25, badge: "new" },
        { titulo: "Mejor build Espadón Grande para endgame",                  tipo: "Build", minutos: 16, badge: "hot" },
        { titulo: "Ecosistema de las Tierras Yermas — guía de zonas",         tipo: "Zona",  minutos: 20, badge: "updated" }
      ],
      galeria: [
        { emoji: "🏜️", label: "Terreno Árido bajo la Tormenta" },
        { emoji: "🌿", label: "Jungla de Sekia — ecosistema vivo" },
        { emoji: "🌊", label: "Costa de las Mareas" },
        { emoji: "🌑", label: "Pantanos bajo la luna" },
        { emoji: "🐉", label: "Arkveld en pleno vuelo" },
        { emoji: "🏕️", label: "Campamento base del Gremio" }
      ],
      lore: [
        { titulo: "Las Tierras Yermas y el Ciclo de la Naturaleza",   texto: "Las Tierras Yermas son una región misteriosamente aislada del mundo conocido. Su ecosistema funciona en ciclos de tormenta y calma que determinan el comportamiento de los monstruos. El Gremio de Cazadores envía una expedición para estudiar estos ciclos y el origen de los Arkveld.", tag: "Historia" },
        { titulo: "Los Arkveld — dragones del Abismo",                texto: "Los Arkveld son dragones ancestrales de naturaleza desconocida que han absorbido energía vital de otros monstruos. Su relación con el Qurio —parásito del caos— los convierte en amenazas únicas. Investigar su origen revela verdades sobre el pasado de las Tierras Yermas.", tag: "Lore" },
        { titulo: "El Gremio de Cazadores y el código de la caza",    texto: "El Gremio regula la caza para mantener el equilibrio del ecosistema. Los cazadores no destruyen, sino que participan en la cadena. Esta filosofía es central en la saga: cazar no es exterminar, sino coexistir y comprender. Wilds profundiza en esto con monstruos que tienen familias y territorios.", tag: "Sistema" }
      ]
    },
    "lies-of-p": {
      descripcion: "Lies of P es el soulslike de Neowiz que reimagina el cuento de Pinocho en un mundo steampunk oscuro llamado Krat. El jugador encarna a P, una marioneta que busca a su creador Geppetto mientras la ciudad es devastada por marionetas enloquecidas y una misteriosa enfermedad. Su sistema de mentiras —que afecta al desarrollo narrativo— y la personalización de armas mediante partes intercambiables lo distinguen del género.",
      developer: "Neowiz / Round8 Studio",
      publisher: "Neowiz",
      año: 2023,
      plataformas: "PC, PS4, PS5, Xbox One, Xbox Series",
      modos: "Un jugador",
      dificultad: {
        "Dificultad global": 78,
        "Jefes de guardia perfecta": 85,
        "Builds avanzadas": 72,
        "Jefes opcionales": 88
      },
      bosses: [
        { id: "parade-master",   nombre: "Parade Master",             zona: "Entrada de Krat — Inicio",    emoji: "🎪", dificultad: "Alto",    drops: "Corazón de Arlequín" },
        { id: "romeo",           nombre: "Romeo, King of Puppets",    zona: "Gran Teatro — Acto 4",         emoji: "🤺", dificultad: "Extremo", drops: "Alma del Rey de Marionetas" },
        { id: "fuoco",           nombre: "Fuoco, el Cocinero de Fuego", zona: "Fábrica de Krat",           emoji: "🔥", dificultad: "Alto",    drops: "Corazón de Fuoco" },
        { id: "laxasia",         nombre: "Laxasia the Complete",      zona: "Abismo de Arche — Final",      emoji: "⚡", dificultad: "Extremo", drops: "Ojo de Laxasia" },
        { id: "simon-manus",     nombre: "Simon Manus — God of Arche", zona: "Tumba de los Señores",        emoji: "👁️", dificultad: "Extremo", drops: "Alma de Manus" }
      ],
      guias: [
        { titulo: "Romeo — cómo dominar la guardia perfecta en su segunda fase", tipo: "Boss",  minutos: 14, badge: "hot" },
        { titulo: "Sistema de armas Lies of P — mejores combinaciones de partes", tipo: "Mecánica", minutos: 18, badge: "updated" },
        { titulo: "Build Motricidad pura — el mejor camino del guerrero",        tipo: "Build", minutos: 15, badge: "hot" },
        { titulo: "Todos los finales — cómo conseguir el final verdadero",        tipo: "Zona",  minutos: 16, badge: "new" }
      ],
      galeria: [
        { emoji: "🏙️", label: "Krat al anochecer steampunk" },
        { emoji: "🎪", label: "Gran Desfile de Marionetas" },
        { emoji: "🏭", label: "Fábrica de Krat en llamas" },
        { emoji: "🌧️", label: "Calles de Krat bajo la lluvia" },
        { emoji: "🌹", label: "Hotel Krat — refugio de supervivientes" },
        { emoji: "⚙️", label: "Mecanismo interior de una marioneta" }
      ],
      lore: [
        { titulo: "Krat y la Enfermedad de la Petrificación",        texto: "Krat es una ciudad industrial donde las marionetas de Ergo —una sustancia misteriosa— realizaban todo el trabajo. Cuando enloquecieron por razones desconocidas, masacraron a sus dueños. Paralelamente, una enfermedad que petrifica a los humanos avanza sin control. P debe sobrevivir entre ambas amenazas.", tag: "Historia" },
        { titulo: "El Ergo y la naturaleza de P",                    texto: "El Ergo es la energía vital que da movimiento a las marionetas y que también puede usarse como moneda. P es único: puede mentir, lo que en el mundo del cuento representa la capacidad de sentir. Cada mentira que dice lo hace más humano, acercándolo a la verdadera vida.", tag: "Lore" },
        { titulo: "Geppetto y los secretos de Arche",               texto: "Geppetto no es el padre bondadoso del cuento. Sus motivos son oscuros y complejos: busca usar a P para alcanzar algo en Arche, el reino celestial. Los finales alternativos revelan distintas facetas de su carácter y el verdadero coste de dar vida a una marioneta.", tag: "Personajes" }
      ]
    },
    "lords-of-the-fallen": {
      descripcion: "Lords of the Fallen (2023) es el soulslike de HEXWORKS que introduce el sistema de dos mundos paralelos: Axiom (el mundo de los vivos) y Umbral (el mundo de los muertos). La linterna Umbral permite al jugador ver entre ambos mundos y resolver puzzles o acceder a zonas exclusivas del reino de los muertos. Con un mundo interconectado de gran escala y jefes imponentes, es uno de los soulslikes más ambiciosos fuera de FromSoftware.",
      developer: "HEXWORKS",
      publisher: "CI Games",
      año: 2023,
      plataformas: "PC, PS5, Xbox Series",
      modos: "Un jugador, Co-op 2 jugadores",
      dificultad: {
        "Dificultad global": 75,
        "Mundo Umbral — acumulación": 82,
        "Jefes principales": 78,
        "Final de Umbral": 88
      },
      bosses: [
        { id: "pieta",           nombre: "Pieta, She of Blessed Renewal", zona: "Puerta de Mournstead — Inicio", emoji: "🕊️", dificultad: "Alto",    drops: "Ala de Pieta" },
        { id: "spurned-progeny", nombre: "Spurned Progeny",               zona: "Abadía de la Condena",          emoji: "🗿", dificultad: "Alto",    drops: "Piedra Umbral" },
        { id: "congregator",     nombre: "Congregator of Flesh",          zona: "Santuario de la Carne",          emoji: "🧟", dificultad: "Medio",   drops: "Masa de Carne" },
        { id: "adyr",            nombre: "Adyr, the Bereft Exile",        zona: "Bramis Castle — Final",          emoji: "👿", dificultad: "Extremo", drops: "Trofeo de Adyr" },
        { id: "rapturous-huntress", nombre: "Rapturous Huntress of the Dread Witch", zona: "Laberinto Umbral", emoji: "🏹", dificultad: "Alto", drops: "Flecha del Éxtasis" }
      ],
      guias: [
        { titulo: "Pieta en el primer intento — guía para nuevos Creyentes",   tipo: "Boss",  minutos: 12, badge: "hot" },
        { titulo: "Mundo Umbral — cómo no morir de acumulación de almas",      tipo: "Mecánica", minutos: 15, badge: "new" },
        { titulo: "Build Radiance — el mejor mago del juego completa",         tipo: "Build", minutos: 18, badge: "updated" },
        { titulo: "Todos los finales — el verdadero y los alternativos",        tipo: "Zona",  minutos: 16, badge: "hot" }
      ],
      galeria: [
        { emoji: "🏰", label: "Mournstead — ciudad en dos mundos" },
        { emoji: "💀", label: "Umbral — reino de los muertos" },
        { emoji: "🌅", label: "Axiom al amanecer" },
        { emoji: "🕯️", label: "Catacumbas de la Condena" },
        { emoji: "🌑", label: "Laberinto Umbral nocturno" },
        { emoji: "🏛️", label: "Castillo de Bramis" }
      ],
      lore: [
        { titulo: "Axiom y Umbral — los dos reinos de Mournstead",   texto: "En Mournstead existen dos reinos superpuestos: Axiom, el mundo de los vivos, y Umbral, el mundo de los muertos. La linterna Umbral permite al Portador de la Maldición ver entre ambos. Umbral es peligroso: cuanto más tiempo pasa en él el jugador, más poderosas son las entidades que acuden.", tag: "Sistema" },
        { titulo: "Adyr y la Gran Cruzada",                          texto: "Adyr es el dios oscuro que fue derrotado y encarcelado siglos atrás por los Creyentes de Orius. La Gran Cruzada de los Creyentes destruyó a sus seguidores. Ahora el sello que lo aprisiona se debilita, y el jugador debe decidir si liberarlo, sustituirlo o imponer un nuevo orden.", tag: "Historia" },
        { titulo: "Los Creyentes y las cinco clases de Umbral",     texto: "La sociedad de Mournstead gira en torno a la fe en Orius. Cada clase del juego representa una filosofía diferente: el Devoto confía en la luz, el Renegado la rechaza, el Heretic busca el poder de Umbral. Estas tensiones reflejan conflictos reales sobre la fe, el poder y la corrupción.", tag: "Personajes" }
      ]
    },
    "nioh-2": {
      descripcion: "Nioh 2 es la precuela del soulslike de Team Ninja ambientado en el Japón feudal del siglo XVI. El jugador crea a Hide, un semi-yokai que puede entrar en el estado Yokai Shift para transformarse y usar poderes sobrenaturales. Con un sistema de tres posiciones de espada (alta, media y baja), mecánicas de Ki Pulse y un arsenal de armas tradicionales japonesas, ofrece uno de los combates más técnicos y profundos del género.",
      developer: "Team Ninja",
      publisher: "Koei Tecmo",
      año: 2020,
      plataformas: "PS4, PS5, PC",
      modos: "Un jugador, Co-op 3 jugadores",
      dificultad: {
        "Historia principal": 78,
        "Misiones de umbral — NG+2": 88,
        "Yokai de alta dificultad": 82,
        "Maestro de armas — perfección": 90
      },
      bosses: [
        { id: "magara-naotaka",  nombre: "Magara Naotaka",             zona: "La Cueva Roja — Inicio",       emoji: "🔥", dificultad: "Alto",    drops: "Alma de Naotaka" },
        { id: "otakemaru",       nombre: "Otakemaru",                  zona: "Castillo de Omi — Final",       emoji: "👹", dificultad: "Extremo", drops: "Gran Alma de Yokai" },
        { id: "shuten-doji",     nombre: "Shuten-Doji",                zona: "Monte Ibuki",                   emoji: "🍶", dificultad: "Extremo", drops: "Cuerno de Shuten" },
        { id: "shibata-katsuie", nombre: "Shibata Katsuie",            zona: "Castillo de Echizen",           emoji: "⚔️", dificultad: "Alto",    drops: "Nue — alma yokai" },
        { id: "nobunaga",        nombre: "Oda Nobunaga — El Demonio",  zona: "Castillo de Azuchi — DLC",     emoji: "👺", dificultad: "Extremo", drops: "Alma del Demonio de Owari" }
      ],
      guias: [
        { titulo: "Ki Pulse y Yokai Shift — dominar las mecánicas avanzadas",    tipo: "Mecánica", minutos: 20, badge: "hot" },
        { titulo: "Mejor build Odachi para Otakemaru en Dream of the Nioh",      tipo: "Build", minutos: 18, badge: "updated" },
        { titulo: "Todas las Almas de Yokai — cómo obtenerlas y combinarlas",   tipo: "Zona",  minutos: 22, badge: "hot" },
        { titulo: "Lore de Hide y el Japón feudal yokai",                         tipo: "Lore",  minutos: 16, badge: "new" }
      ],
      galeria: [
        { emoji: "⛩️", label: "Santuario sintoísta en la montaña" },
        { emoji: "🌸", label: "Castillo bajo los cerezos" },
        { emoji: "🌊", label: "Costa del Pacífico en tormenta" },
        { emoji: "🔥", label: "Pueblo en llamas yokai" },
        { emoji: "🌙", label: "Campo de batalla nocturno" },
        { emoji: "👹", label: "Transformación Yokai Shift" }
      ],
      lore: [
        { titulo: "Hide y el origen de los semiyokai",         texto: "Hide es hijo de un humano y un yokai. Esta dualidad le da acceso a poderes sobrenaturales pero también lo convierte en un paria: ni humano ni yokai. Su viaje transcurre durante el período Sengoku, cruzándose con figuras históricas reales como Toyotomi Hideyoshi y Oda Nobunaga.", tag: "Personajes" },
        { titulo: "Los Amrita y la guerra por el poder espiritual", texto: "El Amrita es una sustancia espiritual de enorme poder que los daimyos del juego buscan para dominar Japón. Su uso excesivo despierta a los yokai y corrompe a sus portadores. Esta mezcla de historia real y mitología japonesa es el sello de la saga Nioh.", tag: "Historia" },
        { titulo: "El Yokai Realm y las guaridas de oscuridad",  texto: "Las Guaridas de Yokai son zonas donde el Yokai Realm irrumpe en el mundo humano. Dentro de ellas, el Ki del jugador se regenera más lento y los enemigos son más agresivos. El estado Yokai Shift permite a Hide sobrevivir en estas zonas usando su naturaleza sobrenatural.", tag: "Sistema" }
      ]
    },
    "last-epoch": {
      descripcion: "Last Epoch es el ARPG de Eleventh Hour Games que combina viaje en el tiempo, un sistema de crafting de items profundísimo y una progresión de personaje altamente personalizable. Con 5 clases maestras y 15 ascendencias, y un sistema de habilidades con árboles propios por habilidad, compite directamente con Path of Exile en profundidad de builds. Su modo multijugador online y las temporadas en línea lo convierten en una alternativa moderna y accesible al género.",
      developer: "Eleventh Hour Games",
      publisher: "Eleventh Hour Games",
      año: 2024,
      plataformas: "PC",
      modos: "Un jugador, Multijugador online, Temporadas",
      dificultad: {
        "Campaña principal": 50,
        "Corruption — endgame": 82,
        "Monolith of Fate alto": 88,
        "Builds complejas": 78
      },
      bosses: [
        { id: "lagon",           nombre: "Lagon",                      zona: "Océano del Norte — Acto 8",   emoji: "🌊", dificultad: "Alto",    drops: "Escama de Lagon" },
        { id: "the-void-touched", nombre: "Void Touched Abomination",  zona: "Monolith — Endgame",           emoji: "🌑", dificultad: "Extremo", drops: "Esencia del Vacío" },
        { id: "emperor-of-frost", nombre: "Emperor of Frost",          zona: "Era del Hielo — Tiempo pasado", emoji: "❄️", dificultad: "Alto",   drops: "Cristal de tiempo" },
        { id: "harton",          nombre: "Harton, Seeker of Answers",  zona: "Templo del Tiempo",            emoji: "⏳", dificultad: "Medio",   drops: "Fragmento temporal" },
        { id: "rahyeh",          nombre: "Rahyeh, the Black Sun",      zona: "Fin de los tiempos — Final",   emoji: "🌑", dificultad: "Extremo", drops: "Oscuridad del Sol Negro" }
      ],
      guias: [
        { titulo: "Mejor build Falconeer para empezar temporada — guía",      tipo: "Build", minutos: 18, badge: "hot" },
        { titulo: "Crafting de items explicado — el sistema más profundo del género", tipo: "Mecánica", minutos: 25, badge: "new" },
        { titulo: "Monolith of Fate — cómo progresar en el endgame",          tipo: "Zona",  minutos: 20, badge: "updated" },
        { titulo: "Todas las ascendencias — cuál es la mejor para cada clase", tipo: "Guía",  minutos: 22, badge: "hot" }
      ],
      galeria: [
        { emoji: "🌊", label: "Puerto de Eterra bajo la lluvia" },
        { emoji: "❄️", label: "Tundra del tiempo pasado" },
        { emoji: "🏜️", label: "Desierto de la Era Antigua" },
        { emoji: "🌑", label: "El Vacío avanzando" },
        { emoji: "⏳", label: "Portal temporal" },
        { emoji: "🏙️", label: "Ciudad de Maj'Elka en ruinas" }
      ],
      lore: [
        { titulo: "El Vacío y el fin de la humanidad",              texto: "En Last Epoch, el Vacío es una fuerza de entropía que ha destruido el futuro de la civilización. El jugador viaja entre distintas eras del tiempo —pasado, presente y futuro— para encontrar la forma de alterar el destino de Eterra y evitar la extinción de la humanidad.", tag: "Historia" },
        { titulo: "Los Dioses del Tiempo y el Círculo de la Fortuna", texto: "Eterra es gobernada por deidades que representan el tiempo y el ciclo natural. El Círculo de la Fortuna es una facción que cree en el destino. Los Comerciantes son pragmáticos. La tensión entre estas facciones da forma a la narrativa del juego.", tag: "Personajes" },
        { titulo: "El Monolith of Fate y el endgame temporal",      texto: "El Monolith of Fate es la actividad principal del endgame: el jugador recorre ecos de tiempos alternativos, cada vez más difíciles. Al completar líneas temporales, desbloquea jefes únicos y recompensas. El sistema refleja el tema narrativo central del juego: el destino puede cambiarse, pero a un coste.", tag: "Sistema" }
      ]
    },
    "torchlight-infinite": {
      descripcion: "Torchlight: Infinite es el ARPG free-to-play de XD Entertainment que adapta la fórmula de la saga Torchlight al modelo de juego en línea con temporadas. Con héroes pregenerados de clase única, un sistema de gemas y fichas de habilidades altamente personalizable y una economía de temporada, compite en el espacio de ARPGs accesibles junto a Diablo IV y Last Epoch.",
      developer: "XD Entertainment",
      publisher: "Perfect World Entertainment",
      año: 2022,
      plataformas: "PC, iOS, Android",
      modos: "Un jugador, Multijugador online, Temporadas",
      dificultad: {
        "Historia principal": 40,
        "Temporadas endgame": 75,
        "Jefes de temporada": 82,
        "Builds de Liga": 70
      },
      bosses: [
        { id: "netherrealm-guardian", nombre: "Netherrealm Guardian",  zona: "Abismo del Nether — Endgame", emoji: "🌑", dificultad: "Extremo", drops: "Esencia Nether" },
        { id: "season-boss",          nombre: "Jefe de Temporada",      zona: "Zona de temporada activa",    emoji: "🌟", dificultad: "Alto",    drops: "Recompensa de liga" },
        { id: "void-tyrant",          nombre: "Void Tyrant",            zona: "Grieta del Vacío",            emoji: "👁️", dificultad: "Alto",    drops: "Cristal del Vacío" },
        { id: "ancient-golem",        nombre: "Ancient Golem",          zona: "Ruinas de Torchlight",        emoji: "🗿", dificultad: "Medio",   drops: "Núcleo de Golem" },
        { id: "ember-dragon",         nombre: "Ember Dragon",           zona: "Montañas del Ember",          emoji: "🔥", dificultad: "Medio",   drops: "Escama de Ember" }
      ],
      guias: [
        { titulo: "Mejor héroe para empezar la temporada actual",           tipo: "Build", minutos: 14, badge: "hot" },
        { titulo: "Sistema de Fichas de Pact — guía completa de crafting",  tipo: "Mecánica", minutos: 18, badge: "new" },
        { titulo: "Cómo farmear materiales de temporada eficientemente",    tipo: "Zona",  minutos: 16, badge: "updated" },
        { titulo: "Lore de Torchlight — la historia del mundo de Ember",    tipo: "Lore",  minutos: 12, badge: "hot" }
      ],
      galeria: [
        { emoji: "🌋", label: "Montañas de Ember en erupción" },
        { emoji: "🏙️", label: "Ciudad de Ember bajo la lluvia" },
        { emoji: "🌿", label: "Jungla de Nether" },
        { emoji: "❄️", label: "Tundra de la temporada de hielo" },
        { emoji: "🌑", label: "Abismo del Nether" },
        { emoji: "⚙️", label: "Mecanismo de Torchlight" }
      ],
      lore: [
        { titulo: "El Ember y la magia del mundo de Torchlight",     texto: "El mundo de Torchlight está impregnado de Ember, una sustancia mágica que da poder a quien la usa pero corrompe a los seres que la consumen en exceso. Las ciudades se construyen alrededor de yacimientos de Ember, y la codicia por este recurso alimenta los conflictos del mundo.", tag: "Historia" },
        { titulo: "Los Héroes de Torchlight — Infinite",             texto: "A diferencia de los anteriores Torchlight donde el jugador creaba su personaje, Infinite presenta Héroes pregenerados con trasfondos únicos: Moto la inventora, Rehan el guerrero elemental, Gemma la médico del vacío. Cada uno tiene habilidades exclusivas que el jugador personaliza con el sistema de fichas.", tag: "Personajes" },
        { titulo: "El sistema de temporadas y la narrativa cambiante", texto: "Cada temporada de Torchlight: Infinite introduce una nueva zona, mecánica y arco narrativo. Al terminar la temporada, el contenido se integra al juego base. Este modelo permite mantener la narrativa viva y ofrece a los jugadores razones constantes para volver.", tag: "Sistema" }
      ]
    },
    "binding-of-isaac": {
      descripcion: "The Binding of Isaac: Rebirth es el roguelite de Edmund McMillen y Nicalis que mezcla mazmorras generadas proceduralmente con temática bíblica oscura y un humor perturbador. Inspirado en La Leyenda de Zelda, el jugador encarna a Isaac huyendo de su madre. Con más de 700 objetos, cientos de combinaciones de sinergias y DLCs masivos como Afterbirth+, Repentance y Repentance+, es uno de los roguelites más completos de la historia.",
      developer: "Edmund McMillen / Nicalis",
      publisher: "Nicalis",
      año: 2014,
      plataformas: "PC, PS4, PS5, Xbox, Switch, Vita, iOS",
      modos: "Un jugador, Co-op local 2 jugadores (Repentance)",
      dificultad: {
        "Primeras runs": 50,
        "Curses y Boss Rush": 78,
        "Desolación — Void y Mega Satan": 88,
        "Bestiary completo — todos los logros": 95
      },
      bosses: [
        { id: "mega-satan",     nombre: "Mega Satan",                 zona: "Mega Llave — Puerta Dorada",  emoji: "👹", dificultad: "Extremo", drops: "Trofeo dorado" },
        { id: "hush",           nombre: "Hush",                       zona: "Blue Womb — ?.5",              emoji: "💙", dificultad: "Extremo", drops: "Fragmento de Hush" },
        { id: "delirium",       nombre: "Delirium",                   zona: "The Void — Endgame final",    emoji: "🌀", dificultad: "Extremo", drops: "Corazón del Vacío" },
        { id: "mother",         nombre: "Mother",                     zona: "Corpse — Repentance",          emoji: "👁️", dificultad: "Alto",    drops: "Ojo de madre" },
        { id: "beast",          nombre: "The Beast",                  zona: "Home — Repentance final",      emoji: "😈", dificultad: "Extremo", drops: "Trofeo bestia" }
      ],
      guias: [
        { titulo: "Las mejores sinergias de objetos — guía de combos OP",        tipo: "Mecánica", minutos: 20, badge: "hot" },
        { titulo: "Todos los personajes — cómo desbloquearlos y jugarlos",        tipo: "Guía",  minutos: 25, badge: "updated" },
        { titulo: "Repentance — cómo llegar a The Beast paso a paso",            tipo: "Zona",  minutos: 18, badge: "hot" },
        { titulo: "Lore bíblico de Isaac — la historia detrás del juego",        tipo: "Lore",  minutos: 15, badge: "new" }
      ],
      galeria: [
        { emoji: "🏚️", label: "Habitación de Isaac" },
        { emoji: "💀", label: "The Basement — primer piso" },
        { emoji: "🔥", label: "The Chest — el arcón dorado" },
        { emoji: "🌑", label: "The Void — dimensión del caos" },
        { emoji: "🏠", label: "Home — el hogar de Isaac" },
        { emoji: "😈", label: "The Beast en su forma final" }
      ],
      lore: [
        { titulo: "La historia de Isaac y su madre",                texto: "Isaac es un niño que huye de su madre, quien escucha voces de Dios ordenándole sacrificar a su hijo como en el relato bíblico. Encerrado en el sótano, Isaac llora lágrimas que se convierten en armas. La historia mezcla abuso infantil, fe mal interpretada y el trauma de la infancia con simbolismo bíblico.", tag: "Historia" },
        { titulo: "El simbolismo de los personajes alternativos",   texto: "Cada personaje jugable representa una faceta de la psique de Isaac: Magdalene es su amiga imaginaria, Cain es su culpa, Judas su ira, Samson su violencia. The Lost es su miedo a la muerte. Esta capa de interpretación convierte el juego en una obra con capas de significado psicológico y religioso.", tag: "Personajes" },
        { titulo: "El final de Repentance y la verdad de Isaac",    texto: "Repentance revela que muchos de los eventos del juego ocurren en la mente de Isaac mientras muere en el arcón del inicio del juego. The Beast representa la manifestación final de todo su miedo. Derrotarla libera a Isaac, cerrando el ciclo narrativo de la saga con un final catártico y oscuro.", tag: "Lore" }
      ]
    },
  },
  guias: [
    {
      id: "guia-malenia",
      titulo: "Guía completa — Cómo vencer a Malenia, Azote del Árbol",
      juego: "Elden Ring",
      juegoEmoji: "🌟",
      juegoBg: "#1a1510",
      tipo: "boss",
      tipoLabel: "Boss",
      minutos: 12,
      badge: "hot",
      descripcion: "Malenia es considerada el boss más difícil de Elden Ring. En esta guía cubrimos sus dos fases, el movimiento Flor de la Putrefacción y las mejores builds para derrotarla.",
      fecha: "2026-04-15",
      visitas: 48200,
      contenido: [
        {
          h2: "Introducción — Por qué Malenia es tan difícil",
          texto: "Malenia, Azote del Árbol, es hija de Marika y Radagon y gemela de Miquella. Jamás ha conocido la derrota en combate. Su mecánica más devastadora es la regeneración de vida — cada golpe que conecta contra el jugador, ya sea bloqueado o no, le devuelve salud. Esto hace que las estrategias defensivas tradicionales sean completamente ineficaces.",
          tip: "Nunca uses escudo contra Malenia. Cada golpe bloqueado le cura vida igualmente."
        },
        {
          h2: "Fase 1 — La Espadachina de Oro",
          texto: "En fase 1 Malenia combate con su espada y brazo prostético. Sus movimientos son extremadamente rápidos y encadenados. El ataque más peligroso es el vuelo rasante — se lanza hacia adelante a gran velocidad y puede repetirlo hasta 4 veces consecutivas cambiando dirección. La clave es esquivar HACIA ella, no alejándote. La mayoría de sus combos tienen punto ciego pegado a su cuerpo.",
          lista: ["Esquiva el vuelo rasante hacia ella en el último momento", "Sus combos de espadazos se pueden esquivar continuamente hacia adelante", "El ataque de salto vertical tiene un delay — espera a que empiece a bajar", "Usa invocaciones de ceniza para dividir su atención"]
        },
        {
          h2: "Fase 2 — Diosa de la Putrefacción",
          texto: "Al llegar a 0 HP en fase 1, Malenia renace con alas de flores putrefactas y HP completamente restaurado. La Flor de la Putrefacción es su nuevo ataque definitivo — salta al aire, el escenario se llena de flores, y explota en una onda masiva. En cuanto la veas saltar muy alto corre en línea recta alejándote durante 3-4 segundos sin parar.",
          tip: "La Flor de la Putrefacción tiene rango enorme. Si no corres lo suficientemente lejos morirás aunque estés en los bordes del escenario."
        },
        {
          h2: "Builds recomendadas",
          texto: "Las builds más efectivas contra Malenia aprovechan sus debilidades principales: es vulnerable al fuego y al trueno, y la hemorragia ignora parcialmente su mecánica de curación.",
          lista: ["Bleed Arcane con Rivers of Blood — la más popular y efectiva", "Black Knife Tiche como ceniza — esquiva sus ataques y no activa su curación", "Pyromancy con Giant's Flame — daño masivo en sus ventanas de recuperación", "Frost + Bleed combo para double proc de estados alterados"]
        },
        {
          h2: "Consejos finales",
          texto: "Malenia requiere paciencia y consistencia más que habilidad bruta. Cada intento debería enseñarte algo nuevo sobre sus patrones. No intentes maximizar el daño en cada apertura — prefiere golpes seguros a combos arriesgados. Con suficiente práctica sus patrones se vuelven predecibles y la batalla se convierte en una danza.",
          tip: "Si llegas a fase 2 consistentemente ya tienes el 80% del trabajo hecho. La fase 2 tiene menos variedad de ataques que la fase 1."
        }
      ]
    },
    {
      id: "guia-nigromante",
      titulo: "Build Nigromante S-Tier — Temporada 8 Diablo IV",
      juego: "Diablo IV",
      juegoEmoji: "🔥",
      juegoBg: "#150f0f",
      tipo: "build",
      tipoLabel: "Build",
      minutos: 8,
      badge: "new",
      descripcion: "La mejor build de Nigromante para la temporada 8. Incluye habilidades principales, gemas recomendadas, equipo de endgame y paragón completo.",
      fecha: "2026-05-01",
      visitas: 12400,
      contenido: [
        {
          h2: "Introducción — La build más fuerte de la temporada",
          texto: "El Nigromante de Huesos es la build más consistente de la temporada 8 de Diablo IV. Bone Spear como habilidad principal con Corpse Explosion como secundario crea una sinergia devastadora. Esta guía cubre el camino completo desde el nivel 1 hasta el Torment 4."
        },
        {
          h2: "Stats recomendados",
          texto: "Los stats prioritarios para esta build son Inteligencia como stat principal para escalar el daño de Bone Spear, seguido de Vida para sobrevivir en Torment alto. El Luck no es prioritario en esta build.",
          lista: ["Inteligencia: prioridad máxima en todo el equipo", "Vida máxima: mínimo 15.000 para Torment 3-4", "Reducción de cooldown: 30%+ para rotar Army of the Dead", "Critical Strike Chance: 50%+ con los aspectos correctos"]
        },
        {
          h2: "Equipo BiS — Best in Slot",
          texto: "El item central de la build es Blood Artisan Cuirass que genera esqueletos al recoger globos de vida. White Mask aumenta el daño un 10% cuando hay hemorragia activa. Tibault's Will potencia Bone Spear cuando tienes Osificación activa.",
          tip: "Prioriza conseguir Blood Artisan's Cuirass antes que cualquier otro item. Sin él la build funciona al 60% de su potencial."
        },
        {
          h2: "Rotación de habilidades",
          texto: "La rotación básica es: activa Ossified Essence para acumular Essence, lanza Bone Spear cuando tengas 50+ Essence para maximizar el daño, usa Corpse Explosion en los cadáveres para daño de área, reserva Army of the Dead para grupos de élites o bosses.",
          lista: ["1. Acumula Essence con habilidad básica", "2. Lanza Bone Spear con Essence alta", "3. Corpse Explosion en cadáveres cercanos", "4. Army of the Dead en grupos grandes o bosses"]
        },
        {
          h2: "Endgame — Nightmare Dungeons y bosses",
          texto: "Para el endgame la build escala muy bien hasta Torment 4. En Nightmare Dungeons prefiere mazmorras con muchos enemigos agrupados para maximizar el AoE de Corpse Explosion. Para los bosses de endgame como Duriel usa Bone Spear directamente sin Corpse Explosion ya que el boss no genera cadáveres."
        }
      ]
    },
    {
      id: "guia-catedral",
      titulo: "Walkthrough Catedral del Abismo Profundo — Dark Souls III",
      juego: "Dark Souls III",
      juegoEmoji: "🩶",
      juegoBg: "#101418",
      tipo: "zona",
      tipoLabel: "Zona",
      minutos: 20,
      badge: "updated",
      descripcion: "Guía completa de la Catedral del Abismo Profundo: ruta óptima, todos los objetos, enemigos especiales y cómo acceder a las zonas secretas del área.",
      fecha: "2026-03-20",
      visitas: 31700,
      contenido: [
        {
          h2: "Cómo llegar a la Catedral",
          texto: "La Catedral del Abismo Profundo es accesible desde el Jardín de la Lluvia después de derrotar a los Cristal Sage. Atraviesa el Bosque de Farron siguiendo los caminos principales hasta llegar a la ciudadela en ruinas. La hoguera de la Catedral está en la entrada principal del edificio.",
          tip: "Antes de entrar a la Catedral asegúrate de tener el emblema de la Legión del Abismo para poder pasar por las puertas selladas."
        },
        {
          h2: "Enemigos principales",
          texto: "La Catedral está llena de No-muertos de la Catedral con escudos grandes que requieren ataques desde abajo o magia para romper su guardia. Los Evangelistas son las enemigas más peligrosas — lanzan hechizos a distancia y son resistentes al daño físico. Los Pontiff Knights aparecen en las zonas superiores y son significativamente más peligrosos.",
          lista: ["Guardianes de la Catedral — ataca desde abajo de su escudo", "Evangelistas — usa daño físico rápido o hemorragia", "Pontiff Knights — los más peligrosos, combate uno a uno", "Gargoyles — en el tejado, cuidado con las caídas"]
        },
        {
          h2: "Objetos importantes",
          texto: "La Catedral esconde varios objetos únicos. El Talisman of the Sun se encuentra en el ala derecha en un cofre vigilado por dos Evangelistas. El Deep Soul hechizo está en el ala izquierda subterránea. El Estus Shard está en el tejado accesible desde la escalera del campanario.",
          tip: "El Estus Shard del tejado requiere subir por el campanario y rodear el exterior del edificio. No te caigas — la caída es mortal."
        },
        {
          h2: "Boss — Aldrich, Devorador de Dioses",
          texto: "Aldrich es el boss de la Catedral del Abismo Profundo y uno de los Lords of Cinder. Combate con el tridente de Gwyndolin y magia de flechas. Su ataque más peligroso es la lluvia de flechas — un área de flechas que sigue al jugador durante varios segundos. Cuando empiece a invocar la lluvia corre continuamente en una dirección.",
          lista: ["Ataca su cola — tiene el hitbox más grande", "La lluvia de flechas se evita corriendo en círculo", "Es débil al fuego — pyromancies muy efectivas", "Teletransporta al otro lado del escenario cuando está lejos"]
        },
        {
          h2: "Zonas secretas y accesos",
          texto: "La Catedral tiene dos zonas secretas. La primera está detrás del altar principal — destruye el altar atacándolo repetidamente para revelar una escalera que baja al Lago Smouldering. La segunda es el tejado accesible desde el campanario, con vista completa del área y el Estus Shard."
        }
      ]
    },
    {
      id: "guia-finales-er",
      titulo: "Todos los finales de Elden Ring explicados",
      juego: "Elden Ring",
      juegoEmoji: "🌟",
      juegoBg: "#1a1510",
      tipo: "lore",
      tipoLabel: "Lore",
      minutos: 15,
      badge: "hot",
      descripcion: "Los 6 finales de Elden Ring analizados en profundidad: requisitos para desbloquearlos, diferencias narrativas y cuál se considera el final canónico.",
      fecha: "2026-04-02",
      visitas: 55100,
      contenido: [
        {
          h2: "Introducción — Los 6 finales de Elden Ring",
          texto: "Elden Ring tiene 6 finales distintos que representan visiones radicalmente diferentes del futuro de Las Tierras Intermedias. Todos comparten el mismo combate final contra el Soul of Cinder pero divergen después según las decisiones tomadas a lo largo del juego. No existe un final oficial canónico."
        },
        {
          h2: "Final 1 — Edad de las Estrellas (Ranni)",
          texto: "El final más elaborado y el favorito de la comunidad. Requiere completar toda la questline de Ranni the Witch — una de las questlines más largas y complejas del juego. Ranni usa el Élder Anillo para separar la Gracia Mayor del mundo, iniciando una nueva era guiada por las estrellas en lugar del Árbol Exaltado. El jugador se convierte en su consorte.",
          tip: "Para este final debes encontrar a Ranni en su torre en Liurnia ANTES de progresar demasiado en la historia principal. Es fácil perderse."
        },
        {
          h2: "Final 2 — Orden Perfecta (Goldmask)",
          texto: "Requiere completar la questline de Brother Corhyn y Goldmask. Goldmask dedica su vida a resolver la ecuación perfecta del orden divino. El Tarnished usa el Élder Anillo para establecer una nueva Ley Dorada más perfecta que la de Gwyn, creando un mundo de orden absoluto sin las imperfecciones del original."
        },
        {
          h2: "Final 3 — Desesperación (Dung Eater)",
          texto: "El final más oscuro. Requiere completar la questline del Dung Eater y obtener su Seedbed Curse. El Dung Eater maldice el Élder Anillo para que todos los seres nacidos en adelante lleven la maldición de los No-muertos. Una visión nihilista y perturbadora del futuro.",
          tip: "Este es el único final que requiere activamente completar una questline de un personaje villano. Moralmente es el más oscuro de los 6."
        },
        {
          h2: "Final 4 — Frénesi de la Llama (Lord of Frenzied Flame)",
          texto: "Requiere encontrar la Tres Dedos bajo la ciudad de Leyndell y recibir la Llama del Frénesi. El Tarnished se convierte en el Señor del Frénesi y quema Las Tierras Intermedias — el Árbol, el Élder Anillo y todo — hasta dejarlo en cenizas. La destrucción total como liberación."
        },
        {
          h2: "Final 5 — Edad de las Estrellas Fragmentadas (Fia)",
          texto: "Requiere completar la questline de Fia, la Abrazadora de Cadáveres, y derrotar a Lichdragon Fortissax en el sueño de Godwyn. Fia usa la Runa de la Muerte para crear un Élder Anillo que devuelve la muerte verdadera al mundo, iniciando una era de oscuridad y descanso para los No-muertos."
        },
        {
          h2: "Final 6 — Señor del Élder Anillo (final básico)",
          texto: "El final por defecto que ocurre si no completaste ninguna de las questlines anteriores. El Tarnished simplemente usa el Élder Anillo para restaurar la Gracia Mayor y el Árbol Exaltado, convirtiéndose en el nuevo Señor de Las Tierras Intermedias. Es el más simple narrativamente pero el más directo."
        }
      ]
    },
    {
      id: "guia-radahn",
      titulo: "Guía de Radahn — Estrategia fase 1 y fase 2",
      juego: "Elden Ring",
      juegoEmoji: "🌟",
      juegoBg: "#1a1510",
      tipo: "boss",
      tipoLabel: "Boss",
      minutos: 10,
      badge: "updated",
      descripcion: "Radahn el Conquistador de Estrellas en su versión remasterizada tras el parche 1.09. Patrones de ataque, ventanas de daño y builds recomendadas.",
      fecha: "2026-04-28",
      visitas: 29800,
      contenido: [
        {
          h2: "Introducción — El Festival de Radahn",
          texto: "Starscourge Radahn es uno de los semidioses más poderosos de Las Tierras Intermedias. Para enfrentarlo debes viajar a Caelid y activar el Festival de Radahn en el Castillo Redmane. El festival convoca a cazadores de todo el mundo para intentar derrotarlo — esto se refleja en las invocaciones de NPC disponibles durante la batalla.",
          tip: "Puedes invocar hasta 6 NPCs durante la batalla de Radahn. Úsalos todos — distraen a Radahn y te dan ventanas de ataque seguras."
        },
        {
          h2: "Fase 1 — Radahn a caballo",
          texto: "En fase 1 Radahn combate montado en Leonard su pequeño caballo. A pesar del tamaño de Radahn, Leonard lo sostiene con magia gravitacional. Los ataques más peligrosos son las flechas de seguimiento — lanza oleadas de flechas gigantes que siguen al jugador. Monta a Torrent y esquiva en zigzag para evitarlas.",
          lista: ["Monta a Torrent para máxima movilidad", "Las flechas de seguimiento se esquivan en zigzag", "Sus campos gravitacionales atraen y dañan — sal inmediatamente", "Ataca sus pies y piernas desde debajo de él"]
        },
        {
          h2: "Fase 2 — El Meteoro de Caelid",
          texto: "Al llegar a 0 HP en fase 1 Radahn no muere — cae al suelo y desaparece. Segundos después cae literalmente desde el espacio como un meteoro causando daño masivo en un radio enorme. En cuanto veas que la fase 1 termina corre lo más lejos posible del punto central. La fase 2 lo muestra sin caballo, atacando cuerpo a cuerpo con sus dos espadas colosales.",
          tip: "El impacto meteórico de Radahn mata instantáneamente si estás cerca. Cuando caiga al suelo en fase 1 empieza a correr inmediatamente sin mirar atrás."
        },
        {
          h2: "Builds recomendadas",
          texto: "Radahn tiene alta resistencia a la mayoría de elementos pero es vulnerable a la hemorragia y al frío. La combinación de ambos estados alterados es devastadora.",
          lista: ["Hemorragia — Rivers of Blood o Nagakiba con Arcano alto", "Frío + Hemorragia — doble proc para daño masivo", "Summons de NPC — usa todos los disponibles", "Magia a distancia — Comet Azur en fase 2 cuando está recuperándose"]
        }
      ]
    },
    {
      id: "guia-espadachin",
      titulo: "Build Espadachín de fe — Sekiro early game",
      juego: "Sekiro",
      juegoEmoji: "⚔️",
      juegoBg: "#0f1410",
      tipo: "build",
      tipoLabel: "Build",
      minutos: 6,
      badge: "new",
      descripcion: "Cómo maximizar el daño desde el principio en Sekiro: habilidades prioritarias, prótesis recomendadas y técnica de postura para el early game.",
      fecha: "2026-05-03",
      visitas: 8900,
      contenido: [
        {
          h2: "Introducción — El early game de Sekiro",
          texto: "Sekiro no tiene builds en el sentido tradicional — no hay stats que subir ni equipo que cambiar. El progreso se basa en habilidades del jugador y en el árbol de habilidades de Wolf. Esta guía cubre las habilidades y prótesis prioritarias para superar el early game eficientemente."
        },
        {
          h2: "Stats del personaje — qué subir primero",
          texto: "En Sekiro solo hay dos recursos que gestionar: Vida y Postura. La vida se aumenta con Cuentas de Oración (4 por aumento) y la postura con Semillas del Árbol del Ídolo (3 por aumento). Prioriza las Cuentas de Oración sobre las Semillas al principio — más vida es más margen de error.",
          lista: ["Cuentas de Oración — explora cada área exhaustivamente para encontrarlas", "Semillas del Árbol del Ídolo — busca los árboles blancos en cada zona", "No te saltes los cofres ocultos — muchos tienen Cuentas de Oración"]
        },
        {
          h2: "Prótesis recomendadas para early game",
          texto: "Las tres prótesis más útiles en el early game son el Shuriken, el Flame Vent y los Firecrackers. El Shuriken interrumpe saltos y ataques aéreos. El Flame Vent hace daño masivo a bestias y jefes vulnerables al fuego. Los Firecrackers aturden bestias y caballos.",
          tip: "Consigue los Firecrackers lo antes posible — aturden a Gyoubu Oniwa y su caballo en el primer boss importante, facilitando enormemente esa batalla."
        },
        {
          h2: "Árbol de habilidades — prioridades",
          texto: "El árbol de habilidades más importante al principio es Shinobi Arts. Mikiri Counter es la habilidad más impactante del juego — permite contraatacar ataques de thrust pisando al enemigo y llenando masivamente su postura. Consíguela lo antes posible con tus primeros puntos de habilidad.",
          lista: ["1. Mikiri Counter — prioridad absoluta", "2. Nightjar Slash — ataque aéreo muy útil", "3. Whirlwind Slash — para romper postura rápidamente", "4. Shadowrush — dash de ataque de largo alcance"]
        },
        {
          h2: "Técnica de postura — la clave del combate",
          texto: "El sistema de postura es la mecánica central de Sekiro. La postura de los enemigos se llena bloqueando y desviando sus ataques. Cuando la postura está llena quedan abiertos a un Deathblow que les quita una vida completa. La técnica más efectiva es la presión constante — nunca retrocedas, siempre ataca o desvía. Cada vez que retrocedas le das tiempo al enemigo de recuperar postura."
        }
      ]
    }
  ],
  noticias: [
    {
      id: "noticia-1",
      titulo: "SoulsBase añade fichas completas para Bloodborne y Sekiro",
      categoria: "actualizacion",
      categoriaLabel: "Actualización",
      fecha: "2026-05-08",
      emoji: "🩸",
      resumen: "Hemos añadido fichas completas con bosses, guías, galería y lore para Bloodborne y Sekiro. Incluye estrategias detalladas para Father Gascoigne y Genichiro.",
      contenido: "Las fichas de Bloodborne y Sekiro ya están disponibles en SoulsBase con contenido completo. Cada ficha incluye información detallada sobre todos los bosses principales, guías de estrategia, galería de capturas y análisis del lore. Para Bloodborne destacamos la guía de Father Gascoigne con el sistema de la caja de música, y para Sekiro la guía de Genichiro que explica el sistema de postura y el contraataque de relámpago.",
      destacada: true,
    },
    {
      id: "noticia-2",
      titulo: "Nuevos planificadores de builds para Diablo IV y PoE2",
      categoria: "feature",
      categoriaLabel: "Nueva feature",
      fecha: "2026-05-07",
      emoji: "⚡",
      resumen: "Lanzamos los planificadores interactivos para Diablo IV con árbol de habilidades y sistema Paragón, y Path of Exile 2 con árbol de pasivas y sistema de gemas.",
      contenido: "Los nuevos planificadores de builds permiten diseñar tu personaje antes de empezar a jugar. El planificador de Diablo IV incluye el árbol de habilidades completo para las 5 clases, sistema de Paragón con las 4 categorías de stats, slots de aspectos y glifos. El planificador de PoE2 incluye el árbol de pasivas con las 4 zonas principales, sistema de gemas con soporte encadenado y slots de equipo con contador de sockets.",
      destacada: true,
    },
    {
      id: "noticia-3",
      titulo: "27 fichas de juego completas — catálogo al 100%",
      categoria: "contenido",
      categoriaLabel: "Contenido",
      fecha: "2026-05-06",
      emoji: "📚",
      resumen: "Todos los juegos del catálogo tienen ahora ficha completa con descripción, barras de dificultad, bosses, guías, galería y lore.",
      contenido: "Hemos completado las fichas de los 27 juegos del catálogo. Los últimos en añadirse han sido Hades II, Disco Elysium, Dead Cells, Slay the Spire, Returnal, Monster Hunter Wilds, Lies of P, Lords of the Fallen, Nioh 2, Last Epoch y Torchlight Infinite. Cada ficha incluye descripción completa del juego, barras de dificultad por categoría, lista de bosses principales, guías disponibles, galería de imágenes y análisis del lore.",
      destacada: false,
    },
    {
      id: "noticia-4",
      titulo: "Guías individuales con tabla de contenidos",
      categoria: "feature",
      categoriaLabel: "Nueva feature",
      fecha: "2026-05-05",
      emoji: "📖",
      resumen: "Las guías ahora tienen su propia página con contenido completo, tabla de contenidos interactiva y guías relacionadas.",
      contenido: "Las guías de SoulsBase tienen ahora páginas individuales con contenido detallado. Cada guía incluye secciones con headers navegables, cajas de tips destacados, listas de estrategias y una tabla de contenidos lateral que se actualiza según el scroll. Al final de cada guía aparecen guías relacionadas del mismo juego o categoría.",
      destacada: false,
    },
    {
      id: "noticia-5",
      titulo: "10 bosses detallados con estrategia completa",
      categoria: "contenido",
      categoriaLabel: "Contenido",
      fecha: "2026-05-04",
      emoji: "💀",
      resumen: "Malenia, Radahn, Margit, Pontiff, Genichiro, Father Gascoigne, Nameless King, Sister Friede, Isshin y Guardian Ape tienen fichas completas.",
      contenido: "Los 10 bosses de SoulsBase tienen fichas detalladas con descripción completa, estrategia paso a paso numerada, análisis de fases con triggers de HP, lista de ataques con tips de esquive, tabla de resistencias y debilidades con barras visuales, drops con rareza y tasa, y builds recomendadas con efectividad.",
      destacada: false,
    },
    {
      id: "noticia-6",
      titulo: "Sistema de favoritos, valoraciones e historial",
      categoria: "feature",
      categoriaLabel: "Nueva feature",
      fecha: "2026-05-03",
      emoji: "❤️",
      resumen: "Guarda tus juegos favoritos, puntúa con estrellas y consulta tu historial de visitas recientes en el sidebar.",
      contenido: "SoulsBase ahora recuerda tus preferencias. El sistema de favoritos permite guardar juegos y bosses con un clic en el corazón de cada card. Las valoraciones de 1 a 5 estrellas aparecen en hover sobre cada juego. El historial de visitas recientes aparece en el sidebar mostrando los últimos 3 juegos o bosses visitados. Todos los datos se guardan localmente en tu navegador.",
      destacada: false,
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
  builds: {
    "bleed-arcane-elden-ring": {
      id: "bleed-arcane-elden-ring",
      nombre: "Bleed Arcane — Rivers of Blood",
      juego: "Elden Ring",
      juegoId: "elden-ring",
      juegoBg: "#1a1510",
      emoji: "🩸",
      tipo: "PvE",
      dificultad: "Media",
      descripcion: "La build más popular de Elden Ring. Rivers of Blood con alto Arcano acumula hemorragia en 2-3 hits, causando explosiones de daño masivo. Ideal para todos los bosses incluyendo Malenia.",
      stats: { vigor: 60, mente: 15, resistencia: 25, fuerza: 12, destreza: 18, inteligencia: 9, fe: 8, arcano: 80 },
      equipamiento: {
        "Arma principal": "Rivers of Blood +10",
        "Arma secundaria": "Mohgwyn's Sacred Spear +10",
        "Cabeza": "White Mask",
        "Pecho": "Ronin's Armor",
        "Manos": "Ronin's Gauntlets",
        "Piernas": "Ronin's Greaves",
        "Talismanes": "Rotten Winged Sword Insignia, Millicent's Prosthesis, Lord of Blood's Exultation, Claw Talisman"
      },
      habilidades: [
        { nombre: "Corpse Piler", desc: "La skill de Rivers of Blood. 5 cortes rápidos que acumulan hemorragia masiva. Úsala cuando el boss está vulnerable.", tipo: "ofensiva" },
        { nombre: "White Mask activación", desc: "El White Mask aumenta el daño un 10% cuando hay hemorragia activa cerca. Procura que tu hemorragia active el buff antes de los ataques grandes.", tipo: "pasiva" },
        { nombre: "Rotación de talismanes", desc: "Rotten Winged + Millicent se activan con hits consecutivos. Mantén presión constante para el stack máximo.", tipo: "pasiva" }
      ],
      progresion: [
        { nivel: "1–30", texto: "Usa cualquier arma con bleed (Uchigatana) mientras farmeas Arcano. Prioriza vigor y arcano en este orden." },
        { nivel: "30–60", texto: "Consigue Rivers of Blood en volcán Manor. Empieza a invertir en destreza hasta 18 para cumplir el requisito." },
        { nivel: "60–120", texto: "Sube arcano hasta 80. Consigue White Mask en Mohgwyn Palace. Completa el set de Ronin." },
        { nivel: "120–150", texto: "Optimiza con los 4 talismanes de la lista. Nivel final recomendado 150 para PvP equilibrado." }
      ],
      contras: ["Nerfeada varias veces — sigue siendo S-tier", "Requiere items del late game", "No funciona bien contra enemigos inmunes a hemorragia"],
      pros: ["Daño masivo contra casi todos los bosses", "Fácil de ejecutar", "Muy efectiva en co-op y PvP"],
      rating: 95
    },
    "quality-colossal-elden-ring": {
      id: "quality-colossal-elden-ring",
      nombre: "Quality Colossal — Greatsword",
      juego: "Elden Ring",
      juegoId: "elden-ring",
      juegoBg: "#1a1510",
      emoji: "⚔️",
      tipo: "PvE/PvP",
      dificultad: "Fácil",
      descripcion: "La build más clásica y fiable de Elden Ring. La Greatsword colosal con una build quality (fuerza/destreza equilibrados) ofrece daño consistente, hyperarmor y facilidad de uso para todos los niveles.",
      stats: { vigor: 60, mente: 20, resistencia: 35, fuerza: 54, destreza: 54, inteligencia: 9, fe: 8, arcano: 9 },
      equipamiento: {
        "Arma principal": "Greatsword +25",
        "Arma secundaria": "Escudo mediano con 100% físico",
        "Cabeza": "Bullgoat Helm",
        "Pecho": "Crucible Tree Armor",
        "Manos": "Crucible Gauntlets",
        "Piernas": "Crucible Greaves",
        "Talismanes": "Great-Jar's Arsenal, Erdtree's Favor +2, Bull-Goat's Talisman, Curved Sword Talisman"
      },
      habilidades: [
        { nombre: "Stamp (Upward Cut)", desc: "La skill de la Greatsword. Absorbe un golpe y contraataca con un uppercut. Perfecta para romper la postura de bosses.", tipo: "ofensiva" },
        { nombre: "Hyperarmor", desc: "Los ataques cargados de armas colosales tienen hyperarmor — no te interrumpen aunque te golpeen. Úsalo para intercambiar golpes con los bosses.", tipo: "pasiva" },
        { nombre: "Poise stagger", desc: "Con suficiente daño acumulado puedes hacer tambalear a casi cualquier boss. Ataque cargado R2 es el mejor para esto.", tipo: "ofensiva" }
      ],
      progresion: [
        { nivel: "1–30", texto: "La Greatsword está en un cofre en Limgrave, accesible desde el inicio. Sube fuerza a 30 para usarla bien." },
        { nivel: "30–60", texto: "Equilibra fuerza y destreza hacia 40/40. La Greatsword escala bien en ambos stats con infusión Heavy inicialmente." },
        { nivel: "60–120", texto: "Cambia a infusión Quality (sin infusión) cuando tengas 54/54. El AR total es máximo en este punto." },
        { nivel: "120–150", texto: "Sube vigor a 60. Añade los talismanes de poise. Nivel 150 es el estándar PvP." }
      ],
      contras: ["Más lenta que otras builds", "Menor daño que bleed en bosses vulnerables", "Requiere buen posicionamiento"],
      pros: ["Muy fácil de usar", "Consistente contra todo tipo de enemigos", "Excelente en PvP por el hyperarmor"],
      rating: 82
    },
    "necromancer-diablo4": {
      id: "necromancer-diablo4",
      nombre: "Nigromante Huesos S-Tier — Temporada 8",
      juego: "Diablo IV",
      juegoId: "diablo-4",
      juegoBg: "#150f0f",
      emoji: "💀",
      tipo: "PvE",
      dificultad: "Fácil",
      descripcion: "La build de Nigromante más potente de la temporada 8. Basada en invocación de esqueletos y explosión de huesos, con una rotación simple y daño masivo en endgame. Ideal para farmear Duriel y Andariel eficientemente.",
      stats: { vigor: 55, mente: 30, resistencia: 20, fuerza: 10, destreza: 10, inteligencia: 10, fe: 10, arcano: 10 },
      equipamiento: {
        "Arma principal": "Scythe of the Crone +6",
        "Arma secundaria": "Foco de nigromante",
        "Cabeza": "Deathless Visage",
        "Pecho": "Blood Artisan's Cuirass",
        "Manos": "Howl from Below",
        "Piernas": "Tibault's Will",
        "Talismanes": "Frenzied Dead, Hulking Monstrosity, Grasping Veins, Splintering Aspect"
      },
      habilidades: [
        { nombre: "Bone Spear",             desc: "La habilidad principal. Lanza una lanza de hueso que atraviesa enemigos y explota al final.", tipo: "ofensiva" },
        { nombre: "Corpse Explosion",       desc: "Explota cadáveres cercanos causando daño en área masivo. Combina con Bone Spear para máximo daño.", tipo: "ofensiva" },
        { nombre: "Army of the Dead",       desc: "Ultimate que invoca un ejército masivo de esqueletos. Úsala en grupos de élites o bosses.", tipo: "ofensiva" },
        { nombre: "Ossified Essence pasiva", desc: "Cada punto de Essence aumenta el daño de Bone Spear. Mantén la Essence alta antes de disparar.", tipo: "pasiva" }
      ],
      progresion: [
        { nivel: "1-30",  texto: "Levea con Bone Spear y esqueletos básicos. Cualquier equipo sirve — enfócate en subir nivel rápido." },
        { nivel: "30-60", texto: "Consigue Blood Artisan's Cuirass — es el item central de la build. Sube Bone Spear a rango máximo." },
        { nivel: "60-100", texto: "Optimiza los aspectos del equipamiento. Empieza Nightmare Dungeons con nivel de sigil bajo." },
        { nivel: "100+",  texto: "Farmea Duriel para los uniques BiS. Sube dificultad Torment gradualmente hasta T4." }
      ],
      pros: ["Daño masivo con rotación simple", "Excelente para farmeo de bosses", "Muy buena en grupos y AoE"],
      contras: ["Requiere items específicos para endgame", "Frágil si te rodean", "Dependiente de cadáveres para Corpse Explosion"],
      rating: 91
    },
    "faith-dark-souls-3": {
      id: "faith-dark-souls-3",
      nombre: "Faith Paladin — Lightning Spear",
      juego: "Dark Souls III",
      juegoId: "dark-souls-3",
      juegoBg: "#101418",
      emoji: "⚡",
      tipo: "PvE/PvP",
      dificultad: "Media",
      descripcion: "La build de fe más versátil de Dark Souls III. Lightning Spear y sus variantes hacen daño masivo contra casi todos los jefes. Además del daño por hechizos, un arma infundida con trueno proporciona daño físico consistente para situaciones donde los milagros no son óptimos.",
      stats: { vigor: 40, mente: 30, resistencia: 20, fuerza: 14, destreza: 12, inteligencia: 9, fe: 60, arcano: 9 },
      equipamiento: {
        "Arma principal": "Sunlight Straight Sword +10 (trueno)",
        "Arma secundaria": "Talismán de la Sunlight (catalizador)",
        "Cabeza": "Sunlight Helm",
        "Pecho": "Armor of the Sun",
        "Manos": "Gauntlets of the Sun",
        "Piernas": "Leggings of the Sun",
        "Talismanes": "Sun Princess Ring, Morne's Ring, Ring of the Sun's First Born, Lightning Clutch Ring"
      },
      habilidades: [
        { nombre: "Lightning Spear / Greater / Sunlight", desc: "Tres variantes del mismo hechizo — usa la más potente disponible. Gran Sunlight Spear es la versión definitiva.", tipo: "ofensiva" },
        { nombre: "Lightning Stake",                      desc: "Clava una estaca de trueno en el suelo con gran daño. Perfecta para bosses lentos o cuando están caídos.", tipo: "ofensiva" },
        { nombre: "Sacred Oath",                          desc: "Buff de grupo que aumenta el daño y la defensa. En PvP y co-op es esencial. Dura 60 segundos.", tipo: "pasiva" },
        { nombre: "Sunlight Straight Sword Skill",        desc: "La skill del arma activa Sacred Oath directamente. Siempre actívala antes de un boss.", tipo: "pasiva" }
      ],
      progresion: [
        { nivel: "1-30",    texto: "Empieza como Herald — tiene Faith base alta. Sube Fe a 30 primero para acceder a Lightning Spear." },
        { nivel: "30-60",   texto: "Sube Fe a 45 para Greater Lightning Spear. Consigue el Sunlight Straight Sword en Lothric." },
        { nivel: "60-120",  texto: "Fe hasta 60 para Gran Sunlight Spear. Equipa los 4 talismanes de la lista para máximo daño." },
        { nivel: "120-150", texto: "Sube vigor a 40. Nivel 120 es estándar para PvP. Unirse al Covenant de los Guerreros del Sol." }
      ],
      pros: ["Daño masivo contra la mayoría de jefes", "Muy versátil — arma física + hechizos", "Excelente en co-op con Sacred Oath"],
      contras: ["Requiere alta inversión en Fe", "Algunos jefes resisten el trueno", "FP limitado sin buena gestión"],
      rating: 85
    },
    "postura-sekiro": {
      id: "postura-sekiro",
      nombre: "Postura Agresiva — Desvío Perfecto",
      juego: "Sekiro",
      juegoId: "sekiro",
      juegoBg: "#0f1410",
      emoji: "⚔️",
      tipo: "PvE",
      dificultad: "Difícil",
      descripcion: "En Sekiro no hay builds tradicionales — el progreso se basa en habilidades del jugador. Esta guía de estilo de juego cubre la mentalidad y técnicas para dominar el sistema de postura: desvío perfecto, Mikiri Counter, uso de prótesis y árboles de habilidades prioritarios para maximizar la eficiencia en combate.",
      stats: { vigor: 99, mente: 99, resistencia: 99, fuerza: 99, destreza: 99, inteligencia: 0, fe: 0, arcano: 0 },
      equipamiento: {
        "Arma principal": "Katana de Wolf (única)",
        "Prótesis 1": "Flame Vent — fuego contra bestias y jefes vulnerables",
        "Prótesis 2": "Shuriken — interrumpir saltos y ataques aéreos",
        "Prótesis 3": "Firecrackers — aturdir bestias y caballos",
        "Prótesis 4": "Loaded Umbrella — bloquear ataques no desviables",
        "Habilidades clave": "Mikiri Counter, Nightjar Slash, Shadowrush, Spiral Cloud Passage"
      },
      habilidades: [
        { nombre: "Mikiri Counter",        desc: "La habilidad más importante del juego. Permite contraatacar ataques de thrust pisando al enemigo. Llena masivamente la postura del enemigo.", tipo: "ofensiva" },
        { nombre: "Desvío perfecto",       desc: "Bloquear en el último momento hace un desvío que no consume postura propia y llena la del enemigo. La base de todo combate en Sekiro.", tipo: "pasiva" },
        { nombre: "Flame Vent + aceite",   desc: "Cubrir al enemigo de aceite y activar el Flame Vent hace daño masivo de fuego. Esencial contra jefes vulnerables al fuego.", tipo: "ofensiva" },
        { nombre: "Shadowrush",            desc: "Dash de ataque largo que hace mucho daño de postura. Excelente para iniciar el combate o para castigar recuperaciones largas del enemigo.", tipo: "ofensiva" }
      ],
      progresion: [
        { nivel: "Inicio",    texto: "Aprende el desvío perfecto contra enemigos básicos antes de intentar bosses. La paciencia aquí ahorra horas de frustración." },
        { nivel: "Early",     texto: "Consigue Mikiri Counter lo antes posible — está en el árbol Shinobi Arts al inicio. Cambia completamente el combate." },
        { nivel: "Mid-game",  texto: "Añade Flame Vent y Shuriken a tu rotación. Aprende qué prótesis es óptima para cada boss antes de entrar." },
        { nivel: "Late-game", texto: "Con Shadowrush y Spiral Cloud Passage tienes todas las herramientas. Cada boss tiene un set de herramientas óptimo — memorízalo." }
      ],
      pros: ["El sistema de combate más satisfactorio del género", "Sin dependencia de builds o farmeo", "Cada boss es un puzzle con solución elegante"],
      contras: ["Curva de aprendizaje muy alta", "No hay forma de sobrepotenciarse para compensar habilidad", "Frustrante hasta que el sistema hace click"],
      rating: 88
    }
  },
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
