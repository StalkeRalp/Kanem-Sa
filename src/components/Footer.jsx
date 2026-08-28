"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Globe, ArrowUpRight, ShieldCheck, Mail, MapPin, Phone, Award } from "lucide-react";

export default function Footer() {
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-800 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative Gold Glow subtle background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-[#C59B27] blur-md opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800">
          
          {/* Col 1 & 2: Branding & Motto */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-11 h-11 bg-white p-1 rounded-md border border-[#C59B27] flex items-center justify-center shadow-lg">
                <Image
                  src="/images/logo-Kanem-sa.png"
                  alt="KANEM-SA Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-tight text-white">
                  KANEM<span className="text-[#C59B27]">-SA</span>
                </span>
                <span className="text-[11px] font-bold tracking-widest text-zinc-400 uppercase">
                  INSTITUTION R&D ET INNOVATION
                </span>
              </div>
            </Link>

            <p className="text-sm italic text-amber-200/90 font-serif border-l-2 border-[#C59B27] pl-3 py-1">
              {t.footer.motto}
            </p>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-md">
              {lang === "fr"
                ? "Institution africaine indépendante dédiée à la recherche scientifique appliquée, au développement technologique souverain et à la valorisation des compétences continentales."
                : "Independent African institution dedicated to applied scientific research, sovereign technological development, and continental skill empowerment."}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs text-zinc-400 font-semibold">{t.footer.langChoice}</span>
              <button
                onClick={toggleLanguage}
                className="px-3 py-1 text-xs font-bold bg-zinc-900 hover:bg-zinc-800 text-amber-300 border border-amber-500/40 rounded flex items-center gap-1.5 transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>{lang === "fr" ? "Français (FR)" : "English (EN)"}</span>
              </button>
            </div>
          </div>

          {/* Col 3: Navigation Rapide */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-amber-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
                  <span>{t.nav.home}</span>
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
                  <span>{t.nav.about}</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
                  <span>{t.nav.services}</span>
                </Link>
              </li>
              <li>
                <Link href="/raide-race" className="text-zinc-400 hover:text-amber-300 transition-colors flex items-center gap-1.5 font-semibold">
                  <span>{t.nav.raideRace}</span>
                  <span className="px-1.5 py-0.2 text-[9px] bg-amber-400 text-black font-extrabold rounded">2027</span>
                </Link>
              </li>
              <li>
                <Link href="/actualites" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
                  <span>{t.nav.news}</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
                  <span>{t.nav.contact}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Programmes & Piliers */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-amber-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
              {lang === "fr" ? "Axes Phares" : "Key Pillars"}
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C59B27]" />
                <span>Cybersécurité & Souveraineté</span>
              </li>
              <li className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#C59B27]" />
                <span>IA & Traitement des Langues</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-[#C59B27]" />
                <span>AgriTech & HealthTech</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-[#C59B27]" />
                <span>FinTech & Smart Grids</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Localisation & Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-amber-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
              {lang === "fr" ? "Siège Institutionnel" : "Headquarters"}
            </h4>
            <div className="space-y-3 text-xs text-zinc-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                <span>République du Cameroun (Pôle Central)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C59B27] shrink-0" />
                <span className="text-zinc-300 font-mono">contact@kanem-sa.org</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#C59B27] shrink-0" />
                <span>Portail Institutionnel Officiel</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Institutional Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} KANEM-SA. {t.footer.rights}</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-zinc-300 cursor-pointer">Français / English</span>
            <span>•</span>
            <span className="hover:text-zinc-300 cursor-pointer">{t.footer.legal}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
