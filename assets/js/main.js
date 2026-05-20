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

  function getActiveTheme() {
    const current = html.getAttribute("data-theme");
    return current === "light" || current === "dark" ? current : getSystemPref();
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
      const next = getActiveTheme() === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  }

  // Year in footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }

  function isInInitialViewport(item) {
    const rect = item.getBoundingClientRect();
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;

    return rect.top < viewportHeight && rect.bottom > 0;
  }

  // Reveal app tiles and supporting panels as they enter the viewport.
  const revealItems = document.querySelectorAll(".app-slide, .reveal-panel");
  if (revealItems.length) {
    html.classList.add("supports-scroll-reveal");
    revealItems.forEach((item) => {
      if (isInInitialViewport(item)) {
        item.classList.add("is-visible");
      } else {
        item.classList.add("is-reveal-pending");
      }
    });

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => {
        item.classList.add("is-visible");
        item.classList.remove("is-reveal-pending");
      });
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          entry.target.classList.remove("is-reveal-pending");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.18,
      }
    );

    revealItems.forEach((item) => {
      if (!item.classList.contains("is-visible")) {
        revealObserver.observe(item);
      }
    });
  }
})();
