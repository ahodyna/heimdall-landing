"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Solution() {
  const { lang } = useLanguage();
  const t = translations[lang].solution;

  return (
    <section id="solution" className="py-10 bg-[#080c14] grid-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-mono tracking-widest text-amber-500 uppercase mb-3">
              {t.sectionLabel}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              {t.heading1}
              <br />
              {t.heading2}
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              {t.body}
            </p>

            <div className="space-y-4">
              {t.points.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-[7px] shrink-0" />
                  <span className="text-slate-300 text-base leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-72 h-72 select-none">
              <div className="absolute inset-0 rounded-full border border-amber-500/10 animate-ping" style={{ animationDuration: "3s" }} />
              <div className="absolute inset-0 rounded-full border border-amber-500/15" />
              <div className="absolute inset-6 rounded-full border border-slate-700/40" />
              <div className="absolute inset-14 rounded-full border border-amber-500/20" />
              <div className="absolute inset-[72px] rounded-full border border-slate-700/30" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#07090f] border border-amber-500/35 rounded-xl px-5 py-4 text-center amber-glow">
                  <div className="text-amber-400 font-bold text-xs tracking-[0.2em] font-mono mb-1">
                    {t.diagramLabel}
                  </div>
                  <div className="text-slate-600 text-[10px] tracking-widest uppercase font-mono">
                    {t.diagramSub}
                  </div>
                </div>
              </div>

              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                const rad = (angle * Math.PI) / 180;
                const r = 116;
                const cx = 144;
                const cy = 144;
                const x = cx + r * Math.cos(rad) - 5;
                const y = cy + r * Math.sin(rad) - 5;
                return (
                  <div
                    key={angle}
                    className="absolute w-2.5 h-2.5 rounded-full bg-amber-500/80 border border-amber-400/50"
                    style={{ left: x, top: y }}
                  />
                );
              })}

              <div
                className="absolute inset-2 rounded-full border-2 border-transparent"
                style={{
                  background:
                    "conic-gradient(from -30deg, rgba(245,158,11,0.08) 0deg, rgba(245,158,11,0.18) 60deg, transparent 60deg)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
