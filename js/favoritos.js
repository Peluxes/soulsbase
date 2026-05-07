(function () {
  const KEY = 'soulsbase_favoritos';

  function load() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || { juegos: [], bosses: [] };
    } catch {
      return { juegos: [], bosses: [] };
    }
  }

  function save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  function isFav(tipo, id) {
    const data = load();
    return Array.isArray(data[tipo]) && data[tipo].includes(id);
  }

  function toggle(tipo, id) {
    const data = load();
    if (!Array.isArray(data[tipo])) data[tipo] = [];
    const idx = data[tipo].indexOf(id);
    if (idx === -1) data[tipo].push(id);
    else data[tipo].splice(idx, 1);
    save(data);
    return idx === -1;
  }

  function aplicarBotones() {
    document.querySelectorAll('.game-card[data-id]').forEach(card => {
      if (card.querySelector('.fav-btn')) return;
      const id = card.dataset.id;
      const btn = document.createElement('button');
      btn.className = 'fav-btn' + (isFav('juegos', id) ? ' active' : '');
      btn.innerHTML = '<i class="ti ti-heart"></i>';
      btn.title = 'Añadir a favoritos';
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const activo = toggle('juegos', id);
        btn.classList.toggle('active', activo);
      });
      card.style.position = 'relative';
      card.appendChild(btn);
    });

    document.querySelectorAll('.boss-card[data-id]').forEach(card => {
      if (card.querySelector('.fav-btn')) return;
      const id = card.dataset.id;
      const btn = document.createElement('button');
      btn.className = 'fav-btn' + (isFav('bosses', id) ? ' active' : '');
      btn.innerHTML = '<i class="ti ti-heart"></i>';
      btn.title = 'Añadir a favoritos';
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const activo = toggle('bosses', id);
        btn.classList.toggle('active', activo);
      });
      card.style.position = 'relative';
      card.appendChild(btn);
    });
  }

  // Asignación SÍNCRONA — se ejecuta inmediatamente al parsear el script
  window.Favoritos = { load, save, isFav, toggle, aplicarBotones };

  // Aplicar botones cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', aplicarBotones);
  } else {
    aplicarBotones();
  }
})();
