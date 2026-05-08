const CACHE_NAME = "soulsbase-v1";

const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/catalogo.html",
  "/juego.html",
  "/guias.html",
  "/guia.html",
  "/galeria.html",
  "/builds.html",
  "/build.html",
  "/tierlist.html",
  "/boss.html",
  "/buscador.html",
  "/comunidad.html",
  "/favoritos.html",
  "/comparador.html",
  "/noticias.html",
  "/planificador-elden-ring.html",
  "/planificador-diablo4.html",
  "/planificador-poe2.html",
  "/404.html",
  "/css/tokens.css",
  "/css/base.css",
  "/css/components.css",
  "/js/data.js",
  "/js/main.js",
  "/js/catalogo.js",
  "/js/juego.js",
  "/js/guias.js",
  "/js/guia.js",
  "/js/galeria.js",
  "/js/tierlist.js",
  "/js/boss.js",
  "/js/buscador.js",
  "/js/comunidad.js",
  "/js/favoritos.js",
  "/js/valoraciones.js",
  "/js/historial.js",
  "/js/comentarios.js",
  "/js/noticias.js",
  "/js/newsletter.js",
  "/js/builds-index.js",
  "/js/build.js",
  "/js/comparador.js",
  "/js/planificador-elden-ring.js",
  "/js/planificador-diablo4.js",
  "/js/planificador-poe2.js",
  "/js/theme.js",
  "/js/responsive.js",
  "/js/animations.js",
  "/img/bloodborne.png",
  "/img/expedition-33.jpg",
];

// ── Install: precache all static assets ──
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      // addAll fails if any URL errors; use individual adds to be resilient
      Promise.allSettled(STATIC_ASSETS.map((url) => cache.add(url).catch(() => {})))
    ).then(() => self.skipWaiting())
  );
});

// ── Activate: delete old caches ──
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// ── Fetch: Cache First for assets, Network First for HTML ──
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin requests
  if (url.origin !== location.origin) return;

  const isHTML = request.headers.get("accept")?.includes("text/html") || url.pathname.endsWith(".html") || url.pathname === "/";

  if (isHTML) {
    // Network First for HTML pages
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          return response;
        })
        .catch(() =>
          caches.match(request).then((cached) => cached || caches.match("/index.html"))
        )
    );
  } else {
    // Cache First for static assets
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          return response;
        }).catch(() => cached);
      })
    );
  }
});
