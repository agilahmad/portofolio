"use client";

import { useEffect, useState } from "react";

export function useTypewriter(words: string[], speed = 90, pause = 1800) {
  const [text, setText]   = useState("");
  const [wi, setWi]       = useState(0);
  const [ci, setCi]       = useState(0);
  const [del, setDel]     = useState(false);

  useEffect(() => {
    const word = words[wi];
    if (!del) {
      if (ci < word.length) {
        const t = setTimeout(() => { setCi(c => c + 1); setText(word.slice(0, ci + 1)); }, speed);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setDel(true), pause);
      return () => clearTimeout(t);
    } else {
      if (ci > 0) {
        const t = setTimeout(() => { setCi(c => c - 1); setText(word.slice(0, ci - 1)); }, speed / 2);
        return () => clearTimeout(t);
      }
      setDel(false);
      setWi(i => (i + 1) % words.length);
    }
  }, [ci, del, wi, words, speed, pause]);

  return text;
}
