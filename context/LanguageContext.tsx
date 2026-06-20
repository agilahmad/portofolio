"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Lang } from "@/lib/i18n";

type CtxType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof translations.en;
};

const LanguageContext = createContext<CtxType>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export function LanguageProvider({
  children,
  initialLang = "en",
}: {
  children: ReactNode;
  initialLang?: Lang;
}) {
  // Initialised from a server-read cookie so SSR and the first client render
  // agree — no hydration mismatch and no language flash on load.
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = (l: Lang) => {
    setLangState(l);
    // Persist in a cookie so the server can render the right language next visit.
    document.cookie = `lang=${l}; path=/; max-age=31536000; samesite=lax`;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
