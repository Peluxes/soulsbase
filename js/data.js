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
