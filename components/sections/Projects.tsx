import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="sp">
      <div className="sc">
        <p className="section-eyebrow">// OPERATIONS</p>
        <h2 className="section-title" style={{ marginBottom: "2.5rem" }}>PROJECT DOSSIER</h2>

        <div className="grid-projects">
          {PROJECTS.map(p => (
            <div key={p.id} className="project-card" style={{ padding: "1.4rem" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,var(--purple),transparent)" }} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: ".9rem" }}>
                <span style={{ fontSize: ".56rem", letterSpacing: ".18em", color: "var(--purple-light)", textTransform: "uppercase" }}>{p.id}</span>
                <div style={{ display: "flex", alignItems: "center", gap: ".4rem" }}>
                  <span
                    className="dot"
                    style={p.status !== "DEPLOYED" ? { background: "var(--purple-light)", boxShadow: "0 0 6px var(--purple-light)" } : {}}
                  />
                  <span style={{ fontSize: ".5rem", letterSpacing: ".14em", color: p.status === "DEPLOYED" ? "var(--green)" : "var(--purple-light)", textTransform: "uppercase" }}>
                    {p.status}
                  </span>
                </div>
              </div>

              <h3 style={{ fontSize: ".88rem", letterSpacing: ".05em", textTransform: "uppercase", marginBottom: ".6rem" }}>{p.name}</h3>
              <p style={{ fontSize: ".78rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: ".9rem" }}>{p.desc}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem", marginBottom: ".9rem" }}>
                {p.tags.map(t => <span key={t} className="tag" style={{ fontSize: ".5rem" }}>{t}</span>)}
              </div>

              <div style={{ borderTop: "1px solid rgba(123,47,190,.15)", paddingTop: ".7rem", display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: ".56rem", color: "var(--text-muted)", letterSpacing: ".1em" }}>{p.year}</span>
                <span style={{ fontSize: ".56rem", color: "var(--purple-light)", letterSpacing: ".1em", textTransform: "uppercase" }}>DETAIL &gt;&gt;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
