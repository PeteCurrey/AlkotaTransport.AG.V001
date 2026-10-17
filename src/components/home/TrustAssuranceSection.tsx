import React from "react";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function TrustAssuranceSection() {
  return (
    <section id="trust" className="py-24 sm:py-32 bg-alkota-surface border-t border-alkota-border relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 pb-16">
          <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.2em] uppercase text-alkota-accent">
            <span className="w-5 h-[1px] bg-alkota-accent inline-block" />
            <span>STANDARDS & ASSURANCE</span>
          </div>
          <h2 className="font-display font-light text-[38px] sm:text-[52px] leading-[1.02] text-alkota-ivory">
            Rigorous governance. Verifiable standards.
          </h2>
          <p className="font-sans font-light text-[15px] sm:text-[16px] text-alkota-silver leading-relaxed">
            We publish only verifiable operational standards. No synthetic testimonials or ungrounded statistics—only verified insurance practices, transparent vetting, and auditable metrics.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.trustCredentials.map((cred, index) => (
            <div
              key={index}
              className="p-8 sm:p-10 border border-alkota-border bg-alkota-obsidian space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-[0.16em] uppercase text-alkota-accent border border-alkota-accent/30 px-2 py-0.5">
                    {cred.badge}
                  </span>
                  <span className="text-[11px] font-mono text-alkota-muted">
                    {cred.status}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-normal text-alkota-ivory">
                  {cred.title}
                </h3>

                <p className="text-sm font-sans font-light text-alkota-silver leading-relaxed">
                  {cred.description}
                </p>
              </div>

              {/* Verification Audit Note */}
              <div className="pt-4 border-t border-alkota-border text-xs font-mono text-alkota-muted">
                {cred.verificationNote}
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Due Diligence Box */}
        <div className="mt-12 p-6 sm:p-8 border border-alkota-border bg-alkota-obsidian flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-alkota-silver">
          <div className="max-w-xl">
            Enterprise due diligence packs (insurance schedules, SLA matrices, driver vetting criteria) are available upon request for commercial procurement teams.
          </div>
          <Link
            href="/contact"
            className="border border-white/20 hover:border-alkota-accent hover:text-white text-alkota-ivory px-4 py-2 uppercase tracking-[0.14em] text-[11px] transition-colors shrink-0"
          >
            Request Due Diligence Pack
          </Link>
        </div>
      </div>
    </section>
  );
}
