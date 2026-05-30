const CONTACTS = [
  { label: "EMAIL",     val: "agilahmadmaulana3@gmail.com", icon: "✉", href: "mailto:agilahmadmaulana3@gmail.com" },
  { label: "GITHUB",    val: "github.com/agilahmad",        icon: "◈", href: "https://github.com/agilahmad"      },
  { label: "LINKEDIN",  val: "linkedin.com/in/agilahmad",   icon: "◆", href: "https://linkedin.com/in/agilahmad" },
  { label: "WHATSAPP",  val: "+62 895 3066 9953",           icon: "◉", href: "https://wa.me/6289530669953"       },
];

export default function Contact() {
  return (
    <section id="contact" className="sp">
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 1.25rem", textAlign: "center" }}>
        <p className="section-eyebrow" style={{ display: "flex", justifyContent: "center" }}>// UPLINK</p>
        <h2 className="section-title" style={{ marginBottom: ".9rem" }}>ESTABLISH CONNECTION</h2>
        <p style={{ color: "var(--text-muted)", fontSize: ".82rem", marginBottom: "2.5rem", letterSpacing: ".05em" }}>
          Available for new missions and collaborations.
        </p>

        <div className="grid-contact" style={{ marginBottom: "2.5rem" }}>
          {CONTACTS.map(contact => (
            <a key={contact.label} href={contact.href} className="contact-card" style={{ padding: "1.4rem" }}>
              <div style={{ fontSize: "1.25rem", color: "var(--green)", marginBottom: ".45rem" }}>{contact.icon}</div>
              <div style={{ fontSize: ".52rem", letterSpacing: ".2em", color: "var(--green)", marginBottom: ".4rem", textTransform: "uppercase" }}>{contact.label}</div>
              <div style={{ fontSize: ".65rem", color: "var(--text-muted)", wordBreak: "break-all" }}>{contact.val}</div>
            </a>
          ))}
        </div>

        <div className="cta-group" style={{ justifyContent: "center" }}>
          <a href="mailto:agilahmadmaulana3@gmail.com" className="btn btn-outline-green">&gt; SEND MESSAGE</a>
          <a href="https://github.com/agilahmad"       className="btn btn-outline-purple">GITHUB PROFILE</a>
        </div>
      </div>
    </section>
  );
}
