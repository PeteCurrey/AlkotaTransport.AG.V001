import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

const caseStudyImages = [
  "/images/case-pinnacle.jpg",
  "/images/case-meridian.jpg",
  "/images/dealership.png",
];

export default function CaseStudiesSection() {
  return (
    <section className="py-24 sm:py-32 bg-alkota-obsidian border-t border-alkota-border relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-alkota-border">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.2em] uppercase text-alkota-accent">
              <span className="w-5 h-[1px] bg-alkota-accent inline-block" />
              <span>CASE HISTORIES</span>
            </div>
            <h2 className="font-display font-light text-[38px] sm:text-[52px] leading-[1.02] text-alkota-ivory">
              Proven movement deployments.
            </h2>
            <p className="font-sans font-light text-[15px] sm:text-[16px] text-alkota-silver leading-relaxed">
              Real operational profiles across volume dealership rebalancing, covered prototype transfers, and corporate fleet repatriations.
            </p>
          </div>
        </div>

        {/* Case Studies Editorial Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.caseStudyFramework.map((cs, index) => (
            <div
              key={index}
              className="border border-alkota-border bg-alkota-surface flex flex-col justify-between overflow-hidden group"
            >
              {/* Image Frame */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-alkota-obsidian">
                <Image
                  src={caseStudyImages[index % caseStudyImages.length]}
                  alt={cs.sector}
                  fill
                  className="object-cover object-center grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 text-[10px] font-mono tracking-[0.16em] uppercase bg-black/80 backdrop-blur-sm text-alkota-ivory border border-white/15">
                    {cs.movementType}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-display text-2xl font-normal text-alkota-ivory">
                    {cs.sector}
                  </h3>

                  <div className="space-y-3 pt-2 text-xs font-sans font-light text-alkota-silver leading-relaxed">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-alkota-muted block mb-1">
                        REQUIREMENT
                      </span>
                      <p>{cs.challenge}</p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-alkota-accent block mb-1">
                        DEPLOYMENT
                      </span>
                      <p>{cs.solutionProvided}</p>
                    </div>
                  </div>
                </div>

                {/* Outcome */}
                <div className="pt-4 border-t border-alkota-border">
                  <span className="text-[10px] font-mono text-alkota-muted uppercase tracking-[0.16em] block mb-1">
                    RESULT
                  </span>
                  <p className="text-xs font-sans text-alkota-ivory font-normal">
                    {cs.operationalOutcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
