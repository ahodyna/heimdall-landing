"use client";

import { ArrowRight, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,rgba(245,158,11,0.11),transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#07090f] to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono px-4 py-2 rounded-full mb-8 tracking-widest uppercase">
          <AlertTriangle size={11} />
          {t.badge}
        </div>

        <h1 className="text-5xl md:text-[4.5rem] lg:text-7xl font-bold tracking-tight text-white leading-[1.04] mb-6">
          {t.title1}
          <br />
          <span className="gradient-text">{t.title2}</span>
        </h1>

        <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.subtitle}{" "}
          <span className="text-slate-300">{t.subtitleHighlight}</span>
        </p>

        <div className="flex items-center justify-center mb-20">
          <a
            href="#contact"
            className="flex items-center gap-2 px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded transition-colors text-sm tracking-wide"
          >
            {t.ctaPrimary} <ArrowRight size={15} />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-10 border-t border-slate-800/60">
          {t.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl md:text-2xl font-bold text-amber-400 font-mono mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-600 tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
