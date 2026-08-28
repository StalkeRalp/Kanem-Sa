"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
  variant = "up", // 'up', 'left', 'right', 'scale'
  delay = 0, // delay in ms for staggering
  threshold = 0.1,
  once = true,
  style = {}
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold, once]);

  const getTransform = () => {
    if (isVisible) {
      return variant === "scale" ? "scale(1)" : "translate(0, 0)";
    }
    switch (variant) {
      case "left":
        return "translateX(-35px)";
      case "right":
        return "translateX(35px)";
      case "scale":
        return "scale(0.94)";
      case "up":
      default:
        return "translateY(32px)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
        transition: `opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: "opacity, transform"
      }}
    >
      {children}
    </div>
  );
}
