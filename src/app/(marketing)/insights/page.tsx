import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight, ShieldCheck } from "lucide-react";
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
      <div className="min-h-screen bg-alkota-abyss text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumbs */}
          <Breadcrumbs items={[{ name: "Insights", href: "/insights" }]} />

          {/* Header */}
          <header className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-alkota-cyan">
              <BookOpen className="w-3.5 h-3.5" />
              <span>INDUSTRY INTELLIGENCE & PRACTICAL GUIDANCE</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-display font-black uppercase tracking-tight text-white leading-tight">
              Automotive Logistics Intelligence & Practical Guides.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Transparent, compliance-first operational guidance for UK fleet operators, dealership managers, and vehicle logistics procurement teams. No marketing fluff—only verified regulations and practical fleet procedures.
            </p>
          </header>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {(siteConfig.articles || []).map((article) => (
              <article
                key={article.slug}
                className="p-8 rounded-2xl bg-alkota-plate border border-white/10 hover:border-alkota-cyan/30 transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-alkota-cyan">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>{article.readingTimeMinutes} min read</span>
                    </div>
                  </div>

                  <h2 className="text-2xl font-display font-bold text-white group-hover:text-alkota-cyan transition-colors leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="text-[11px] font-mono text-slate-500">
                    <span>Published: {article.publishedDate}</span>
                  </div>

                  <Link
                    href={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-alkota-cyan hover:underline"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Editorial Standards Note */}
          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3 text-xs font-mono text-slate-400">
            <ShieldCheck className="w-5 h-5 text-alkota-cyan shrink-0" />
            <span>
              EDITORIAL INTEGRITY: All guidance is authored by logistics professionals and cross-referenced with UK DVLA regulations and BVRLA standards.
            </span>
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
