const CONTACTS = [
  { label: "EMAIL",    val: "agilahmadmaulana3@gmail.com", href: "mailto:agilahmadmaulana3@gmail.com" },
  { label: "GITHUB",   val: "github.com/agilahmad",        href: "https://github.com/agilahmad"      },
  { label: "LINKEDIN", val: "linkedin.com/in/agilahmad",   href: "https://linkedin.com/in/agilahmad" },
];

export default function Contact() {
  return (
    <section id="contact" className="sp">
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 1.25rem" }}>

        <p className="section-eyebrow" style={{ display: "flex", justifyContent: "center" }}>// UPLINK</p>
        <h2 className="section-title" style={{ marginBottom: ".75rem", textAlign: "center" }}>ESTABLISH CONNECTION</h2>
        <p style={{ color: "var(--text-muted)", fontSize: ".8rem", marginBottom: "2.5rem", letterSpacing: ".05em", textAlign: "center" }}>
          Available for new opportunities and collaborations.
        </p>

        <div className="panel panel-top-bar">
          {CONTACTS.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              className="contact-row"
              style={{ borderBottom: i < CONTACTS.length - 1 ? "1px solid rgba(123,47,190,.12)" : "none" }}
            >
              <span style={{ fontSize: ".5rem", letterSpacing: ".22em", color: "var(--green)", textTransform: "uppercase", minWidth: 64, flexShrink: 0 }}>
                {c.label}
              </span>
              <span style={{ fontSize: ".78rem", color: "var(--text-muted)", flex: 1, wordBreak: "break-all" }}>
                {c.val}
              </span>
              <span style={{ fontSize: ".7rem", color: "var(--purple-light)", flexShrink: 0 }}>↗</span>
            </a>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
          <a href="mailto:agilahmadmaulana3@gmail.com" className="btn btn-outline-green">&gt; SEND MESSAGE</a>
        </div>

      </div>
    </section>
  );
}
