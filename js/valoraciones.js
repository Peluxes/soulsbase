(function () {
  const KEY = "soulsbase_valoraciones";

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
  }

  function save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  function get(juegoId) {
    return load()[juegoId] || 0;
  }

  function set(juegoId, valor) {
    const data = load();
    data[juegoId] = valor;
    save(data);
  }

  function buildStars(juegoId, container) {
    const valorActual = get(juegoId);
    container.innerHTML = "";
    container.classList.toggle("has-rating", valorActual > 0);

    for (let i = 1; i <= 5; i++) {
      const s = document.createElement("span");
      s.className = "star" + (i <= valorActual ? " active" : "");
      s.textContent = "★";
      s.dataset.val = i;

      s.addEventListener("mouseenter", () => {
        container.querySelectorAll(".star").forEach((st, idx) => {
          st.classList.remove("active", "preview");
          if (idx < i) st.classList.add("preview");
        });
      });

      s.addEventListener("mouseleave", () => {
        const cur = get(juegoId);
        container.querySelectorAll(".star").forEach((st, idx) => {
          st.classList.remove("preview");
          st.classList.toggle("active", idx < cur);
        });
      });

      s.addEventListener("click", (e) => {
        e.stopPropagation();
        set(juegoId, i);
        buildStars(juegoId, container);
      });

      container.appendChild(s);
    }
  }

  function aplicarEnCards() {
    document.querySelectorAll(".game-card[data-id]").forEach((card) => {
      if (card.querySelector(".game-card-stars")) return;
      const id = card.dataset.id;

      const wrap = document.createElement("div");
      wrap.className = "game-card-stars star-rating";
      card.style.position = "relative";
      card.appendChild(wrap);
      buildStars(id, wrap);
    });
  }

  function aplicarEnHero(juegoId) {
    const hero = document.getElementById("hero-score");
    if (!hero || document.getElementById("hero-star-rating")) return;

    const wrap = document.createElement("div");
    wrap.id = "hero-star-rating";
    wrap.style.cssText = "display:flex;align-items:center;gap:6px;margin-top:8px;";

    const label = document.createElement("span");
    label.className = "star-rating-label";
    label.textContent = "Tu valoración:";

    const stars = document.createElement("div");
    stars.className = "star-rating";

    wrap.appendChild(label);
    wrap.appendChild(stars);
    hero.parentElement.appendChild(wrap);

    buildStars(juegoId, stars);
  }

  window.Valoraciones = { aplicarEnCards, aplicarEnHero, get, set };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", aplicarEnCards);
  } else {
    aplicarEnCards();
  }
})();
