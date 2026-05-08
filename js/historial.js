(function () {
  const KEY = "soulsbase_historial";
  const MAX = 10;
  const MOSTRAR = 3;

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; }
  }

  function save(arr) {
    localStorage.setItem(KEY, JSON.stringify(arr));
  }

  function registrar(entrada) {
    let hist = load();
    hist = hist.filter((h) => h.id !== entrada.id);
    entrada.timestamp = Date.now();
    hist.unshift(entrada);
    if (hist.length > MAX) hist = hist.slice(0, MAX);
    save(hist);
  }

  function renderSidebar() {
    const container = document.getElementById("historial-items");
    if (!container) return;
    const hist = load().slice(0, MOSTRAR);

    if (!hist.length) {
      container.innerHTML = '<span class="historial-empty">Ninguna visita aún</span>';
      return;
    }

    container.innerHTML = hist
      .map((h) => {
        const href = h.tipo === "juego" ? `juego.html?id=${h.id}` : `boss.html?id=${h.id}`;
        return `<a href="${href}" class="game-pin">
          <span style="font-size:14px">${h.emoji}</span> ${h.titulo}
        </a>`;
      })
      .join("");
  }

  function registrarJuego() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    if (!id || !window.DB) return;
    const juego = DB.juegos.find((j) => j.id === id);
    if (!juego) return;
    registrar({ tipo: "juego", id: juego.id, titulo: juego.titulo, emoji: juego.emoji });
  }

  function registrarBoss() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    if (!id || !window.DB) return;
    const boss = DB.bosses[id];
    if (!boss) return;
    registrar({ tipo: "boss", id: boss.id, titulo: boss.nombre, emoji: boss.emoji });
  }

  window.Historial = { registrar, load, renderSidebar };

  const path = window.location.pathname;
  const page = path.split("/").pop() || "index.html";

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      if (page === "juego.html") registrarJuego();
      else if (page === "boss.html") registrarBoss();
      renderSidebar();
    });
  } else {
    if (page === "juego.html") registrarJuego();
    else if (page === "boss.html") registrarBoss();
    renderSidebar();
  }
})();
