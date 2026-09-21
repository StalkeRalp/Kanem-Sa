"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Trigger curtain split reveal after 1.8 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return (
      <div className="fixed inset-0 z-[9999] bg-[#0A0A0A] flex items-center justify-center pointer-events-auto">
        <div className="relative w-28 h-28 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#C59B27] border-r-[#E5C158] animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loading-overlay"
          className="fixed inset-0 z-[9999] pointer-events-auto flex items-center justify-center overflow-hidden"
          exit={{
            opacity: 1,
            transition: { duration: 1.2 }
          }}
        >
          {/* Left Curtain Panel — Slides Left on Exit */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full bg-[#0A0A0A] z-10 shadow-2xl"
            initial={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          />

          {/* Right Curtain Panel — Slides Right on Exit */}
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full bg-[#0A0A0A] z-10 shadow-2xl"
            initial={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          />

          {/* Central Counter-Rotating Double Ring Spinner & Brand Emblem */}
          <motion.div
            className="relative z-20 flex flex-col items-center justify-center space-y-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.4 } }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-32 h-32 flex items-center justify-center">
              {/* Outer Ring — Clockwise rotation (Gold/Amber) */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#C59B27] border-r-[#E5C158]"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
              />

              {/* Inner Ring — Counter-clockwise rotation (Bordeaux Burgundy) */}
              <motion.div
                className="absolute inset-3.5 rounded-full border-2 border-transparent border-b-[#800000] border-l-[#E5C158]/70"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
              />

              {/* Center Emblem Logo */}
              <div className="w-14 h-14 relative flex items-center justify-center">
                <Image
                  src="/images/emblem-V2.png"
                  alt="KANEM-SA Emblem"
                  width={42}
                  height={42}
                  className="object-contain filter drop-shadow-[0_0_12px_rgba(197,155,39,0.6)]"
                  priority
                />
              </div>
            </div>

            {/* Brand Title & Tagline */}
            <div className="text-center space-y-1.5">
              <span className="text-sm font-mono font-bold tracking-[0.35em] text-[#E5C158] uppercase block">
                KANEM-SA
              </span>
              <span className="text-[10px] font-mono text-zinc-400 tracking-[0.25em] uppercase block">
                RECHERCHE & INNOVATION
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
