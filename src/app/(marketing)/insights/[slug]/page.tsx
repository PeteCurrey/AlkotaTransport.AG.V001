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
      <div className="min-h-screen bg-alkota-abyss text-white pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { name: "Insights", href: "/insights" },
              { name: article.title, href: `/insights/${article.slug}` },
            ]}
          />

          {/* Article Header */}
          <header className="space-y-6 border-b border-white/10 pb-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-alkota-cyan">
                {article.category}
              </span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>{article.publishedDate}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>{article.readingTimeMinutes} min read</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed font-normal">
              {article.summary}
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs font-mono text-slate-400">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-alkota-cyan font-bold">
                <User className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-200 font-semibold block">{article.author.name}</span>
                <span className="text-slate-500 block">{article.author.role}</span>
              </div>
            </div>
          </header>

          {/* Article Body Sections */}
          <article className="space-y-10 text-slate-300 leading-relaxed">
            {article.sections.map((section, index) => (
              <section key={index} className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-white tracking-tight pt-2">
                  {section.heading}
                </h2>

                {section.subheading && (
                  <h3 className="text-lg font-display font-semibold text-slate-200">
                    {section.subheading}
                  </h3>
                )}

                {section.paragraphs.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {section.checkpoints && section.checkpoints.length > 0 && (
                  <div className="p-6 rounded-2xl bg-alkota-plate border border-white/10 space-y-2.5 my-4">
                    {section.checkpoints.map((cp, cpIdx) => (
                      <div key={cpIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-alkota-cyan shrink-0 mt-0.5" />
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
            <section className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <span className="text-xs font-mono text-alkota-cyan uppercase tracking-widest block">
                RELEVANT COMMERCIAL SERVICES
              </span>
              <h3 className="text-lg font-display font-bold text-white">
                ALKOTA Logistics Deployments Supporting This Standard
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {article.relatedServices.map((serviceSlug) => {
                  const service = siteConfig.services.find((s) => s.slug === serviceSlug);
                  if (!service) return null;
                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="p-4 rounded-xl bg-alkota-plate border border-white/10 hover:border-alkota-cyan/30 transition-all flex flex-col justify-between group"
                    >
                      <span className="text-sm font-semibold text-white group-hover:text-alkota-cyan transition-colors">
                        {service.title}
                      </span>
                      <span className="text-xs font-mono text-alkota-cyan flex items-center gap-1 mt-2">
                        <span>Service details</span>
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
              subtitle="Operational questions related to this guide."
            />
          )}

          {/* Commercial CTA Strip */}
          <CtaStrip
            title="Need Practical Assistance With UK Vehicle Movements?"
            description="Our operations desk works with fleet operators, dealership groups, and vehicle lessors to design seamless, compliant movement corridors."
          />
        </div>
      </div>
    </>
  );
}
