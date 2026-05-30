"use client";

import { useEffect, useRef, useState } from "react";
import { SKILLS } from "@/lib/data";

const TECH_TAGS = ["PHP","Laravel","NestJS","PostgreSQL","MySQL","HTML5","CSS3","Bootstrap","Git","GitLab","RBAC","REST API","DataTables","CSR Pattern","Go","Python"];

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="sp" ref={ref}>
      <div className="sc">
        <p className="section-eyebrow">// CAPABILITIES</p>
        <h2 className="section-title" style={{ marginBottom: "2.5rem" }}>SKILL MATRIX</h2>

        <div className="grid-skills" style={{ marginBottom: "2.5rem" }}>
          {[SKILLS.slice(0, 5), SKILLS.slice(5)].map((col, ci) => (
            <div key={ci}>
              {col.map(skill => (
                <div key={skill.name} style={{ marginBottom: "1.4rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: ".4rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: ".45rem" }}>
                      <span style={{ fontSize: ".6rem", color: skill.cat === "Learning" ? "var(--purple-light)" : "var(--green)" }}>&gt;</span>
                      <span style={{ fontSize: ".75rem", letterSpacing: ".1em", textTransform: "uppercase" }}>{skill.name}</span>
                    </div>
                    <span style={{ fontSize: ".58rem", color: "var(--text-muted)" }}>
                      {skill.cat === "Learning" ? "LEARNING" : `${skill.pct}%`}
                    </span>
                  </div>
                  <div className="progress-track">
                    <div
                      className="progress-fill"
                      style={{ width: visible ? `${skill.pct}%` : "0%", opacity: skill.cat === "Learning" ? .55 : 1 }}
                    />
                  </div>
                  <div style={{ marginTop: ".2rem", fontSize: ".48rem", color: skill.cat === "Learning" ? "var(--purple-light)" : "var(--text-muted)", letterSpacing: ".15em", textTransform: "uppercase" }}>
                    {skill.cat}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* tag cloud */}
        <div className="panel" style={{ padding: "1.25rem" }}>
          <div style={{ fontSize: ".56rem", letterSpacing: ".2em", color: "var(--green)", marginBottom: ".9rem" }}>[ TECHNOLOGY STACK ]</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
            {TECH_TAGS.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
