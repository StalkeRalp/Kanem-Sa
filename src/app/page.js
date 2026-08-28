"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";
import { useLanguage } from "@/context/LanguageContext";
import {
  Cpu, Shield, Wheat, HeartPulse, Coins, Zap,
  ArrowRight, ChevronLeft, ChevronRight, Sparkles, Award, Globe2,
  Users, Search, CheckCircle2, Building2, BookOpen,
  ArrowUpRight, TrendingUp, Layers
} from "lucide-react";

export default function Home() {
  const { lang, t } = useLanguage();
  const [isClient, setIsClient] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const domainsScrollRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const checkScrollState = () => {
    const el = domainsScrollRef.current;
    if (el) {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setCanScrollLeft(scrollLeft > 15);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 15);
    }
  };

  useEffect(() => {
    const el = domainsScrollRef.current;
    if (el) {
      checkScrollState();
      const timer = setTimeout(checkScrollState, 500);
      el.addEventListener("scroll", checkScrollState);
      window.addEventListener("resize", checkScrollState);
      return () => {
        clearTimeout(timer);
        el.removeEventListener("scroll", checkScrollState);
        window.removeEventListener("resize", checkScrollState);
      };
    }
  }, []);

  const scrollDomains = (direction) => {
    const el = domainsScrollRef.current;
    if (!el) return;
    const scrollAmount = direction === "left" ? -412 : 412;
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setTimeout(checkScrollState, 350);
  };


  const iconsMap = {
    Cpu: <Cpu className="w-7 h-7 text-black group-hover:text-[#C59B27] transition-colors" />,
    Shield: <Shield className="w-7 h-7 text-black group-hover:text-[#C59B27] transition-colors" />,
    Wheat: <Wheat className="w-7 h-7 text-black group-hover:text-[#C59B27] transition-colors" />,
    HeartPulse: <HeartPulse className="w-7 h-7 text-black group-hover:text-[#C59B27] transition-colors" />,
    Coins: <Coins className="w-7 h-7 text-black group-hover:text-[#C59B27] transition-colors" />,
    Zap: <Zap className="w-7 h-7 text-black group-hover:text-[#C59B27] transition-colors" />
  };

  const domainImages = [
    "/images/Images Attirance/pexels-mediahooch-14785826.jpg",
    "/images/Images Attirance/pexels-shvets-production-7562020.jpg",
    "/images/Images Attirance/pexels-markus-winkler-1430818-18475692.jpg",
    "/images/Images Attirance/pexels-fajuyi-samuel-olayinka-589022314-19330452.jpg",
    "/images/Images Attirance/pexels-zeal-creative-studios-58866141-33920046.jpg",
    "/images/Images Attirance/pexels-davdkuko-17792243.jpg"
  ];

  const filteredDomains = t.homeDomains.items.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen text-zinc-900">
      {/* ---------------------------------------------------- */}
      {/* 1. HERO — Deterministic rendering for SSR and Client */}
      {/* ---------------------------------------------------- */}
      <HeroCarousel
        searchBar={
          <div className="bg-white p-4 sm:p-5 border-2 border-black shadow-2xl text-zinc-900">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
              {/* Filter 1: Domaine */}
              <div className="flex items-center gap-2 px-3 py-2.5 bg-zinc-50 border border-zinc-300 rounded-md">
                <Layers className="w-4 h-4 text-[#C59B27] shrink-0" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full text-xs font-semibold bg-transparent focus:outline-none text-zinc-800"
                >
                  <option value="all">{t.hero.filterCategory}</option>
                  <option value="tech">Technologies Émergentes</option>
                  <option value="impact">Secteurs d'Impact</option>
                  <option value="security">Souveraineté &amp; Sécurité</option>
                </select>
              </div>

              {/* Filter 2: Localisation */}
              <div className="flex items-center gap-2 px-3 py-2.5 bg-zinc-50 border border-zinc-300 rounded-md">
                <Globe2 className="w-4 h-4 text-[#C59B27] shrink-0" />
                <span className="text-xs font-semibold text-zinc-800 truncate">{t.hero.filterLocation}</span>
              </div>

              {/* Filter 3: Search */}
              <div className="flex items-center gap-2 px-3 py-2.5 bg-zinc-50 border border-zinc-300 rounded-md">
                <Search className="w-4 h-4 text-zinc-400 shrink-0" />
                <input
                  type="text"
                  placeholder={t.hero.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs bg-transparent focus:outline-none text-zinc-900 placeholder:text-zinc-400 font-medium"
                />
              </div>

              {/* Filter 4: Button */}
              <button
                onClick={() => {
                  const el = document.getElementById("featured-domains");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full py-2.5 px-4 text-xs font-bold text-white bg-black hover:bg-zinc-800 rounded-md transition-colors flex items-center justify-center gap-2 shadow"
              >
                <span>{t.hero.searchButton}</span>
                <ArrowUpRight className="w-4 h-4 text-[#C59B27]" />
              </button>
            </div>
          </div>
        }
      />

      {/* ---------------------------------------------------- */}
      {/* 2. VISION & CHIFFRES CLÉS (4 PILLARS CARDS FULL WIDTH) */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 bg-zinc-50 border-b border-zinc-200 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#C59B27]">
              {t.stats.pillarsTitle}
            </span>
            <h2 className="text-3xl font-extrabold text-black tracking-tight">
              L'Excellence au Service du Développement
            </h2>
            <p className="text-sm text-zinc-600">
              {t.stats.pillarsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full justify-between">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg border border-zinc-200 hover:border-black transition-all hover:shadow-lg group w-full">
              <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Sparkles className="w-6 h-6 text-[#C59B27]" />
              </div>
              <div className="text-3xl font-black text-black mb-1">
                {t.stats.p1.count}
              </div>
              <h3 className="text-base font-bold text-zinc-900 mb-2">
                {t.stats.p1.title}
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                {t.stats.p1.desc}
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg border border-zinc-200 hover:border-black transition-all hover:shadow-lg group w-full">
              <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Shield className="w-6 h-6 text-[#C59B27]" />
              </div>
              <div className="text-3xl font-black text-black mb-1">
                {t.stats.p2.count}
              </div>
              <h3 className="text-base font-bold text-zinc-900 mb-2">
                {t.stats.p2.title}
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                {t.stats.p2.desc}
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg border border-zinc-200 hover:border-black transition-all hover:shadow-lg group w-full">
              <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Globe2 className="w-6 h-6 text-[#C59B27]" />
              </div>
              <div className="text-3xl font-black text-black mb-1">
                {t.stats.p3.count}
              </div>
              <h3 className="text-base font-bold text-zinc-900 mb-2">
                {t.stats.p3.title}
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                {t.stats.p3.desc}
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-lg border border-zinc-200 hover:border-black transition-all hover:shadow-lg group w-full">
              <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Award className="w-6 h-6 text-[#C59B27]" />
              </div>
              <div className="text-3xl font-black text-black mb-1">
                {t.stats.p4.count}
              </div>
              <h3 className="text-base font-bold text-zinc-900 mb-2">
                {t.stats.p4.title}
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                {t.stats.p4.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. DOMAINES DE POINTE (FULL WIDTH EDGE-TO-EDGE CAROUSEL) */}
      {/* ---------------------------------------------------- */}
      <section id="featured-domains" className="py-20 bg-white border-b border-zinc-200 w-full overflow-hidden">
        <div className="w-full px-3 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tight">
                {t.homeDomains.title}
              </h2>
              <p className="text-base sm:text-lg text-zinc-500 font-medium max-w-2xl mt-3">
                {t.homeDomains.subtitle}
              </p>
            </div>

            {/* View All Button */}
            <Link
              href="/services"
              style={{ backgroundColor: "#800000" }}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-white rounded-sm text-xs sm:text-sm font-extrabold uppercase tracking-wider hover:opacity-90 transition-all shadow-md group shrink-0"
            >
              <span>{t.homeDomains.viewAll}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Carousel Relative Wrapper containing Left/Right floating Arrows */}
          <div className="relative w-full">
            
            {/* Left Floating Nav Arrow */}
            <button
              type="button"
              onClick={() => scrollDomains("left")}
              aria-label="Défiler à gauche"
              style={
                isClient
                  ? {
                      backgroundColor: "#000000",
                      opacity: canScrollLeft ? 1 : 0.3,
                      pointerEvents: canScrollLeft ? "auto" : "none",
                      zIndex: 50
                    }
                  : {
                      backgroundColor: "#000000",
                      opacity: 0.3,
                      pointerEvents: "none",
                      zIndex: 50
                    }
              }
              className="absolute left-2 top-[170px] -translate-y-1/2 w-12 h-12 text-white hover:bg-[#800000] hover:scale-110 transition-all flex items-center justify-center shadow-2xl rounded-full border-2 border-white cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Floating Nav Arrow */}
            <button
              type="button"
              onClick={() => scrollDomains("right")}
              aria-label="Défiler à droite"
              style={
                isClient
                  ? {
                      backgroundColor: "#000000",
                      opacity: canScrollRight ? 1 : 0.3,
                      pointerEvents: canScrollRight ? "auto" : "none",
                      zIndex: 50
                    }
                  : {
                      backgroundColor: "#000000",
                      opacity: 1,
                      pointerEvents: "auto",
                      zIndex: 50
                    }
              }
              className="absolute right-2 top-[170px] -translate-y-1/2 w-12 h-12 text-white hover:bg-[#800000] hover:scale-110 transition-all flex items-center justify-center shadow-2xl rounded-full border-2 border-white cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Horizontal Scroll Track (Full-Width Distribution) */}
            <div
              ref={domainsScrollRef}
              className="flex gap-6 sm:gap-8 overflow-x-auto scrollbar-none snap-x snap-proximity pb-8 pt-2 w-full justify-between"
              style={{ scrollBehavior: "smooth" }}
            >
              {filteredDomains.map((domain, index) => {
                const badges = ["IA & SOUVERAINETÉ", "CYBERSÉCURITÉ", "AGRI-TECH", "HEALTH-TECH", "FINTECH", "SMART GRID"];
                const dates = ["March 18, 2026", "June 10, 2026", "January 23, 2026", "July 26, 2026", "August 12, 2026", "September 04, 2026"];

                return (
                  <div
                    key={domain.id}
                    className="snap-start flex flex-col justify-between group cursor-pointer flex-shrink-0 w-[340px] sm:w-[380px]"
                  >
                    {/* Top Image Container — Taller Height (340px) */}
                    <div
                      style={{
                        position: "relative",
                        height: "340px",
                        width: "100%",
                        backgroundColor: "#18181b",
                        overflow: "hidden"
                      }}
                    >
                      <Image
                        src={domainImages[index % domainImages.length]}
                        alt={domain.title}
                        fill
                        sizes="380px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Reference Badge (White rectangular box at bottom-left) */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          backgroundColor: "#ffffff",
                          color: "#000000",
                          padding: "8px 16px",
                          fontSize: "11px",
                          fontWeight: "800",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          zIndex: 10,
                          borderTop: "1px solid #e4e4e7",
                          borderRight: "1px solid #e4e4e7"
                        }}
                      >
                        {badges[index % badges.length]}
                      </div>
                    </div>

                    {/* Card Content Below Image */}
                    <div className="pt-4 flex-grow flex flex-col justify-between space-y-2">
                      <div>
                        {/* Date / Category */}
                        <p className="text-xs sm:text-sm text-zinc-400 font-bold tracking-wider uppercase mb-1.5 font-mono">
                          {dates[index % dates.length]}
                        </p>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-bold text-black group-hover:text-[#800000] transition-colors leading-tight line-clamp-2">
                          {domain.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-zinc-600 leading-relaxed mt-2.5 line-clamp-3 font-normal">
                          {domain.desc}
                        </p>
                      </div>

                      {/* Bottom "En savoir plus →" Link */}
                      <div className="pt-4">
                        <Link
                          href="/services"
                          className="inline-flex items-center gap-2 text-sm font-bold text-black group-hover:text-[#800000] underline underline-offset-4 transition-colors"
                        >
                          <span>En savoir plus</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. PROGRAMME PHARE: RAIDE-RACE SPOTLIGHT (HAUTE COUTURE EDITORIAL) */}
      {/* ---------------------------------------------------- */}
      <section
        style={{ backgroundColor: "#0d0d0d", color: "#ffffff" }}
        className="py-28 text-white relative overflow-hidden border-y border-zinc-800"
      >
        
        {/* Subtle Luxury Hairline Grid Lines in Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-between max-w-7xl mx-auto px-6">
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#C59B27]/40 to-transparent" />
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden sm:block" />
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#C59B27]/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          
          {/* Top Editorial Subheader / Category Header */}
          <div className="flex items-center justify-between border-b border-zinc-800 pb-6 mb-16">
            <div className="flex items-center gap-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C59B27] animate-pulse shadow-[0_0_10px_#C59B27]" />
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-zinc-400 font-medium">
                HAUTE INNOVATION PANAFRICAINE
              </span>
            </div>
            <span className="text-xs font-mono tracking-[0.25em] text-[#C59B27] uppercase font-bold px-3 py-1 bg-[#C59B27]/10 border border-[#C59B27]/30 rounded">
              ÉDITION 2027
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left High-Fashion Main Image Showcase (Editorial Portrait Framing) */}
            <div className="lg:col-span-5 relative group">
              <div className="relative w-full h-[480px] sm:h-[540px] overflow-hidden border-2 border-zinc-800 hover:border-[#C59B27] transition-colors duration-700 bg-[#161616] rounded-sm shadow-2xl">
                <Image
                  src={encodeURI("/images/Images Attirance/pexels-shvets-production-7562259.jpg")}
                  alt="RAIDE-RACE 2027 High Art"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out filter contrast-[1.1] brightness-[0.9]"
                />

                {/* Editorial Vignette & Hairline Inner Frame */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute inset-4 border border-white/15 pointer-events-none group-hover:border-[#C59B27]/40 transition-colors duration-700" />

                {/* Minimalist Emblem Overlay at Top Left */}
                <div className="absolute top-6 left-6 flex items-center gap-3 bg-black/85 backdrop-blur-md px-4 py-2 border border-zinc-800 shadow-xl rounded-sm">
                  <div className="w-7 h-7 relative">
                    <Image
                      src="/images/raidderacee-emblem.png"
                      alt="Emblem"
                      fill
                      sizes="28px"
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[10px] font-mono tracking-[0.25em] text-white uppercase font-bold">
                    KANEM-SA
                  </span>
                </div>

                {/* Image Bottom Editorial Legend */}
                <div className="absolute bottom-8 left-8 right-8 space-y-1">
                  <span className="text-[11px] font-mono text-[#C59B27] tracking-[0.25em] uppercase block font-bold">
                    BOOTCAMPS & COMPÉTITIONS
                  </span>
                  <h3 className="text-2xl font-serif text-white tracking-wide leading-tight group-hover:text-amber-200 transition-colors">
                    L'Excellence Technologique
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Editorial Typography Column */}
            <div className="lg:col-span-7 space-y-8 pl-0 lg:pl-4">
              
              {/* Category Pill Tag */}
              <div className="inline-block">
                <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#C59B27] border-b-2 border-[#C59B27] pb-1 font-bold">
                  {t.homeRaide.badge}
                </span>
              </div>

              {/* Serif Title - Luxurious & Noble */}
              <h2 className="text-4xl sm:text-6xl font-serif tracking-tight text-white leading-[1.08] hover:text-amber-100 transition-colors">
                {t.homeRaide.title}
              </h2>

              {/* Editorial Subtitle */}
              <p className="text-lg sm:text-xl text-zinc-300 font-light leading-relaxed tracking-wide">
                {t.homeRaide.subtitle}
              </p>

              {/* Text Block with Hairline Left Accent Line */}
              <div className="border-l-2 border-[#C59B27] pl-6 py-2 bg-white/5 rounded-r-md">
                <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                  {t.homeRaide.desc}
                </p>
              </div>

              {/* Minimalist Grid Specification Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-zinc-800">
                <div className="space-y-1 bg-zinc-900/60 p-4 border border-zinc-800 rounded">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-zinc-400 uppercase block font-bold">
                    01 / CIBLE STRATÉGIQUE
                  </span>
                  <span className="text-sm font-semibold text-white tracking-wide block">
                    {t.homeRaide.target}
                  </span>
                </div>
                <div className="space-y-1 bg-zinc-900/60 p-4 border border-zinc-800 rounded">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-zinc-400 uppercase block font-bold">
                    02 / PARTENAIRE PILOTE
                  </span>
                  <span className="text-sm font-semibold text-[#C59B27] tracking-wide block">
                    {t.homeRaide.impact}
                  </span>
                </div>
              </div>

              {/* Luxury Call-To-Action Button */}
              <div className="pt-6">
                <Link
                  href="/raide-race"
                  className="inline-flex items-center gap-4 px-9 py-4 bg-[#C59B27] text-black font-mono text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 border border-[#C59B27] group shadow-2xl rounded-sm hover:scale-[1.02]"
                >
                  <span>{t.homeRaide.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>

            </div>

          </div>

          {/* Bottom Editorial Pagination / Index Bar */}
          <div className="flex items-center justify-between border-t border-zinc-800 mt-20 pt-8">
            <span className="text-xs font-mono text-zinc-400 tracking-[0.2em]">
              KANEM-SA SPOTLIGHT — 2027
            </span>
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#C59B27]" />
              <span className="w-2 h-[2px] bg-zinc-700" />
              <span className="w-2 h-[2px] bg-zinc-700" />
            </div>
            <span className="text-xs font-mono text-zinc-400 tracking-[0.2em]">
              01 / 04
            </span>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. À PROPOS TEASER & HERITAGE STATEMENT */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Emblem Card */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="bg-white p-8 rounded-xl border-2 border-black shadow-xl space-y-6 relative overflow-hidden">
                <div className="w-24 h-24 bg-zinc-950 p-3 rounded-lg border border-[#C59B27] flex items-center justify-center mx-auto">
                  <Image
                    src="/images/emblem-V2.png"
                    alt="Kanem Sao Emblem"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-extrabold text-black">
                    Savoir-Faire Kanem & Sao
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Symboles historiques de résilience, de gouvernance élevée et de maîtrise technique sur le continent africain.
                  </p>
                </div>

                {/* Explicit Disclaimer Box */}
                <div className="p-3.5 bg-amber-50 border border-amber-200 rounded text-[11px] font-semibold text-amber-950 text-center">
                  {t.homeAboutTeaser.disclaimer}
                </div>
              </div>
            </div>

            {/* Right Teaser Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#C59B27]">
                {t.homeAboutTeaser.badge}
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
                {t.homeAboutTeaser.title}
              </h2>

              <p className="text-sm text-zinc-700 leading-relaxed">
                {t.homeAboutTeaser.desc}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                  <p className="text-xs font-bold text-zinc-800">
                    Recherche scientifique appliquée orientée vers les défis majeurs.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                  <p className="text-xs font-bold text-zinc-800">
                    Développement de solutions numériques & matérielles souveraines.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                  <p className="text-xs font-bold text-zinc-800">
                    Synergie tripartite : Université - Entreprises - Administrations.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/a-propos"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white bg-black hover:bg-zinc-800 rounded-md transition-colors"
                >
                  <span>{t.homeAboutTeaser.cta}</span>
                  <ChevronRight className="w-4 h-4 text-[#C59B27]" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 6. PARTENAIRES & SPONSORS MARQUEE */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400">
            {t.partners.title}
          </h3>
        </div>

        {/* Marquee Banner */}
        <div className="relative w-full overflow-hidden bg-zinc-50 py-8 border-y border-zinc-200">
          <div className="flex gap-12 items-center justify-around max-w-6xl mx-auto opacity-70 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-3 font-extrabold text-sm text-zinc-800">
              <Building2 className="w-6 h-6 text-[#C59B27]" />
              <span>CENAME (Partenaire Pilote)</span>
            </div>
            <div className="flex items-center gap-3 font-extrabold text-sm text-zinc-800">
              <BookOpen className="w-6 h-6 text-[#C59B27]" />
              <span>Réseau Universités & Centres R&D</span>
            </div>
            <div className="flex items-center gap-3 font-extrabold text-sm text-zinc-800">
              <Shield className="w-6 h-6 text-[#C59B27]" />
              <span>Pôles de Souveraineté Technologique</span>
            </div>
            <div className="flex items-center gap-3 font-extrabold text-sm text-zinc-800">
              <Award className="w-6 h-6 text-[#C59B27]" />
              <span>Incubateurs & Pépites Tech</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
