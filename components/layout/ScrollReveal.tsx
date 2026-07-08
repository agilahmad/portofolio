"use client";

import { useEffect } from "react";

/**
 * Single global IntersectionObserver that reveals any element marked with
 * `data-reveal` as it scrolls into view. Elements start hidden via CSS
 * (`[data-reveal]`), so there is no flash; a <noscript> fallback in the
 * layout keeps content visible when JS is disabled.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (els.length === 0) return;

    // Respect reduced-motion: show everything immediately, no animation.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
