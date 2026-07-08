"use client";

import { PROJECT_META } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();
  const p = t.projects;

  return (
    <section id="projects" className="sp">
      <div className="sc">
        <p className="section-eyebrow">{p.eyebrow}</p>
        <h2 className="section-title mb-10">{p.title}</h2>

        <div className="grid-projects">
          {PROJECT_META.map((meta, idx) => {
            const item = p.items[meta.id as keyof typeof p.items];
            if (!item) return null;
            return (
              <div
                key={meta.id}
                data-reveal
                className="project-card p-[1.4rem]"
                style={{ transitionDelay: `${(idx % 3) * 0.08}s` }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,var(--purple),transparent)]" />

                <div className="flex justify-between items-start mb-3">
                  <span className="text-[.5rem] tracking-[.18em] text-purple-light uppercase">{meta.id}</span>
                  <div className="flex items-center gap-[.4rem]">
                    <span className={`dot${meta.status !== "DEPLOYED" ? " dot-purple" : ""}`} style={{ width: 5, height: 5 }} />
                    <span className={`text-[.48rem] tracking-[.14em] uppercase ${meta.status === "DEPLOYED" ? "text-green" : "text-purple-light"}`}>
                      {meta.status}
                    </span>
                  </div>
                </div>

                <h3 className="text-[.88rem] tracking-[.04em] uppercase mb-2">{item.name}</h3>

                <p className="text-[.72rem] text-muted leading-[1.6] mb-[.85rem] italic">
                  {item.context}
                </p>

                <ul className="list-none flex flex-col gap-[.4rem] mb-[.9rem]">
                  {item.contributions.map((c, i) => (
                    <li key={i} className="flex gap-[.55rem] items-start">
                      <span className="text-green text-[.6rem] leading-[1.6] shrink-0">›</span>
                      <span className="text-[.72rem] text-fg leading-[1.6]">{c}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-[rgba(123,47,190,.15)] pt-[.7rem] flex justify-between items-center flex-wrap gap-2">
                  <div className="flex flex-wrap gap-[.35rem]">
                    {meta.tags.map(tg => <span key={tg} className="tag" style={{ fontSize: ".48rem" }}>{tg}</span>)}
                  </div>
                  <div className="flex items-center gap-[.6rem]">
                    {meta.github && (
                      <a
                        href={meta.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-live-link"
                        aria-label={`View source code: ${item.name} (opens in new tab)`}
                      >
                        CODE <span aria-hidden="true">↗</span>
                      </a>
                    )}
                    {meta.url && (
                      <a
                        href={meta.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-live-link"
                        aria-label={`View live site: ${item.name} (opens in new tab)`}
                      >
                        LIVE <span aria-hidden="true">↗</span>
                      </a>
                    )}
                    <span className="text-[.5rem] text-muted tracking-[.1em]">{meta.year}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
