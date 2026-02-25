"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Contact() {
  const email = "heimdall.in.ua@gmail.com";
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  return (
    <section id="contact" className="py-10 bg-[#07090f]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs font-mono tracking-widest text-amber-500 uppercase mb-3">
              {t.sectionLabel}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              {t.heading}
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">{t.body}</p>

            <div className="space-y-5">
              {t.rows.map(([title, desc]) => (
                <div key={title} className="flex gap-3">
                  <div className="w-1 h-1 rounded-full bg-amber-500 mt-[9px] shrink-0" />
                  <p className="text-sm text-slate-400">
                    <span className="text-white font-medium">{title}</span>
                    {" — "}
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start md:items-center">
            <div className="bg-[#0d1421] border border-slate-800 rounded-2xl p-8 w-full text-center">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center mx-auto mb-6">
                <Mail className="text-amber-400" size={24} />
              </div>
              <p className="text-slate-500 text-sm mb-3">{t.emailLabel}</p>
              <a
                href={"mailto:" + email}
                className="group flex items-center justify-center gap-2 text-white font-semibold text-base hover:text-amber-400 transition-colors break-all"
              >
                {email}
                <ArrowUpRight
                  size={16}
                  className="text-slate-600 group-hover:text-amber-400 transition-colors shrink-0"
                />
              </a>
              <div className="mt-8 pt-6 border-t border-slate-800">
                <a
                  href={"mailto:" + email}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-lg transition-colors text-sm"
                >
                  {t.emailCta} <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
