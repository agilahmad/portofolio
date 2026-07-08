"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();
  const e = t.experience;

  return (
    <section id="experience" className="sp">
      <div className="sc">
        <p className="section-eyebrow">{e.eyebrow}</p>
        <h2 className="section-title" style={{ marginBottom: "2.5rem" }}>{e.title}</h2>

        <div className="grid-exp">

          {/* timeline */}
          <div style={{ position: "relative", paddingLeft: "1.75rem" }}>
            <div className="timeline-line" />

            {/* internship */}
            <div data-reveal style={{ position: "relative", marginBottom: "2rem" }}>
              <div className="timeline-dot" />
              <div className="panel panel-top-green" style={{ padding: "1.4rem", marginLeft: ".6rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: ".3rem", marginBottom: ".5rem" }}>
                  <span style={{ fontSize: ".58rem", letterSpacing: ".16em", color: "var(--green)", textTransform: "uppercase" }}>{e.internship.period}</span>
                  <span className="tag tag-green" style={{ fontSize: ".48rem" }}>{e.internship.badge}</span>
                </div>
                <h3 style={{ fontSize: ".88rem", letterSpacing: ".05em", textTransform: "uppercase", marginBottom: ".2rem" }}>{e.internship.role}</h3>
                <div style={{ fontSize: ".7rem", color: "var(--purple-light)", marginBottom: ".9rem" }}>{e.internship.org}</div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".45rem" }}>
                  {e.internship.items.map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: ".6rem", color: "var(--text-muted)", fontSize: ".77rem", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--green)", flexShrink: 0 }}>›</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* training */}
            <div data-reveal style={{ position: "relative", transitionDelay: ".1s" }}>
              <div className="timeline-dot timeline-dot-purple" />
              <div className="panel" style={{ padding: "1.4rem", marginLeft: ".6rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: ".3rem", marginBottom: ".5rem" }}>
                  <span style={{ fontSize: ".58rem", letterSpacing: ".16em", color: "var(--purple-light)", textTransform: "uppercase" }}>{e.training.period}</span>
                  <span className="tag" style={{ fontSize: ".48rem" }}>{e.training.badge}</span>
                </div>
                <h3 style={{ fontSize: ".88rem", letterSpacing: ".05em", textTransform: "uppercase", marginBottom: ".2rem" }}>{e.training.role}</h3>
                <div style={{ fontSize: ".7rem", color: "var(--purple-light)", marginBottom: ".9rem" }}>{e.training.org}</div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".45rem" }}>
                  {e.training.items.map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: ".6rem", color: "var(--text-muted)", fontSize: ".77rem", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--purple-light)", flexShrink: 0 }}>›</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* right column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

            <div data-reveal className="panel panel-top-purple" style={{ padding: "1.4rem" }}>
              <div style={{ fontSize: ".56rem", letterSpacing: ".2em", color: "var(--green)", marginBottom: ".9rem" }}>{e.educationLabel}</div>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: ".3rem", marginBottom: ".4rem" }}>
                <span style={{ fontSize: ".58rem", letterSpacing: ".12em", color: "var(--text-muted)", textTransform: "uppercase" }}>{e.education.period}</span>
                <span style={{ fontSize: ".65rem", color: "var(--green)" }}>{e.education.gpa}</span>
              </div>
              <h3 style={{ fontSize: ".86rem", textTransform: "uppercase", letterSpacing: ".05em", marginBottom: ".2rem" }}>{e.education.degree}</h3>
              <div style={{ fontSize: ".7rem", color: "var(--purple-light)", marginBottom: ".85rem" }}>{e.education.university}</div>
              <div style={{ fontSize: ".7rem", color: "var(--text-muted)", lineHeight: 1.6, padding: ".7rem", background: "rgba(123,47,190,.06)", border: "1px solid rgba(123,47,190,.15)" }}>
                {e.education.thesis}
              </div>
            </div>

            <div data-reveal className="panel panel-top-green" style={{ padding: "1.4rem", transitionDelay: ".1s" }}>
              <div style={{ fontSize: ".56rem", letterSpacing: ".2em", color: "var(--green)", marginBottom: ".9rem" }}>{e.certificationLabel}</div>
              <div style={{ display: "flex", alignItems: "center", gap: ".9rem", padding: ".7rem", border: "1px solid var(--border)" }}>
                <div style={{ width: 36, height: 36, background: "rgba(123,47,190,.2)", border: "1px solid var(--purple)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: ".95rem", color: "var(--purple-light)" }}>◈</div>
                <div>
                  <div style={{ fontSize: ".78rem", letterSpacing: ".04em", textTransform: "uppercase", marginBottom: ".2rem" }}>{e.certification.name}</div>
                  <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
                    <span style={{ fontSize: ".6rem", color: "var(--purple-light)" }}>{e.certification.issuer}</span>
                    <span style={{ fontSize: ".6rem", color: "var(--text-muted)" }}>{e.certification.date}</span>
                  </div>
                </div>
              </div>
            </div>

            <div data-reveal className="grid-stats" style={{ transitionDelay: ".2s" }}>
              {e.stats.map(s => (
                <div key={s.label} className="panel" style={{ padding: "1rem", textAlign: "center" }}>
                  <div style={{ fontSize: "1.4rem", fontWeight: 900, color: "var(--green)", textShadow: "0 0 12px rgba(57,255,20,.4)", letterSpacing: ".04em" }}>{s.val}</div>
                  <div style={{ fontSize: ".52rem", color: "var(--text-muted)", letterSpacing: ".12em", textTransform: "uppercase", marginTop: ".2rem" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
