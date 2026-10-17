import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CtaStrip from "@/components/common/CtaStrip";

export const metadata: Metadata = {
  title: "Automotive Logistics by Industry Sector | B2B Solutions",
  description:
    "Tailored vehicle movement solutions engineered for high-volume automotive operators: franchise dealership networks, contract hire & leasing companies, corporate fleets, rental operators, auctions, and online retailers.",
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Automotive Logistics Solutions by Industry Sector | ALKOTA",
    description:
      "Enterprise vehicle movement architecture engineered for UK dealership groups, leasing companies, corporate fleets, and remarketing auctions.",
    url: `${siteConfig.url}/industries`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industry Automotive Logistics Solutions | ALKOTA",
    description:
      "Enterprise vehicle movement architecture engineered for UK dealership groups, leasing companies, and corporate fleets.",
  },
};

export default function IndustriesHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        name: "ALKOTA Automotive Logistics Solutions by Industry Sector",
        itemListElement: siteConfig.sectors.map((sector, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${siteConfig.url}/industries/${sector.slug || sector.id}`,
          name: sector.title,
          description: sector.painPoint,
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-alkota-obsidian text-alkota-ivory pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-16">
          {/* Breadcrumbs */}
          <Breadcrumbs items={[{ name: "Industries", href: "/industries" }]} />

          {/* Header */}
          <header className="max-w-3xl space-y-6">
            <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.2em] uppercase text-alkota-accent">
              <span className="w-5 h-[1px] bg-alkota-accent inline-block" />
              <span>COMMERCIAL SECTORS</span>
            </div>
            <h1 className="font-display font-light text-[44px] sm:text-[64px] lg:text-[76px] leading-[0.96] text-alkota-ivory">
              Tailored logistics for high-volume sectors.
            </h1>
            <p className="font-sans font-light italic text-[16px] sm:text-[18px] text-alkota-silver leading-relaxed">
              Every automotive sector operates under distinct inventory rhythms, contractual SLAs, and compliance benchmarks. We design dedicated logistics workflows to eliminate holding costs and accelerate stock turn.
            </p>
          </header>

          {/* Industry Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {siteConfig.sectors.map((sector) => (
              <article
                key={sector.slug || sector.id}
                className="p-8 border border-alkota-border bg-alkota-surface flex flex-col justify-between space-y-6 group hover:border-alkota-accent/40 transition-colors"
              >
                <div className="space-y-5">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono tracking-[0.16em] uppercase text-alkota-muted block">
                      {sector.targetAudience}
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-normal text-alkota-ivory group-hover:text-white transition-colors">
                      {sector.title}
                    </h2>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-alkota-border">
                    <div>
                      <span className="text-[10px] font-mono text-alkota-muted uppercase tracking-[0.16em] block mb-1">
                        SECTOR CHALLENGE
                      </span>
                      <p className="text-xs font-sans font-light text-alkota-silver leading-relaxed">
                        {sector.painPoint}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-alkota-accent uppercase tracking-[0.16em] block mb-1">
                        ALKOTA WORKFLOW
                      </span>
                      <p className="text-xs font-sans font-light text-alkota-silver leading-relaxed">
                        {sector.solution}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 border border-alkota-border bg-alkota-obsidian flex items-center justify-between text-xs font-mono">
                    <span className="text-alkota-muted">SLA TARGET:</span>
                    <span className="text-alkota-ivory">{sector.slaMetric}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-alkota-border">
                  <Link
                    href={`/industries/${sector.slug || sector.id}`}
                    className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.14em] uppercase text-alkota-ivory group-hover:text-alkota-accent transition-colors"
                  >
                    <span>Sector Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-alkota-muted group-hover:text-alkota-accent" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Master Service Agreement (MSA) Callout */}
          <div className="p-8 sm:p-12 border border-alkota-border bg-alkota-surface flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-alkota-accent block">
                ENTERPRISE CONTRACTS
              </span>
              <h3 className="font-display text-2xl font-normal text-alkota-ivory">
                Master Framework Agreements (MSA)
              </h3>
              <p className="text-xs sm:text-sm font-sans font-light text-alkota-silver leading-relaxed">
                We structure high-volume master service agreements with bespoke corridor tariffs, guaranteed driver allocation SLAs, and centralized monthly reporting for UK automotive groups.
              </p>
            </div>
            <Link
              href="/contact"
              className="border border-white/20 hover:border-alkota-accent text-alkota-ivory hover:text-white px-6 py-3.5 text-xs font-mono tracking-[0.14em] uppercase transition-colors shrink-0"
            >
              Request MSA Terms
            </Link>
          </div>

          {/* CTA Strip */}
          <CtaStrip
            title="Discuss Enterprise Logistics for Your Organisation"
            description="Our commercial operations team will review your monthly movement volume, key geographic corridors, and current SLA bottlenecks to structure an efficient logistics agreement."
          />
        </div>
      </div>
    </>
  );
}
