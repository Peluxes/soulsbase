document.addEventListener("DOMContentLoaded", () => {
  const sel1 = document.getElementById("comp-sel-1");
  const sel2 = document.getElementById("comp-sel-2");
  const compArea = document.getElementById("comp-area");

  function populateSelects() {
    const opts = DB.juegos
      .map((j) => `<option value="${j.id}">${j.titulo}</option>`)
      .join("");
    sel1.innerHTML = `<option value="">— Selecciona un juego —</option>` + opts;
    sel2.innerHTML = `<option value="">— Selecciona un juego —</option>` + opts;
  }

  function getDif(j) {
    const f = DB.fichas[j.id];
    if (!f) return null;
    const vals = Object.values(f.dificultad);
    return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
  }

  function renderHeader(j) {
    const fav = window.Favoritos ? Favoritos.isFav("juegos", j.id) : false;
    return `
      <div class="comp-game-header">
        <div class="comp-game-img" style="background:${j.thumbBg}">
          ${j.imagen ? `<img src="${j.imagen}" alt="${j.titulo}" onerror="this.style.display='none'">` : j.emoji}
        </div>
        <div class="comp-game-title">${j.titulo}</div>
        <div style="font-size:11px;color:var(--text-hint);margin-bottom:10px">${j.developer} · ${j.año}</div>
        <button class="fav-btn ${fav ? "active" : ""}" onclick="
          if(window.Favoritos){ Favoritos.toggle('juegos','${j.id}'); this.classList.toggle('active'); }
        " style="position:static;opacity:1;width:auto;padding:6px 14px;font-size:12px">
          ${fav ? "♥ En favoritos" : "♡ Añadir a favoritos"}
        </button>
      </div>`;
  }

  function renderBar(val, max, color) {
    const pct = Math.min(100, Math.round((val / max) * 100));
    return `<div style="background:var(--bg-hover);height:6px;border-radius:3px;width:120px;display:inline-block">
      <div style="width:${pct}%;height:100%;background:${color};border-radius:3px"></div>
    </div>`;
  }

  function winner(val1, val2, higher = true) {
    if (val1 === null || val2 === null) return [false, false];
    if (val1 === val2) return [false, false];
    return higher ? [val1 > val2, val1 < val2] : [val1 < val2, val1 > val2];
  }

  function wrapWinner(text, isWinner) {
    return isWinner ? `<span class="cell-winner">${text}</span>` : text;
  }

  function render() {
    const id1 = sel1.value;
    const id2 = sel2.value;

    if (!id1 || !id2) {
      compArea.innerHTML = `<div class="comp-empty">Selecciona dos juegos para compararlos</div>`;
      return;
    }

    const j1 = DB.juegos.find((j) => j.id === id1);
    const j2 = DB.juegos.find((j) => j.id === id2);
    if (!j1 || !j2) return;

    const f1 = DB.fichas[j1.id];
    const f2 = DB.fichas[j2.id];
    const dif1 = getDif(j1);
    const dif2 = getDif(j2);
    const boss1 = f1 ? f1.bosses.length : null;
    const boss2 = f2 ? f2.bosses.length : null;
    const guias1 = f1 ? f1.guias.length : null;
    const guias2 = f2 ? f2.guias.length : null;

    const [w1rating, w2rating] = winner(j1.rating, j2.rating);
    const [w1año, w2año] = winner(j1.año, j2.año, false);
    const [w1dif, w2dif] = winner(dif1, dif2, false);
    const [w1boss, w2boss] = winner(boss1, boss2);
    const [w1guias, w2guias] = winner(guias1, guias2);

    compArea.innerHTML = `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:8px">
        <div>${renderHeader(j1)}</div>
        <div>${renderHeader(j2)}</div>
      </div>
      <table class="comparador-table">
        <tr>
          <td class="row-label">Rating</td>
          <td>${wrapWinner(renderBar(j1.rating, 10, "#EF9F27") + " " + j1.rating, w1rating)}</td>
          <td>${wrapWinner(renderBar(j2.rating, 10, "#EF9F27") + " " + j2.rating, w2rating)}</td>
        </tr>
        <tr>
          <td class="row-label">Año</td>
          <td>${wrapWinner(j1.año, w1año)}</td>
          <td>${wrapWinner(j2.año, w2año)}</td>
        </tr>
        <tr>
          <td class="row-label">Developer</td>
          <td>${j1.developer}</td>
          <td>${j2.developer}</td>
        </tr>
        <tr>
          <td class="row-label">Categoría</td>
          <td><span class="tag tag-${j1.tag}">${j1.tagLabel}</span></td>
          <td><span class="tag tag-${j2.tag}">${j2.tagLabel}</span></td>
        </tr>
        <tr>
          <td class="row-label">Dificultad</td>
          <td>${dif1 !== null ? wrapWinner(renderBar(dif1, 100, "#E24B4A") + " " + dif1 + "/100", w1dif) : "N/A"}</td>
          <td>${dif2 !== null ? wrapWinner(renderBar(dif2, 100, "#E24B4A") + " " + dif2 + "/100", w2dif) : "N/A"}</td>
        </tr>
        <tr>
          <td class="row-label">Plataformas</td>
          <td>${f1 ? f1.plataformas : "—"}</td>
          <td>${f2 ? f2.plataformas : "—"}</td>
        </tr>
        <tr>
          <td class="row-label">Modos</td>
          <td>${f1 ? f1.modos : "—"}</td>
          <td>${f2 ? f2.modos : "—"}</td>
        </tr>
        <tr>
          <td class="row-label">Bosses</td>
          <td>${boss1 !== null ? wrapWinner(boss1, w1boss) : "—"}</td>
          <td>${boss2 !== null ? wrapWinner(boss2, w2boss) : "—"}</td>
        </tr>
        <tr>
          <td class="row-label">Guías</td>
          <td>${guias1 !== null ? wrapWinner(guias1, w1guias) : "—"}</td>
          <td>${guias2 !== null ? wrapWinner(guias2, w2guias) : "—"}</td>
        </tr>
      </table>`;
  }

  populateSelects();
  sel1.addEventListener("change", render);
  sel2.addEventListener("change", render);
  render();
});
