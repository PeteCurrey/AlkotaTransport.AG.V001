import React from "react";
import { siteConfig } from "@/config/site";
import { Lock, CheckCircle2 } from "lucide-react";

export default function TrustAssuranceSection() {
  return (
    <section id="trust" className="py-24 bg-alkota-abyss relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-16">
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase block">
            VERIFIABLE ASSURANCE BENCHMARKS
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
            Rigorous Governance. Verified Standards.
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            We publish only verifiable operational standards. No synthetic testimonials or ungrounded statistics—only verified insurance practices, transparent vetting, and auditable metrics.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.trustCredentials.map((cred, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-alkota-plate border border-white/10 space-y-5 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded text-xs font-mono font-semibold tracking-wider uppercase bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    {cred.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {cred.status}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-white">
                  {cred.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {cred.description}
                </p>
              </div>

              {/* Verification Audit Note */}
              <div className="pt-4 border-t border-white/5 flex items-start gap-2.5 text-xs font-mono text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{cred.verificationNote}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Due Diligence Box */}
        <div className="mt-12 p-6 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <Lock className="w-4 h-4 text-slate-300" />
            <span>ENTERPRISE DUE DILIGENCE PACKS (INSURANCE SCHEDULES, SLA MATRICES, RISK ASSESSMENTS) AVAILABLE UPON REQUEST</span>
          </div>
          <a
            href="mailto:dispatch@alkota.co.uk"
            className="text-white hover:text-alkota-cyan transition-colors underline shrink-0"
          >
            Request Due Diligence Pack
          </a>
        </div>
      </div>
    </section>
  );
}
