"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";
import Reveal from "@/components/Reveal";
import DomainScrubbingCarousel from "@/components/DomainScrubbingCarousel";
import { useLanguage } from "@/context/LanguageContext";
import {
  Cpu, Shield, Wheat, HeartPulse, Coins, Zap,
  ArrowRight, ChevronLeft, ChevronRight, Sparkles, Award, Globe2,
  Users, Search, CheckCircle2, Building2, BookOpen,
  ArrowUpRight, TrendingUp, Layers, Quote
} from "lucide-react";

// Interactive Fluid Metaball Background Component (Dior/Gucci Luxury Style)
function MetaballBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Smooth lag spring physics for cursor position
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;
    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Organic fluid blobs
    const blobs = [
      { x: width * 0.2, y: height * 0.3, vx: 0.35, vy: 0.25, radius: 150, baseRadius: 150 },
      { x: width * 0.8, y: height * 0.4, vx: -0.3, vy: 0.35, radius: 170, baseRadius: 170 },
      { x: width * 0.5, y: height * 0.7, vx: 0.25, vy: -0.3, radius: 190, baseRadius: 190 },
      { x: width * 0.3, y: height * 0.85, vx: -0.35, vy: -0.2, radius: 130, baseRadius: 130 },
      { x: width * 0.7, y: height * 0.15, vx: 0.3, vy: 0.2, radius: 140, baseRadius: 140 },
      // Interactive mouse-following blob that splits & lags
      { x: mouseX, y: mouseY, vx: 0, vy: 0, radius: 160, baseRadius: 160 }
    ];

    let time = 0;

    const render = () => {
      time += 0.015;

      // Spring lag interpolation for mouse follower
      mouseX += (targetMouseX - mouseX) * 0.045;
      mouseY += (targetMouseY - mouseY) * 0.045;

      blobs[5].x = mouseX;
      blobs[5].y = mouseY;

      ctx.clearRect(0, 0, width, height);

      // Move autonomous blobs slowly & float
      blobs.slice(0, 5).forEach((b, i) => {
        b.x += b.vx + Math.sin(time + i) * 0.35;
        b.y += b.vy + Math.cos(time + i * 0.7) * 0.35;

        if (b.x < -120) b.x = width + 120;
        if (b.x > width + 120) b.x = -120;
        if (b.y < -120) b.y = height + 120;
        if (b.y > height + 120) b.y = -120;
      });

      // Render luxurious champagne & gold organic radial gradients
      blobs.forEach((b, idx) => {
        const rad = b.baseRadius + Math.sin(time * 2 + idx) * 16;
        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, rad);

        if (idx === 5) {
          // Interactive cursor blob
          grad.addColorStop(0, "rgba(197, 155, 39, 0.18)");
          grad.addColorStop(0.5, "rgba(245, 239, 230, 0.25)");
          grad.addColorStop(1, "rgba(250, 250, 250, 0)");
        } else if (idx % 2 === 0) {
          grad.addColorStop(0, "rgba(240, 232, 218, 0.35)");
          grad.addColorStop(0.6, "rgba(249, 246, 240, 0.2)");
          grad.addColorStop(1, "rgba(250, 250, 250, 0)");
        } else {
          grad.addColorStop(0, "rgba(197, 155, 39, 0.12)");
          grad.addColorStop(0.5, "rgba(234, 219, 200, 0.22)");
          grad.addColorStop(1, "rgba(250, 250, 250, 0)");
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, rad, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 w-full h-full"
    />
  );
}

export default function Home() {
  const { lang, t } = useLanguage();
  const [isClient, setIsClient] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeHeritageSlide, setActiveHeritageSlide] = useState(0);
  const domainsScrollRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const heritageSlides = t.homeAboutTeaser?.slides || [];

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!heritageSlides || heritageSlides.length === 0) return;
    const timer = setInterval(() => {
      setActiveHeritageSlide((prev) => (prev + 1) % heritageSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [heritageSlides.length]);

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

  const domainImages = [
    "/images/attirance/pexels-mediahooch-14785826.jpg",
    "/images/attirance/pexels-shvets-production-7562020.jpg",
    "/images/attirance/pexels-markus-winkler-1430818-18475692.jpg",
    "/images/attirance/pexels-fajuyi-samuel-olayinka-589022314-19330452.jpg",
    "/images/attirance/pexels-zeal-creative-studios-58866141-33920046.jpg",
    "/images/attirance/pexels-davdkuko-17792243.jpg"
  ];

  const filteredDomains = t.homeDomains.items.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen text-zinc-900 overflow-x-hidden">
      {/* ---------------------------------------------------- */}
      {/* 1. HERO — Parallax Carousel & Interactive Search */}
      {/* ---------------------------------------------------- */}
      <HeroCarousel
        searchBar={
          <div className="bg-white p-4 sm:p-5 border-2 border-black shadow-2xl text-zinc-900 rounded-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
              {/* Filter 1: Domaine */}
              <div className="flex items-center gap-2 px-3 py-2.5 bg-zinc-50 border border-zinc-300 rounded-md focus-within:border-black transition-colors">
                <Layers className="w-4 h-4 text-[#C59B27] shrink-0" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full text-xs font-semibold bg-transparent focus:outline-none text-zinc-800 cursor-pointer"
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
              <div className="flex items-center gap-2 px-3 py-2.5 bg-zinc-50 border border-zinc-300 rounded-md focus-within:border-black transition-colors">
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
                className="w-full py-2.5 px-4 text-xs font-bold text-white bg-black hover:bg-zinc-800 rounded-md transition-all flex items-center justify-center gap-2 shadow shimmer-btn hover:scale-[1.02]"
              >
                <span>{t.hero.searchButton}</span>
                <ArrowUpRight className="w-4 h-4 text-[#C59B27]" />
              </button>
            </div>
          </div>
        }
      />

      {/* ---------------------------------------------------- */}
      {/* 2. VISION & CHIFFRES CLÉS (DIOR/GUCCI LUXURY STYLE WITH COMPLEMENTARY PALETTE) */}
      {/* ---------------------------------------------------- */}
      <section className="py-28 bg-[#FAFAFA] border-b border-zinc-200 w-full relative overflow-hidden">
        {/* Interactive Fluid Metaball Background */}
        <MetaballBackground />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <Reveal variant="up">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
              {/* Badge in Imperial Navy + Champagne Gold */}
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase font-bold text-[#E5C158] bg-[#0F1D38] border border-[#1E3A8A] px-4 py-1.5 rounded-full inline-block shadow-md">
                {t.stats.pillarsTitle}
              </span>
              
              {/* Main Title in Luxury Serif */}
              <h2 className="text-3xl sm:text-5xl font-serif font-normal text-zinc-900 tracking-tight leading-tight">
                L'Excellence au Service du Développement
              </h2>
              
              {/* Subtitle */}
              <p className="text-sm sm:text-base text-zinc-500 font-light max-w-xl mx-auto leading-relaxed">
                {t.stats.pillarsSubtitle}
              </p>
            </div>
          </Reveal>

          {/* 4 Floating Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 w-full justify-between">
            
            {/* Card 1 */}
            <Reveal variant="up" delay={0} className="w-full">
              <div className="bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-zinc-100/90 shadow-[0_15px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(197,155,39,0.18)] transition-all duration-700 group w-full h-full flex flex-col justify-between hover:-translate-y-2 cursor-pointer">
                <div>
                  <div className="w-14 h-14 rounded-full border border-[#D4AF37]/50 bg-gradient-to-br from-[#FAF5E8] to-[#F5EFE6] flex items-center justify-center mb-7 group-hover:scale-110 group-hover:bg-[#C59B27] transition-all duration-500 shadow-xs">
                    <Sparkles className="w-6 h-6 text-[#C59B27] group-hover:text-white transition-colors duration-300 stroke-[1.5]" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-serif font-bold text-zinc-900 mb-3 tracking-tight group-hover:text-[#C59B27] group-hover:scale-[1.03] origin-left transition-all duration-500">
                    {t.stats.p1.count}
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900 mb-2 tracking-wide">
                    {t.stats.p1.title}
                  </h3>
                </div>
                <p className="text-xs text-zinc-500 font-light leading-relaxed mt-4">
                  {t.stats.p1.desc}
                </p>
              </div>
            </Reveal>

            {/* Card 2 */}
            <Reveal variant="up" delay={120} className="w-full">
              <div className="bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-zinc-100/90 shadow-[0_15px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(13,59,46,0.18)] transition-all duration-700 group w-full h-full flex flex-col justify-between hover:-translate-y-2 cursor-pointer">
                <div>
                  <div className="w-14 h-14 rounded-full border border-[#0D3B2E]/30 bg-[#F0F7F4] flex items-center justify-center mb-7 group-hover:scale-110 group-hover:bg-[#0D3B2E] transition-all duration-500 shadow-xs">
                    <Shield className="w-6 h-6 text-[#0D3B2E] group-hover:text-white transition-colors duration-300 stroke-[1.5]" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-serif font-bold text-zinc-900 mb-3 tracking-tight group-hover:text-[#0D3B2E] group-hover:scale-[1.03] origin-left transition-all duration-500">
                    {t.stats.p2.count}
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900 mb-2 tracking-wide">
                    {t.stats.p2.title}
                  </h3>
                </div>
                <p className="text-xs text-zinc-500 font-light leading-relaxed mt-4">
                  {t.stats.p2.desc}
                </p>
              </div>
            </Reveal>

            {/* Card 3 */}
            <Reveal variant="up" delay={240} className="w-full">
              <div className="bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-zinc-100/90 shadow-[0_15px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(15,29,56,0.18)] transition-all duration-700 group w-full h-full flex flex-col justify-between hover:-translate-y-2 cursor-pointer">
                <div>
                  <div className="w-14 h-14 rounded-full border border-[#1E3A8A]/30 bg-[#F0F4FA] flex items-center justify-center mb-7 group-hover:scale-110 group-hover:bg-[#0F1D38] transition-all duration-500 shadow-xs">
                    <Globe2 className="w-6 h-6 text-[#0F1D38] group-hover:text-white transition-colors duration-300 stroke-[1.5]" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-serif font-bold text-zinc-900 mb-3 tracking-tight group-hover:text-[#0F1D38] group-hover:scale-[1.03] origin-left transition-all duration-500">
                    {t.stats.p3.count}
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900 mb-2 tracking-wide">
                    {t.stats.p3.title}
                  </h3>
                </div>
                <p className="text-xs text-zinc-500 font-light leading-relaxed mt-4">
                  {t.stats.p3.desc}
                </p>
              </div>
            </Reveal>

            {/* Card 4 */}
            <Reveal variant="up" delay={360} className="w-full">
              <div className="bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-zinc-100/90 shadow-[0_15px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(128,0,0,0.18)] transition-all duration-700 group w-full h-full flex flex-col justify-between hover:-translate-y-2 cursor-pointer">
                <div>
                  <div className="w-14 h-14 rounded-full border border-[#800000]/30 bg-[#FAF0F0] flex items-center justify-center mb-7 group-hover:scale-110 group-hover:bg-[#800000] transition-all duration-500 shadow-xs">
                    <Award className="w-6 h-6 text-[#800000] group-hover:text-white transition-colors duration-300 stroke-[1.5]" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-serif font-bold text-zinc-900 mb-3 tracking-tight group-hover:text-[#800000] group-hover:scale-[1.03] origin-left transition-all duration-500">
                    {t.stats.p4.count}
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900 mb-2 tracking-wide">
                    {t.stats.p4.title}
                  </h3>
                </div>
                <p className="text-xs text-zinc-500 font-light leading-relaxed mt-4">
                  {t.stats.p4.desc}
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. DOMAINES DE POINTE (FULL WIDTH EDGE-TO-EDGE CAROUSEL) */}
      {/* ---------------------------------------------------- */}
      <section id="featured-domains" className="py-24 bg-white border-b border-zinc-200 w-full overflow-hidden">
        <div className="w-full px-3 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <Reveal variant="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#C59B27] bg-[#C59B27]/10 px-3 py-1 rounded-full inline-block mb-3">
                  {t.homeDomains.badge}
                </span>
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
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white rounded-sm text-xs sm:text-sm font-extrabold uppercase tracking-wider hover:opacity-90 transition-all shadow-md shimmer-btn hover:scale-105 shrink-0"
              >
                <span>{t.homeDomains.viewAll}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>

          {/* High-Fidelity Scroll-Scrubbing Carousel with Dynamic Depth & Interactive Pagination */}
          <DomainScrubbingCarousel domains={filteredDomains} domainImages={domainImages} />

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. PROGRAMME PHARE: RAIDE-RACE SPOTLIGHT (50/50 LUXURY EDITORIAL) */}
      {/* ---------------------------------------------------- */}
      <section className="w-full bg-[#0a0a0a] text-white border-y border-zinc-900 overflow-hidden relative">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[650px] lg:min-h-[720px] items-stretch">
          
          {/* Left Half: Full-Bleed 100% Height Image (No rounded corners, edge-to-edge) */}
          <Reveal variant="left" delay={100} className="lg:col-span-6 w-full relative min-h-[450px] lg:min-h-[720px] h-full">
            <div className="relative w-full h-full min-h-[450px] lg:min-h-[720px] overflow-hidden group">
              <Image
                src="/images/attirance/pexels-shvets-production-7562259.jpg"
                alt="RAIDE-RACE 2027 High Art"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out filter contrast-[1.08] brightness-[0.9]"
                priority
              />

              {/* Dior/Gucci Style Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Minimalist Emblem Overlay at Top Left */}
              <div className="absolute top-8 left-8 flex items-center gap-3 bg-black/85 backdrop-blur-md px-4 py-2 border border-zinc-800 shadow-xl rounded-none z-10">
                <div className="w-6 h-6 relative">
                  <Image
                    src="/images/raidderacee-emblem.png"
                    alt="Emblem"
                    fill
                    sizes="24px"
                    className="object-contain"
                  />
                </div>
                <span className="text-[10px] font-mono tracking-[0.25em] text-white uppercase font-bold">
                  KANEM-SA
                </span>
              </div>

              {/* Image Bottom Editorial Legend */}
              <div className="absolute bottom-10 left-10 right-10 space-y-1.5 z-10">
                <span className="text-[11px] font-mono text-[#C59B27] tracking-[0.25em] uppercase block font-bold">
                  BOOTCAMPS & COMPÉTITIONS
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-wide leading-tight">
                  L'Excellence Technologique
                </h3>
              </div>
            </div>
          </Reveal>

          {/* Right Half: Haute-Couture Spacious Editorial Column */}
          <Reveal variant="right" delay={200} className="lg:col-span-6 w-full flex flex-col justify-center">
            <div className="px-8 sm:px-14 lg:px-20 py-16 lg:py-24 space-y-8 max-w-2xl mx-auto lg:mx-0">
              
              {/* Category Pill / Flagship Tag */}
              <div className="inline-block">
                <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#C59B27] border-b-2 border-[#C59B27] pb-1 font-bold">
                  {t.homeRaide.badge}
                </span>
              </div>

              {/* Serif Title - Dior/Gucci Pure Elegance */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-[1.08] font-normal">
                {t.homeRaide.title}
              </h2>

              {/* Spacious Editorial Subtitle */}
              <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed tracking-wide">
                {t.homeRaide.subtitle}
              </p>

              {/* Quote Block with Gold Hairline Left Accent Line */}
              <div className="border-l-2 border-[#C59B27] pl-6 py-3 bg-zinc-900/40 rounded-none">
                <p className="text-sm sm:text-base text-zinc-300 font-serif italic leading-relaxed">
                  « {t.homeRaide.desc} »
                </p>
              </div>

              {/* Minimalist Grid Specification Details with Enriched Complementary Palette */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="space-y-1.5 bg-[#0F1D38]/40 p-4.5 border border-[#1E3A8A]/60 rounded-none shadow-md">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#E5C158] uppercase block font-bold">
                    01 / CIBLE STRATÉGIQUE
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white tracking-wide block">
                    {t.homeRaide.target}
                  </span>
                </div>
                <div className="space-y-1.5 bg-[#0D3B2E]/40 p-4.5 border border-[#0D3B2E]/70 rounded-none shadow-md">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-emerald-300 uppercase block font-bold">
                    02 / PARTENAIRE PILOTE
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#E5C158] tracking-wide block">
                    {t.homeRaide.impact}
                  </span>
                </div>
              </div>

              {/* Luxury Call-To-Action Button */}
              <div className="pt-4">
                <Link
                  href="/raide-race"
                  className="inline-flex items-center gap-4 px-9 py-4 bg-[#C59B27] text-black font-mono text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#800000] hover:text-[#E5C158] transition-all duration-500 border border-[#C59B27] group shadow-2xl rounded-none cursor-pointer"
                >
                  <span>{t.homeRaide.cta}</span>
                  <ArrowRight className="w-4 h-4 text-black group-hover:text-[#E5C158] group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>

            </div>
          </Reveal>

        </div>

        {/* Bottom Full-Width Index Bar */}
        <div className="w-full px-8 lg:px-20 py-6 border-t border-zinc-900 flex items-center justify-between text-xs font-mono text-zinc-400 tracking-[0.2em]">
          <span>KANEM-SA SPOTLIGHT — 2027</span>
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#C59B27]" />
            <span className="w-2 h-[2px] bg-zinc-800" />
            <span className="w-2 h-[2px] bg-zinc-800" />
          </div>
          <span>01 / 04</span>
        </div>

      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. À PROPOS & STORY SHOWCASE (FULL-WIDTH WHITE STYLE) */}
      {/* ---------------------------------------------------- */}
      <section className="w-full py-24 sm:py-32 bg-white text-zinc-900 border-b border-zinc-200 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* Dynamic Content Grid */}
          {heritageSlides.length > 0 && (() => {
            const currentSlide = heritageSlides[activeHeritageSlide] || heritageSlides[0];

            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* Left Portrait Image Showcase */}
                <Reveal key={`visual-${activeHeritageSlide}`} variant="left" delay={150} className="lg:col-span-6 w-full">
                  <div
                    style={{ position: "relative", width: "100%", height: "580px" }}
                    className="overflow-hidden bg-zinc-950 border border-zinc-300 shadow-2xl group rounded-xs"
                  >
                    <Image
                      src={currentSlide.image}
                      alt={currentSlide.portraitAlt || currentSlide.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-1000 filter contrast-[1.05] brightness-[0.95]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Floating Corner Badge in Imperial Navy + Champagne Gold */}
                    <div className="absolute top-5 left-5 bg-[#0F1D38] backdrop-blur-md px-3.5 py-1.5 border border-[#1E3A8A] rounded-xs text-[10px] font-mono tracking-widest text-[#E5C158] uppercase font-bold shadow-lg">
                      {currentSlide.badge}
                    </div>

                    {/* Bottom Legend */}
                    <div className="absolute bottom-5 left-5 right-5 text-white/90">
                      <span className="text-[10px] font-mono text-[#E5C158] tracking-[0.2em] uppercase font-bold block">
                        {currentSlide.portraitAlt || "PORTRAIT HISTORIQUE"}
                      </span>
                    </div>
                  </div>
                </Reveal>

                {/* Right Typography & Quote Column */}
                <Reveal key={`text-${activeHeritageSlide}`} variant="right" delay={250} className="lg:col-span-6 w-full">
                  <div className="space-y-8 pl-0 lg:pl-4">
                    
                    {/* Big Bold Black Title */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight leading-tight font-serif">
                      {currentSlide.title}
                    </h2>

                    {/* Quote Section with Icon & Left Gold Border */}
                    <div className="flex items-start gap-4 pt-2">
                      <Quote className="w-10 h-10 text-[#C59B27] shrink-0 fill-[#C59B27]/10 rotate-180 mt-1" />
                      
                      <div className="border-l-2 border-[#C59B27] pl-5 space-y-4">
                        <p className="text-sm sm:text-base text-zinc-800 italic font-serif leading-relaxed">
                          « {currentSlide.desc} »
                        </p>

                        {/* Bullet points summary */}
                        <div className="space-y-2 pt-1">
                          {currentSlide.points.slice(0, 2).map((pt, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-zinc-700 font-semibold">
                              <span className="w-2 h-2 rounded-full bg-[#C59B27]" />
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* High-Contrast Luxury Button CTA with Bordeaux Hover Accent */}
                    <div className="pt-2">
                      <Link
                        href="/a-propos"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white hover:bg-[#800000] hover:text-[#E5C158] text-xs sm:text-sm font-bold tracking-wider transition-all duration-500 shadow-xl hover:shadow-2xl rounded-none group/btn cursor-pointer"
                      >
                        <span>{t.homeAboutTeaser.cta}</span>
                        <ArrowRight className="w-4 h-4 text-[#C59B27] group-hover/btn:text-[#E5C158] group-hover/btn:translate-x-1.5 transition-all duration-300" />
                      </Link>
                    </div>

                  </div>
                </Reveal>

              </div>
            );
          })()}

          {/* Bottom Center Pagination Controls: < o o o o > */}
          <div className="mt-16 flex items-center justify-center gap-5">
            <button
              onClick={() => setActiveHeritageSlide((prev) => (prev === 0 ? heritageSlides.length - 1 : prev - 1))}
              className="text-zinc-400 hover:text-black transition-colors p-2 cursor-pointer"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              {heritageSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveHeritageSlide(idx)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeHeritageSlide
                      ? "w-3.5 h-3.5 bg-black ring-2 ring-[#C59B27]"
                      : "w-2.5 h-2.5 bg-zinc-300 hover:bg-zinc-500"
                  }`}
                  aria-label={`Aller au slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveHeritageSlide((prev) => (prev + 1) % heritageSlides.length)}
              className="text-zinc-400 hover:text-black transition-colors p-2 cursor-pointer"
              aria-label="Suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 6. PARTENAIRES & SPONSORS MARQUEE */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 bg-white overflow-hidden">
        <Reveal variant="up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
            <span className="text-xs font-black uppercase tracking-widest text-zinc-400 bg-zinc-100 px-4 py-1.5 rounded-full inline-block">
              {t.partners.title}
            </span>
          </div>
        </Reveal>

        {/* Marquee Banner */}
        <Reveal variant="scale" delay={100}>
          <div className="relative w-full overflow-hidden bg-zinc-50 py-10 border-y border-zinc-200">
            <div className="flex gap-12 items-center justify-around max-w-6xl mx-auto opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-3 font-extrabold text-sm text-zinc-800 hover:scale-105 transition-transform cursor-pointer">
                <Building2 className="w-6 h-6 text-[#C59B27]" />
                <span>CENAME (Partenaire Pilote)</span>
              </div>
              <div className="flex items-center gap-3 font-extrabold text-sm text-zinc-800 hover:scale-105 transition-transform cursor-pointer">
                <BookOpen className="w-6 h-6 text-[#C59B27]" />
                <span>Réseau Universités &amp; Centres R&amp;D</span>
              </div>
              <div className="flex items-center gap-3 font-extrabold text-sm text-zinc-800 hover:scale-105 transition-transform cursor-pointer">
                <Shield className="w-6 h-6 text-[#C59B27]" />
                <span>Pôles de Souveraineté Technologique</span>
              </div>
              <div className="flex items-center gap-3 font-extrabold text-sm text-zinc-800 hover:scale-105 transition-transform cursor-pointer">
                <Award className="w-6 h-6 text-[#C59B27]" />
                <span>Incubateurs &amp; Pépites Tech</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
