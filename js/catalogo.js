document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("games-grid");
  const list = document.getElementById("games-list");
  const countEl = document.getElementById("results-count");
  const searchInput = document.getElementById("search-input");
  const sortSelect = document.getElementById("sort-select");
  const btnGrid = document.getElementById("btn-grid");
  const btnList = document.getElementById("btn-list");

  let filtroActivo = "todos";
  let vistaActiva = "grid";

  // ── Ordenar ──
  function ordenar(lista, criterio) {
    const copia = [...lista];
    if (criterio === "rating") return copia.sort((a, b) => b.rating - a.rating);
    if (criterio === "año-desc") return copia.sort((a, b) => b.año - a.año);
    if (criterio === "año-asc") return copia.sort((a, b) => a.año - b.año);
    if (criterio === "titulo")
      return copia.sort((a, b) => a.titulo.localeCompare(b.titulo));
    return copia;
  }

  // ── Filtrar ──
  function filtrar() {
    const q = searchInput.value.toLowerCase().trim();
    let resultado =
      filtroActivo === "todos"
        ? DB.juegos
        : DB.juegos.filter((j) => j.tag === filtroActivo);

    if (q)
      resultado = resultado.filter(
        (j) =>
          j.titulo.toLowerCase().includes(q) ||
          j.developer.toLowerCase().includes(q),
      );

    return ordenar(resultado, sortSelect.value);
  }

  // ── Render grid ──
  function renderGrid(lista) {
    grid.innerHTML = lista.length
      ? lista
          .map(
            (j) => `
          <div class="game-card" data-id="${j.id}" onclick="window.location.href='juego.html?id=${j.id}'">
            <div class="game-thumb" style="background:${j.thumbBg}">
              ${j.imagen ? `<img src="${j.imagen}" alt="${j.titulo}" loading="lazy" onerror="this.style.display='none'">` : `<span class="game-thumb-fallback">${j.emoji}</span>`}
            </div>
            <div class="game-info" style="padding:10px 12px 12px;">
              <div class="game-title">${j.titulo}</div>
              <div class="game-footer">
                <span class="tag tag-${j.tag}">${j.tagLabel}</span>
                <span class="rating"><i class="ti ti-star"></i>${j.rating}</span>
              </div>
            </div>
          </div>
        `,
          )
          .join("")
      : '<p style="color:var(--text-hint);font-size:13px;padding:12px 0;grid-column:1/-1">Sin resultados para esa búsqueda.</p>';
  }

  // ── Render lista ──
  function renderList(lista) {
    list.innerHTML = lista.length
      ? lista
          .map(
            (j) => `
          <div class="game-list-row" onclick="window.location.href='juego.html?id=${j.id}'">
            <div class="game-list-emoji" style="background:${j.thumbBg};overflow:hidden;position:relative">
              ${j.imagen ? `<img src="${j.imagen}" alt="${j.titulo}" loading="lazy" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0" onerror="this.style.display='none'">` : ''}
              <span style="position:relative;z-index:1;font-size:22px">${j.emoji}</span>
            </div>
            <div class="game-list-info">
              <div class="game-list-title">${j.titulo}</div>
              <div class="game-list-meta">
                <span>${j.developer}</span>
                <span>${j.año}</span>
              </div>
            </div>
            <div class="game-list-right">
              <span class="tag tag-${j.tag}">${j.tagLabel}</span>
              <span class="rating-big">${j.rating}</span>
            </div>
          </div>
        `,
          )
          .join("")
      : '<p style="color:var(--text-hint);font-size:13px;padding:12px 0">Sin resultados.</p>';
  }

  // ── Render principal ──
  function render() {
    const lista = filtrar();
    countEl.textContent = `${lista.length} juego${lista.length !== 1 ? "s" : ""}`;

    if (vistaActiva === "grid") {
      grid.style.display = "";
      list.style.display = "none";
      renderGrid(lista);
    } else {
      grid.style.display = "none";
      list.style.display = "flex";
      renderList(lista);
    }
    setTimeout(() => {
      window.Favoritos && Favoritos.aplicarBotones();
      window.Valoraciones && Valoraciones.aplicarEnCards();
    }, 0);
  }

  // ── Pills filtro ──
  document.querySelectorAll(".pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".pill")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      filtroActivo = btn.dataset.filter;
      render();
    });
  });

  // ── Buscador ──
  searchInput.addEventListener("input", render);

  // ── Ordenación ──
  sortSelect.addEventListener("change", render);

  // ── Toggle vista ──
  btnGrid.addEventListener("click", () => {
    vistaActiva = "grid";
    btnGrid.classList.add("active");
    btnList.classList.remove("active");
    render();
  });

  btnList.addEventListener("click", () => {
    vistaActiva = "list";
    btnList.classList.add("active");
    btnGrid.classList.remove("active");
    render();
  });

  // ── Carga inicial ──
  render();
});
