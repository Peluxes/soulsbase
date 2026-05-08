(function () {
  const badgeMap = {
    hot:     ["badge-hot", "Popular"],
    new:     ["badge-new", "Nueva"],
    updated: ["badge-up",  "Actualizada"],
  };

  const tipoColors = {
    boss:  "#E24B4A",
    build: "#EF9F27",
    zona:  "#97C459",
    lore:  "#85B7EB",
  };

  function formatFecha(iso) {
    if (!iso) return "";
    const [y, m, d] = iso.split("-");
    const meses = ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];
    return `${parseInt(d)} ${meses[parseInt(m) - 1]} ${y}`;
  }

  function formatVisitas(n) {
    return n >= 1000 ? (n / 1000).toFixed(1) + "k" : n;
  }

  // ── Render hero ──
  function renderHero(g) {
    document.title = g.titulo + " — SoulsBase";

    const hero = document.getElementById("guia-hero");
    if (hero) {
      hero.style.background = `radial-gradient(ellipse at top left, ${g.juegoBg} 0%, var(--bg-surface) 70%)`;
      hero.style.borderColor = "var(--border)";
    }

    const set = (id, html, isHtml) => {
      const el = document.getElementById(id);
      if (el) { if (isHtml) el.innerHTML = html; else el.textContent = html; }
    };

    set("guia-emoji", g.juegoEmoji);

    const [badgeCls, badgeLabel] = badgeMap[g.badge] || ["", g.badge];
    const tipoColor = tipoColors[g.tipo] || "var(--accent)";
    set("guia-badges", `
      <span class="build-badge" style="background:${tipoColor}22;color:${tipoColor};border:0.5px solid ${tipoColor}44">${g.tipoLabel}</span>
      ${badgeCls ? `<span class="badge ${badgeCls}">${badgeLabel}</span>` : ""}
    `, true);

    set("guia-titulo", g.titulo);

    set("guia-meta", `
      <span><i class="ti ti-device-gamepad"></i> ${g.juego}</span>
      <span><i class="ti ti-clock"></i> ${g.minutos} min lectura</span>
      <span><i class="ti ti-eye"></i> ${formatVisitas(g.visitas)} visitas</span>
      ${g.fecha ? `<span><i class="ti ti-calendar"></i> ${formatFecha(g.fecha)}</span>` : ""}
    `, true);
  }

  // ── Render contenido ──
  function renderContenido(g) {
    const container = document.getElementById("guia-content");
    if (!container || !g.contenido) return;

    container.innerHTML = g.contenido.map((sec, i) => {
      let html = `<h2 id="seccion-${i}">${sec.h2}</h2>`;
      if (sec.texto) html += `<p>${sec.texto}</p>`;
      if (sec.lista && sec.lista.length) {
        html += `<ul>${sec.lista.map((li) => `<li>${li}</li>`).join("")}</ul>`;
      }
      if (sec.tip) {
        html += `<div class="guia-tip-box">
          <i class="ti ti-bulb"></i>
          <div class="guia-tip-text">${sec.tip}</div>
        </div>`;
      }
      return html;
    }).join("");
  }

  // ── Render TOC ──
  function renderTOC(g) {
    const tocItems = document.getElementById("toc-items");
    if (!tocItems || !g.contenido) return;

    tocItems.innerHTML = g.contenido.map((sec, i) =>
      `<a class="guia-toc-item" data-idx="${i}" href="#seccion-${i}">${sec.h2}</a>`
    ).join("");

    tocItems.querySelectorAll(".guia-toc-item").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.getElementById(`seccion-${link.dataset.idx}`);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    // IntersectionObserver para highlight activo
    const headings = g.contenido.map((_, i) => document.getElementById(`seccion-${i}`)).filter(Boolean);
    if (!headings.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = entry.target.id.replace("seccion-", "");
          tocItems.querySelectorAll(".guia-toc-item").forEach((l) => {
            l.classList.toggle("active", l.dataset.idx === idx);
          });
        }
      });
    }, { rootMargin: "-60px 0px -60% 0px", threshold: 0 });

    headings.forEach((h) => observer.observe(h));
  }

  // ── Render relacionadas ──
  function renderRelacionadas(g) {
    const container = document.getElementById("guias-relacionadas");
    if (!container) return;

    const relacionadas = DB.guias
      .filter((x) => x.id !== g.id && (x.juego === g.juego || x.tipo === g.tipo))
      .slice(0, 3);

    if (!relacionadas.length) {
      container.closest(".guia-relacionadas").style.display = "none";
      return;
    }

    container.innerHTML = relacionadas.map((r) => {
      const [badgeCls, badgeLabel] = badgeMap[r.badge] || ["", r.badge];
      const visitas = formatVisitas(r.visitas);
      return `
        <div class="guia-card-full" onclick="window.location.href='guia.html?id=${r.id}'" style="cursor:pointer">
          <div class="guia-card-thumb" style="background:${r.juegoBg}">${r.juegoEmoji}</div>
          <div class="guia-card-body">
            <div class="guia-card-top">
              <span class="guia-card-title">${r.titulo}</span>
              ${badgeCls ? `<span class="badge ${badgeCls}">${badgeLabel}</span>` : ""}
            </div>
            <div class="guia-card-desc">${r.descripcion}</div>
            <div class="guia-card-footer">
              <span><i class="ti ti-device-gamepad"></i>${r.juego}</span>
              <span><i class="ti ti-tag"></i>${r.tipoLabel}</span>
              <span><i class="ti ti-clock"></i>${r.minutos} min</span>
              <span><i class="ti ti-eye"></i>${visitas} visitas</span>
            </div>
          </div>
        </div>`;
    }).join("");
  }

  // ── Compartir ──
  function initShare() {
    const btn = document.getElementById("guia-share-btn");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const url = window.location.href;
      navigator.clipboard.writeText(url).then(() => {
        const orig = btn.innerHTML;
        btn.innerHTML = '<i class="ti ti-check"></i> ¡Copiado!';
        setTimeout(() => (btn.innerHTML = orig), 2000);
      }).catch(() => prompt("Copia esta URL:", url));
    });
  }

  // ── Error ──
  function showError() {
    const main = document.querySelector("main.content");
    if (main) main.innerHTML = `
      <div style="padding:48px 28px;text-align:center">
        <div style="font-size:48px;margin-bottom:16px">📖</div>
        <div style="font-size:18px;font-weight:500;margin-bottom:8px">Guía no encontrada</div>
        <div style="font-size:13px;color:var(--text-muted);margin-bottom:24px">El ID de guía no existe o fue eliminada.</div>
        <a href="guias.html" class="tl-share-btn">Ver todas las guías →</a>
      </div>`;
  }

  // ── Init ──
  document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (!id || !DB || !DB.guias) { showError(); return; }

    const guia = DB.guias.find((g) => g.id === id);
    if (!guia) { showError(); return; }

    renderHero(guia);
    renderContenido(guia);
    renderTOC(guia);
    renderRelacionadas(guia);
    initShare();
  });
})();
