const POSTS = [
  { id: 1,  autor: "DarkWarden",  iniciales: "DW", color: "#534AB7", titulo: "¿Cuál es la mejor build para Malenia en 2026?",              cat: "builds",    juego: "Elden Ring",           respuestas: 24,  likes: 87,  tiempo: "hace 2h",        nuevo: true  },
  { id: 2,  autor: "SoulSeeker",  iniciales: "SS", color: "#185FA5", titulo: "Guía completa Expedition 33 — todos los secretos",           cat: "guias",     juego: "Expedition 33",        respuestas: 11,  likes: 134, tiempo: "hace 5h",        nuevo: true  },
  { id: 3,  autor: "BloodHunter", iniciales: "BH", color: "#A83030", titulo: "Bloodborne en PC — análisis del port no oficial",            cat: "debates",   juego: "Bloodborne",           respuestas: 89,  likes: 412, tiempo: "hace 1 día",     nuevo: false },
  { id: 4,  autor: "TarnishedOne",iniciales: "TO", color: "#3D8A4A", titulo: "Tier list de jefes de Elden Ring — discusión",               cat: "debates",   juego: "Elden Ring",           respuestas: 156, likes: 830, tiempo: "hace 2 días",    nuevo: false },
  { id: 5,  autor: "NecroMancer", iniciales: "NM", color: "#72243E", titulo: "Build Nigromante S3 — guía actualizada temporada 8",         cat: "builds",    juego: "Diablo IV",            respuestas: 33,  likes: 201, tiempo: "hace 3 días",    nuevo: false },
  { id: 6,  autor: "PersonaFan",  iniciales: "PF", color: "#854F0B", titulo: "Persona 5 Royal vs Persona 3 Reload — ¿cuál empezar?",       cat: "debates",   juego: "Persona 5 Royal",      respuestas: 67,  likes: 298, tiempo: "hace 4 días",    nuevo: false },
  { id: 7,  autor: "IsaacRun",    iniciales: "IR", color: "#0F6E56", titulo: "Mejor seed para el logro Mega Satan en Repentance",          cat: "guias",     juego: "The Binding of Isaac", respuestas: 8,   likes: 45,  tiempo: "hace 5 días",    nuevo: false },
  { id: 8,  autor: "LoreKeeper",  iniciales: "LK", color: "#185FA5", titulo: "¿Alguien más cree que el lore de DS1 es superior?",          cat: "off-topic", juego: "Dark Souls",           respuestas: 201, likes: 567, tiempo: "hace 1 semana",  nuevo: false },
  { id: 9,  autor: "HadesRunner", iniciales: "HR", color: "#3C3489", titulo: "Hades II early access — impresiones tras 40h",               cat: "debates",   juego: "Hades II",             respuestas: 44,  likes: 189, tiempo: "hace 1 semana",  nuevo: false },
  { id: 10, autor: "ExpedAdmin",  iniciales: "EA", color: "#639922", titulo: "Off-topic: juegos de rol que se parecen a Expedition 33",    cat: "off-topic", juego: "Ninguno",              respuestas: 29,  likes: 93,  tiempo: "hace 2 semanas", nuevo: false }
];

document.addEventListener('DOMContentLoaded', () => {
  const postListEl   = document.getElementById('post-list');
  const postCountEl  = document.getElementById('post-count');
  const filterBtns   = document.querySelectorAll('.filter-pills .pill');
  const modal        = document.getElementById('modal-overlay');
  const btnNuevo     = document.getElementById('btn-nuevo-post');
  const btnClose     = document.getElementById('modal-close');
  const btnSubmit    = document.getElementById('post-submit');
  const juegoSelect  = document.getElementById('post-juego');

  let filtroActivo = 'todos';
  let posts = [...POSTS];

  // Populate juego select from DB
  const juegoOpts = [{ titulo: 'Ninguno' }, ...(typeof DB !== 'undefined' ? DB.juegos : [])];
  juegoSelect.innerHTML = juegoOpts
    .map((j) => `<option value="${j.titulo}">${j.titulo}</option>`)
    .join('');

  const LIKES_KEY = 'soulsbase_likes';
  const loadLikes = () => { try { return JSON.parse(localStorage.getItem(LIKES_KEY)) || {}; } catch { return {}; } };
  const saveLikes = (d) => localStorage.setItem(LIKES_KEY, JSON.stringify(d));

  const CAT_LABELS = { debates: 'Debates', builds: 'Builds', guias: 'Guías', 'off-topic': 'Off-topic' };

  function catBadge(cat) {
    return `<span class="post-cat-badge cat-${cat}">${CAT_LABELS[cat] || cat}</span>`;
  }

  function renderPosts() {
    const filtered = filtroActivo === 'todos' ? posts : posts.filter((p) => p.cat === filtroActivo);
    postCountEl.textContent = `${filtered.length} post${filtered.length !== 1 ? 's' : ''}`;
    const likedMap = loadLikes();

    postListEl.innerHTML = filtered.map((p) => {
      const liked = likedMap[p.id];
      const count = p.likes + (liked ? 1 : 0);
      return `
        <div class="post-card${p.nuevo ? ' post-new' : ''}">
          <div class="post-avatar" style="background:${p.color}">${p.iniciales}</div>
          <div class="post-body">
            <div class="post-title">${p.titulo}</div>
            <div class="post-meta">
              ${catBadge(p.cat)}
              <span><i class="ti ti-device-gamepad"></i>${p.juego}</span>
              <span>${p.tiempo}</span>
            </div>
            <div class="post-footer">
              ${p.nuevo ? '<span class="post-new-dot"></span>' : ''}
              <span><i class="ti ti-message-circle"></i>${p.respuestas} respuestas</span>
              <button class="like-btn${liked ? ' active' : ''}" data-id="${p.id}">
                <i class="ti ti-heart${liked ? '-filled' : ''}"></i>${count}
              </button>
            </div>
          </div>
          <i class="ti ti-chevron-right" style="color:var(--text-hint);font-size:16px;flex-shrink:0;margin-top:4px"></i>
        </div>`;
    }).join('');

    postListEl.querySelectorAll('.like-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = +btn.dataset.id;
        const m = loadLikes();
        m[id] = !m[id];
        saveLikes(m);
        renderPosts();
      });
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      filtroActivo = btn.dataset.filter;
      renderPosts();
    });
  });

  if (btnNuevo) btnNuevo.addEventListener('click', () => modal.classList.add('open'));
  if (btnClose) btnClose.addEventListener('click', () => modal.classList.remove('open'));
  modal?.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('open'); });

  if (btnSubmit) {
    btnSubmit.addEventListener('click', () => {
      const titulo = document.getElementById('post-titulo').value.trim();
      const cat    = document.getElementById('post-cat').value;
      const juego  = juegoSelect.value;
      if (!titulo) { document.getElementById('post-titulo').focus(); return; }

      posts.unshift({
        id: Date.now(), autor: 'Tú', iniciales: 'TU', color: '#534AB7',
        titulo, cat, juego, respuestas: 0, likes: 0, tiempo: 'ahora mismo', nuevo: true
      });

      modal.classList.remove('open');
      document.getElementById('post-titulo').value = '';
      document.getElementById('post-contenido').value = '';
      filtroActivo = 'todos';
      filterBtns.forEach((b) => b.classList.toggle('active', b.dataset.filter === 'todos'));
      renderPosts();
    });
  }

  renderPosts();
});
