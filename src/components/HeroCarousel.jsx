"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const bgImages = [
  { src: "/images/kanem_hero_bg.png",                                                    caption: "Pôle R&D & Laboratoires d'Innovation" },
  { src: "/images/home.png",                                                              caption: "Campus & Ancrage Institutionnel" },
  { src: "/images/Images Attirance/pexels-mediahooch-14785826.jpg",                      caption: "Technologies Émergentes & Souveraineté" },
  { src: "/images/Images Attirance/pexels-shvets-production-7562020.jpg",                caption: "Recherche Scientifique Appliquée" },
  { src: "/images/Images Attirance/pexels-shvets-production-7562259.jpg",                caption: "Jeunesse & Programme RAIDE-RACE" },
  { collage: true,                                                                        caption: "Galerie KANEM-SA — Tous nos domaines d'excellence" }
];

const collageImages = [
  "/images/kanem_hero_bg.png",
  "/images/home.png",
  "/images/Images Attirance/pexels-mediahooch-14785826.jpg",
  "/images/Images Attirance/pexels-shvets-production-7562020.jpg",
  "/images/Images Attirance/pexels-shvets-production-7562259.jpg",
  "/images/Images Attirance/pexels-markus-winkler-1430818-18475692.jpg",
  "/images/Images Attirance/pexels-fajuyi-samuel-olayinka-589022314-19330452.jpg",
  "/images/Images Attirance/pexels-zeal-creative-studios-58866141-33920046.jpg",
  "/images/Images Attirance/pexels-davdkuko-17792243.jpg"
];

export default function HeroCarousel({ searchBar }) {
  const { t } = useLanguage();
  const [isClient, setIsClient] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 7000);
  };

  useEffect(() => {
    setIsClient(true);
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goNext = (e) => {
    if (e) e.preventDefault();
    setCurrentBg((prev) => (prev + 1) % bgImages.length);
    startTimer();
  };

  const goPrev = (e) => {
    if (e) e.preventDefault();
    setCurrentBg((prev) => (prev === 0 ? bgImages.length - 1 : prev - 1));
    startTimer();
  };

  const goToSlide = (idx) => {
    setCurrentBg(idx);
    startTimer();
  };

  return (
    <section
      className="relative overflow-hidden bg-black text-white border-b border-zinc-800"
      style={{ minHeight: "90vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
    >
      {/* ── Background Carousel Track ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {bgImages.map((img, idx) => {
          const tx = idx === currentBg ? "0%" : idx < currentBg ? "-100%" : "100%";

          /* Collage last slide */
          if (img.collage) {
            return (
              <div
                key="collage"
                style={{
                  position: "absolute",
                  inset: 0,
                  transform: `translateX(${tx})`,
                  transition: "transform 1.1s cubic-bezier(0.25, 1, 0.5, 1)",
                  zIndex: idx === currentBg ? 2 : 1,
                  background: "#000",
                  overflow: "hidden"
                }}
              >
                <div className="animate-collage h-full items-stretch">
                  {[...collageImages, ...collageImages].map((src, i) => (
                    <div key={i} style={{ position: "relative", width: "400px", flexShrink: 0, height: "100%" }}>
                      <Image
                        src={src}
                        alt={`Galerie ${i}`}
                        fill
                        sizes="400px"
                        className="object-cover"
                        style={{ filter: "brightness(0.65) saturate(1.1)" }}
                      />
                      <div style={{ position: "absolute", top: 0, right: 0, width: "2px", height: "100%", background: "rgba(197,155,39,0.35)", zIndex: 2 }} />
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          /* Standard slide */
          return (
            <div
              key={img.src}
              style={{
                position: "absolute",
                inset: 0,
                transform: `translateX(${tx})`,
                transition: "transform 1.1s cubic-bezier(0.25, 1, 0.5, 1)",
                zIndex: idx === currentBg ? 2 : 1
              }}
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                sizes="100vw"
                className="object-cover object-center"
                priority={idx === 0}
              />
            </div>
          );
        })}

        {/* Overlay gradients for text readability */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.3) 100%)", zIndex: 10 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 50%, rgba(0,0,0,0.9) 100%)", zIndex: 10 }} />
      </div>

      {/* ── Extremity Nav Arrows (z-50 guarantees clickability) ── */}
      <button
        type="button"
        onClick={goPrev}
        aria-label="Slide précédente"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/70 hover:bg-[#C59B27] hover:text-black backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all shadow-2xl cursor-pointer group"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Slide suivante"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/70 hover:bg-[#C59B27] hover:text-black backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all shadow-2xl cursor-pointer group"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* ── Main Content ── */}
      <div className="relative z-20 flex-1 flex items-center w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full items-center px-4 pt-20 pb-6">

          {/* LEFT: Text — clear padding so text is not hidden by left arrow */}
          <div className="lg:col-span-7 space-y-6" style={{ paddingLeft: "80px", paddingRight: "32px" }}>

            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-black text-amber-300 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#C59B27] animate-pulse" />
              <span>{t.hero.tag}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05] drop-shadow-xl">
              {t.hero.title}
            </h1>

            {/* Motto */}
            <div className="bg-black/70 backdrop-blur-md text-white py-4 px-5 border-l-4 border-[#C59B27] border border-white/10 shadow-2xl space-y-1.5 max-w-xl">
              <p className="text-lg sm:text-xl font-bold italic text-amber-300 font-serif leading-snug">
                {t.hero.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-zinc-300 font-medium">
                {t.hero.strategicMotto}
              </p>
            </div>

            {/* Dot Indicators */}
            <div className="flex items-center gap-2 pt-2">
              {bgImages.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  style={{
                    width: idx === currentBg ? "28px" : "10px",
                    height: "10px",
                    borderRadius: "9999px",
                    background: idx === currentBg ? "#C59B27" : "rgba(255,255,255,0.4)",
                    transition: "all 0.3s ease-in-out",
                    border: "none",
                    cursor: "pointer",
                    padding: 0
                  }}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

          {/* RIGHT: Emblem Watermark & Right-aligned CTAs */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-between h-full pt-8 lg:pt-0 pointer-events-auto space-y-8">
            {/* Emblem Watermark */}
            <div className="hidden lg:flex items-center justify-center pointer-events-none opacity-20">
              <Image
                src="/images/emblem-V2.png"
                alt="Emblem"
                width={360}
                height={360}
                style={{ width: "360px", height: "auto" }}
              />
            </div>

            {/* CTAs — Shifted to the extreme right and lower down */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end items-center w-full pr-2 sm:pr-8 pt-4 lg:pt-12">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-extrabold text-black bg-[#C59B27] hover:bg-amber-300 rounded-md shadow-2xl transition-all group"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-extrabold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-md border border-white/30 transition-all shadow-xl"
              >
                {t.hero.ctaSecondary}
                <ChevronRight className="w-4 h-4 text-[#C59B27]" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* ── Search/Filter Bar ── */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 pb-0">
        {searchBar}
      </div>
    </section>
  );
}
