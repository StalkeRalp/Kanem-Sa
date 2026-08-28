"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Search, Calendar, User, ArrowUpRight, Filter, ChevronRight } from "lucide-react";

export default function NewsPage() {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [search, setSearch] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      category: "Recherche",
      title: "Lancement du Programme de Recherche Souveraine en IA pour les Langues Africaines",
      date: "14 Août 2026",
      author: "Pôle R&D KANEM-SA",
      summary: "KANEM-SA inaugure un laboratoire dédié aux modèles de traitement automatique du langage naturel appliqués aux langues locales du bassin du lac Tchad.",
      image: "/images/attirance/pexels-mediahooch-14785826.jpg",
      content: "Ce projet inédit vise à combler la fracture numérique en développant des algorithmes capables de comprendre, traduire et préserver le patrimoine linguistique africain. Les chercheurs de KANEM-SA travaillent en synergie avec des linguistes et ingénieurs réseau pour assurer une intégration dans les systèmes de santé et d'administration."
    },
    {
      id: 2,
      category: "RAIDE-RACE",
      title: "CENAME confirmé comme Partenaire Pilote Strategique pour l'Édition RAIDE-RACE 2027",
      date: "02 Juillet 2026",
      author: "Comité d'Organisation",
      summary: "La Centrale Nationale d'Approvisionnement en Médicaments s'associe à KANEM-SA pour poser les jalons d'une AgriTech et HealthTech d'impact.",
      image: "/images/attirance/pexels-shvets-production-7562259.jpg",
      content: "Dans le cadre de son plan de gouvernance et d'innovation, la CENAME parrainera les défis de traçabilité médicale et de numérisation de la chaîne du froid dans le cadre du concours étudiant RAIDE-RACE 2027."
    },
    {
      id: 3,
      category: "Événements",
      title: "Symposium Africain sur la Souveraineté Technologique & la Cybersécurité",
      date: "22 Mai 2026",
      author: "Secrétariat Général",
      summary: "Les chercheurs de KANEM-SA ont présenté trois communications majeures sur la résilience des infrastructures réseau critiques en Afrique Centrale.",
      image: "/images/attirance/pexels-davdkuko-17792243.jpg",
      content: "Le symposium a réuni plus de 400 experts, universités et décideurs publics. KANEM-SA y a affirmé la nécessité d'une infrastructure cloud souveraine et d'une cryptographie nativement adaptée au continent."
    },
    {
      id: 4,
      category: "Partenariats",
      title: "Signature de Conventions avec 5 Universités Camerounaises et Panafricaines",
      date: "10 Avril 2026",
      author: "Direction Académique",
      summary: "Faciliter l'accès des étudiants et jeunes diplômés aux laboratoires d'expérimentation et d'incubation KANEM-SA.",
      image: "/images/attirance/pexels-zeal-creative-studios-58866141-33920046.jpg",
      content: "Ces accords formalisent les passerelles universités-entreprises, permettant l'encadrement conjoint de thèses de doctorat et le prototypage rapide des solutions nées dans les campus."
    }
  ];

  const filteredArticles = articles.filter((art) => {
    const matchCat = activeCategory === "Tous" || art.category === activeCategory;
    const matchSearch = art.title.toLowerCase().includes(search.toLowerCase()) ||
                        art.summary.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="bg-white min-h-screen text-zinc-900">
      {/* Hero Banner */}
      <section className="bg-zinc-950 text-white py-20 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/10 border border-amber-400/30 rounded text-amber-300 text-xs font-bold uppercase tracking-wider">
            <span>{t.nav.news}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            {t.newsPage.heroTitle}
          </h1>

          <p className="text-lg text-amber-200/90 font-serif italic max-w-3xl">
            {t.newsPage.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-zinc-200 pb-6">
            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              <Filter className="w-4 h-4 text-[#C59B27] shrink-0 mr-1" />
              {t.newsPage.categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-md whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? "bg-black text-white shadow"
                      : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={t.newsPage.searchPlaceholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full text-xs pl-9 pr-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:border-black"
              />
            </div>
          </div>

          {/* Grid of Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((art) => (
              <div
                key={art.id}
                className="bg-white border-2 border-zinc-200 rounded-xl overflow-hidden flex flex-col justify-between hover:border-black transition-all hover:shadow-xl group"
              >
                <div className="relative h-64 w-full bg-zinc-100 overflow-hidden">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded text-xs font-bold text-amber-300">
                    {art.category}
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-4 text-[11px] text-zinc-500 font-semibold">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#C59B27]" />
                        {art.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-[#C59B27]" />
                        {art.author}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-black group-hover:text-[#C59B27] transition-colors leading-snug">
                      {art.title}
                    </h3>

                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {art.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedArticle(art)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-black hover:text-[#C59B27] transition-colors"
                    >
                      <span>{t.newsPage.readMore}</span>
                      <ChevronRight className="w-4 h-4 text-[#C59B27]" />
                    </button>
                    <div className="w-8 h-8 rounded bg-zinc-100 group-hover:bg-black text-black group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-xl border-2 border-black max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
              <span className="px-2.5 py-1 text-xs font-bold text-black bg-amber-400 rounded">
                {selectedArticle.category}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-zinc-500 hover:text-black font-bold text-lg"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-black text-black">
                {selectedArticle.title}
              </h2>
              <div className="flex items-center gap-4 text-xs text-zinc-500">
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.author}</span>
              </div>

              <div className="relative h-64 w-full rounded-lg overflow-hidden border border-zinc-200">
                <Image
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-sm text-zinc-800 leading-relaxed font-medium">
                {selectedArticle.summary}
              </p>

              <div className="p-4 bg-zinc-50 border border-zinc-200 rounded text-xs text-zinc-700 leading-relaxed space-y-2">
                <p>{selectedArticle.content}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
