"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang].navbar;

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300 " + (scrolled ? "bg-[#07090f]/90 backdrop-blur-md border-b border-slate-800/60" : "bg-transparent")}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="text-white font-bold tracking-[0.25em] text-base uppercase select-none">
          HEIMDALL
        </a>

        <div className="hidden md:flex items-center gap-7">
          {t.links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-slate-500 hover:text-slate-200 transition-colors tracking-wide">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1 font-mono text-xs tracking-wider">
            <button
              onClick={() => setLang("uk")}
              className={"px-2 py-1 rounded transition-colors " + (lang === "uk" ? "text-amber-400 bg-amber-500/10" : "text-slate-600 hover:text-slate-400")}
            >
              UA
            </button>
            <span className="text-slate-800">|</span>
            <button
              onClick={() => setLang("en")}
              className={"px-2 py-1 rounded transition-colors " + (lang === "en" ? "text-amber-400 bg-amber-500/10" : "text-slate-600 hover:text-slate-400")}
            >
              EN
            </button>
          </div>
          <a href="#contact" className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold rounded transition-colors tracking-wide">
            {t.cta}
          </a>
        </div>

        <button className="md:hidden text-slate-400 hover:text-white p-1" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-800 bg-[#07090f]/95 backdrop-blur-md px-6 py-5 flex flex-col gap-5">
          {t.links.map((link) => (
            <a key={link.href} href={link.href} className="text-slate-400 hover:text-white text-sm tracking-wide transition-colors" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2 font-mono text-xs tracking-wider pt-1">
            <button onClick={() => setLang("uk")} className={"px-3 py-1.5 rounded transition-colors " + (lang === "uk" ? "text-amber-400 bg-amber-500/10 border border-amber-500/20" : "text-slate-600 border border-slate-800")}>UA</button>
            <button onClick={() => setLang("en")} className={"px-3 py-1.5 rounded transition-colors " + (lang === "en" ? "text-amber-400 bg-amber-500/10 border border-amber-500/20" : "text-slate-600 border border-slate-800")}>EN</button>
          </div>
          <a href="#contact" className="px-5 py-2.5 bg-amber-500 text-black text-sm font-semibold rounded text-center" onClick={() => setOpen(false)}>
            {t.cta}
          </a>
        </div>
      )}
    </nav>
  );
}
