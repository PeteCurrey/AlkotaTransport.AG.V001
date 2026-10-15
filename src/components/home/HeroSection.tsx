"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FallbackSupercarCard from "../3d/FallbackSupercarCard";

// Dynamic import with ssr: false to prevent Three.js SSR hydration mismatches
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
    <section className="relative min-h-[92vh] pt-28 pb-20 flex items-center overflow-hidden bg-radial-spotlight">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-carbon-grid opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Brand Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Telemetry Status Reticle */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-alkota-cyan animate-pulse" />
              <span className="text-alkota-cyan font-semibold">UK LOGISTICS TELEMETRY</span>
              <span className="text-slate-500">{"//"}</span>
              <span>LIVE DISPATCH NETWORK</span>
            </div>

            {/* Sharp Brand Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black uppercase tracking-tight text-white leading-[1.05]">
              Precision Automotive Logistics.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-alkota-cyan via-slate-200 to-white">
                Nationwide.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Engineering-grade UK vehicle movement. Combining vetted trade plate professionals, enclosed supercar transport, and 48-point digital ePOD telemetry for dealerships, contract hire fleets, and private collectors.
            </p>

            {/* Two Distinct Calls to Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="#quote"
                className="px-6 py-4 rounded-xl text-sm font-mono font-bold tracking-wider uppercase bg-gradient-to-r from-alkota-amber to-orange-600 text-white hover:brightness-110 shadow-telemetry-amber transition-all flex items-center justify-center gap-2 group"
              >
                <span>Instant Route Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#industries"
                className="px-6 py-4 rounded-xl text-sm font-mono font-semibold tracking-wider uppercase bg-alkota-plate hover:bg-white/10 text-slate-200 border border-white/15 transition-all flex items-center justify-center gap-2"
              >
                <span>Fleet Enterprise Solutions</span>
              </Link>
            </div>

            {/* Live Telemetry Metric Badges */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 text-slate-300">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">
                  CORRIDOR COVERAGE
                </span>
                <span className="text-lg sm:text-2xl font-mono font-bold text-white block">
                  100%
                </span>
                <span className="text-xs text-slate-400 block">UK-wide network</span>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">
                  DIGITAL AUDIT
                </span>
                <span className="text-lg sm:text-2xl font-mono font-bold text-alkota-cyan block">
                  48-Point
                </span>
                <span className="text-xs text-slate-400 block">Timestamped ePOD</span>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">
                  TRANSIT ASSURANCE
                </span>
                <span className="text-lg sm:text-2xl font-mono font-bold text-emerald-400 block">
                  Insured
                </span>
                <span className="text-xs text-slate-400 block">Motor trade policy</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Supercar Digital Twin Canvas */}
          <div className="lg:col-span-5 h-[420px] sm:h-[480px] lg:h-[540px] w-full relative rounded-2xl border border-white/10 bg-alkota-plate/50 backdrop-blur-sm overflow-hidden hud-corner">
            {prefersReducedMotion ? (
              <FallbackSupercarCard />
            ) : (
              <SupercarCanvas />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
