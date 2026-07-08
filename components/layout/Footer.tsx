"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border px-5 py-6">
      <div className="footer-inner">
        <span className="text-[.58rem] tracking-[.14em] text-muted uppercase">
          AGIL AHMAD MAULANA // N-AAM-001
        </span>
        <span className="text-[.58rem] tracking-[.14em] text-muted uppercase">
          {t.footer.role}
        </span>
        <span className="text-[.58rem] tracking-[.14em] text-muted uppercase">
          {t.footer.copy}
        </span>
      </div>
    </footer>
  );
}
