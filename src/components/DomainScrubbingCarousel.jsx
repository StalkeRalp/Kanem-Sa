"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function DomainScrubbingCarousel({ domains, domainImages }) {
  const scrollTrackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Drag-to-scroll states
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const checkScrollPosition = useCallback(() => {
    if (!scrollTrackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollTrackRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate approximate active index based on card width + gap
    const cardWidth = 380 + 32; // card width + gap
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(domains.length - 1, Math.max(0, index)));
  }, [domains.length]);

  useEffect(() => {
    const el = scrollTrackRef.current;
    if (!el) return;

    checkScrollPosition();
    el.addEventListener("scroll", checkScrollPosition, { passive: true });
    window.addEventListener("resize", checkScrollPosition);

    return () => {
      el.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, [checkScrollPosition]);

  const scrollToSlide = (index) => {
    if (!scrollTrackRef.current) return;
    const cardWidth = 380 + 32;
    scrollTrackRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  const scrollByDirection = (direction) => {
    if (!scrollTrackRef.current) return;
    const cardWidth = 380 + 32;
    scrollTrackRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e) => {
    if (!scrollTrackRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollTrackRef.current.offsetLeft);
    setScrollLeftState(scrollTrackRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollTrackRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollTrackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollTrackRef.current.scrollLeft = scrollLeftState - walk;
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
    <div className="w-full relative py-4 select-none">
      
      {/* Navigation Controls Floating */}
      <div className="relative w-full">
        {/* Previous Button */}
        <button
          type="button"
          onClick={() => scrollByDirection("left")}
          disabled={!canScrollLeft}
          aria-label="Card précédente"
          className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-zinc-950/90 hover:bg-[#800000] text-white disabled:opacity-0 disabled:pointer-events-none flex items-center justify-center transition-all duration-300 shadow-xl border border-white/20 cursor-pointer backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={() => scrollByDirection("right")}
          disabled={!canScrollRight}
          aria-label="Card suivante"
          className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-zinc-950/90 hover:bg-[#800000] text-white disabled:opacity-0 disabled:pointer-events-none flex items-center justify-center transition-all duration-300 shadow-xl border border-white/20 cursor-pointer backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dynamic Horizontal Scroll Track (No vertical hijack) */}
        <div
          ref={scrollTrackRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth py-6 px-2 sm:px-6 w-full snap-x snap-mandatory scrollbar-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {domains.map((domain, index) => (
            <div
              key={domain.id || index}
              className="snap-start shrink-0 w-[290px] sm:w-[380px] group transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="bg-white rounded-2xl p-3 border border-zinc-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_rgba(197,155,39,0.18)] transition-all duration-500 flex flex-col justify-between h-full">
                
                {/* Image Container */}
                <div className="relative h-[280px] sm:h-[320px] w-full bg-zinc-900 overflow-hidden rounded-xl">
                  <Image
                    src={domainImages[index % domainImages.length]}
                    alt={domain.title}
                    fill
                    sizes="(max-width: 640px) 290px, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    draggable={false}
                  />

                  {/* Reference Badge */}
                  <div className="absolute bottom-0 left-0 bg-zinc-950/90 text-amber-300 px-3.5 py-1.5 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider z-10 border-t border-r border-amber-400/30 backdrop-blur-sm">
                    {badges[index % badges.length]}
                  </div>
                </div>

                {/* Content below image */}
                <div className="pt-4 px-2 pb-2 flex-grow flex flex-col justify-between space-y-3">
                  <div>
                    <p className="text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-widest mb-1">
                      {dates[index % dates.length]}
                    </p>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-zinc-900 group-hover:text-[#800000] transition-colors leading-snug line-clamp-2">
                      {domain.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mt-2 line-clamp-3 font-normal">
                      {domain.desc}
                    </p>
                  </div>

                  {/* Bottom Link */}
                  <div className="pt-3 border-t border-zinc-100 mt-2">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-900 group-hover:text-[#800000] transition-colors group/link"
                    >
                      <span className="underline underline-offset-4">En savoir plus</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Pagination Dots */}
      <div className="flex items-center justify-center gap-2.5 pt-6">
        {domains.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => scrollToSlide(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer border-none p-0 ${
              idx === activeIndex
                ? "w-8 h-2 bg-[#C59B27] shadow-sm"
                : "w-2 h-2 bg-zinc-300 hover:bg-zinc-400"
            }`}
            aria-label={`Aller au domaine ${idx + 1}`}
          />
        ))}
      </div>

    </div>
  );
}
