(function () {
  const KEY = 'soulsbase_theme';
  const html = document.documentElement;

  // Apply saved theme before DOMContentLoaded to avoid flash
  const saved = localStorage.getItem(KEY);
  if (saved) html.setAttribute('data-theme', saved);

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');
    if (!btn || !icon) return;

    function syncIcon() {
      const theme = html.getAttribute('data-theme') || 'dark';
      icon.className = theme === 'light' ? 'ti ti-moon' : 'ti ti-sun';
    }

    syncIcon();

    btn.addEventListener('click', () => {
      const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      html.setAttribute('data-theme', next);
      localStorage.setItem(KEY, next);
      syncIcon();
    });
  });
})();
