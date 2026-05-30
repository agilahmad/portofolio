"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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

        {/* logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: ".7rem", textDecoration: "none" }}>
          <span className="dot" />
          <span style={{ fontSize: ".7rem", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--text)" }}>
            AAM <span style={{ color: "var(--green)" }}>// ONLINE</span>
          </span>
        </a>

        {/* desktop links */}
        <div className="nav-desktop">
          {NAV_LINKS.map(s => <a key={s} href={`#${s}`} className="nav-link">{s}</a>)}
        </div>

        {/* hamburger */}
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

      {/* mobile drawer */}
      <div className={`mobile-drawer${menuOpen ? " open" : ""}`}>
        <div className="mobile-drawer-inner">
          {NAV_LINKS.map(s => (
            <a key={s} href={`#${s}`} onClick={() => setMenuOpen(false)}>{s}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}
