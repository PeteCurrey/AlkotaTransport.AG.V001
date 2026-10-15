import React from "react";
import { siteConfig } from "@/config/site";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ProcessTechnologySection() {
  return (
    <section id="technology" className="py-24 bg-alkota-plate relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-16">
          <span className="text-xs font-mono tracking-widest text-alkota-cyan uppercase block">
            THE ALKOTA PROTOCOL
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
            From Booking to Handover: Absolute Visibility.
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Every movement executes on our synchronized operational pipeline. Real-time driver telemetry, timestamped condition photography, and cryptographic sign-offs eliminate commercial blind spots.
          </p>
        </div>

        {/* Step-by-Step Interactive Telemetry Timeline */}
        <div className="space-y-6">
          {siteConfig.processSteps.map((step) => (
            <div
              key={step.step}
              className="p-8 rounded-2xl bg-alkota-abyss border border-white/10 hover:border-alkota-cyan/30 transition-all grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              {/* Step Number & Telemetry Badge */}
              <div className="lg:col-span-2 flex items-center lg:flex-col lg:items-start gap-4">
                <span className="text-4xl sm:text-5xl font-mono font-black text-slate-600 group-hover:text-alkota-cyan transition-colors">
                  {step.step}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider bg-white/5 border border-white/10 text-slate-400">
                  PHASE {step.step}
                </span>
              </div>

              {/* Title & Core Description */}
              <div className="lg:col-span-6 space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-alkota-cyan uppercase block">
                  {step.telemetryTag}
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Checkpoints & Security Badges */}
              <div className="lg:col-span-4 pt-4 lg:pt-0 lg:border-l lg:border-white/10 lg:pl-6 space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block">
                  SYSTEM CHECKPOINTS
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {step.details.map((detail, dIndex) => (
                    <li key={dIndex} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-alkota-cyan shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Real-Time Platform Architecture Callout */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-alkota-abyss to-black border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h4 className="text-lg font-display font-bold text-white">
              DataClear™ End-of-Lease Personal Data Erasure
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              In strict accordance with UK GDPR, our handover protocol includes physical erasure of customer infotainment data, paired phones, and saved home navigation addresses before vehicle remarketing.
            </p>
          </div>
          <div className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-emerald-400 flex items-center gap-2 shrink-0">
            <ShieldCheck className="w-4 h-4" />
            <span>UK GDPR COMPLIANT PROTOCOL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
