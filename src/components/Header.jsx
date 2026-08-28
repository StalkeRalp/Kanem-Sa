"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Globe, Menu, X, ChevronRight, Sparkles, Search } from "lucide-react";

export default function Header() {
  const { lang, toggleLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/a-propos" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.raideRace, href: "/raide-race", badge: "2027" },
    { name: t.nav.news, href: "/actualites" },
    { name: t.nav.contact, href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-zinc-200"
          : "bg-white/90 backdrop-blur-sm py-4 border-b border-zinc-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-md bg-black flex items-center justify-center p-1 border border-[#D4AF37]/40 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo-Kanem-sa.png"
                alt="KANEM-SA Logo"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-black flex items-center gap-1.5">
                KANEM<span className="text-[#C59B27] font-black">-SA</span>
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-zinc-500 uppercase -mt-1">
                INSTITUTION R&D
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 rounded-md text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? "text-black bg-zinc-100/90 font-bold"
                      : "text-zinc-700 hover:text-black hover:bg-zinc-50"
                  }`}
                >
                  {link.name}
                  {link.badge && (
                    <span className="px-1.5 py-0.5 text-[10px] font-bold text-black bg-amber-400 rounded-full border border-amber-500/30">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C59B27] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Bar (Language + CTA) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-zinc-800 bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 rounded-md transition-colors"
              title="Changer de langue / Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>{lang.toUpperCase()}</span>
              <span className="text-zinc-400 text-[10px]">| {t.nav.langSwitch}</span>
            </button>

            {/* Join Us CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-black hover:bg-zinc-800 border border-black rounded-md shadow-sm transition-all duration-200 group"
            >
              <span>{t.nav.joinUs}</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#C59B27] group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="p-2 text-xs font-bold text-zinc-800 bg-zinc-100 rounded-md"
            >
              {lang.toUpperCase()}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-zinc-800 hover:bg-zinc-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-md text-base font-semibold ${
                pathname === link.href
                  ? "bg-zinc-100 text-black border-l-4 border-[#C59B27]"
                  : "text-zinc-700 hover:bg-zinc-50"
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{link.name}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 text-xs font-bold text-black bg-amber-400 rounded-full">
                    {link.badge}
                  </span>
                )}
              </div>
            </Link>
          ))}
          <div className="pt-4 border-t border-zinc-100">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-black rounded-md"
            >
              <span>{t.nav.joinUs}</span>
              <ChevronRight className="w-4 h-4 text-[#C59B27]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
