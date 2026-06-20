"use client";

import { useEffect, useState } from "react";

export function useTypewriter(words: string[], speed = 90, pause = 1800) {
  const [text, setText]             = useState("");
  const [wordIndex, setWordIndex]   = useState(0);
  const [charIndex, setCharIndex]   = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    if (!isDeleting) {
      if (charIndex < word.length) {
        const t = setTimeout(() => {
          setCharIndex(c => c + 1);
          setText(word.slice(0, charIndex + 1));
        }, speed);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setIsDeleting(true), pause);
      return () => clearTimeout(t);
    } else {
      if (charIndex > 0) {
        const t = setTimeout(() => {
          setCharIndex(c => c - 1);
          setText(word.slice(0, charIndex - 1));
        }, speed / 2);
        return () => clearTimeout(t);
      }
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDeleting(false);
      setWordIndex(i => (i + 1) % words.length);
    }
  }, [charIndex, isDeleting, wordIndex, words, speed, pause]);

  return text;
}
