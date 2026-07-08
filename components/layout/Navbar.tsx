"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setMenuOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLight(document.documentElement.dataset.theme === "light");
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id?: string) => {
    const targetY = id
      ? (document.getElementById(id)?.getBoundingClientRect().top ?? NaN) + window.scrollY
      : 0;
    if (Number.isNaN(targetY)) return; // section tidak ada → biarkan perilaku default
    e.preventDefault();
    setMenuOpen(false);
    history.replaceState(null, "", id ? `#${id}` : window.location.pathname);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo({ top: targetY, behavior: "instant" });
      return;
    }
    const startY = window.scrollY;
    const dist = targetY - startY;
    // durasi ikut jarak: sedikit lebih lambat dari native smooth, max 1.3s
    const duration = Math.min(1300, 500 + Math.abs(dist) * 0.25);
    const start = performance.now();
    const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    let cancelled = false;
    const cancel = () => { cancelled = true; };
    window.addEventListener("wheel", cancel, { once: true, passive: true });
    window.addEventListener("touchstart", cancel, { once: true, passive: true });
    const step = (now: number) => {
      if (cancelled) return;
      const t = Math.min(1, (now - start) / duration);
      window.scrollTo({ top: startY + dist * ease(t), behavior: "instant" });
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const toggleTheme = () => {
    const next = !isLight;
    setIsLight(next);
    if (next) document.documentElement.dataset.theme = "light";
    else delete document.documentElement.dataset.theme;
    try { localStorage.setItem("theme", next ? "light" : "dark"); } catch {}
  };

  const toggleBtnClass =
    "cursor-pointer border border-border bg-transparent px-[.65rem] py-[.3rem] text-[.6rem] tracking-[.12em] text-muted transition-[color,border-color] duration-200 hover:border-purple-light hover:text-fg";

  return (
    <nav className="fixed top-0 z-[100] w-full border-b border-border bg-[rgba(var(--bg-rgb),0.94)] backdrop-blur-[14px]">
      <div className="mx-auto flex h-[58px] max-w-[1200px] items-center justify-between px-5">

        <a href="#" onClick={e => scrollToSection(e)} className="flex items-center gap-[.7rem] no-underline">
          <span className="dot" />
          <span className="text-[.7rem] tracking-[.22em] text-fg uppercase">
            <span className="hidden lg:inline">AGIL AHMAD MAULANA</span>
            <span className="lg:hidden">AAM</span>
          </span>
        </a>

        <div className="nav-desktop">
          {NAV_LINKS.map(s => <a key={s} href={`#${s}`} className="nav-link" onClick={e => scrollToSection(e, s)}>{s}</a>)}
          <a
            href="/CV-Agilahmadmaulana.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-glow-green btn-sm"
          >
            {t.nav.resume} ↗
          </a>
          {/* language toggle */}
          <button onClick={() => setLang(lang === "en" ? "id" : "en")} className={toggleBtnClass}>
            {lang === "en" ? "ID" : "EN"}
          </button>
          {/* theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
            className={toggleBtnClass}
          >
            {isLight ? "☾" : "☀"}
          </button>
        </div>

        <div className="flex items-center gap-3">
          {/* mobile theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
            className="hamburger hamburger-pill"
          >
            {isLight ? "☾" : "☀"}
          </button>
          {/* mobile lang toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "id" : "en")}
            className="hamburger hamburger-pill"
          >
            {lang === "en" ? "ID" : "EN"}
          </button>
          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
          </button>
        </div>
      </div>

      <div className={`mobile-drawer${menuOpen ? " open" : ""}`}>
        <div className="mobile-drawer-inner">
          {NAV_LINKS.map(s => (
            <a key={s} href={`#${s}`} onClick={e => scrollToSection(e, s)}>{s}</a>
          ))}
          <a
            href="/CV-Agilahmadmaulana.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="drawer-cta"
          >
            {t.nav.resume} ↗
          </a>
        </div>
      </div>
    </nav>
  );
}
