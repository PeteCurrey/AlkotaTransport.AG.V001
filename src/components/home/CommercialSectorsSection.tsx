"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowUpRight } from "lucide-react";

export default function CommercialSectorsSection() {
  const [activeTab, setActiveTab] = useState(siteConfig.sectors[0].id);
  const activeSector = siteConfig.sectors.find((s) => s.id === activeTab) || siteConfig.sectors[0];

  return (
    <section id="industries" className="py-24 sm:py-32 bg-alkota-surface border-t border-alkota-border relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 pb-12">
          <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.2em] uppercase text-alkota-accent">
            <span className="w-5 h-[1px] bg-alkota-accent inline-block" />
            <span>INDUSTRY VERTICALS</span>
          </div>
          <h2 className="font-display font-light text-[38px] sm:text-[52px] leading-[1.02] text-alkota-ivory">
            Architected around enterprise volume.
          </h2>
          <p className="font-sans font-light text-[15px] sm:text-[16px] text-alkota-silver leading-relaxed">
            Automotive logistics is not one-size-fits-all. We align operational SLAs with the specific inventory rhythms of dealerships, leasing portfolios, and remarketing auctions.
          </p>
        </div>

        {/* Minimalist Sector Selector */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 pb-6 border-b border-alkota-border">
          {siteConfig.sectors.map((sector) => {
            const isActive = sector.id === activeTab;
            return (
              <button
                key={sector.id}
                onClick={() => setActiveTab(sector.id)}
                className={`pb-3 text-xs font-mono tracking-[0.16em] uppercase transition-all relative ${
                  isActive
                    ? "text-alkota-ivory font-medium"
                    : "text-alkota-muted hover:text-alkota-silver"
                }`}
              >
                <span>{sector.title}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-alkota-accent" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Sector Showcase */}
        <div className="pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Specs */}
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-alkota-muted block">
                  TARGET OPERATORS: {activeSector.targetAudience}
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-normal text-alkota-ivory">
                  {activeSector.title}
                </h3>
              </div>

              {/* Operational Comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-alkota-border">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-alkota-muted block">
                    SECTOR CHALLENGE
                  </span>
                  <p className="text-sm font-sans font-light text-alkota-silver leading-relaxed">
                    {activeSector.painPoint}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-alkota-accent block">
                    ALKOTA PROTOCOL
                  </span>
                  <p className="text-sm font-sans font-light text-alkota-silver leading-relaxed">
                    {activeSector.solution}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-6">
                <Link
                  href={`/industries/${activeSector.slug || activeSector.id}`}
                  className="border border-white/20 hover:border-alkota-accent text-alkota-ivory hover:text-white font-mono text-[11px] tracking-[0.14em] uppercase px-6 py-3.5 transition-colors inline-flex items-center gap-2"
                >
                  <span>Sector Capabilities</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-alkota-muted" />
                </Link>

                <Link
                  href="/contact"
                  className="text-xs font-mono tracking-[0.14em] uppercase text-alkota-silver hover:text-white transition-colors"
                >
                  Request Commercial Terms &rarr;
                </Link>
              </div>
            </div>

            {/* Right SLA Benchmark */}
            <div className="lg:col-span-4 p-8 border border-alkota-border bg-alkota-obsidian space-y-3">
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-alkota-muted block">
                CONTRACTUAL SLA TARGET
              </span>
              <span className="text-4xl sm:text-5xl font-mono font-light text-alkota-ivory tracking-tight block">
                {activeSector.slaMetric}
              </span>
              <p className="text-xs font-sans font-light text-alkota-silver leading-relaxed">
                {activeSector.slaDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
