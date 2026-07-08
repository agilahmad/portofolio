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
    <span className="text-[clamp(.85rem,2.5vw,1.05rem)] tracking-[.1em] text-muted">
      {mounted ? role : t.hero.roles[0]}
      <span className="animate-[blink_1s_infinite] text-green">█</span>
    </span>
  );
}

export function HeroTagline() {
  const { t } = useLanguage();
  return (
    <p className="mb-10 max-w-[480px] text-[.82rem] leading-[1.8] text-muted">
      {t.hero.taglineParts.map((part, i) =>
        i % 2 === 0
          ? <span key={i}>{part}</span>
          : <span key={i} className="text-fg">{part}</span>
      )}
    </p>
  );
}

export function HeroStats() {
  const { t } = useLanguage();
  return (
    <div className="hero-stats">
      {t.hero.stats.map(s => (
        <div key={s.label} className="border border-border bg-[rgba(var(--surface-rgb),.85)] px-[.9rem] py-[.65rem]">
          <div className="mb-[.45rem] flex items-center gap-[.4rem]">
            <span className={`dot dot-sm${s.green ? "" : " dot-purple"}`} />
            <span className="text-[.5rem] tracking-[.18em] text-muted uppercase">{s.label}</span>
          </div>
          <div className={`text-[.85rem] font-bold tracking-[.1em] ${s.green ? "text-green [text-shadow:0_0_8px_var(--green)]" : "text-fg"}`}>
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
