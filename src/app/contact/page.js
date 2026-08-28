"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Send,
  CheckCircle2,
  Building2,
  Clock,
  ShieldCheck
} from "lucide-react";

export default function ContactPage() {
  const { lang, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <div className="bg-white min-h-screen text-zinc-900">
      {/* Hero Header */}
      <section className="bg-zinc-950 text-white py-20 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/10 border border-amber-400/30 rounded text-amber-300 text-xs font-bold uppercase tracking-wider">
            <span>{t.nav.contact}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            {t.contactPage.heroTitle}
          </h1>

          <p className="text-lg text-amber-200/90 font-serif italic max-w-3xl">
            {t.contactPage.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Info & Headquarters */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-zinc-50 p-8 rounded-2xl border-2 border-zinc-200 space-y-6">
                <div className="flex items-center gap-3 border-b border-zinc-200 pb-4">
                  <div className="w-12 h-12 bg-black p-1.5 rounded-lg border border-[#C59B27] flex items-center justify-center">
                    <Image
                      src="/images/logo-Kanem-sa.png"
                      alt="Kanem Logo"
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-black">KANEM-SA</h3>
                    <p className="text-xs font-bold text-[#C59B27] uppercase">
                      INSTITUTION R&D ET INNOVATION
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-extrabold text-black block mb-0.5">
                        {t.contactPage.headquarters}
                      </span>
                      <p className="text-zinc-600 leading-relaxed">
                        {t.contactPage.addressDetails}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-extrabold text-black block mb-0.5">
                        {t.contactPage.emailDirect}
                      </span>
                      <p className="text-zinc-700 font-mono">contact@kanem-sa.org</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-extrabold text-black block mb-0.5">
                        Langues Institutionnelles
                      </span>
                      <p className="text-zinc-600">{t.contactPage.languagesSpoken}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-extrabold text-black block mb-0.5">
                        Délai de Réponse
                      </span>
                      <p className="text-zinc-600">Sous 24h à 48h ouvrées</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-black text-white rounded-lg border-l-4 border-[#C59B27] space-y-1">
                  <span className="text-[10px] font-extrabold uppercase text-amber-400 block">
                    ENGAGEMENT REPUBLICAIN
                  </span>
                  <p className="text-xs text-zinc-300">
                    Organisation trans-frontalière œuvrant pour l'émergence scientifique continentale.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 rounded-2xl border-2 border-black shadow-xl space-y-6">
                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-black">
                    Transmettre un Message Officiel
                  </h3>
                  <p className="text-xs text-zinc-500">
                    Remplissez ce formulaire pour contacter le secrétariat R&D ou la direction des programmes KANEM-SA.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 bg-emerald-50 border-2 border-emerald-400 rounded-xl text-center space-y-3 animate-in fade-in">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="text-lg font-black text-emerald-950">
                      Message Transmis avec Succès !
                    </h4>
                    <p className="text-xs text-emerald-800 leading-relaxed">
                      {t.contactPage.successMsg}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-zinc-800 mb-1">
                          {t.contactPage.formName} *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Dr. Jean Dupont / Université X"
                          className="w-full text-xs p-3 border border-zinc-300 rounded-md focus:outline-none focus:border-black font-medium"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-zinc-800 mb-1">
                          {t.contactPage.formEmail} *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jean.dupont@institution.org"
                          className="w-full text-xs p-3 border border-zinc-300 rounded-md focus:outline-none focus:border-black font-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-800 mb-1">
                        {t.contactPage.formSubject} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Partenariat R&D / Informations RAIDE-RACE"
                        className="w-full text-xs p-3 border border-zinc-300 rounded-md focus:outline-none focus:border-black font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-800 mb-1">
                        {t.contactPage.formMessage} *
                      </label>
                      <textarea
                        rows={6}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Detaillez votre proposition ou demande d'information..."
                        className="w-full text-xs p-3 border border-zinc-300 rounded-md focus:outline-none focus:border-black font-medium resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 text-xs font-extrabold text-white bg-black hover:bg-zinc-800 rounded-md transition-all shadow-lg flex items-center justify-center gap-2 group"
                    >
                      <span>{t.contactPage.formSubmit}</span>
                      <Send className="w-4 h-4 text-[#C59B27] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
