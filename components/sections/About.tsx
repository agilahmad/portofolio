"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="sp">
      <div className="sc">
        <p className="section-eyebrow">{a.eyebrow}</p>
        <h2 className="section-title" style={{ marginBottom: "2.5rem" }}>{a.title}</h2>

        <div className="about-outer">

          {/* photo */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: ".6rem" }}>
            <div className="photo-frame" style={{ width: "100%", maxWidth: 280, height: 370 }}>
              <Image src="/foto-about.webp" alt="Agil Ahmad Maulana" fill sizes="280px" style={{ objectFit: "cover", objectPosition: "center top" }} />
              <div className="photo-color-reveal">
                <Image src="/foto-about.webp" alt="" fill sizes="280px" style={{ objectFit: "cover", objectPosition: "center top" }} aria-hidden />
              </div>
              <div className="photo-corner-tr" />
              <div className="photo-corner-bl" />
              <div className="photo-scan" />
              <div className="photo-overlay" />
              <div className="photo-label">{a.photoLabel}</div>
            </div>
            <div style={{ width: "100%", maxWidth: 280, border: "1px solid var(--border)", padding: ".6rem 1rem", background: "var(--surface)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: ".52rem", letterSpacing: ".18em", color: "var(--green)", textTransform: "uppercase", marginBottom: ".15rem" }}>{a.clearanceLabel}</div>
                <div style={{ fontSize: ".72rem", letterSpacing: ".06em", color: "var(--text)", textTransform: "uppercase" }}>{a.clearanceVal}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: ".52rem", letterSpacing: ".1em", color: "var(--text-muted)" }}>N-AAM-001</div>
                <div style={{ display: "flex", alignItems: "center", gap: ".35rem", justifyContent: "flex-end", marginTop: ".2rem" }}>
                  <span className="dot" style={{ width: 5, height: 5 }} />
                  <span style={{ fontSize: ".48rem", color: "var(--green)", letterSpacing: ".1em" }}>{a.activeLabel}</span>
                </div>
              </div>
            </div>
          </div>

          {/* bio */}
          <div className="panel panel-top-bar" style={{ padding: "1.75rem" }}>
            <div style={{ fontSize: ".58rem", letterSpacing: ".2em", color: "var(--green)", marginBottom: "1.25rem" }}>{a.summaryLabel}</div>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.85, fontSize: ".85rem", marginBottom: "1.2rem" }}>{a.bio[0]}</p>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.85, fontSize: ".85rem" }}>{a.bio[1]}</p>
          </div>

          {/* info */}
          <div>
            {a.info.map(item => (
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
