"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Award,
  Calendar,
  Users,
  Building2,
  CheckCircle2,
  Download,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Target,
  Trophy,
  Rocket
} from "lucide-react";

export default function RaideRacePage() {
  const { lang, t } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  const [regSuccess, setRegSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegSuccess(true);
    setTimeout(() => {
      setRegSuccess(false);
      setShowModal(false);
    }, 3000);
  };

  return (
    <div className="bg-white min-h-screen text-zinc-900">
      {/* Hero Header Banner */}
      <section className="bg-zinc-950 text-white py-24 border-b border-zinc-800 relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/Images Attirance/pexels-shvets-production-7562020.jpg"
            alt="RAIDE-RACE Banner"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/10 border border-amber-400/30 rounded text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4 text-[#C59B27]" />
                <span>{t.raidePage.heroTag}</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
                {t.raidePage.heroTitle}
              </h1>

              <p className="text-xl font-extrabold text-amber-300">
                {t.raidePage.heroSubtitle}
              </p>

              <p className="text-sm text-zinc-300 leading-relaxed max-w-3xl">
                {t.raidePage.summary}
              </p>

              <div className="p-4 bg-zinc-900 border border-amber-500/30 rounded-lg flex items-center gap-3">
                <Building2 className="w-6 h-6 text-[#C59B27] shrink-0" />
                <p className="text-xs font-bold text-amber-200">
                  {t.raidePage.partnerPilot}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setShowModal(true)}
                  className="px-7 py-3.5 text-xs font-extrabold text-black bg-[#C59B27] hover:bg-amber-300 rounded-md transition-all flex items-center gap-2 shadow-lg"
                >
                  <span>{t.raidePage.ctaRegister}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#timeline"
                  className="px-7 py-3.5 text-xs font-extrabold text-white bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 rounded-md transition-all flex items-center gap-2"
                >
                  <span>{t.raidePage.ctaDownloadDocs}</span>
                  <Download className="w-4 h-4 text-[#C59B27]" />
                </a>
              </div>
            </div>

            {/* Emblem Box */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-zinc-900 p-8 rounded-2xl border-2 border-[#C59B27] text-center shadow-2xl space-y-4">
                <div className="w-36 h-36 bg-white p-3 rounded-full border-4 border-[#C59B27] mx-auto flex items-center justify-center shadow-lg">
                  <Image
                    src="/images/raidderacee-emblem.png"
                    alt="RAIDE-RACE Emblem"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-black text-white">
                  Édition Panafricaine 2027
                </h3>
                <p className="text-xs text-amber-300 font-mono">
                  Concours • Bootcamps • Incubation
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Timeline of Competition Stages */}
      <section id="timeline" className="py-20 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#C59B27]">
              CALENDRIER DE COMPÉTITION
            </span>
            <h2 className="text-3xl font-black text-black tracking-tight">
              {t.raidePage.timelineTitle}
            </h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {t.raidePage.timelineSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border-2 border-zinc-200 hover:border-black transition-all shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group"
              >
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-lg bg-black text-[#C59B27] font-black text-lg flex items-center justify-center shrink-0 border border-[#C59B27]">
                    {step.step}
                  </span>
                  <div>
                    <span className="text-xs font-bold text-[#C59B27] uppercase tracking-wider">
                      {step.date}
                    </span>
                    <h4 className="text-lg font-black text-black group-hover:text-[#C59B27] transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-xs text-zinc-600 mt-1 max-w-xl">
                      {step.desc}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 self-end sm:self-center">
                  <span className="px-3 py-1 text-[11px] font-bold text-zinc-700 bg-zinc-100 rounded border border-zinc-300">
                    Phase {idx + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Target Audience & Participation Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#C59B27]">
                PUBLIC CIBLE & CONDITIONS
              </span>
              <h2 className="text-3xl font-black text-black tracking-tight">
                {t.raidePage.participateTitle}
              </h2>
              <p className="text-sm text-zinc-700 leading-relaxed">
                {t.raidePage.participateDesc}
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-zinc-50 border border-zinc-200 rounded">
                  <Target className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-black">Équipes Étudiantes Multi-Disciplinaires</h5>
                    <p className="text-[11px] text-zinc-500">Ouvert aux étudiants de Licence, Master et Doctorat.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-zinc-50 border border-zinc-200 rounded">
                  <Trophy className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-black">Prix & Financements de Prototypage</h5>
                    <p className="text-[11px] text-zinc-500">Dotations financières et accès privilégié au programme d'incubation KANEM-SA.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-zinc-50 border border-zinc-200 rounded">
                  <Rocket className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-black">Brevets & Valorisation IP</h5>
                    <p className="text-[11px] text-zinc-500">Accompagnement juridique pour protéger et breveter les innovations.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setShowModal(true)}
                  className="px-8 py-3.5 text-xs font-extrabold text-white bg-black hover:bg-zinc-800 rounded-md transition-colors flex items-center gap-2"
                >
                  <span>{t.raidePage.ctaRegister}</span>
                  <ChevronRight className="w-4 h-4 text-[#C59B27]" />
                </button>
              </div>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden border-2 border-black shadow-2xl">
              <Image
                src="/images/Images Attirance/pexels-mediahooch-14785826.jpg"
                alt="Students innovating"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs font-bold text-amber-300 uppercase">
                  ESPRIT RAIDE-RACE
                </span>
                <h4 className="text-xl font-bold">
                  « Transformer la connaissance en souveraineté. »
                </h4>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Registration Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-xl border-2 border-black max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative animate-in fade-in">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
              <h3 className="text-xl font-black text-black">
                Inscription RAIDE-RACE 2027
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-zinc-500 hover:text-black font-bold text-lg"
              >
                ✕
              </button>
            </div>

            {regSuccess ? (
              <div className="p-6 bg-emerald-50 border border-emerald-300 rounded text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-emerald-950">Inscription Enregistrée !</h4>
                <p className="text-xs text-emerald-800">
                  Votre équipe a été prise en compte. Un dossier d'instructions vous sera envoyé par email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1">
                    Nom de l'Équipe / Projet
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: TechKanem Squad"
                    className="w-full text-xs p-3 border border-zinc-300 rounded focus:outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1">
                    Université / Établissement
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Université de Yaoundé I"
                    className="w-full text-xs p-3 border border-zinc-300 rounded focus:outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1">
                    Email du Chef d'Équipe
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="leader@univ.cm"
                    className="w-full text-xs p-3 border border-zinc-300 rounded focus:outline-none focus:border-black"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs font-extrabold text-white bg-black hover:bg-zinc-800 rounded transition-colors shadow"
                >
                  Valider la pré-inscription
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
