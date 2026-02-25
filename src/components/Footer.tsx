"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const sectionHrefs = ["#problem", "#solution", "#contact"];

export default function Footer() {
  const year = new Date().getFullYear();
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer className="border-t border-slate-800/60 bg-[#07090f] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-white font-bold tracking-[0.25em] uppercase text-sm mb-1">
            HEIMDALL
          </p>
          <p className="text-slate-700 text-xs">{t.tagline}</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm text-slate-700">
          {t.links.map((item, i) => (
            <a
              key={item}
              href={sectionHrefs[i]}
              className="hover:text-slate-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <p className="text-slate-700 text-xs text-center md:text-right leading-relaxed">
          © {year} Heimdall. {t.legal}
          <br />
          <span className="text-slate-800">{t.status}</span>
        </p>
      </div>
    </footer>
  );
}
