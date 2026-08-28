"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Lightbulb,
  Award,
  ShieldCheck,
  Compass,
  Users,
  Heart,
  Sparkles,
  Microscope,
  Lock,
  Rocket,
  CheckCircle2,
  Building,
  MapPin,
  ChevronRight,
  ShieldAlert
} from "lucide-react";

export default function AboutPage() {
  const { lang, t } = useLanguage();

  const valueIcons = [
    <Lightbulb key="1" className="w-6 h-6 text-[#C59B27]" />,
    <Award key="2" className="w-6 h-6 text-[#C59B27]" />,
    <ShieldCheck key="3" className="w-6 h-6 text-[#C59B27]" />,
    <Compass key="4" className="w-6 h-6 text-[#C59B27]" />,
    <Users key="5" className="w-6 h-6 text-[#C59B27]" />,
    <Heart key="6" className="w-6 h-6 text-[#C59B27]" />,
    <Sparkles key="7" className="w-6 h-6 text-[#C59B27]" />,
    <Microscope key="8" className="w-6 h-6 text-[#C59B27]" />,
    <Lock key="9" className="w-6 h-6 text-[#C59B27]" />,
    <Rocket key="10" className="w-6 h-6 text-[#C59B27]" />
  ];

  return (
    <div className="bg-white min-h-screen text-zinc-900">
      {/* ---------------------------------------------------- */}
      {/* 1. HERO HEADER */}
      {/* ---------------------------------------------------- */}
      <section className="bg-zinc-950 text-white py-20 border-b border-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/attirance/pexels-fajuyi-samuel-olayinka-589022314-19330452.jpg"
            alt="About Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/10 border border-amber-400/30 rounded text-amber-300 text-xs font-bold uppercase tracking-wider">
            <span>{t.nav.about}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            {t.aboutPage.heroTitle}
          </h1>

          <p className="text-lg text-amber-200/90 font-serif italic max-w-3xl">
            {t.aboutPage.heroSubtitle}
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. IDENTITÉ & HÉRITAGE (KANEM & SAO) */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#C59B27]">
                HÉRITAGE & SYMBOLE
              </span>

              <h2 className="text-3xl font-black text-black tracking-tight">
                {t.aboutPage.originTitle}
              </h2>

              <p className="text-sm text-zinc-700 leading-relaxed">
                {t.aboutPage.originDesc1}
              </p>

              <p className="text-sm text-zinc-700 leading-relaxed">
                {t.aboutPage.originDesc2}
              </p>

              {/* Crucial Institutional Disclaimer Box */}
              <div className="p-4 bg-amber-50 border-l-4 border-[#C59B27] rounded-r-md flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                <p className="text-xs font-bold text-amber-950 leading-relaxed">
                  {t.aboutPage.disclaimerBox}
                </p>
              </div>
            </div>

            {/* Right Emblem Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-zinc-950 p-8 rounded-2xl border-2 border-black shadow-2xl space-y-6 text-center text-white max-w-md w-full relative overflow-hidden">
                <div className="w-32 h-32 bg-white p-4 rounded-xl border-2 border-[#C59B27] mx-auto shadow-inner flex items-center justify-center">
                  <Image
                    src="/images/emblem2.png"
                    alt="Kanem SA Emblem Large"
                    width={110}
                    height={110}
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-amber-300">
                    Sceau Institutionnel KANEM-SA
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 font-mono">
                    « Enracinés dans notre héritage, bâtis pour l'innovation. »
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. VISION & MISSIONS STRATÉGIQUES */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Vision Box */}
          <div className="bg-black text-white p-8 sm:p-12 rounded-xl border-t-4 border-[#C59B27] shadow-xl space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400">
              {t.aboutPage.visionTitle}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">
              {t.aboutPage.visionText}
            </h3>
          </div>

          {/* Missions List */}
          <div className="space-y-8">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#C59B27]">
                ENGAGEMENT OPÉRATIONNEL
              </span>
              <h2 className="text-3xl font-black text-black tracking-tight mt-1">
                {t.aboutPage.missionTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.aboutPage.missions.map((mission, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg border border-zinc-200 hover:border-black transition-all hover:shadow-md space-y-3 flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-zinc-100 border border-zinc-300 font-extrabold text-xs text-black flex items-center justify-center">
                      0{index + 1}
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-[#C59B27]" />
                  </div>
                  <p className="text-xs font-bold text-zinc-800 leading-relaxed">
                    {mission}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. LES 10 VALEURS FONDAMENTALES (GRID) */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#C59B27]">
              NOTRE SOCLE ÉTHIQUE
            </span>
            <h2 className="text-3xl font-black text-black tracking-tight">
              {t.aboutPage.valuesTitle}
            </h2>
            <p className="text-sm text-zinc-600">
              {t.aboutPage.valuesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {t.aboutPage.valuesList.map((val, idx) => (
              <div
                key={idx}
                className="bg-zinc-50 p-5 rounded-lg border border-zinc-200 hover:border-black transition-all hover:bg-white hover:shadow-lg space-y-3 group"
              >
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center border border-zinc-200 group-hover:border-[#C59B27] transition-colors shadow-sm">
                  {valueIcons[idx]}
                </div>
                <h4 className="text-sm font-extrabold text-black group-hover:text-[#C59B27] transition-colors">
                  {val.name}
                </h4>
                <p className="text-[11px] text-zinc-500 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. GOUVERNANCE INSTITUTIONNELLE */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#C59B27]">
              ORGANISATION
            </span>
            <h2 className="text-3xl font-black text-black tracking-tight">
              {t.aboutPage.govTitle}
            </h2>
            <p className="text-sm text-zinc-600">
              {t.aboutPage.govSubtitle}
            </p>
          </div>

          {/* Org Chart Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.aboutPage.govOrg.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg border-2 border-zinc-200 hover:border-black transition-all space-y-3 shadow-sm"
              >
                <div className="text-xs font-extrabold text-amber-500 uppercase tracking-wider">
                  NIVEAU {idx + 1}
                </div>
                <h4 className="text-base font-extrabold text-black">
                  {item.role}
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 6. ENGAGEMENT CAMEROUN & AFRIQUE */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black text-white p-8 sm:p-12 rounded-2xl border-2 border-[#C59B27] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#C59B27]" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-amber-300">
                  ANCRAGE STRATÉGIQUE
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {t.aboutPage.cameroonTitle}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {t.aboutPage.cameroonText}
              </p>
            </div>

            <Link
              href="/contact"
              className="px-8 py-4 text-xs font-extrabold text-black bg-[#C59B27] hover:bg-amber-300 rounded-md transition-colors shrink-0 flex items-center gap-2 shadow-lg"
            >
              <span>{t.nav.contact}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
