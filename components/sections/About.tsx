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
        <h2 className="section-title mb-10">{a.title}</h2>

        <div className="about-outer">

          {/* photo */}
          <div data-reveal className="flex flex-col items-center gap-[.6rem]">
            <div className="photo-frame h-[370px] w-full max-w-[280px]">
              <Image src="/foto-about.webp" alt="Agil Ahmad Maulana" fill sizes="280px" className="object-cover object-top" />
              <div className="photo-color-reveal">
                <Image src="/foto-about.webp" alt="" fill sizes="280px" className="object-cover object-top" aria-hidden />
              </div>
              <div className="photo-corner-tr" />
              <div className="photo-corner-bl" />
              <div className="photo-scan" />
              <div className="photo-overlay" />
              <div className="photo-label">{a.photoLabel}</div>
            </div>
            <div className="flex w-full max-w-[280px] items-center justify-between border border-border bg-surface px-4 py-[.6rem]">
              <div>
                <div className="mb-[.15rem] text-[.52rem] tracking-[.18em] text-green uppercase">{a.clearanceLabel}</div>
                <div className="text-[.72rem] tracking-[.06em] text-fg uppercase">{a.clearanceVal}</div>
              </div>
              <div className="text-right">
                <div className="text-[.52rem] tracking-[.1em] text-muted">N-AAM-001</div>
                <div className="mt-[.2rem] flex items-center justify-end gap-[.35rem]">
                  <span className="dot dot-sm" />
                  <span className="text-[.48rem] tracking-[.1em] text-green">{a.activeLabel}</span>
                </div>
              </div>
            </div>
          </div>

          {/* bio */}
          <div data-reveal className="panel panel-top-bar reveal-delay-1 p-7">
            <div className="mb-5 text-[.58rem] tracking-[.2em] text-green">{a.summaryLabel}</div>
            <p className="mb-[1.2rem] text-[.85rem] leading-[1.85] text-muted">{a.bio[0]}</p>
            <p className="text-[.85rem] leading-[1.85] text-muted">{a.bio[1]}</p>
          </div>

          {/* info */}
          <div data-reveal className="reveal-delay-2">
            {a.info.map(item => (
              <div key={item.label} className="flex items-start gap-4 border-b border-[rgba(123,47,190,.12)] py-[.65rem]">
                <span className="min-w-[72px] shrink-0 pt-[.1rem] text-[.52rem] tracking-[.18em] text-green uppercase">
                  {item.label}
                </span>
                <span className="text-[.8rem] break-all text-fg">{item.val}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
