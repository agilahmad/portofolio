"use client";

import { useEffect, useState } from "react";
import { useTypewriter } from "@/lib/hooks";
import { useLanguage } from "@/context/LanguageContext";

export function HeroTypewriter() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();
  const role = useTypewriter(t.hero.roles);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMounted(true); }, []);

  return (
    <span style={{ fontSize: "clamp(.85rem,2.5vw,1.05rem)", letterSpacing: ".1em", color: "var(--text-muted)" }}>
      {mounted ? role : t.hero.roles[0]}
      <span style={{ color: "var(--green)", animation: "blink 1s infinite" }}>█</span>
    </span>
  );
}

export function HeroTagline() {
  const { t } = useLanguage();
  return (
    <p style={{ fontSize: ".82rem", color: "var(--text-muted)", lineHeight: 1.8, maxWidth: 480, marginBottom: "2.5rem" }}>
      {t.hero.taglineParts.map((part, i) =>
        i % 2 === 0
          ? <span key={i}>{part}</span>
          : <span key={i} style={{ color: "var(--text)" }}>{part}</span>
      )}
    </p>
  );
}

export function HeroStats() {
  const { t } = useLanguage();
  return (
    <div className="hero-stats">
      {t.hero.stats.map(s => (
        <div key={s.label} style={{ border: "1px solid var(--border)", padding: ".65rem .9rem", background: "rgba(var(--surface-rgb),.85)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: ".4rem", marginBottom: ".45rem" }}>
            <span className={`dot${s.green ? "" : " dot-purple"}`} style={{ width: 5, height: 5 }} />
            <span style={{ fontSize: ".5rem", letterSpacing: ".18em", color: "var(--text-muted)", textTransform: "uppercase" }}>{s.label}</span>
          </div>
          <div style={{ fontSize: ".85rem", fontWeight: 700, letterSpacing: ".1em", ...(s.green ? { color: "var(--green)", textShadow: "0 0 8px var(--green)" } : { color: "var(--text)" }) }}>
            {s.val}
          </div>
        </div>
      ))}
    </div>
  );
}

export function HeroCTA() {
  const { t } = useLanguage();
  return (
    <div className="cta-group">
      <a href="#projects" className="btn btn-outline-green">{t.hero.cta.projects}</a>
      <a href="#contact"  className="btn btn-outline-purple">{t.hero.cta.contact}</a>
    </div>
  );
}
