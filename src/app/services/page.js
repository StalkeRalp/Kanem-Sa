"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  Cpu,
  Database,
  Wifi,
  Bot,
  Cloud,
  HeartPulse,
  Wheat,
  Zap,
  Building,
  Truck,
  ShieldCheck,
  Lock,
  Coins,
  Stethoscope,
  Sprout,
  Package,
  Microscope,
  GraduationCap,
  Users,
  Globe2,
  Filter,
  ArrowUpRight,
  ChevronRight,
  Info
} from "lucide-react";

export default function ServicesPage() {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: t.servicesPage.filterAll },
    { id: "emerging", label: t.servicesPage.catEmerging },
    { id: "impact", label: t.servicesPage.catImpact },
    { id: "security", label: t.servicesPage.catSecurity },
    { id: "economy", label: t.servicesPage.catEconomy },
    { id: "society", label: t.servicesPage.catSociety }
  ];

  const domainList = [
    // Emerging
    {
      category: "emerging",
      title: "Intelligence Artificielle & Apprentissage Profond",
      desc: "Développement d'algorithmes souverains, NLP pour langues africaines et IA d'aide à la décision.",
      icon: <Cpu className="w-6 h-6 text-[#C59B27]" />
    },
    {
      category: "emerging",
      title: "Blockchain & Registres Distribués",
      desc: "Architectures décentralisées sécurisées pour la traçabilité institutionnelle et les contrats intelligents.",
      icon: <Database className="w-6 h-6 text-[#C59B27]" />
    },
    {
      category: "emerging",
      title: "Internet des Objets (IoT) & Capteurs Intelligent",
      desc: "Réseaux de capteurs longue portée adaptés aux environnements industriels et agricoles africains.",
      icon: <Wifi className="w-6 h-6 text-[#C59B27]" />
    },
    {
      category: "emerging",
      title: "Robotique & Automatisation",
      desc: "Systèmes mécatroniques embarqués pour l'exploration, l'inspection d'infrastructures et l'industrie.",
      icon: <Bot className="w-6 h-6 text-[#C59B27]" />
    },
    {
      category: "emerging",
      title: "Cloud Computing & Infras Souveraines",
      desc: "Stockage résilient, calcul haute performance (HPC) et gouvernance des données nationales.",
      icon: <Cloud className="w-6 h-6 text-[#C59B27]" />
    },

    // Impact
    {
      category: "impact",
      title: "Santé Numérique & Télémédecine",
      desc: "Plateformes de diagnostic à distance, gestion d'écosystèmes hospitaliers et santé communautaire.",
      icon: <HeartPulse className="w-6 h-6 text-[#C59B27]" />
    },
    {
      category: "impact",
      title: "Agriculture Intelligente (AgriTech)",
      desc: "Analyse prédictive des récoltes, modélisation des sols et gestion intelligente de l'eau.",
      icon: <Wheat className="w-6 h-6 text-[#C59B27]" />
    },
    {
      category: "impact",
      title: "Énergies Renouvelables & Micro-Grids",
      desc: "Systèmes solaires autonomes, stockage batterie nouvelle génération et réseaux intelligents ruraux.",
      icon: <Zap className="w-6 h-6 text-[#C59B27]" />
    },
    {
      category: "impact",
      title: "Villes Intelligentes (Smart Cities)",
      desc: "Gestion intelligente des déchets, trafic urbain optimisé et efficacité énergétique du bâtiment.",
      icon: <Building className="w-6 h-6 text-[#C59B27]" />
    },
    {
      category: "impact",
      title: "Transport & Mobilité Intelligente",
      desc: "Systèmes de suivi de flotte, régulation du transport multimodal et sécurité routière connectée.",
      icon: <Truck className="w-6 h-6 text-[#C59B27]" />
    },

    // Security
    {
      category: "security",
      title: "Cybersécurité & Défense Numérique",
      desc: "Protection des réseaux d'État, audit d'infrastructures critiques et réponses aux incidents cyber.",
      icon: <ShieldCheck className="w-6 h-6 text-[#C59B27]" />
    },
    {
      category: "security",
      title: "Protection & Cryptographie des Données",
      desc: "Chiffrement avancé, conformité réglementaire et souveraineté des données de santé et de finance.",
      icon: <Lock className="w-6 h-6 text-[#C59B27]" />
    },

    // Economy
    {
      category: "economy",
      title: "FinTech & Ingestion Financière",
      desc: "Micro-finance numérique, protocoles de paiement sécurisés et bancarisation des zones enclavées.",
      icon: <Coins className="w-6 h-6 text-[#C59B27]" />
    },
    {
      category: "economy",
      title: "HealthTech & Dispositifs Médicaux",
      desc: "Recherche sur les capteurs biomédicaux abordables et valorisation des données cliniques.",
      icon: <Stethoscope className="w-6 h-6 text-[#C59B27]" />
    },
    {
      category: "economy",
      title: "AgriTech & Chaînes de Valeur",
      desc: "Digitalisation des marchés agricoles, mise en relation directe producteurs-acheteurs.",
      icon: <Sprout className="w-6 h-6 text-[#C59B27]" />
    },
    {
      category: "economy",
      title: "Logistique & Supply Chain",
      desc: "Optimisation des flux commerciaux transfrontaliers et suivi des marchandises en temps réel.",
      icon: <Package className="w-6 h-6 text-[#C59B27]" />
    },

    // Society
    {
      category: "society",
      title: "Recherche Scientifique Appliquée",
      desc: "Laboratoires d'expérimentation, publications académiques et valorisation des brevets.",
      icon: <Microscope className="w-6 h-6 text-[#C59B27]" />
    },
    {
      category: "society",
      title: "Éducation Numérique & EdTech",
      desc: "Plateformes de formation ouvertes, campus virtuels et kits d'apprentissage scientifique.",
      icon: <GraduationCap className="w-6 h-6 text-[#C59B27]" />
    },
    {
      category: "society",
      title: "Innovation Sociale & Communautaire",
      desc: "Projets technologiques à fort impact humain, égalité d'accès aux connaissances et à l'eau.",
      icon: <Users className="w-6 h-6 text-[#C59B27]" />
    },
    {
      category: "society",
      title: "Développement Durable & Éco-Conception",
      desc: "Analyse d'impact environnemental du numérique et technologies vertes résilientes.",
      icon: <Globe2 className="w-6 h-6 text-[#C59B27]" />
    }
  ];

  const filteredList = activeTab === "all"
    ? domainList
    : domainList.filter((d) => d.category === activeTab);

  return (
    <div className="bg-white min-h-screen text-zinc-900">
      {/* Hero Header */}
      <section className="bg-zinc-950 text-white py-20 border-b border-zinc-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/10 border border-amber-400/30 rounded text-amber-300 text-xs font-bold uppercase tracking-wider">
            <span>{t.nav.services}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            {t.servicesPage.heroTitle}
          </h1>

          <p className="text-lg text-amber-200/90 font-serif italic max-w-3xl">
            {t.servicesPage.heroSubtitle}
          </p>

          <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-md inline-flex items-center gap-2 text-xs text-zinc-300">
            <Info className="w-4 h-4 text-[#C59B27] shrink-0" />
            <span>{t.servicesPage.note}</span>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Domain Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 border-b border-zinc-200 scrollbar-none">
            <Filter className="w-4 h-4 text-[#C59B27] shrink-0 mr-2" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 text-xs font-bold rounded-md whitespace-nowrap transition-all ${
                  activeTab === cat.id
                    ? "bg-black text-white shadow-md border border-black"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 hover:text-black"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid of Domains */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredList.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg border-2 border-zinc-200 hover:border-black transition-all hover:shadow-xl space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-zinc-50 rounded border border-zinc-200 flex items-center justify-center group-hover:border-[#C59B27] group-hover:bg-amber-50/50 transition-colors">
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-extrabold text-black group-hover:text-[#C59B27] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase text-zinc-400">
                    AXE RECHERCHE KANEM-SA
                  </span>
                  <Link
                    href="/contact"
                    className="w-8 h-8 rounded bg-black text-white flex items-center justify-center group-hover:bg-[#C59B27] transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box Bottom */}
          <div className="mt-16 p-8 sm:p-12 bg-zinc-950 text-white rounded-2xl border-2 border-[#C59B27] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 max-w-2xl">
              <h3 className="text-2xl font-black text-white">
                {t.servicesPage.ctaBoxTitle}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300">
                {t.servicesPage.ctaBoxDesc}
              </p>
            </div>

            <Link
              href="/contact"
              className="px-7 py-3.5 text-xs font-extrabold text-black bg-[#C59B27] hover:bg-amber-300 rounded-md transition-all shrink-0 flex items-center gap-2 shadow-lg"
            >
              <span>{t.servicesPage.ctaBoxBtn}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
