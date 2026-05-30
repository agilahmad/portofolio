import Image from "next/image";

const INFO = [
  { label: "NAME",     val: "Agil Ahmad Maulana" },
  { label: "ORIGIN",   val: "Padang, West Sumatera" },
  { label: "BASE",     val: "Jakarta, Indonesia" },
  { label: "EMAIL",    val: "agilahmadmaulana3@gmail.com" },
  { label: "GITHUB",   val: "github.com/agilahmad" },
  { label: "LINKEDIN", val: "linkedin.com/in/agilahmad" },
];

export default function About() {
  return (
    <section id="about" className="sp">
      <div className="sc">
        <p className="section-eyebrow">// ABOUT</p>
        <h2 className="section-title" style={{ marginBottom: "2.5rem" }}>PILOT DATA</h2>

        <div className="about-outer">

          {/* ── PHOTO ── */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: ".6rem" }}>
            <div className="photo-frame" style={{ width: "100%", maxWidth: 280, height: 370 }}>
              {/* grayscale base */}
              <Image
                src="/foto-about.jpeg"
                alt="Agil Ahmad Maulana"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
              {/* color layer, revealed from top as scan passes */}
              <div className="photo-color-reveal">
                <Image
                  src="/foto-about.jpeg"
                  alt=""
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  aria-hidden
                />
              </div>
              <div className="photo-corner-tr" />
              <div className="photo-corner-bl" />
              <div className="photo-scan" />
              <div className="photo-overlay" />
              <div className="photo-label">// PILOT DATA</div>
            </div>
            {/* id card */}
            <div style={{ width: "100%", maxWidth: 280, border: "1px solid var(--border)", padding: ".6rem 1rem", background: "var(--surface)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: ".52rem", letterSpacing: ".18em", color: "var(--green)", textTransform: "uppercase", marginBottom: ".15rem" }}>CLEARANCE</div>
                <div style={{ fontSize: ".72rem", letterSpacing: ".06em", color: "var(--text)", textTransform: "uppercase" }}>BACKEND ENG.</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: ".52rem", letterSpacing: ".1em", color: "var(--text-muted)" }}>N-AAM-001</div>
                <div style={{ display: "flex", alignItems: "center", gap: ".35rem", justifyContent: "flex-end", marginTop: ".2rem" }}>
                  <span className="dot" style={{ width: 5, height: 5 }} />
                  <span style={{ fontSize: ".48rem", color: "var(--green)", letterSpacing: ".1em" }}>ACTIVE</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── BIO ── */}
          <div className="panel panel-top-bar" style={{ padding: "1.75rem" }}>
            <div style={{ fontSize: ".58rem", letterSpacing: ".2em", color: "var(--green)", marginBottom: "1.25rem" }}>[ SUMMARY ]</div>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.85, fontSize: ".85rem", marginBottom: "1.2rem" }}>
              Fresh graduate in Informatics Engineering with hands-on experience building secure,
              maintainable web applications. Specialised in Laravel and PostgreSQL, with direct
              exposure to cybersecurity incident management platforms at a government institution.
            </p>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.85, fontSize: ".85rem" }}>
              Experienced in structured backend architecture (Controller-Service-Request pattern),
              role-based access control, and server-side data processing inside security-critical
              environments. Comfortable working in Git-based team workflows.
            </p>
          </div>

          {/* ── INFO LIST ── */}
          <div>
            {INFO.map(item => (
              <div key={item.label} style={{ display: "flex", gap: "1rem", padding: ".65rem 0", borderBottom: "1px solid rgba(123,47,190,.12)", alignItems: "flex-start" }}>
                <span style={{ fontSize: ".52rem", letterSpacing: ".18em", color: "var(--green)", textTransform: "uppercase", minWidth: 72, paddingTop: ".1rem", flexShrink: 0 }}>
                  {item.label}
                </span>
                <span style={{ fontSize: ".8rem", color: "var(--text)", wordBreak: "break-all" }}>{item.val}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
