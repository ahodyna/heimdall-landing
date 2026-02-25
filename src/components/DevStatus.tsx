"use client";

import { CheckCircle2, FlaskConical, Clock, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const icons = [CheckCircle2, FlaskConical, Clock, Users];

export default function DevStatus() {
  const { lang } = useLanguage();
  const t = translations[lang].devStatus;

  return (
    <section className="py-8 bg-[#07090f]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
            <div className="md:flex-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shrink-0" />
                <span className="text-xs font-mono tracking-widest text-amber-500 uppercase">
                  {t.sectionLabel}
                </span>
              </div>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-3">
                {t.heading}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{t.body}</p>
            </div>

            <div className="md:w-64 space-y-3.5 shrink-0">
              {t.milestones.map(({ label, status }, i) => {
                const Icon = icons[i];
                return (
                  <div key={label} className="flex items-center gap-3">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        status === "done"
                          ? "bg-amber-500/20 border border-amber-500/40"
                          : status === "active"
                          ? "bg-amber-500/10 border border-amber-500/30"
                          : "bg-slate-800/60 border border-slate-700/60"
                      }`}
                    >
                      <Icon
                        size={13}
                        className={
                          status === "done" || status === "active"
                            ? "text-amber-400"
                            : "text-slate-600"
                        }
                      />
                    </div>
                    <span
                      className={`text-sm ${
                        status === "done"
                          ? "text-amber-400/80"
                          : status === "active"
                          ? "text-white font-medium"
                          : "text-slate-600"
                      }`}
                    >
                      {label}
                      {status === "active" && (
                        <span className="ml-2 text-[10px] text-amber-500/60 font-mono">
                          {t.nowLabel}
                        </span>
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
