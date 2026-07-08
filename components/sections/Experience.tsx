"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();
  const e = t.experience;

  return (
    <section id="experience" className="sp">
      <div className="sc">
        <p className="section-eyebrow">{e.eyebrow}</p>
        <h2 className="section-title mb-10">{e.title}</h2>

        <div className="grid-exp">

          {/* timeline */}
          <div className="relative pl-7">
            <div className="timeline-line" />

            {/* internship */}
            <div data-reveal className="relative mb-8">
              <div className="timeline-dot" />
              <div className="panel panel-top-green ml-[.6rem] p-[1.4rem]">
                <div className="mb-2 flex flex-wrap justify-between gap-[.3rem]">
                  <span className="text-[.58rem] tracking-[.16em] text-green uppercase">{e.internship.period}</span>
                  <span className="tag tag-sm">{e.internship.badge}</span>
                </div>
                <h3 className="mb-[.2rem] text-[.88rem] tracking-[.05em] uppercase">{e.internship.role}</h3>
                <div className="mb-[.9rem] text-[.7rem] text-purple-light">{e.internship.org}</div>
                <ul className="flex list-none flex-col gap-[.45rem]">
                  {e.internship.items.map((item, i) => (
                    <li key={i} className="flex gap-[.6rem] text-[.77rem] leading-[1.6] text-muted">
                      <span className="shrink-0 text-green">›</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* training */}
            <div data-reveal className="reveal-delay-1 relative">
              <div className="timeline-dot timeline-dot-purple" />
              <div className="panel ml-[.6rem] p-[1.4rem]">
                <div className="mb-2 flex flex-wrap justify-between gap-[.3rem]">
                  <span className="text-[.58rem] tracking-[.16em] text-purple-light uppercase">{e.training.period}</span>
                  <span className="tag tag-sm">{e.training.badge}</span>
                </div>
                <h3 className="mb-[.2rem] text-[.88rem] tracking-[.05em] uppercase">{e.training.role}</h3>
                <div className="mb-[.9rem] text-[.7rem] text-purple-light">{e.training.org}</div>
                <ul className="flex list-none flex-col gap-[.45rem]">
                  {e.training.items.map((item, i) => (
                    <li key={i} className="flex gap-[.6rem] text-[.77rem] leading-[1.6] text-muted">
                      <span className="shrink-0 text-purple-light">›</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* right column */}
          <div className="flex flex-col gap-5">

            <div data-reveal className="panel panel-top-purple p-[1.4rem]">
              <div className="mb-[.9rem] text-[.56rem] tracking-[.2em] text-green">{e.educationLabel}</div>
              <div className="mb-[.4rem] flex flex-wrap justify-between gap-[.3rem]">
                <span className="text-[.58rem] tracking-[.12em] text-muted uppercase">{e.education.period}</span>
                <span className="text-[.65rem] text-green">{e.education.gpa}</span>
              </div>
              <h3 className="mb-[.2rem] text-[.86rem] tracking-[.05em] uppercase">{e.education.degree}</h3>
              <div className="mb-[.85rem] text-[.7rem] text-purple-light">{e.education.university}</div>
              <div className="border border-[rgba(123,47,190,.15)] bg-[rgba(123,47,190,.06)] p-[.7rem] text-[.7rem] leading-[1.6] text-muted">
                {e.education.thesis}
              </div>
            </div>

            <div data-reveal className="panel panel-top-green reveal-delay-1 p-[1.4rem]">
              <div className="mb-[.9rem] text-[.56rem] tracking-[.2em] text-green">{e.certificationLabel}</div>
              <div className="flex items-center gap-[.9rem] border border-border p-[.7rem]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-purple bg-[rgba(123,47,190,.2)] text-[.95rem] text-purple-light">◈</div>
                <div>
                  <div className="mb-[.2rem] text-[.78rem] tracking-[.04em] uppercase">{e.certification.name}</div>
                  <div className="flex flex-wrap gap-3">
                    <span className="text-[.6rem] text-purple-light">{e.certification.issuer}</span>
                    <span className="text-[.6rem] text-muted">{e.certification.date}</span>
                  </div>
                </div>
              </div>
            </div>

            <div data-reveal className="grid-stats reveal-delay-2">
              {e.stats.map(s => (
                <div key={s.label} className="panel p-4 text-center">
                  <div className="text-[1.4rem] font-black tracking-[.04em] text-green [text-shadow:0_0_12px_rgba(57,255,20,.4)]">{s.val}</div>
                  <div className="mt-[.2rem] text-[.52rem] tracking-[.12em] text-muted uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
