import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CtaStrip from "@/components/common/CtaStrip";

export const metadata: Metadata = {
  title: "Automotive Logistics Insights & Operational Guides | ALKOTA",
  description:
    "Authoritative operational guides, legal standards, and industry intelligence on UK trade plate logistics, BVRLA fair wear-and-tear defleet appraisals, and EV fleet movement.",
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title: "Automotive Logistics Insights & Operational Guides | ALKOTA",
    description:
      "Operational guides and industry intelligence on UK trade plate delivery, BVRLA defleet appraisals, and fleet movement logistics.",
    url: `${siteConfig.url}/insights`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automotive Logistics Guides & Fleet Insights | ALKOTA",
    description:
      "Operational guides and industry intelligence on UK trade plate delivery and fleet logistics.",
  },
};

export default function InsightsHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        name: "ALKOTA Automotive Logistics Intelligence & Guides",
        description:
          "Authoritative operational guides on UK vehicle movement, DVLA trade licence regulations, and BVRLA defleet inspection standards.",
        publisher: {
          "@type": "AutomotiveBusiness",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        blogPost: (siteConfig.articles || []).map((article) => ({
          "@type": "BlogPosting",
          headline: article.title,
          description: article.summary,
          datePublished: article.publishedDate,
          url: `${siteConfig.url}/insights/${article.slug}`,
          author: {
            "@type": "Person",
            name: article.author.name,
          },
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
          <Breadcrumbs items={[{ name: "Insights", href: "/insights" }]} />

          {/* Header */}
          <header className="max-w-3xl space-y-6">
            <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.2em] uppercase text-alkota-accent">
              <span className="w-5 h-[1px] bg-alkota-accent inline-block" />
              <span>LOGISTICS INTELLIGENCE</span>
            </div>
            <h1 className="font-display font-light text-[44px] sm:text-[64px] lg:text-[76px] leading-[0.96] text-alkota-ivory">
              Logistics intelligence & operational guides.
            </h1>
            <p className="font-sans font-light italic text-[16px] sm:text-[18px] text-alkota-silver leading-relaxed">
              Transparent, compliance-first operational guidance for UK fleet operators, dealership managers, and vehicle logistics procurement teams. Cross-referenced with DVLA regulations and BVRLA standards.
            </p>
          </header>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {(siteConfig.articles || []).map((article) => (
              <article
                key={article.slug}
                className="p-8 sm:p-10 border border-alkota-border bg-alkota-surface hover:border-alkota-accent/40 transition-colors flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-alkota-muted">
                    <span className="border border-white/10 px-2.5 py-0.5 text-[10px] tracking-[0.16em] uppercase text-alkota-silver">
                      {article.category}
                    </span>
                    <span>{article.readingTimeMinutes} min read</span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl font-normal text-alkota-ivory group-hover:text-white transition-colors leading-snug">
                    <Link href={`/insights/${article.slug}`} className="hover:underline focus:outline-none">
                      {article.title}
                    </Link>
                  </h2>

                  <p className="font-sans font-light text-sm text-alkota-silver leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-alkota-border flex items-center justify-between">
                  <span className="text-[11px] font-mono text-alkota-muted">
                    {article.publishedDate}
                  </span>

                  <Link
                    href={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.14em] uppercase text-alkota-ivory group-hover:text-alkota-accent transition-colors"
                  >
                    <span>Read Guide</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-alkota-muted group-hover:text-alkota-accent" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Editorial Standards Note */}
          <div className="p-6 border border-alkota-border bg-alkota-surface text-xs font-mono text-alkota-muted">
            EDITORIAL INTEGRITY: All guidance is authored by logistics professionals and cross-referenced with UK DVLA regulations and BVRLA standards.
          </div>

          {/* CTA Strip */}
          <CtaStrip
            title="Have an Operational Vehicle Logistics Question?"
            description="Our operations team assists fleet managers and dealership groups with complex corridor movements, defleet appraisals, and bespoke transport schedules."
          />
        </div>
      </div>
    </>
  );
}
