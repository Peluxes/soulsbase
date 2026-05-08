(function () {
  const LS_KEY     = "soulsbase_comentarios";
  const LS_MIO_KEY = "soulsbase_mis_comentarios";
  const LS_LIKES   = "soulsbase_comentarios_likes";

  function getKey() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    if (!id) return null;
    if (window.location.pathname.includes("boss")) return "boss-" + id;
    return "juego-" + id;
  }

  function loadAll()   { try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; } catch { return {}; } }
  function loadMios()  { try { return JSON.parse(localStorage.getItem(LS_MIO_KEY)) || []; } catch { return []; } }
  function loadLikes() { try { return JSON.parse(localStorage.getItem(LS_LIKES)) || []; } catch { return []; } }
  function saveAll(d)  { localStorage.setItem(LS_KEY, JSON.stringify(d)); }
  function saveMios(a) { localStorage.setItem(LS_MIO_KEY, JSON.stringify(a)); }
  function saveLikes(a){ localStorage.setItem(LS_LIKES, JSON.stringify(a)); }

  function tiempoRelativo(isoStr) {
    const diff = Date.now() - new Date(isoStr).getTime();
    const min = Math.floor(diff / 60000);
    if (min < 1)  return "hace un momento";
    if (min < 60) return `hace ${min} minuto${min !== 1 ? "s" : ""}`;
    const h = Math.floor(min / 60);
    if (h < 24)   return `hace ${h} hora${h !== 1 ? "s" : ""}`;
    const d = Math.floor(h / 24);
    if (d < 30)   return `hace ${d} día${d !== 1 ? "s" : ""}`;
    const mo = Math.floor(d / 30);
    return `hace ${mo} mes${mo !== 1 ? "es" : ""}`;
  }

  function inicialAvatar(autor) {
    return autor.charAt(0).toUpperCase();
  }

  function render(key) {
    const lista = document.getElementById("comentarios-lista");
    const countEl = document.getElementById("comentarios-count");
    if (!lista) return;

    const all   = loadAll();
    const mios  = loadMios();
    const likes = loadLikes();
    const coms  = all[key] || [];

    if (countEl) countEl.textContent = coms.length ? `${coms.length} comentario${coms.length !== 1 ? "s" : ""}` : "";

    if (!coms.length) {
      lista.innerHTML = `<div class="comentarios-empty">
        <i class="ti ti-message-circle" style="font-size:32px;display:block;margin-bottom:8px;opacity:.4"></i>
        Sé el primero en comentar
      </div>`;
      return;
    }

    lista.innerHTML = [...coms].reverse().map((c) => {
      const esMio  = mios.includes(c.id);
      const liked  = likes.includes(c.id);
      return `
        <div class="comentario-item" data-id="${c.id}">
          <div class="comentario-header">
            <div class="comentario-avatar">${inicialAvatar(c.autor)}</div>
            <span class="comentario-autor">${c.autor}</span>
            <span class="comentario-fecha">${tiempoRelativo(c.fecha)}</span>
          </div>
          <div class="comentario-texto">${c.texto}</div>
          <div class="comentario-actions">
            <button class="comentario-like-btn${liked ? " liked" : ""}" data-id="${c.id}">
              <i class="ti ti-heart${liked ? "-filled" : ""}"></i>
              <span>${c.likes + (liked ? 1 : 0)}</span>
            </button>
            ${esMio ? `<button class="comentario-del-btn" data-id="${c.id}"><i class="ti ti-trash"></i> Eliminar</button>` : ""}
          </div>
        </div>`;
    }).join("");

    // Like buttons
    lista.querySelectorAll(".comentario-like-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id    = btn.dataset.id;
        const likes = loadLikes();
        const idx   = likes.indexOf(id);
        if (idx === -1) likes.push(id); else likes.splice(idx, 1);
        saveLikes(likes);
        render(key);
      });
    });

    // Delete buttons
    lista.querySelectorAll(".comentario-del-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id  = btn.dataset.id;
        const all = loadAll();
        if (all[key]) all[key] = all[key].filter((c) => c.id !== id);
        saveAll(all);
        const mios = loadMios().filter((x) => x !== id);
        saveMios(mios);
        render(key);
      });
    });
  }

  function init() {
    const key = getKey();
    if (!key) return;

    const section = document.getElementById("comentarios-section");
    if (!section) return;

    render(key);

    const submitBtn = document.getElementById("comentario-submit");
    if (!submitBtn) return;

    submitBtn.addEventListener("click", () => {
      const autorEl = document.getElementById("comentario-autor");
      const textoEl = document.getElementById("comentario-texto");
      const texto   = textoEl.value.trim();
      if (!texto) {
        textoEl.style.borderColor = "#E24B4A";
        setTimeout(() => (textoEl.style.borderColor = ""), 1500);
        return;
      }
      const autor = (autorEl.value.trim() || "Anónimo");
      const id    = Date.now().toString();
      const comentario = { id, autor, texto, fecha: new Date().toISOString(), likes: 0 };

      const all = loadAll();
      if (!all[key]) all[key] = [];
      all[key].push(comentario);
      saveAll(all);

      const mios = loadMios();
      mios.push(id);
      saveMios(mios);

      autorEl.value = "";
      textoEl.value = "";
      render(key);
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
