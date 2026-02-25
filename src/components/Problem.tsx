"use client";

import { Shield, Eye, Radio } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const icons = [Shield, Eye, Radio];

export default function Problem() {
  const { lang } = useLanguage();
  const t = translations[lang].problem;

  return (
    <section id="problem" className="py-10 bg-[#07090f]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-xs font-mono tracking-widest text-amber-500 uppercase mb-3">
            {t.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            {t.heading1}
            <br />
            <span className="text-slate-500">{t.heading2}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {t.items.map(({ num, title, desc }, i) => {
            const Icon = icons[i];
            return (
              <div
                key={num}
                className="bg-[#0d1421] border border-slate-800 rounded-xl p-7 hover:border-amber-500/25 transition-colors group"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-5xl font-bold text-slate-800/70 font-mono group-hover:text-slate-700 transition-colors select-none">
                    {num}
                  </span>
                  <Icon className="text-amber-500 shrink-0 mt-1" size={20} />
                </div>
                <h3 className="text-white font-semibold text-sm leading-snug mb-3">
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
