const INTERNSHIP_ITEMS = [
  "Built CSIRT Ticketing Platform, SecureTrack, asset management & admin portal",
  "Implemented Controller-Service-Request (CSR) architecture across all modules",
  "Built RBAC, input validation, and server-side DataTables for multi-role workflows",
  "Contributed to a data scraping pipeline for cross-system automation",
  "Collaborated via Git/GitLab in a government security environment",
];

const TRAINING_ITEMS = [
  "Intensive project-based Laravel web development program",
  "Built online learning platform — auth, courses, content delivery, transactions",
  "Practiced Git/GitLab collaborative workflow throughout",
];

const QUICK_STATS = [
  { label: "Projects Built", val: "6+"   },
  { label: "Technologies",   val: "10+"  },
  { label: "GPA Score",      val: "3.34" },
  { label: "Experience",     val: "6mo+" },
];

export default function Experience() {
  return (
    <section id="experience" className="sp">
      <div className="sc">
        <p className="section-eyebrow">// HISTORY</p>
        <h2 className="section-title" style={{ marginBottom: "2.5rem" }}>MISSION LOG</h2>

        <div className="grid-exp">

          {/* timeline */}
          <div style={{ position: "relative", paddingLeft: "1.75rem" }}>
            <div className="timeline-line" />

            {/* internship */}
            <div style={{ position: "relative", marginBottom: "2rem" }}>
              <div className="timeline-dot" />
              <div className="panel panel-top-green" style={{ padding: "1.4rem", marginLeft: ".6rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: ".3rem", marginBottom: ".5rem" }}>
                  <span style={{ fontSize: ".58rem", letterSpacing: ".16em", color: "var(--green)", textTransform: "uppercase" }}>NOV 2025 – MAY 2026</span>
                  <span className="tag tag-green" style={{ fontSize: ".48rem" }}>ACTIVE</span>
                </div>
                <h3 style={{ fontSize: ".88rem", letterSpacing: ".05em", textTransform: "uppercase", marginBottom: ".2rem" }}>Programmer Intern</h3>
                <div style={{ fontSize: ".7rem", color: "var(--purple-light)", marginBottom: ".9rem" }}>
                  Pusat TIK — Mahkamah Konstitusi RI, Jakarta
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".45rem" }}>
                  {INTERNSHIP_ITEMS.map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: ".6rem", color: "var(--text-muted)", fontSize: ".77rem", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--green)", flexShrink: 0 }}>›</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* training */}
            <div style={{ position: "relative" }}>
              <div className="timeline-dot timeline-dot-purple" />
              <div className="panel" style={{ padding: "1.4rem", marginLeft: ".6rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: ".3rem", marginBottom: ".5rem" }}>
                  <span style={{ fontSize: ".58rem", letterSpacing: ".16em", color: "var(--purple-light)", textTransform: "uppercase" }}>AUG – DEC 2024</span>
                  <span className="tag" style={{ fontSize: ".48rem" }}>COMPLETED</span>
                </div>
                <h3 style={{ fontSize: ".88rem", letterSpacing: ".05em", textTransform: "uppercase", marginBottom: ".2rem" }}>Web Dev Training</h3>
                <div style={{ fontSize: ".7rem", color: "var(--purple-light)", marginBottom: ".9rem" }}>Someah Indonesia — Remote</div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".45rem" }}>
                  {TRAINING_ITEMS.map((item, i) => (
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

            {/* education */}
            <div className="panel panel-top-purple" style={{ padding: "1.4rem" }}>
              <div style={{ fontSize: ".56rem", letterSpacing: ".2em", color: "var(--green)", marginBottom: ".9rem" }}>[ EDUCATION ]</div>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: ".3rem", marginBottom: ".4rem" }}>
                <span style={{ fontSize: ".58rem", letterSpacing: ".12em", color: "var(--text-muted)", textTransform: "uppercase" }}>AUG 2021 – OCT 2025</span>
                <span style={{ fontSize: ".65rem", color: "var(--green)" }}>GPA 3.34</span>
              </div>
              <h3 style={{ fontSize: ".86rem", textTransform: "uppercase", letterSpacing: ".05em", marginBottom: ".2rem" }}>
                Bachelor of Informatics Engineering
              </h3>
              <div style={{ fontSize: ".7rem", color: "var(--purple-light)", marginBottom: ".85rem" }}>
                Universitas Putra Indonesia YPTK Padang
              </div>
              <div style={{ fontSize: ".7rem", color: "var(--text-muted)", lineHeight: 1.6, padding: ".7rem", background: "rgba(123,47,190,.06)", border: "1px solid rgba(123,47,190,.15)" }}>
                Thesis: "IT Management for Medicine Inventory at West Sumatera Lung Hospital Using the Reorder Point Method"
              </div>
            </div>

            {/* certification */}
            <div className="panel panel-top-green" style={{ padding: "1.4rem" }}>
              <div style={{ fontSize: ".56rem", letterSpacing: ".2em", color: "var(--green)", marginBottom: ".9rem" }}>[ CERTIFICATION ]</div>
              <div style={{ display: "flex", alignItems: "center", gap: ".9rem", padding: ".7rem", border: "1px solid var(--border)" }}>
                <div style={{ width: 36, height: 36, background: "rgba(123,47,190,.2)", border: "1px solid var(--purple)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: ".95rem", color: "var(--purple-light)" }}>◈</div>
                <div>
                  <div style={{ fontSize: ".78rem", letterSpacing: ".04em", textTransform: "uppercase", marginBottom: ".2rem" }}>Web Dev with PHP Laravel</div>
                  <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
                    <span style={{ fontSize: ".6rem", color: "var(--purple-light)" }}>Someah Indonesia</span>
                    <span style={{ fontSize: ".6rem", color: "var(--text-muted)" }}>DEC 2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* quick stats */}
            <div className="grid-stats">
              {QUICK_STATS.map(s => (
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
