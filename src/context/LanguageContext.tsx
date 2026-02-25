"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "en" | "uk";

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "uk",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("uk");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("heimdall-lang") as Lang | null;
    if (stored === "en" || stored === "uk") setLangState(stored);
    setMounted(true);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("heimdall-lang", l);
  };

  // Always serve "uk" during SSR/initial hydration to match server render.
  // After mount, switch to the stored preference.
  return (
    <LanguageContext.Provider value={{ lang: mounted ? lang : "uk", setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
