"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTypewriter } from "@/lib/hooks";

const ROLES = ["PHP Developer", "Laravel Specialist", "Backend Engineer", "Web Developer"];

const STATS = [
  { label: "SYNC SYSTEM", val: "ACTIVE",  green: true  },
  { label: "EXPERIENCE",  val: "6+ MO",   green: false },
  { label: "PROJECTS",    val: "6 BUILT", green: false },
  { label: "CLASS",       val: "BACKEND", green: false },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const role = useTypewriter(ROLES);

  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="grid-bg" style={{ minHeight: "100vh", paddingTop: 58, position: "relative", display: "flex", alignItems: "center", overflow: "hidden" }}>
      {/* ambient glows */}
      <div style={{ position: "absolute", top: "8%", right: "4%", width: "min(500px,60vw)", height: "min(500px,60vw)", background: "radial-gradient(circle,rgba(123,47,190,.12) 0%,transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "15%", left: "3%", width: "min(300px,40vw)", height: "min(300px,40vw)", background: "radial-gradient(circle,rgba(57,255,20,.05) 0%,transparent 70%)", pointerEvents: "none" }} />

      <div className="sc" style={{ padding: "4rem 1.25rem 3rem", width: "100%" }}>
        <div className="hero-layout">

          {/* ── LEFT: text content ── */}
          <div>
            {/* top label */}
            <div style={{ display: "flex", alignItems: "center", gap: ".75rem", marginBottom: "2rem", flexWrap: "wrap" }}>
              <span style={{ fontSize: ".6rem", letterSpacing: ".28em", color: "var(--green)", textTransform: "uppercase" }}>// UNIT DESIGNATION</span>
              <div style={{ width: 40, height: 1, background: "var(--green)", flexShrink: 0 }} />
              <span style={{ fontSize: ".6rem", letterSpacing: ".1em", color: "var(--text-muted)" }}>JAKARTA, INDONESIA</span>
            </div>

            {/* name */}
            <div style={{ marginBottom: "1.75rem", lineHeight: 1 }}>
              <div
                className="glitch"
                data-text="AGIL"
                style={{ fontSize: "clamp(3rem,10vw,7rem)", fontWeight: 900, letterSpacing: ".04em", textTransform: "uppercase", color: "var(--text)" }}
              >
                AGIL
              </div>
              <div style={{ fontSize: "clamp(3rem,10vw,7rem)", fontWeight: 900, letterSpacing: ".04em", textTransform: "uppercase", color: "transparent", WebkitTextStroke: "2px var(--purple-light)" }}>
                AHMAD
              </div>
              <div style={{ fontSize: "clamp(2rem,7vw,5rem)", fontWeight: 900, letterSpacing: ".04em", textTransform: "uppercase", color: "var(--green)", textShadow: "0 0 40px rgba(57,255,20,.45)" }}>
                MAULANA
              </div>
            </div>

            {/* typewriter */}
            <div style={{ display: "flex", alignItems: "center", gap: ".4rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
              <span style={{ fontSize: ".8rem", color: "var(--purple-light)" }}>[ </span>
              <span style={{ fontSize: "clamp(.85rem,2.5vw,1.05rem)", letterSpacing: ".1em", color: "var(--text-muted)" }}>
                {mounted ? role : "PHP Developer"}<span style={{ color: "var(--green)", animation: "blink 1s infinite" }}>█</span>
              </span>
              <span style={{ fontSize: ".8rem", color: "var(--purple-light)" }}> ]</span>
            </div>

            {/* stats */}
            <div className="hero-stats">
              {STATS.map(s => (
                <div key={s.label} style={{ border: "1px solid var(--border)", padding: ".65rem .9rem", background: "rgba(13,13,26,.85)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: ".4rem", marginBottom: ".45rem" }}>
                    <span className={`dot${s.green ? "" : " dot-purple"}`} style={{ width: 5, height: 5 }} />
                    <span style={{ fontSize: ".5rem", letterSpacing: ".18em", color: "var(--text-muted)", textTransform: "uppercase" }}>{s.label}</span>
                  </div>
                  <div style={{ fontSize: ".85rem", fontWeight: 700, letterSpacing: ".1em", ...(s.green ? { color: "var(--green)", textShadow: "0 0 8px var(--green)" } : { color: "var(--text)" }) }}>
                    {s.val}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="cta-group">
              <a href="#projects" className="btn btn-outline-green">&gt; VIEW PROJECTS</a>
              <a href="#contact"  className="btn btn-outline-purple">CONTACT ME</a>
            </div>
          </div>

          {/* ── RIGHT: photo (desktop only) ── */}
          <div className="hero-photo-col">
            <div style={{ position: "relative" }}>
              {/* unit label above photo */}
              <div style={{ fontSize: ".52rem", letterSpacing: ".22em", color: "var(--purple-light)", textTransform: "uppercase", marginBottom: ".5rem", textAlign: "right" }}>
                UNIT: N-AAM-001
              </div>

              {/* photo frame */}
              <div className="photo-frame" style={{ width: 300, height: 420 }}>
                {/* grayscale base */}
                <Image
                  src="/foto-hero.jpeg"
                  alt="Agil Ahmad Maulana"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                  priority
                />
                {/* color layer, revealed from top as scan passes */}
                <div className="photo-color-reveal">
                  <Image
                    src="/foto-hero.jpeg"
                    alt=""
                    fill
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                    aria-hidden
                  />
                </div>
                <div className="photo-corner-tr" />
                <div className="photo-corner-bl" />
                <div className="photo-scan" />
                <div className="photo-overlay" />
                <div className="photo-label">// BACKEND ENGINEER</div>
              </div>

              {/* status tag below */}
              <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginTop: ".6rem", justifyContent: "flex-end" }}>
                <span className="dot" />
                <span style={{ fontSize: ".5rem", letterSpacing: ".2em", color: "var(--green)", textTransform: "uppercase" }}>STATUS: ONLINE</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* corner label — wide screen */}
      <div className="hero-corner">
        <div style={{ width: 40, height: 1, background: "var(--border)", marginBottom: ".3rem" }} />
        <div style={{ fontSize: ".52rem", letterSpacing: ".15em", color: "var(--text-muted)", textTransform: "uppercase" }}>CLASS: BERSERK</div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 100, background: "linear-gradient(transparent,var(--bg))", pointerEvents: "none" }} />
    </section>
  );
}
