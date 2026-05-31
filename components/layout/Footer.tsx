"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "1.5rem 1.25rem" }}>
      <div className="footer-inner">
        <span style={{ fontSize: ".58rem", color: "var(--text-muted)", letterSpacing: ".14em", textTransform: "uppercase" }}>
          AGIL AHMAD MAULANA // N-AAM-001
        </span>
        <span style={{ fontSize: ".58rem", color: "var(--text-muted)", letterSpacing: ".14em", textTransform: "uppercase" }}>
          {t.footer.role}
        </span>
        <span style={{ fontSize: ".58rem", color: "var(--text-muted)", letterSpacing: ".14em", textTransform: "uppercase" }}>
          {t.footer.copy}
        </span>
      </div>
    </footer>
  );
}
