import React from "react";
import Link from "next/link";

export default function BrandNarrativeSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-alkota-surface border-t border-alkota-border relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Statement */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.2em] uppercase text-alkota-accent">
              <span className="w-5 h-[1px] bg-alkota-accent inline-block" />
              <span>THE OPERATIONAL REALITY</span>
            </div>

            <h2 className="font-display font-light text-[38px] sm:text-[52px] leading-[1.04] text-alkota-ivory">
              Vehicle movement is high-stakes. Uncertainty is not an option.
            </h2>

            <p className="font-sans font-light italic text-[15px] sm:text-[16px] text-alkota-silver leading-relaxed">
              When high-value inventory relocates across the country, transparency is the difference between a successful handover and a costly dispute.
            </p>
          </div>

          {/* Right Column: Detailed Narrative with Minimalist Rows */}
          <div className="lg:col-span-7 space-y-10">
            <p className="font-sans font-light text-[15px] sm:text-[16px] text-alkota-silver leading-[1.8]">
              Automotive logistics in Britain has historically suffered from fragmented sub-contracting, unpredictable delivery windows, and manual condition ambiguity. ALKOTA replaces guesswork with verified single-carrier operations, disciplined driver onboarding, and continuous digital telemetry.
            </p>

            <div className="space-y-6 pt-6 border-t border-alkota-border">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 pb-6 border-b border-alkota-border">
                <span className="sm:col-span-3 text-[11px] font-mono tracking-[0.16em] uppercase text-alkota-muted">
                  01 // DISPATCH
                </span>
                <div className="sm:col-span-9 space-y-1">
                  <h3 className="text-base font-sans font-normal text-alkota-ivory">
                    Corridor Optimization
                  </h3>
                  <p className="text-sm font-sans font-light text-alkota-silver leading-relaxed">
                    Active movements matched across major UK transit corridors to eliminate unnecessary delays and reduce transit lead times.
                  </p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 pb-6 border-b border-alkota-border">
                <span className="sm:col-span-3 text-[11px] font-mono tracking-[0.16em] uppercase text-alkota-muted">
                  02 // INTEGRITY
                </span>
                <div className="sm:col-span-9 space-y-1">
                  <h3 className="text-base font-sans font-normal text-alkota-ivory">
                    48-Point Digital ePOD
                  </h3>
                  <p className="text-sm font-sans font-light text-alkota-silver leading-relaxed">
                    High-resolution timestamped condition appraisal aligned with BVRLA standards before vehicle custody transfers.
                  </p>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6">
                <span className="sm:col-span-3 text-[11px] font-mono tracking-[0.16em] uppercase text-alkota-muted">
                  03 // VETTING
                </span>
                <div className="sm:col-span-9 space-y-1">
                  <h3 className="text-base font-sans font-normal text-alkota-ivory">
                    Professional Handover Standards
                  </h3>
                  <p className="text-sm font-sans font-light text-alkota-silver leading-relaxed">
                    Uniformed, experienced drivers delivering clear customer familiarisation and meticulous key handling.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/technology"
                className="text-alkota-silver font-sans font-light text-sm hover:text-white inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Read about our technology and auditing protocol</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
