import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, CheckCircle2 } from "lucide-react";

export default function DriverRecruitmentBanner() {
  return (
    <section className="py-20 bg-gradient-to-b from-alkota-plate to-alkota-abyss border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-black/60 border border-alkota-amber/30 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Subtle Ambient Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-alkota-amber/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-alkota-amber/20 border border-alkota-amber/40 text-xs font-mono text-alkota-amber">
              <Compass className="w-3.5 h-3.5" />
              <span>DRIVER CAREERS // NATIONWIDE NETWORK</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
              Join The Premier UK Trade Plate Network.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              We empower professional drivers with pre-funded corporate travel expenses, digitized scheduling via our mobile app, and transparent weekly mileage compensation.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-alkota-amber" />
                <span>Pre-Loaded Travel Expense Card</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-alkota-amber" />
                <span>Comprehensive Commercial Motor Insurance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-alkota-amber" />
                <span>Dedicated Operations & Route Support</span>
              </div>
            </div>
          </div>

          {/* Right Action Box */}
          <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
            <Link
              href="/drivers/apply"
              className="px-8 py-5 rounded-2xl text-xs font-mono font-bold tracking-wider uppercase bg-alkota-amber hover:bg-orange-600 text-white shadow-telemetry-amber transition-all flex items-center gap-3 group"
            >
              <span>Driver Application Portal</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <span className="text-[11px] font-mono text-slate-400 mt-2">
              4-Step Eligibility & Vetting Check
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
