"use client";

import Image from "next/image";
import { PROJECT_META, SKILL_ICONS, DARK_LOGOS } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();
  const p = t.projects;

  return (
    <section id="projects" className="sp">
      <div className="sc">
        <p className="section-eyebrow">{p.eyebrow}</p>
        <div className="pj-frame">
          <h2 className="section-title mb-7">{p.title}</h2>
          <div className="pj-grid">
            {PROJECT_META.map((meta, idx) => {
              const item = p.items[meta.id as keyof typeof p.items];
              if (!item) return null;
              const deployed = meta.status === "DEPLOYED";
              return (
                <article
                  key={meta.id}
                  data-reveal
                  className="pj-card"
                  style={{ transitionDelay: `${(idx % 3) * 0.08}s` }}
                >
                  <div className="pj-head">
                    <span className="pj-code">{meta.id}</span>
                    <span className={`pj-status${deployed ? "" : " pj-status-done"}`}>
                      <span className="pj-dot" aria-hidden="true" />
                      {meta.status}
                    </span>
                  </div>

                  <h3 className="pj-name">{item.name}</h3>

                  <p className="pj-desc">{item.context}</p>

                  <ul className="pj-bullets">
                    {item.contributions.slice(0, 2).map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>

                  <div className="pj-tags">
                    {meta.tags.map(tg => (
                      <span key={tg} className="pj-tag" title={tg}>
                        {SKILL_ICONS[tg]
                          ? <Image
                              src={SKILL_ICONS[tg]}
                              alt={tg}
                              width={16}
                              height={16}
                              className={`object-contain${DARK_LOGOS.has(tg) ? " logo-invert-dark" : ""}`}
                            />
                          : tg}
                      </span>
                    ))}
                  </div>

                  <div className="pj-foot">
                    <span className="pj-links">
                      {meta.github && (
                        <a
                          href={meta.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View source code: ${item.name} (opens in new tab)`}
                        >
                          CODE ↗
                        </a>
                      )}
                      {meta.github && meta.url && <span aria-hidden="true">·</span>}
                      {meta.url && (
                        <a
                          href={meta.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View live site: ${item.name} (opens in new tab)`}
                        >
                          LIVE ↗
                        </a>
                      )}
                    </span>
                    <span className="pj-year">{meta.year}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
