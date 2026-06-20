"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setMenuOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, width: "100%", zIndex: 100,
      borderBottom: "1px solid var(--border)",
      background: "rgba(5,5,15,0.94)", backdropFilter: "blur(14px)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 58 }}>

        <a href="#" style={{ display: "flex", alignItems: "center", gap: ".7rem", textDecoration: "none" }}>
          <span className="dot" />
          <span style={{ fontSize: ".7rem", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--text)" }}>
            AAM <span style={{ color: "var(--green)" }}>{"// ONLINE"}</span>
          </span>
        </a>

        <div className="nav-desktop">
          {NAV_LINKS.map(s => <a key={s} href={`#${s}`} className="nav-link">{s}</a>)}
          <a
            href="/CV-Agilahmadmaulana.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-glow-green"
            style={{ padding: ".35rem 1rem", fontSize: ".62rem" }}
          >
            {t.nav.resume} ↗
          </a>
          {/* language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "id" : "en")}
            style={{ fontSize: ".6rem", letterSpacing: ".12em", background: "transparent", border: "1px solid var(--border)", color: "var(--text-muted)", padding: ".3rem .65rem", cursor: "pointer", fontFamily: "inherit", transition: "color .2s, border-color .2s" }}
            onMouseEnter={e => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "var(--purple-light)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}
          >
            {lang === "en" ? "ID" : "EN"}
          </button>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
          {/* mobile lang toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "id" : "en")}
            className="hamburger"
            style={{ fontSize: ".6rem", letterSpacing: ".1em", color: "var(--text-muted)", width: "auto", minWidth: "unset", padding: ".3rem .6rem", border: "1px solid var(--border)", background: "transparent", fontFamily: "inherit" }}
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
            <a key={s} href={`#${s}`} onClick={() => setMenuOpen(false)}>{s}</a>
          ))}
          <a
            href="/CV-Agilahmadmaulana.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{ color: "var(--green)", borderColor: "rgba(57,255,20,.2)" }}
          >
            {t.nav.resume} ↗
          </a>
        </div>
      </div>
    </nav>
  );
}
