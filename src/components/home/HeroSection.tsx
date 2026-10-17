"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import FallbackSupercarCard from "../3d/FallbackSupercarCard";

const SupercarCanvas = dynamic(() => import("../3d/SupercarCanvas"), {
  ssr: false,
  loading: () => <FallbackSupercarCard />,
});

export default function HeroSection() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 bg-alkota-obsidian overflow-hidden">
      {/* Subtle Studio Radial Background */}
      <div className="absolute inset-0 bg-studio-radial pointer-events-none" />

      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Editorial Proposition */}
          <div className="lg:col-span-6 space-y-6 pt-12 lg:pt-0">
            {/* Minimalist Eyebrow */}
            <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.2em] uppercase text-alkota-accent">
              <span className="w-5 h-[1px] bg-alkota-accent inline-block" />
              <span>NATIONWIDE VEHICLE LOGISTICS</span>
            </div>

            {/* Editorial Serif Headline */}
            <h1 className="font-display font-light text-[50px] sm:text-[72px] lg:text-[90px] leading-[0.93] text-alkota-ivory tracking-tight">
              Every movement.<br />
              Precisely handled.
            </h1>

            {/* Supporting Proposition */}
            <p className="font-sans font-light italic text-[16px] sm:text-[18px] text-alkota-silver max-w-md leading-[1.75]">
              Nationwide vehicle logistics, engineered around the needs of modern automotive businesses.
            </p>

            {/* Understated CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 pt-4">
              <Link
                href="/contact"
                className="bg-alkota-accent text-white font-mono text-[11px] tracking-[0.14em] uppercase px-7 py-4 hover:bg-alkota-accent-hover transition-colors text-center"
              >
                Discuss your requirements
              </Link>

              <Link
                href="/services"
                className="text-alkota-silver font-sans font-light text-[14px] flex items-center justify-center gap-2 hover:text-white transition-colors duration-200"
              >
                <span>Explore our services</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Vehicle Experience */}
          <div className="lg:col-span-6 h-[380px] sm:h-[460px] lg:h-[560px] w-full relative flex items-center justify-center">
            {prefersReducedMotion ? (
              <FallbackSupercarCard />
            ) : (
              <SupercarCanvas />
            )}
          </div>
        </div>
      </div>

      {/* Bottom Left Exploration Prompt */}
      <div className="absolute bottom-8 left-5 sm:left-8 z-20 hidden sm:flex items-center gap-2.5 text-[10px] font-mono tracking-[0.2em] text-alkota-muted uppercase">
        <span className="w-1.5 h-1.5 bg-alkota-accent/70 inline-block" />
        <span>SCROLL TO EXPLORE &darr;</span>
      </div>

      {/* Bottom Right Verified Assurance Badges */}
      <div className="absolute bottom-8 right-5 sm:right-8 z-20 hidden md:flex flex-col gap-2 items-end">
        <span className="px-3 py-1.5 border border-white/10 text-[10px] font-mono tracking-[0.14em] uppercase text-alkota-silver bg-white/[0.02]">
          SINGLE-CARRIER NATIONWIDE
        </span>
        <span className="px-3 py-1.5 border border-white/10 text-[10px] font-mono tracking-[0.14em] uppercase text-alkota-silver bg-white/[0.02]">
          48-POINT ePOD TELEMETRY
        </span>
        <span className="px-3 py-1.5 border border-white/10 text-[10px] font-mono tracking-[0.14em] uppercase text-alkota-silver bg-white/[0.02]">
          COMPREHENSIVE MOTOR TRADE POLICY
        </span>
      </div>
    </section>
  );
}
