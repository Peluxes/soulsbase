(function () {
  if (localStorage.getItem('soulsbase_intro_shown')) return;
  localStorage.setItem('soulsbase_intro_shown', '1');

  const overlay = document.createElement('div');
  overlay.id = 'intro-overlay';
  overlay.innerHTML = `
    <div id="intro-content">
      <div id="intro-you-died">YOU DIED</div>
      <div id="intro-soulsbase"><em>Souls</em>Base</div>
    </div>`;
  document.body.insertBefore(overlay, document.body.firstChild);

  overlay.addEventListener('animationend', (e) => {
    if (e.animationName === 'introFadeOut') overlay.remove();
  });
})();
