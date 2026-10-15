import React from "react";
import { Shield, Compass, Zap } from "lucide-react";

export default function FallbackSupercarCard() {
  return (
    <div className="w-full h-full min-h-[420px] rounded-2xl bg-gradient-to-br from-alkota-plate via-alkota-graphite to-alkota-abyss border border-alkota-border p-8 flex flex-col justify-between relative overflow-hidden">
      {/* Decorative Blueprint Grid */}
      <div className="absolute inset-0 bg-carbon-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-alkota-cyan/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Telemetry Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-alkota-cyan uppercase block">
            SUPERCAR TELEMETRY // SPEC-01
          </span>
          <span className="text-xl font-display font-bold text-white tracking-tight">
            ALKOTA ENCLOSED CARRIER
          </span>
        </div>
        <div className="px-3 py-1 rounded bg-alkota-cyan/10 border border-alkota-cyan/30 text-[11px] font-mono text-alkota-cyan">
          ZERO-DEFECT PROTOCOL
        </div>
      </div>

      {/* Center Stylized Silhouette & Specifications */}
      <div className="relative z-10 my-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-black/40 border border-white/5">
            <span className="text-[10px] font-mono text-slate-500 uppercase block">Transport Bed</span>
            <span className="text-base font-semibold text-slate-200 mt-1 block">Hydraulic Low-Rake</span>
            <span className="text-xs text-slate-400 mt-0.5 block">&lt; 3° ramp angle for exotics</span>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-white/5">
            <span className="text-[10px] font-mono text-slate-500 uppercase block">Security & Climate</span>
            <span className="text-base font-semibold text-slate-200 mt-1 block">Insulated Hard-Shell</span>
            <span className="text-xs text-slate-400 mt-0.5 block">Weather & stone-chip immune</span>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-white/5 col-span-2 sm:col-span-1">
            <span className="text-[10px] font-mono text-slate-500 uppercase block">Tracking Feed</span>
            <span className="text-base font-semibold text-alkota-cyan mt-1 block">Encrypted GPS Beacon</span>
            <span className="text-xs text-slate-400 mt-0.5 block">Live corridor milestone feed</span>
          </div>
        </div>
      </div>

      {/* Bottom Indicators */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs text-slate-400 font-mono">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-alkota-cyan" />
          <span>High-Value Goods in Transit Policy</span>
        </div>
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-alkota-amber" />
          <span>Nationwide UK Single Carrier</span>
        </div>
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-emerald-400" />
          <span>High-Voltage EV Certified</span>
        </div>
      </div>
    </div>
  );
}
