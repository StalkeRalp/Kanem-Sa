"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

function ParallaxItem({ section, isReverse }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const opacityContent = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const clipProgress = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );
  const translateContent = useTransform(scrollYProgress, [0, 1], [-50, 0]);

  return (
    <div
      ref={ref}
      className={cn(
        "min-h-screen flex items-center justify-center md:gap-40 gap-10 py-16",
        isReverse ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
      )}
    >
      <motion.div style={{ y: translateContent }} className="space-y-6">
        <div className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-md">
          {section.title}
        </div>
        <motion.p
          style={{ y: translateContent }}
          className="text-zinc-400 max-w-md text-base leading-relaxed"
        >
          {section.description}
        </motion.p>
      </motion.div>
      <motion.div
        style={{
          opacity: opacityContent,
          clipPath: clipProgress,
        }}
        className="relative shadow-2xl overflow-hidden rounded-xl"
      >
        <img
          src={section.imageUrl}
          className="w-72 h-72 sm:w-96 sm:h-96 object-cover rounded-xl border border-zinc-800"
          alt={`Section ${section.title}`}
        />
      </motion.div>
    </div>
  );
}

export const Component = ({ sections: customSections, headerTitle = "PARALLAX SCROLL FEATURE SECTION" }) => {
  // Array of section data with high-fidelity unsplash images
  const defaultSections = [
    {
      id: 1,
      title: "Haute Innovation",
      description:
        "Proposer un incubateur d'excellence panafricain pour soutenir et accélérer les talents émergents dans la recherche et les technologies avancées.",
      imageUrl:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
      reverse: false,
    },
    {
      id: 2,
      title: "Souveraineté Digitale",
      description:
        "Développer des infrastructures technologiques autonomes et sécurisées adaptées aux priorités et défis du continent africain.",
      imageUrl:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200",
      reverse: true,
    },
    {
      id: 3,
      title: "Excellence Académique",
      description:
        "Créer des ponts entre les universités, les centres de R&D et l'écosystème entrepreneurial pour transformer les idées en solutions à fort impact.",
      imageUrl:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200",
      reverse: false,
    },
  ];

  const sections = customSections || defaultSections;

  return (
    <div className="w-full bg-[#0a0a0a] text-white overflow-hidden">
      <div className="min-h-[60vh] w-full flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-serif max-w-3xl font-bold tracking-tight text-[#E5C158]">
          {headerTitle}
        </h1>
        <p className="mt-10 flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-400 uppercase">
          DÉFILER VERS LE BAS <ArrowDown size={16} className="text-[#C59B27] animate-bounce" />
        </p>
      </div>

      <div className="flex flex-col md:px-0 px-6 max-w-7xl mx-auto">
        {sections.map((section) => (
          <ParallaxItem key={section.id} section={section} isReverse={section.reverse} />
        ))}
      </div>

      <div className="min-h-[40vh] w-full flex flex-col items-center justify-center border-t border-zinc-900">
        <h2 className="text-4xl md:text-6xl font-serif text-[#C59B27]">KANEM-SA</h2>
      </div>
    </div>
  );
};
