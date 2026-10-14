"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { lang, t } = useLanguage();

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4 py-16">
      <div className="max-w-xl text-center space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-50 border border-[#C59B27]/30 text-[#C59B27] mb-2 shadow-sm">
          <Compass className="w-10 h-10 animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C59B27]">
            Erreur 404 / Error 404
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 tracking-tight">
            {lang === "fr" ? "Page Introuvable" : "Page Not Found"}
          </h1>
          <p className="text-zinc-600 max-w-md mx-auto">
            {lang === "fr"
              ? "La ressource ou la page que vous recherchez semble introuvable ou a été déplacée."
              : "The resource or page you are looking for cannot be found or may have been moved."}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#C59B27] hover:bg-[#A37A17] text-white font-semibold transition-all shadow-md hover:shadow-lg w-full sm:w-auto"
          >
            <Home className="w-4 h-4" />
            <span>{lang === "fr" ? "Retour à l'accueil" : "Back to Home"}</span>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-semibold transition-all w-full sm:w-auto"
          >
            <Compass className="w-4 h-4" />
            <span>{lang === "fr" ? "Explorer nos services" : "Explore Services"}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

