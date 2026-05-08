(function () {
  const catMap = {
    actualizacion: "cat-actualizacion",
    feature:       "cat-feature",
    contenido:     "cat-contenido",
  };

  function formatFecha(iso) {
    if (!iso) return "";
    const [y, m, d] = iso.split("-");
    const meses = ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];
    return `${parseInt(d)} ${meses[parseInt(m) - 1]} ${y}`;
  }

  function catBadge(n) {
    return `<span class="noticia-cat-badge ${catMap[n.categoria] || ""}">${n.categoriaLabel}</span>`;
  }

  let filtro = "todos";
  let query  = "";

  function filtradas() {
    let list = (DB.noticias || []).slice();
    if (filtro !== "todos") list = list.filter((n) => n.categoria === filtro);
    if (query) {
      const q = query.toLowerCase();
      list = list.filter((n) => n.titulo.toLowerCase().includes(q) || n.resumen.toLowerCase().includes(q));
    }
    return list;
  }

  function toggleExpand(card, n) {
    let exp = card.querySelector(".noticia-expanded");
    if (!exp) {
      exp = document.createElement("div");
      exp.className = "noticia-expanded";
      exp.textContent = n.contenido;
      card.appendChild(exp);
    }
    exp.classList.toggle("open");
  }

  function renderHero(lista) {
    const wrap = document.getElementById("noticia-hero-wrap");
    if (!wrap) return;
    const destacadas = lista.filter((n) => n.destacada);
    if (!destacadas.length) { wrap.innerHTML = ""; return; }
    const n = destacadas[0];
    wrap.innerHTML = `
      <div class="noticia-hero-card" data-id="${n.id}">
        <div class="noticia-hero-emoji">${n.emoji}</div>
        <div class="noticia-hero-cat">${catBadge(n)}</div>
        <div class="noticia-hero-titulo">${n.titulo}</div>
        <div class="noticia-hero-resumen">${n.resumen}</div>
        <div class="noticia-hero-fecha"><i class="ti ti-calendar" style="vertical-align:-1px;margin-right:4px"></i>${formatFecha(n.fecha)}</div>
        <div class="noticia-expanded" id="hero-expanded-${n.id}">${n.contenido}</div>
      </div>`;
    wrap.querySelector(".noticia-hero-card").addEventListener("click", function () {
      const exp = this.querySelector(".noticia-expanded");
      exp.classList.toggle("open");
    });
  }

  function renderGrid(lista) {
    const grid = document.getElementById("noticias-grid");
    if (!grid) return;
    const resto = lista.filter((n) => !n.destacada || lista.indexOf(n) > 0);
    const destacadas = lista.filter((n) => n.destacada);
    // show all non-first-destacada
    const toShow = lista.filter((n, i) => !(n.destacada && i === lista.indexOf(destacadas[0])));

    if (!toShow.length) {
      grid.innerHTML = '<p style="color:var(--text-hint);font-size:13px;padding:12px 0">Sin resultados.</p>';
      return;
    }
    grid.innerHTML = toShow.map((n) => `
      <div class="noticia-card" data-id="${n.id}">
        <div class="noticia-card-emoji">${n.emoji}</div>
        <div class="noticia-card-cat">${catBadge(n)}</div>
        <div class="noticia-card-titulo">${n.titulo}</div>
        <div class="noticia-card-resumen">${n.resumen}</div>
        <div class="noticia-card-fecha"><i class="ti ti-calendar" style="vertical-align:-1px;margin-right:4px"></i>${formatFecha(n.fecha)}</div>
        <div class="noticia-expanded">${n.contenido}</div>
      </div>`).join("");

    grid.querySelectorAll(".noticia-card").forEach((card) => {
      card.addEventListener("click", function () {
        const exp = this.querySelector(".noticia-expanded");
        exp.classList.toggle("open");
      });
    });
  }

  function render() {
    const lista = filtradas();
    renderHero(lista);
    renderGrid(lista);
    const countEl = document.getElementById("results-count");
    if (countEl) countEl.textContent = `${lista.length} noticia${lista.length !== 1 ? "s" : ""}`;
  }

  document.addEventListener("DOMContentLoaded", () => {
    // Pills
    document.querySelectorAll(".pill[data-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".pill").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        filtro = btn.dataset.filter;
        render();
      });
    });

    // Search
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
      searchInput.addEventListener("input", () => {
        query = searchInput.value.trim();
        render();
      });
    }

    render();
  });
})();
