import { translations, type Lang } from "../lib/i18n.ts";

let activeLang: Lang = "en";

// Resolve a dotted key from the selected locale, including array indexes.
function translationAtPath(lang: Lang, path: string): string | undefined {
  let value: unknown = translations[lang];
  for (const part of path.split(".")) {
    if (Array.isArray(value)) {
      value = value[Number(part)];
    } else if (value !== null && typeof value === "object") {
      value = (value as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }
  return typeof value === "string" || typeof value === "number" ? String(value) : undefined;
}

// Apply locale copy and document language without replacing surrounding markup.
function applyLanguage(lang: Lang): void {
  activeLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
  document.title = translations[lang].meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", translations[lang].meta.description);

  for (const element of document.querySelectorAll<HTMLElement>("[data-i18n]")) {
    if (element.hasAttribute("data-typewriter")) continue;
    const key = element.dataset.i18n;
    const translated = key ? translationAtPath(lang, key) : undefined;
    if (translated !== undefined) element.textContent = translated;
  }

  for (const element of document.querySelectorAll<HTMLElement>("[data-i18n-aria]")) {
    const key = element.dataset.i18nAria;
    const template = key ? translationAtPath(lang, key) : undefined;
    if (template === undefined) continue;

    const nameKey = element.dataset.i18nAriaName;
    const name = nameKey ? translationAtPath(lang, nameKey) : undefined;
    element.setAttribute("aria-label", template.replace("{name}", name ?? ""));
  }

  for (const button of document.querySelectorAll<HTMLButtonElement>("[data-language-toggle]")) {
    const labelSpan = button.querySelector<HTMLElement>("[data-lang-label]");
    if (labelSpan) {
      labelSpan.textContent = lang === "en" ? "ID" : "EN";
    } else {
      button.textContent = lang === "en" ? "ID" : "EN";
    }
    button.setAttribute("aria-label", lang === "en"
      ? translations[lang].nav.switchToIndonesian
      : translations[lang].nav.switchToEnglish);
  }

  const drawerOpen = document.querySelector("[data-mobile-drawer]")?.classList.contains("open") ?? false;
  document.querySelector("[data-menu-toggle]")?.setAttribute(
    "aria-label",
    drawerOpen ? translations[lang].nav.closeMenu : translations[lang].nav.openMenu,
  );
  syncThemeControls();
  document.documentElement.removeAttribute("data-locale-pending");
}

// Persist a user's locale choice in the same cookie used by the source site.
function selectLanguage(lang: Lang): void {
  document.cookie = `lang=${lang}; path=/; max-age=31536000; samesite=lax`;
  applyLanguage(lang);
}

// Keep the paired desktop and mobile theme controls and their labels in sync.
function syncThemeControls(): void {
  const isLight = document.documentElement.dataset.theme === "light";
  for (const button of document.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]")) {
    button.setAttribute("aria-pressed", String(!isLight));
    button.setAttribute("aria-label", isLight
      ? translations[activeLang].nav.switchToDark
      : translations[activeLang].nav.switchToLight);
    const moon = button.querySelector<SVGElement>("[data-icon='moon']");
    const sun = button.querySelector<SVGElement>("[data-icon='sun']");
    if (moon && sun) {
      // In light mode show moon icon (to switch to dark), in dark mode show sun icon (to switch to light)
      moon.classList.toggle("hidden", !isLight);
      sun.classList.toggle("hidden", isLight);
    }
  }
}

// Toggle the color theme and persist it when browser storage is available.
function toggleTheme(): void {
  const isLight = document.documentElement.dataset.theme === "light";
  if (isLight) delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = "light";

  try {
    localStorage.setItem("theme", isLight ? "dark" : "light");
  } catch {
    // The visual change still applies for the current page load.
  }
  syncThemeControls();
}

// Synchronize the mobile drawer state and its accessibility attributes.
function setMenuOpen(open: boolean): void {
  const button = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const drawer = document.querySelector<HTMLElement>("[data-mobile-drawer]");
  if (!button || !drawer) return;

  button.classList.toggle("open", open);
  button.setAttribute("aria-expanded", String(open));
  button.setAttribute("aria-label", open
    ? translations[activeLang].nav.closeMenu
    : translations[activeLang].nav.openMenu);
  drawer.classList.toggle("open", open);
}

// Scroll to a section, preserving reduced-motion and user-cancel behavior.
function scrollToTarget(id: string): void {
  const targetY = id === "top"
    ? 0
    : (document.getElementById(id)?.getBoundingClientRect().top ?? Number.NaN) + window.scrollY;
  if (Number.isNaN(targetY)) return;

  setMenuOpen(false);
  history.replaceState(null, "", id === "top" ? window.location.pathname : `#${id}`);
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo({ top: targetY, behavior: "instant" });
    return;
  }

  const startY = window.scrollY;
  const distance = targetY - startY;
  const duration = Math.min(1300, 500 + Math.abs(distance) * 0.25);
  const startTime = performance.now();
  let cancelled = false;
  const cancel = (): void => { cancelled = true; };
  window.addEventListener("wheel", cancel, { once: true, passive: true });
  window.addEventListener("touchstart", cancel, { once: true, passive: true });

  const step = (now: number): void => {
    if (cancelled) return;
    const progress = Math.min(1, (now - startTime) / duration);
    const eased = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    window.scrollTo({ top: startY + distance * eased, behavior: "instant" });
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// Reveal marked sections once they enter view and honor reduced motion.
function initScrollReveal(): void {
  const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
  if (!elements.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

  elements.forEach((element) => observer.observe(element));
}

// Typewriter effect for roles in hero (Backend Developer <-> Fullstack Developer)
function initTypewriter(): void {
  const el = document.querySelector<HTMLElement>("[data-typewriter]");
  if (!el) return;
  const words = el.dataset.typewriter?.split(",").map(w => w.trim()) || ["Backend Developer", "Fullstack Developer"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    if (!el) return;
    const currentWord = words[wordIndex % words.length];
    if (isDeleting) {
      el.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      el.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 45 : 90;

    if (!isDeleting && charIndex === currentWord.length) {
      speed = 1800; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex++;
      speed = 400; // Pause before new word
    }

    setTimeout(type, speed);
  }

  type();
}

// Attach language, theme, drawer, scrolling, and reveal behavior to the page.
function initPortfolioInteractions(): void {
  const savedLocale = document.cookie.match(/(?:^|;\s*)lang=(id|en)(?:;|$)/)?.[1];
  applyLanguage(savedLocale === "id" ? "id" : "en");
  initScrollReveal();
  initTypewriter();

  document.querySelectorAll<HTMLButtonElement>("[data-language-toggle]").forEach((button) => {
    button.addEventListener("click", () => selectLanguage(activeLang === "en" ? "id" : "en"));
  });
  document.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", toggleTheme);
  });
  const closeProjectDialog = (dialog: HTMLDialogElement): void => {
    dialog.close();
    document.documentElement.classList.remove("project-dialog-open");
  };

  document.querySelectorAll<HTMLButtonElement>("[data-project-dialog]").forEach((button) => {
    button.addEventListener("click", () => {
      const dialog = document.getElementById(button.dataset.projectDialog ?? "") as HTMLDialogElement | null;
      if (!dialog) return;
      dialog.querySelectorAll<HTMLButtonElement>("[data-project-view]").forEach((item) => item.classList.toggle("is-active", item.dataset.projectView === "desktop"));
      dialog.querySelectorAll<HTMLElement>("[data-project-preview]").forEach((item) => item.hidden = item.dataset.projectPreview !== "desktop");
      const desktopShot = dialog.querySelector<HTMLImageElement>('[data-project-preview="desktop"] img');
      if (desktopShot?.dataset.projectShotDefault) {
        desktopShot.src = desktopShot.dataset.projectShotDefault;
        desktopShot.alt = desktopShot.dataset.projectShotAltDefault ?? desktopShot.alt;
        const desktopShotLink = dialog.querySelector<HTMLAnchorElement>("[data-project-shot-link]");
        if (desktopShotLink) desktopShotLink.href = desktopShot.dataset.projectShotDefault;
      }
      const mobileShot = dialog.querySelector<HTMLImageElement>('[data-project-preview="mobile"] img');
      if (mobileShot?.dataset.projectMobileShotDefault) {
        mobileShot.src = mobileShot.dataset.projectMobileShotDefault;
        mobileShot.alt = mobileShot.dataset.projectMobileShotAltDefault ?? mobileShot.alt;
        const mobileShotLink = dialog.querySelector<HTMLAnchorElement>("[data-project-mobile-shot-link]");
        if (mobileShotLink) mobileShotLink.href = mobileShot.dataset.projectMobileShotDefault;
      }
      dialog.querySelectorAll<HTMLButtonElement>("[data-project-shot]").forEach((item, index) => {
        item.classList.toggle("is-active", index === 0);
        item.setAttribute("aria-pressed", String(index === 0));
      });
      dialog.showModal();
      document.documentElement.classList.add("project-dialog-open");
    });
  });
  document.querySelectorAll<HTMLButtonElement>("[data-project-dialog-close]").forEach((button) => {
    button.addEventListener("click", () => {
      const dialog = button.closest("dialog");
      if (dialog) closeProjectDialog(dialog);
    });
  });
  document.querySelectorAll<HTMLDialogElement>(".pj-dialog").forEach((dialog) => {
    dialog.addEventListener("cancel", (event) => event.preventDefault());
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) closeProjectDialog(dialog);
    });
    dialog.addEventListener("close", () => document.documentElement.classList.remove("project-dialog-open"));
  });
  document.querySelectorAll<HTMLButtonElement>("[data-project-view]").forEach((button) => {
    button.addEventListener("click", () => {
      const dialog = button.closest("dialog");
      if (!dialog) return;
      const view = button.dataset.projectView;
      dialog.querySelectorAll<HTMLElement>("[data-project-view]").forEach((item) => item.classList.toggle("is-active", item === button));
      dialog.querySelectorAll<HTMLElement>("[data-project-preview]").forEach((item) => item.hidden = item.dataset.projectPreview !== view);
    });
  });
  document.querySelectorAll<HTMLButtonElement>("[data-project-shot]").forEach((button) => {
    button.addEventListener("click", () => {
      const dialog = button.closest("dialog");
      if (!dialog || !button.dataset.projectShot) return;

      // Update desktop preview
      const desktopPreview = dialog.querySelector<HTMLImageElement>('[data-project-preview="desktop"] img');
      if (desktopPreview) {
        desktopPreview.src = button.dataset.projectShot;
        if (button.dataset.projectShotAlt) desktopPreview.alt = button.dataset.projectShotAlt;
      }
      const shotLink = dialog.querySelector<HTMLAnchorElement>("[data-project-shot-link]");
      if (shotLink) shotLink.href = button.dataset.projectShot;

      // Update mobile preview if mobile shot exists
      const mobilePreview = dialog.querySelector<HTMLImageElement>('[data-project-preview="mobile"] img');
      const mobileSrc = button.dataset.projectShotMobile;
      if (mobilePreview && mobileSrc) {
        mobilePreview.src = mobileSrc;
        if (button.dataset.projectShotAlt) mobilePreview.alt = button.dataset.projectShotAlt;
        const mobileShotLink = dialog.querySelector<HTMLAnchorElement>("[data-project-mobile-shot-link]");
        if (mobileShotLink) mobileShotLink.href = mobileSrc;
      }

      // ponytail: keep current view mode (desktop or mobile) intact rather than forcing a toggle
      dialog.querySelectorAll<HTMLButtonElement>("[data-project-shot]").forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
    });
  });

  const menuButton = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const drawer = document.querySelector<HTMLElement>("[data-mobile-drawer]");
  menuButton?.addEventListener("click", () => setMenuOpen(!drawer?.classList.contains("open")));
  drawer?.querySelectorAll<HTMLAnchorElement>("[data-scroll-target]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.dataset.scrollTarget;
      if (!id || (id !== "top" && !document.getElementById(id))) return;
      event.preventDefault();
      scrollToTarget(id);
    });
  });
  drawer?.querySelector("[data-drawer-close]")?.addEventListener("click", () => setMenuOpen(false));
  window.addEventListener("scroll", () => setMenuOpen(false), { passive: true });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });
}

initPortfolioInteractions();
