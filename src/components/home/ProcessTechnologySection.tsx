import React from "react";
import { siteConfig } from "@/config/site";

export default function ProcessTechnologySection() {
  return (
    <section id="technology" className="py-24 sm:py-32 bg-alkota-obsidian border-t border-alkota-border relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 pb-16">
          <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.2em] uppercase text-alkota-accent">
            <span className="w-5 h-[1px] bg-alkota-accent inline-block" />
            <span>OPERATING PROTOCOL</span>
          </div>
          <h2 className="font-display font-light text-[38px] sm:text-[52px] leading-[1.02] text-alkota-ivory">
            Absolute visibility, from collection to handover.
          </h2>
          <p className="font-sans font-light text-[15px] sm:text-[16px] text-alkota-silver leading-relaxed">
            Every movement follows our standardized 4-stage operational protocol. Timestamped condition photography, continuous corridor telemetry, and verified cryptographic proof of delivery.
          </p>
        </div>

        {/* Process Timeline Rows */}
        <div className="divide-y divide-alkota-border">
          {siteConfig.processSteps.map((step) => (
            <div
              key={step.step}
              className="py-10 sm:py-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                {/* Step Number & Tag */}
                <div className="lg:col-span-2 flex items-baseline gap-3">
                  <span className="font-mono text-2xl font-light text-alkota-muted">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.16em] uppercase text-alkota-silver border border-white/10 px-2 py-0.5">
                    {step.telemetryTag}
                  </span>
                </div>

                {/* Title & Core Description */}
                <div className="lg:col-span-6 space-y-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-normal text-alkota-ivory">
                    {step.title}
                  </h3>
                  <p className="font-sans font-light text-sm text-alkota-silver leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>

                {/* Checkpoints */}
                <div className="lg:col-span-4 pt-2 lg:pt-0 space-y-2">
                  <span className="text-[10px] font-mono tracking-[0.16em] uppercase text-alkota-muted block">
                    AUDIT PARAMETERS
                  </span>
                  <ul className="space-y-1.5 text-xs font-sans font-light text-alkota-silver">
                    {step.details.map((detail, dIndex) => (
                      <li key={dIndex} className="flex items-start gap-2">
                        <span className="text-alkota-accent">&bull;</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DataClear Protocol Callout */}
        <div className="mt-16 p-8 sm:p-10 border border-alkota-border bg-alkota-surface flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-alkota-accent block">
              PRIVACY COMPLIANCE
            </span>
            <h4 className="font-display text-xl sm:text-2xl font-normal text-alkota-ivory">
              DataClear™ Infotainment & Personal Data Erasure
            </h4>
            <p className="text-xs sm:text-sm font-sans font-light text-alkota-silver leading-relaxed">
              In accordance with UK GDPR, defleet and remarketing collections include protocol-verified factory reset of paired Bluetooth devices, navigation history, and stored personal data before vehicle redistribution.
            </p>
          </div>

          <div className="border border-white/15 px-4 py-2.5 text-[11px] font-mono tracking-[0.14em] uppercase text-alkota-ivory shrink-0">
            UK GDPR ALIGNED
          </div>
        </div>
      </div>
    </section>
  );
}
