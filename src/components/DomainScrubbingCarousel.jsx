"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function DomainScrubbingCarousel({ domains, domainImages }) {
  const containerRef = useRef(null);
  const scrollTrackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Framer Motion Scroll Trigger for desktop scroll-scrubbing
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Transform vertical scroll into horizontal translation
  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${Math.max(0, (domains.length - 2) * 28)}%`]
  );

  // Update active slide indicator based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const index = Math.min(
        domains.length - 1,
        Math.floor(latest * domains.length)
      );
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress, domains.length]);

  const scrollToSlide = (index) => {
    setActiveIndex(index);
    if (scrollTrackRef.current) {
      const cardWidth = 380;
      scrollTrackRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const badges = [
    "IA & SOUVERAINETÉ",
    "CYBERSÉCURITÉ",
    "AGRI-TECH",
    "HEALTH-TECH",
    "FINTECH",
    "SMART GRID",
  ];
  const dates = [
    "March 18, 2026",
    "June 10, 2026",
    "January 23, 2026",
    "July 26, 2026",
    "August 12, 2026",
    "September 04, 2026",
  ];

  return (
    <div ref={containerRef} className="w-full relative py-6">
      
      {/* Desktop Scroll-Scrubbing & Mobile Touch Wrapper */}
      <div className="relative w-full overflow-hidden">
        
        {/* Navigation Arrows for direct click control */}
        <button
          type="button"
          onClick={() => scrollToSlide(Math.max(0, activeIndex - 1))}
          disabled={activeIndex === 0}
          aria-label="Card précédente"
          className="absolute left-2 top-[200px] -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/80 hover:bg-[#800000] text-white disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all shadow-2xl border border-white/20 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          type="button"
          onClick={() => scrollToSlide(Math.min(domains.length - 1, activeIndex + 1))}
          disabled={activeIndex === domains.length - 1}
          aria-label="Card suivante"
          className="absolute right-2 top-[200px] -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/80 hover:bg-[#800000] text-white disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all shadow-2xl border border-white/20 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dynamic Track */}
        <div
          ref={scrollTrackRef}
          className="flex gap-8 overflow-x-auto md:overflow-x-visible scrollbar-none snap-x snap-mandatory py-4 px-4 sm:px-8 w-full"
        >
          <motion.div
            style={!isMobile ? { x: xTranslate } : {}}
            className="flex gap-8 w-full shrink-0"
          >
            {domains.map((domain, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={domain.id || index}
                  animate={{
                    opacity: isActive ? 1 : 0.55,
                    scale: isActive ? 1 : 0.96,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="snap-center shrink-0 w-[320px] sm:w-[380px] group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl p-3 border border-zinc-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(197,155,39,0.15)] transition-all duration-500 flex flex-col justify-between h-full">
                    
                    {/* Taller Image Container (340px) */}
                    <div className="relative h-[340px] w-full bg-zinc-900 overflow-hidden rounded-xl">
                      <Image
                        src={domainImages[index % domainImages.length]}
                        alt={domain.title}
                        fill
                        sizes="380px"
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />

                      {/* Reference Badge */}
                      <div className="absolute bottom-0 left-0 bg-white text-black px-4 py-2 text-[11px] font-mono font-extrabold uppercase tracking-wider z-10 border-t border-r border-zinc-200">
                        {badges[index % badges.length]}
                      </div>
                    </div>

                    {/* Content below image */}
                    <div className="pt-5 px-3 pb-3 flex-grow flex flex-col justify-between space-y-3">
                      <div>
                        <p className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest mb-1.5">
                          {dates[index % dates.length]}
                        </p>
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-zinc-900 group-hover:text-[#800000] transition-colors leading-tight line-clamp-2">
                          {domain.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mt-2 line-clamp-3 font-light">
                          {domain.desc}
                        </p>
                      </div>

                      {/* Bottom Link */}
                      <div className="pt-4">
                        <Link
                          href="/services"
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-900 group-hover:text-[#800000] underline underline-offset-4 transition-colors"
                        >
                          <span>En savoir plus</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* ── Interactive Pagination Dots ── */}
      <div className="flex items-center justify-center gap-3 pt-8">
        {domains.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => scrollToSlide(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer border-none ${
              idx === activeIndex
                ? "w-8 h-2.5 bg-[#C59B27] shadow-md"
                : "w-2.5 h-2.5 bg-zinc-300 hover:bg-zinc-400"
            }`}
            aria-label={`Aller au groupe ${idx + 1}`}
          />
        ))}
      </div>

    </div>
  );
}
