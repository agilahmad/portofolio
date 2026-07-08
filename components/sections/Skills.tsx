"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SKILL_GROUPS, SKILL_ICONS, DARK_LOGOS } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  const s = t.skills;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="sp" ref={ref}>
      <div className="sc">
        <p className="section-eyebrow">{s.eyebrow}</p>
        <h2 className="section-title mb-10">{s.title}</h2>

        <div className="grid-skill-groups">
          {SKILL_GROUPS.map((group, i) => (
            <div
              key={group.cat}
              className="panel px-[1.4rem] py-5"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transition: `opacity .4s ease ${i * 0.08}s, transform .4s ease ${i * 0.08}s`,
              }}
            >
              <div className="mb-[.9rem] flex items-center gap-2 text-[.52rem] tracking-[.22em] text-green uppercase">
                <span className="dot dot-xs" />
                {group.cat}
              </div>
              <div className="flex flex-wrap gap-[.45rem]">
                {group.skills.map(skill => (
                  <span key={skill} className="skill-chip" title={skill}>
                    {SKILL_ICONS[skill]
                      ? <Image src={SKILL_ICONS[skill]} alt={skill} width={26} height={26} className={`object-contain${DARK_LOGOS.has(skill) ? " logo-invert-dark" : ""}`} />
                      : skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
