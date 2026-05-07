document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("galeria-container");
  const countEl = document.getElementById("results-count");
  const searchInput = document.getElementById("search-input");
  const sortSelect = document.getElementById("sort-select");
  const btnMasonry = document.getElementById("btn-masonry");
  const btnGrande = document.getElementById("btn-grande");
  const lightbox = document.getElementById("lightbox");
  const lbClose = document.getElementById("lightbox-close");
  const lbBackdrop = document.getElementById("lightbox-backdrop");

  let filtroTipo = "todos";
  let filtroJuego = "todos";
  let vistaGrande = false;

  // ── Botones de juego ──
  const juegos = [
    { id: "todos", label: "Todos", color: "#7F77DD" },
    { id: "Elden Ring", label: "Elden Ring", color: "#9B7D3A" },
    { id: "Dark Souls III", label: "Dark Souls III", color: "#4A7AB5" },
    { id: "Bloodborne", label: "Bloodborne", color: "#8A4DA0" },
    { id: "Sekiro", label: "Sekiro", color: "#3D8A4A" },
    { id: "Diablo IV", label: "Diablo IV", color: "#A83030" },
  ];

  const juegoRow = document.getElementById("juego-filter-row");
  juegoRow.innerHTML = juegos
    .map(
      (j) => `
    <button class="juego-filter-btn ${j.id === "todos" ? "active" : ""}" data-juego="${j.id}">
      <span class="juego-filter-dot" style="background:${j.color}"></span>
      ${j.label}
    </button>`,
    )
    .join("");

  juegoRow.querySelectorAll(".juego-filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      juegoRow
        .querySelectorAll(".juego-filter-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      filtroJuego = btn.dataset.juego;
      render();
    });
  });

  // ── Filtrar ──
  function filtrar() {
    const q = searchInput.value.toLowerCase().trim();
    let res = DB.galeria;

    if (filtroTipo !== "todos") res = res.filter((i) => i.tipo === filtroTipo);
    if (filtroJuego !== "todos")
      res = res.filter((i) => i.juego === filtroJuego);
    if (q)
      res = res.filter(
        (i) =>
          i.titulo.toLowerCase().includes(q) ||
          i.juego.toLowerCase().includes(q),
      );

    if (sortSelect.value === "likes")
      res = [...res].sort((a, b) => b.likes - a.likes);
    if (sortSelect.value === "reciente")
      res = [...res].sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    return res;
  }

  // ── Render ──
  const typeBadge = {
    screenshot: "gal-screenshot",
    artwork: "gal-artwork",
    video: "gal-video",
  };
  const typeLabel = {
    screenshot: "Screenshot",
    artwork: "Artwork",
    video: "Vídeo",
  };

  function render() {
    const lista = filtrar();
    countEl.textContent = `${lista.length} elemento${lista.length !== 1 ? "s" : ""}`;
    container.className = vistaGrande
      ? "galeria-masonry vista-grande"
      : "galeria-masonry";

    container.innerHTML = lista
      .map(
        (item) => `
      <div class="gal-item-wrap">
        <div class="gal-item" onclick="abrirLightbox(${item.id})">
          <div class="gal-thumb h-${item.altura}" style="background:${item.juegoBg}">${item.emoji}</div>
          ${item.tipo === "video" ? '<div class="gal-play-overlay"><i class="ti ti-player-play"></i></div>' : ""}
          <div class="gal-info">
            <div class="gal-title">${item.titulo}</div>
            <div class="gal-footer">
              <div class="gal-footer-left">
                <span><i class="ti ti-heart"></i>${item.likes.toLocaleString("es")}</span>
                <span>${item.juego}</span>
              </div>
              <span class="gal-type-badge ${typeBadge[item.tipo]}">${typeLabel[item.tipo]}</span>
            </div>
          </div>
        </div>
      </div>`,
      )
      .join("");
  }

  // ── Lightbox ──
  window.abrirLightbox = function (id) {
    const item = DB.galeria.find((i) => i.id === id);
    if (!item) return;

    document.getElementById("lightbox-media").innerHTML =
      `<div style="font-size:72px;background:${item.juegoBg};width:100%;height:100%;display:flex;align-items:center;justify-content:center">${item.emoji}</div>`;
    document.getElementById("lightbox-title").textContent = item.titulo;
    document.getElementById("lightbox-meta").innerHTML = `
      <span><i class="ti ti-device-gamepad"></i>${item.juego}</span>
      <span><i class="ti ti-heart"></i>${item.likes.toLocaleString("es")} likes</span>
      <span><i class="ti ti-calendar"></i>${item.fecha}</span>`;

    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  function cerrarLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }

  lbClose.addEventListener("click", cerrarLightbox);
  lbBackdrop.addEventListener("click", cerrarLightbox);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") cerrarLightbox();
  });

  // ── Pills tipo ──
  document.querySelectorAll(".pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".pill")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      filtroTipo = btn.dataset.filter;
      render();
    });
  });

  // ── Vista ──
  btnMasonry.addEventListener("click", () => {
    vistaGrande = false;
    btnMasonry.classList.add("active");
    btnGrande.classList.remove("active");
    render();
  });
  btnGrande.addEventListener("click", () => {
    vistaGrande = true;
    btnGrande.classList.add("active");
    btnMasonry.classList.remove("active");
    render();
  });

  searchInput.addEventListener("input", render);
  sortSelect.addEventListener("change", render);

  render();
});
