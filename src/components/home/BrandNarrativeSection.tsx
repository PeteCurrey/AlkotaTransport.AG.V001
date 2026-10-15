import React from "react";
import { Compass, Shield, Cpu, Activity, ArrowRight } from "lucide-react";

export default function BrandNarrativeSection() {
  return (
    <section id="about" className="py-24 bg-alkota-abyss relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-alkota-cyan uppercase">
            <Activity className="w-3.5 h-3.5" />
            <span>THE ALKOTA ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
            Transforming UK Vehicle Movement Through Operational Control.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Automotive logistics in Britain has historically suffered from fragmented sub-contracting, unpredictable arrival windows, and manual condition disputes. ALKOTA replaces uncertainty with a unified, software-governed transport platform.
          </p>
        </div>

        {/* Narrative Grid Pillars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="p-8 rounded-2xl bg-alkota-plate border border-white/10 space-y-5 relative group hover:border-alkota-cyan/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-alkota-cyan">
              <Cpu className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block">
                PILLAR 01 // DISPATCH INTELLIGENCE
              </span>
              <h3 className="text-xl font-display font-bold text-white">
                Intelligent Corridor Pairing
              </h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Our dispatch algorithms analyze active vehicle movements across key UK transit arteries (M1, M6, M4, M25, A1M), matching outbound relocations with return legs. This reduces idle driver transit, eliminates deadhead miles, and ensures rapid dispatch availability.
            </p>
            <div className="pt-2 text-xs font-mono text-alkota-cyan flex items-center gap-1">
              <span>Sub-30-second automated booking</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 rounded-2xl bg-alkota-plate border border-white/10 space-y-5 relative group hover:border-alkota-amber/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-alkota-amber">
              <Shield className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block">
                PILLAR 02 // CONDITION INTEGRITY
              </span>
              <h3 className="text-xl font-display font-bold text-white">
                Verifiable 48-Point ePOD
              </h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              No vehicle changes custody without cryptographic proof. Our inspectors record 48 timestamped, geotagged photos mapped against BVRLA fair wear-and-tear criteria. Panels, wheels, glass, and charging cables are sealed digitally before transit commences.
            </p>
            <div className="pt-2 text-xs font-mono text-alkota-amber flex items-center gap-1">
              <span>Zero condition recharge friction</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 rounded-2xl bg-alkota-plate border border-white/10 space-y-5 relative group hover:border-emerald-400/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
              <Compass className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block">
                PILLAR 03 // HUMAN BENCHMARK
              </span>
              <h3 className="text-xl font-display font-bold text-white">
                Vetted Professional Handover
              </h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Every ALKOTA trade plate driver is thoroughly vetted with a minimum 5-year clean driving tenure and professional BVRLA appraisal training. We don&apos;t just deliver keys; we present the vehicle and complete detailed customer familiarisation.
            </p>
            <div className="pt-2 text-xs font-mono text-emerald-400 flex items-center gap-1">
              <span>Executive customer experience</span>
            </div>
          </div>
        </div>

        {/* Narrative Micro-Metric Banner */}
        <div className="mt-12 p-6 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-alkota-cyan" />
            <span>OPERATIONAL PRINCIPLE: EVERY MILE TELEMETERED. EVERY HANDOVER AUDITED.</span>
          </div>
          <a
            href="#technology"
            className="text-alkota-cyan hover:underline flex items-center gap-1 font-semibold"
          >
            <span>Explore Telemetry System</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
