"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CommercialSectorsSection() {
  const [activeTab, setActiveTab] = useState(siteConfig.sectors[0].id);
  const activeSector = siteConfig.sectors.find((s) => s.id === activeTab) || siteConfig.sectors[0];

  return (
    <section id="industries" className="py-24 bg-alkota-abyss relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-12">
          <span className="text-xs font-mono tracking-widest text-alkota-cyan uppercase block">
            B2B SECTOR TAILORED ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
            Commercial Logistics For High-Volume Operators.
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Automotive logistics is not one-size-fits-all. We architect dedicated SLAs and integrated digital workflows tailored to the exact operational rhythms of your industry sector.
          </p>
        </div>

        {/* Desktop Tabs / Mobile Selector */}
        <div className="flex flex-wrap gap-2 pb-8 border-b border-white/10">
          {siteConfig.sectors.map((sector) => {
            const isActive = sector.id === activeTab;
            return (
              <button
                key={sector.id}
                onClick={() => setActiveTab(sector.id)}
                className={`px-4 py-2.5 rounded-lg text-xs font-mono tracking-wider uppercase transition-all ${
                  isActive
                    ? "bg-alkota-cyan text-black font-bold shadow-telemetry-cyan"
                    : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {sector.title.split(" ")[0]}
              </button>
            );
          })}
        </div>

        {/* Active Sector Feature Card */}
        <div className="mt-8 p-8 sm:p-12 rounded-2xl bg-alkota-plate border border-white/10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Sector Specs */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-alkota-cyan uppercase tracking-widest block">
                  TARGET AUDIENCE: {activeSector.targetAudience}
                </span>
                <h3 className="text-2xl sm:text-4xl font-display font-bold text-white">
                  {activeSector.title}
                </h3>
              </div>

              {/* Pain Point vs Solution Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-2">
                  <span className="text-[10px] font-mono uppercase text-red-400 block tracking-wider">
                    OPERATIONAL FRICTION
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {activeSector.painPoint}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-black/40 border border-alkota-cyan/20 space-y-2">
                  <span className="text-[10px] font-mono uppercase text-alkota-cyan block tracking-wider">
                    THE ALKOTA SOLUTION
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {activeSector.solution}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-mono font-bold tracking-wider uppercase bg-gradient-to-r from-alkota-amber to-orange-600 text-white hover:brightness-110 shadow-telemetry-amber transition-all"
                >
                  <span>Request Enterprise Rate Card</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Operational SLA Metric Callout */}
            <div className="lg:col-span-4 p-8 rounded-xl bg-black/50 border border-white/10 flex flex-col justify-center items-center text-center space-y-3">
              <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                CONTRACTUAL SLA TARGET
              </span>
              <span className="text-4xl sm:text-5xl font-mono font-black text-alkota-cyan tracking-tight">
                {activeSector.slaMetric}
              </span>
              <p className="text-xs text-slate-300 max-w-xs">
                {activeSector.slaDescription}
              </p>
              <div className="pt-4 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Contract SLA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
