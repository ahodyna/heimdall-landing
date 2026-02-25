"use client";

import { Waves, Cpu, Bell } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const icons = [Waves, Cpu, Bell];

export default function HowItWorks() {
  const { lang } = useLanguage();
  const t = translations[lang].howItWorks;

  return (
    <section className="py-10 bg-[#07090f]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-mono tracking-widest text-amber-500 uppercase mb-3">
            {t.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {t.heading}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.steps.map(({ num, title, desc }, i) => {
            const Icon = icons[i];
            return (
              <div key={num} className="relative">
                {i < t.steps.length - 1 && (
                  <div className="hidden md:block absolute top-9 left-[calc(100%-1rem)] w-8 h-px bg-gradient-to-r from-amber-500/30 to-transparent z-10" />
                )}
                <div className="bg-[#0d1421] border border-slate-800 rounded-xl p-8 hover:border-amber-500/25 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                      <Icon className="text-amber-400" size={20} />
                    </div>
                    <span className="text-4xl font-bold text-slate-800 font-mono select-none">
                      {num}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3 tracking-wide">
                    {title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
