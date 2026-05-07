document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('anim-fade-up');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(
    '.game-card, .guide-row, .guia-card-full, .boss-card, .post-card, ' +
    '.drop-card, .build-card, .fase-card, .ataque-row, .lore-card, .result-item'
  ).forEach((el) => observer.observe(el));
});
