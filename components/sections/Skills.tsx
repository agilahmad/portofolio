"use client";

import { useEffect, useRef, useState } from "react";
import { SKILL_GROUPS, LEARNING } from "@/lib/data";

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

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
        <p className="section-eyebrow">// CAPABILITIES</p>
        <h2 className="section-title" style={{ marginBottom: "2.5rem" }}>SKILL MATRIX</h2>

        <div className="grid-skill-groups">
          {SKILL_GROUPS.map((group, i) => (
            <div
              key={group.cat}
              className="panel"
              style={{
                padding: "1.25rem 1.4rem",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transition: `opacity .4s ease ${i * 0.08}s, transform .4s ease ${i * 0.08}s`,
              }}
            >
              <div style={{ fontSize: ".52rem", letterSpacing: ".22em", color: "var(--green)", textTransform: "uppercase", marginBottom: ".9rem", display: "flex", alignItems: "center", gap: ".5rem" }}>
                <span className="dot" style={{ width: 4, height: 4, flexShrink: 0 }} />
                {group.cat}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".45rem" }}>
                {group.skills.map(skill => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* currently learning */}
        <div style={{ marginTop: "1.5rem", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          <span style={{ fontSize: ".52rem", letterSpacing: ".2em", color: "var(--purple-light)", textTransform: "uppercase", flexShrink: 0 }}>// Currently Learning</span>
          <div style={{ display: "flex", gap: ".45rem", flexWrap: "wrap" }}>
            {LEARNING.map(t => (
              <span key={t} className="skill-chip skill-chip-learning">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
