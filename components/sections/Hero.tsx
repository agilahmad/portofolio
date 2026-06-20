import Image from "next/image";
import { HeroTypewriter, HeroTagline, HeroStats, HeroCTA } from "./HeroClient";

export default function Hero() {
  return (
    <section className="grid-bg" style={{ minHeight: "100vh", paddingTop: 58, position: "relative", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "8%", right: "4%", width: "min(500px,60vw)", height: "min(500px,60vw)", background: "radial-gradient(circle,rgba(123,47,190,.12) 0%,transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "15%", left: "3%", width: "min(300px,40vw)", height: "min(300px,40vw)", background: "radial-gradient(circle,rgba(57,255,20,.05) 0%,transparent 70%)", pointerEvents: "none" }} />

      <div className="sc" style={{ padding: "4rem 1.25rem 3rem", width: "100%" }}>
        <div className="hero-layout">

          {/* text — server rendered for LCP */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: ".75rem", marginBottom: "2rem", flexWrap: "wrap" }}>
              <span style={{ fontSize: ".6rem", letterSpacing: ".28em", color: "var(--green)", textTransform: "uppercase" }}>{"// UNIT DESIGNATION"}</span>
              <div style={{ width: 40, height: 1, background: "var(--green)", flexShrink: 0 }} />
              <span style={{ fontSize: ".6rem", letterSpacing: ".1em", color: "var(--text-muted)" }}>JAKARTA, INDONESIA</span>
            </div>

            {/* LCP element — server rendered, h1 for accessibility */}
            <h1 aria-label="Agil Ahmad Maulana" style={{ marginBottom: "1.75rem", lineHeight: 1, fontWeight: "inherit", fontSize: "inherit" }}>
              <span className="glitch" data-text="AGIL" style={{ display: "block", fontSize: "clamp(3rem,10vw,7rem)", fontWeight: 900, letterSpacing: ".04em", textTransform: "uppercase", color: "var(--text)" }}>AGIL</span>
              <span style={{ display: "block", fontFamily: "var(--font-orbitron), sans-serif", fontSize: "clamp(2.6rem,9vw,6.2rem)", fontWeight: 900, letterSpacing: ".02em", textTransform: "uppercase", color: "transparent", WebkitTextStroke: "2px var(--purple-light)" }}>AHMAD</span>
              <span style={{ display: "block", fontSize: "clamp(2rem,7vw,5rem)", fontWeight: 900, letterSpacing: ".04em", textTransform: "uppercase", color: "var(--green)", textShadow: "0 0 40px rgba(57,255,20,.45)" }}>MAULANA</span>
            </h1>

            {/* typewriter — client only */}
            <div style={{ display: "flex", alignItems: "center", gap: ".4rem", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span style={{ fontSize: ".8rem", color: "var(--purple-light)" }}>[ </span>
              <HeroTypewriter />
              <span style={{ fontSize: ".8rem", color: "var(--purple-light)" }}> ]</span>
            </div>

            <HeroTagline />
            <HeroStats />
            <HeroCTA />
          </div>

          {/* photo */}
          <div className="hero-photo-col">
            <div style={{ position: "relative" }}>
              <div style={{ fontSize: ".52rem", letterSpacing: ".22em", color: "var(--purple-light)", textTransform: "uppercase", marginBottom: ".5rem", textAlign: "right" }}>UNIT: N-AAM-001</div>
              <div className="photo-frame" style={{ width: 300, height: 420 }}>
                <Image src="/foto-hero.webp" alt="Agil Ahmad Maulana" fill sizes="300px" style={{ objectFit: "cover", objectPosition: "top center" }} priority />
                <div className="photo-color-reveal">
                  <Image src="/foto-hero.webp" alt="" fill sizes="300px" style={{ objectFit: "cover", objectPosition: "top center" }} aria-hidden />
                </div>
                <div className="photo-corner-tr" />
                <div className="photo-corner-bl" />
                <div className="photo-scan" />
                <div className="photo-overlay" />
                <div className="photo-label">{"// BACKEND ENGINEER"}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginTop: ".6rem", justifyContent: "flex-end" }}>
                <span className="dot" />
                <span style={{ fontSize: ".5rem", letterSpacing: ".2em", color: "var(--green)", textTransform: "uppercase" }}>STATUS: ONLINE</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="hero-corner">
        <div style={{ width: 40, height: 1, background: "var(--border)", marginBottom: ".3rem" }} />
        <div style={{ fontSize: ".52rem", letterSpacing: ".15em", color: "var(--text-muted)", textTransform: "uppercase" }}>CLASS: SPECIALIST</div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 100, background: "linear-gradient(transparent,var(--bg))", pointerEvents: "none" }} />
    </section>
  );
}
