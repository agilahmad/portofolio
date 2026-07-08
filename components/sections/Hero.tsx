import Image from "next/image";
import { HeroTypewriter, HeroTagline, HeroStats, HeroCTA } from "./HeroClient";

export default function Hero() {
  return (
    <section className="grid-bg relative flex min-h-screen items-center overflow-hidden pt-[58px]">
      <div className="pointer-events-none absolute top-[8%] right-[4%] h-[min(500px,60vw)] w-[min(500px,60vw)] bg-[radial-gradient(circle,var(--hero-glow-purple)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-[15%] left-[3%] h-[min(300px,40vw)] w-[min(300px,40vw)] bg-[radial-gradient(circle,var(--hero-glow-green)_0%,transparent_70%)]" />

      <div className="sc w-full px-5 pt-16 pb-12">
        <div className="hero-layout">

          {/* text — server rendered for LCP */}
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="text-[.6rem] tracking-[.28em] text-green uppercase">{"// UNIT DESIGNATION"}</span>
              <div className="h-px w-10 shrink-0 bg-green" />
              <span className="text-[.6rem] tracking-[.1em] text-muted">JAKARTA, INDONESIA</span>
            </div>

            <div className="mb-3 text-[.65rem] tracking-[.3em] text-muted uppercase">HELLO, MY NAME IS</div>

            {/* LCP element — server rendered, h1 for accessibility */}
            <h1 aria-label="Agil Ahmad Maulana" className="mb-7 leading-none">
              <span className="glitch block text-[clamp(3rem,10vw,7rem)] font-black tracking-[.04em] text-fg uppercase" data-text="AGIL">AGIL</span>
              <span className="block font-display text-[clamp(2.6rem,9vw,6.2rem)] font-black tracking-[.02em] text-transparent uppercase [-webkit-text-stroke:2px_var(--purple-light)]">AHMAD</span>
              <span className="block text-[clamp(2rem,7vw,5rem)] font-black tracking-[.04em] text-green uppercase [text-shadow:0_0_40px_rgba(57,255,20,.45)]">MAULANA</span>
            </h1>

            {/* typewriter — client only */}
            <div className="mb-3 flex flex-wrap items-center gap-[.4rem]">
              <span className="text-[.8rem] text-purple-light">[ </span>
              <HeroTypewriter />
              <span className="text-[.8rem] text-purple-light"> ]</span>
            </div>

            <div className="mb-6 text-[.58rem] tracking-[.3em] text-purple-light uppercase">{"// AVID PROGRAMMER"}</div>

            <HeroTagline />
            <HeroStats />
            <HeroCTA />
          </div>

          {/* photo */}
          <div className="hero-photo-col">
            <div className="relative">
              <div className="mb-2 text-right text-[.52rem] tracking-[.22em] text-purple-light uppercase">UNIT: N-AAM-001</div>
              <div className="photo-frame h-[420px] w-[300px]">
                <Image src="/foto-hero.webp" alt="Agil Ahmad Maulana" fill sizes="300px" className="object-cover object-top" priority />
                <div className="photo-color-reveal">
                  <Image src="/foto-hero.webp" alt="" fill sizes="300px" className="object-cover object-top" aria-hidden />
                </div>
                <div className="photo-corner-tr" />
                <div className="photo-corner-bl" />
                <div className="photo-scan" />
                <div className="photo-overlay" />
                <div className="photo-label">{"// BACKEND ENGINEER"}</div>
              </div>
              <div className="mt-[.6rem] flex items-center justify-end gap-2">
                <span className="dot" />
                <span className="text-[.5rem] tracking-[.2em] text-green uppercase">STATUS: ONLINE</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="hero-corner">
        <div className="mb-[.3rem] h-px w-10 bg-border" />
        <div className="text-[.52rem] tracking-[.15em] text-muted uppercase">CLASS: SPECIALIST</div>
      </div>

      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-[100px] bg-[linear-gradient(transparent,var(--bg))]" />
    </section>
  );
}
