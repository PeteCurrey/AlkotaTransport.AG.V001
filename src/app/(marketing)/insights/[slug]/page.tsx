import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, User, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FaqAccordion from "@/components/common/FaqAccordion";
import CtaStrip from "@/components/common/CtaStrip";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return (siteConfig.articles || []).map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = (siteConfig.articles || []).find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | ALKOTA Insights`,
    description: article.metaDescription,
    alternates: {
      canonical: `/insights/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | ALKOTA Insights`,
      description: article.metaDescription,
      url: `${siteConfig.url}/insights/${article.slug}`,
      type: "article",
      publishedTime: article.publishedDate,
      authors: [article.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.metaDescription,
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = (siteConfig.articles || []).find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteConfig.url}/insights/${article.slug}#article`,
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedDate,
    dateModified: article.publishedDate,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      "@type": "AutomotiveBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/brand/logo-light.svg`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/insights/${article.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-alkota-obsidian text-alkota-ivory pt-32 pb-24 border-b border-alkota-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { name: "Insights", href: "/insights" },
              { name: article.title, href: `/insights/${article.slug}` },
            ]}
          />

          {/* Article Header */}
          <header className="space-y-8 border-b border-alkota-border pb-12">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-alkota-silver">
              <span className="text-alkota-accent tracking-widest uppercase">
                {article.category}
              </span>
              <span>/</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-alkota-muted" />
                <span>{article.publishedDate}</span>
              </div>
              <span>/</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-alkota-muted" />
                <span>{article.readingTimeMinutes} min read</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-normal text-alkota-ivory tracking-tight leading-[1.1]">
              {article.title}
            </h1>

            <p className="text-lg sm:text-xl text-alkota-silver leading-relaxed font-light">
              {article.summary}
            </p>

            <div className="flex items-center gap-4 pt-4 text-xs font-mono text-alkota-silver border-t border-alkota-border/60">
              <div className="w-9 h-9 bg-alkota-surface border border-alkota-border flex items-center justify-center text-alkota-accent font-bold">
                <User className="w-4 h-4" />
              </div>
              <div>
                <span className="text-alkota-ivory font-medium block">{article.author.name}</span>
                <span className="text-alkota-muted block">{article.author.role}</span>
              </div>
            </div>
          </header>

          {/* Article Body Sections */}
          <article className="space-y-12 text-alkota-silver leading-relaxed">
            {article.sections.map((section, index) => (
              <section key={index} className="space-y-5">
                <h2 className="text-2xl sm:text-3xl font-display font-normal text-alkota-ivory tracking-tight pt-2">
                  {section.heading}
                </h2>

                {section.subheading && (
                  <h3 className="text-lg font-display font-normal text-alkota-ivory/90">
                    {section.subheading}
                  </h3>
                )}

                {section.paragraphs.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-base text-alkota-silver leading-relaxed font-light">
                    {paragraph}
                  </p>
                ))}

                {section.checkpoints && section.checkpoints.length > 0 && (
                  <div className="p-6 sm:p-8 bg-alkota-surface border border-alkota-border space-y-3 my-6">
                    {section.checkpoints.map((cp, cpIdx) => (
                      <div key={cpIdx} className="flex items-start gap-3 text-xs sm:text-sm text-alkota-ivory font-light">
                        <CheckCircle2 className="w-4 h-4 text-alkota-accent shrink-0 mt-0.5" />
                        <span>{cp}</span>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </article>

          {/* Contextual Internal Links: Related Services */}
          {article.relatedServices && article.relatedServices.length > 0 && (
            <section className="p-8 bg-alkota-surface border border-alkota-border space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono text-alkota-silver uppercase tracking-widest block">
                  CAPABILITY MATRIX
                </span>
                <h3 className="text-2xl font-display font-normal text-alkota-ivory">
                  Alkota Operations Supporting This Standard
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {article.relatedServices.map((serviceSlug) => {
                  const service = siteConfig.services.find((s) => s.slug === serviceSlug);
                  if (!service) return null;
                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="p-5 bg-alkota-obsidian border border-alkota-border hover:border-alkota-silver/40 transition-all flex flex-col justify-between group"
                    >
                      <span className="text-base font-display font-normal text-alkota-ivory group-hover:text-alkota-accent transition-colors">
                        {service.title}
                      </span>
                      <span className="text-xs font-mono text-alkota-silver group-hover:text-alkota-ivory flex items-center gap-1 mt-4 transition-colors">
                        <span>Service specification</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* Frequently Asked Questions */}
          {article.faqs && article.faqs.length > 0 && (
            <FaqAccordion
              faqs={article.faqs}
              title="Frequently Asked Questions"
              subtitle="Operational questions related to this briefing."
            />
          )}

          {/* Commercial CTA Strip */}
          <CtaStrip
            title="Need Practical Guidance on Fleet Corridors?"
            description="Our operations desk collaborates with fleet directors, dealer principals, and vehicle lessors to design bespoke transport SLAs and scheduled movements."
          />
        </div>
      </div>
    </>
  );
}
