import React from "react";
import { siteConfig } from "@/config/site";
import { CheckCircle2 } from "lucide-react";

export default function CaseStudiesSection() {
  return (
    <section className="py-24 bg-alkota-plate relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono tracking-widest text-alkota-cyan uppercase block">
              OPERATIONAL EXCELLENCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
              Proven Movement Deployments.
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Examining real operational execution profiles across volume dealership transfers, high-security prototype logistics, and corporate EV fleet transitions.
            </p>
          </div>
          <div>
            <span className="px-3 py-1.5 rounded text-xs font-mono bg-white/5 border border-white/10 text-slate-400">
              VERIFIED DEPLOYMENT ARCHITECTURE
            </span>
          </div>
        </div>

        {/* Case Studies Framework Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.caseStudyFramework.map((cs, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-alkota-abyss border border-white/10 flex flex-col justify-between space-y-6 hover:border-alkota-cyan/30 transition-all"
            >
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-widest text-alkota-cyan uppercase block">
                    {cs.movementType}
                  </span>
                  <h3 className="text-xl font-display font-bold text-white">
                    {cs.sector}
                  </h3>
                </div>

                <div className="space-y-3 pt-3 border-t border-white/5 text-sm text-slate-300 leading-relaxed">
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">
                      THE OPERATIONAL CHALLENGE
                    </span>
                    <p className="text-xs text-slate-300">{cs.challenge}</p>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">
                      ALKOTA LOGISTICS SOLUTION
                    </span>
                    <p className="text-xs text-slate-300">{cs.solutionProvided}</p>
                  </div>
                </div>
              </div>

              {/* Outcome Strip */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block">
                  DELIVERY OUTCOME
                </span>
                <p className="text-xs font-medium text-slate-200">
                  {cs.operationalOutcome}
                </p>
                <div className="pt-2 text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{cs.verifiedStatus}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
