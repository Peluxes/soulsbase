(function () {
  const LS_KEY = "soulsbase_newsletter";

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showSuccess(email) {
    const form    = document.querySelector(".newsletter-content");
    const success = document.getElementById("newsletter-success");
    if (!form || !success) return;

    // Añadir botón de desuscribirse si no existe
    if (!success.querySelector(".newsletter-unsub")) {
      const unsubBtn = document.createElement("button");
      unsubBtn.className = "newsletter-unsub";
      unsubBtn.style.cssText = "margin-left:auto;background:none;border:0.5px solid var(--border);border-radius:var(--radius-sm);padding:4px 10px;font-size:11px;color:var(--text-hint);cursor:pointer";
      unsubBtn.textContent = "Desuscribirse";
      unsubBtn.addEventListener("click", () => {
        localStorage.removeItem(LS_KEY);
        success.style.display = "none";
        form.style.display = "flex";
        const emailInput = document.getElementById("newsletter-email");
        if (emailInput) emailInput.value = "";
      });
      success.appendChild(unsubBtn);
    }

    form.style.display = "none";
    success.style.display = "flex";
  }

  document.addEventListener("DOMContentLoaded", () => {
    const savedEmail = localStorage.getItem(LS_KEY);
    if (savedEmail) {
      showSuccess(savedEmail);
      return;
    }

    const btn      = document.getElementById("newsletter-btn");
    const input    = document.getElementById("newsletter-email");
    if (!btn || !input) return;

    btn.addEventListener("click", () => {
      const email = input.value.trim();
      if (!isValidEmail(email)) {
        input.style.borderColor = "#E24B4A";
        input.placeholder = "Email inválido";
        setTimeout(() => {
          input.style.borderColor = "";
          input.placeholder = "tu@email.com";
        }, 1800);
        return;
      }
      localStorage.setItem(LS_KEY, email);
      showSuccess(email);
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") btn.click();
    });
  });
})();
