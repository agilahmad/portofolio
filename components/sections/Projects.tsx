"use client";

import { PROJECT_META } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();
  const p = t.projects;

  return (
    <section id="projects" className="sp">
      <div className="sc">
        <p className="section-eyebrow">{p.eyebrow}</p>
        <h2 className="section-title" style={{ marginBottom: "2.5rem" }}>{p.title}</h2>

        <div className="grid-projects">
          {PROJECT_META.map((meta, idx) => {
            const item = p.items[idx];
            return (
              <div key={meta.id} className="project-card" style={{ padding: "1.4rem" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,var(--purple),transparent)" }} />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: ".75rem" }}>
                  <span style={{ fontSize: ".5rem", letterSpacing: ".18em", color: "var(--purple-light)", textTransform: "uppercase" }}>{meta.id}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: ".4rem" }}>
                    <span className={`dot${meta.status !== "DEPLOYED" ? " dot-purple" : ""}`} style={{ width: 5, height: 5 }} />
                    <span style={{ fontSize: ".48rem", letterSpacing: ".14em", color: meta.status === "DEPLOYED" ? "var(--green)" : "var(--purple-light)", textTransform: "uppercase" }}>
                      {meta.status}
                    </span>
                  </div>
                </div>

                <h3 style={{ fontSize: ".88rem", letterSpacing: ".04em", textTransform: "uppercase", marginBottom: ".5rem" }}>{item.name}</h3>

                <p style={{ fontSize: ".72rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: ".85rem", fontStyle: "italic" }}>
                  {item.context}
                </p>

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 .9rem", display: "flex", flexDirection: "column", gap: ".4rem" }}>
                  {item.contributions.map((c, i) => (
                    <li key={i} style={{ display: "flex", gap: ".55rem", alignItems: "flex-start" }}>
                      <span style={{ color: "var(--green)", fontSize: ".6rem", lineHeight: 1.6, flexShrink: 0 }}>›</span>
                      <span style={{ fontSize: ".72rem", color: "var(--text)", lineHeight: 1.6 }}>{c}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ borderTop: "1px solid rgba(123,47,190,.15)", paddingTop: ".7rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: ".5rem" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: ".35rem" }}>
                    {meta.tags.map(tg => <span key={tg} className="tag" style={{ fontSize: ".48rem" }}>{tg}</span>)}
                  </div>
                  <span style={{ fontSize: ".5rem", color: "var(--text-muted)", letterSpacing: ".1em" }}>{meta.year}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
