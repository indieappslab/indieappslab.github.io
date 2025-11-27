(function () {
  const html = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");
  const THEME_KEY = "indieappslab-theme";

  function applyTheme(theme) {
    if (theme === "light" || theme === "dark") {
      html.setAttribute("data-theme", theme);
    } else {
      html.setAttribute("data-theme", "auto");
    }
  }

  function getSystemPref() {
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  // Init theme from localStorage or system
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") {
    applyTheme(saved);
  } else {
    applyTheme("auto");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = html.getAttribute("data-theme") || "auto";

      let next;
      if (current === "auto") {
        // lock to opposite of system
        next = getSystemPref() === "dark" ? "light" : "dark";
      } else if (current === "light") {
        next = "dark";
      } else if (current === "dark") {
        next = "auto";
      }

      applyTheme(next);
      if (next === "auto") {
        localStorage.removeItem(THEME_KEY);
      } else {
        localStorage.setItem(THEME_KEY, next);
      }
    });
  }

  // Year in footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }
})();
