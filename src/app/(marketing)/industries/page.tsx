import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
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
      <div className="min-h-screen bg-alkota-abyss text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumbs */}
          <Breadcrumbs items={[{ name: "Industries", href: "/industries" }]} />

          {/* Header */}
          <header className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-alkota-cyan">
              <Building2 className="w-3.5 h-3.5" />
              <span>B2B SECTOR TAILORED ARCHITECTURE</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-display font-black uppercase tracking-tight text-white leading-tight">
              Tailored Automotive Logistics for High-Volume Sectors.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Vehicle movement is not generic courier work. Every automotive sector operates under distinct commercial rhythms, contractual SLAs, and compliance benchmarks. We design dedicated logistics workflows to eliminate holding costs and accelerate stock turn.
            </p>
          </header>

          {/* Industry Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {siteConfig.sectors.map((sector) => (
              <article
                key={sector.slug || sector.id}
                className="p-8 rounded-2xl bg-alkota-plate border border-white/10 hover:border-alkota-cyan/30 transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-5">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono tracking-widest text-alkota-cyan uppercase block">
                      TARGET AUDIENCE // {sector.targetAudience}
                    </span>
                    <h2 className="text-2xl font-display font-bold text-white group-hover:text-alkota-cyan transition-colors">
                      {sector.title}
                    </h2>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-white/5">
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">
                        THE SECTOR CHALLENGE
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {sector.painPoint}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">
                        ALKOTA TAILORED WORKFLOW
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {sector.solution}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">SLA TARGET:</span>
                    <span className="text-alkota-cyan font-bold">{sector.slaMetric}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <Link
                    href={`/industries/${sector.slug || sector.id}`}
                    className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-alkota-cyan hover:underline"
                  >
                    <span>Explore Industry Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Master Service Agreement (MSA) Callout */}
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-lg font-display font-bold text-white">
                Enterprise Framework Agreements (MSA)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We structure high-volume master service agreements with bespoke corridor tariffs, guaranteed driver allocation SLAs, and centralized monthly billing for UK automotive groups.
              </p>
            </div>
            <a
              href="mailto:dispatch@alkota.co.uk?subject=Enterprise%20MSA%20Inquiry"
              className="px-6 py-3.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all shrink-0"
            >
              Request MSA Discovery Call
            </a>
          </div>

          {/* CTA Strip */}
          <CtaStrip
            title="Discuss Enterprise Fleet Logistics for Your Organisation"
            description="Our commercial operations team will review your monthly movement volume, key geographic corridors, and current SLA bottlenecks to structure an efficient logistics agreement."
          />
        </div>
      </div>
    </>
  );
}
