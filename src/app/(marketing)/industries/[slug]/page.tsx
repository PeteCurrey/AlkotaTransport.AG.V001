import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Building2, CheckCircle2, AlertCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FaqAccordion from "@/components/common/FaqAccordion";
import CtaStrip from "@/components/common/CtaStrip";

interface IndustryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return siteConfig.sectors.map((sector) => ({
    slug: sector.slug || sector.id,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const sector = siteConfig.sectors.find((s) => (s.slug || s.id) === slug);

  if (!sector) {
    return {
      title: "Industry Solution Not Found",
    };
  }

  const titleMap: Record<string, string> = {
    "dealership-groups": "Vehicle Movement Logistics for Dealership Groups | ALKOTA",
    "contract-hire-leasing": "Defleet & Logistics for Contract Hire & Leasing | ALKOTA",
    "corporate-fleets": "Corporate Fleet Vehicle Movement Logistics | ALKOTA",
    "vehicle-rental": "Fleet Redistribution for Vehicle Rental Operators | ALKOTA",
    "remarketing-auctions": "Logistics & Compound Intake for Vehicle Auctions | ALKOTA",
    "online-automotive-retail": "White-Glove Handover Logistics for Online Car Retailers | ALKOTA",
  };

  const title = titleMap[sector.slug || sector.id] || `${sector.title} Logistics | ALKOTA`;

  return {
    title,
    description: sector.painPoint,
    alternates: {
      canonical: `/industries/${sector.slug || sector.id}`,
    },
    openGraph: {
      title,
      description: sector.solution,
      url: `${siteConfig.url}/industries/${sector.slug || sector.id}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: sector.painPoint,
    },
  };
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const sector = siteConfig.sectors.find((s) => (s.slug || s.id) === slug);

  if (!sector) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/industries/${sector.slug || sector.id}#service`,
    name: sector.title,
    description: sector.solution,
    serviceType: "Automotive Logistics",
    provider: {
      "@type": "AutomotiveBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.telephone,
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-alkota-obsidian text-alkota-ivory pt-32 pb-24 border-b border-alkota-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { name: "Industries", href: "/industries" },
              { name: sector.title, href: `/industries/${sector.slug || sector.id}` },
            ]}
          />

          {/* Sector Hero Header */}
          <header className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-alkota-silver uppercase">
              <Building2 className="w-3.5 h-3.5 text-alkota-accent" />
              <span>INDUSTRY PROFILE // {sector.targetAudience}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-normal tracking-tight text-alkota-ivory leading-[1.08]">
              {sector.title}
            </h1>

            <p className="text-lg sm:text-xl text-alkota-silver leading-relaxed font-light">
              {sector.detailedContext || sector.solution}
            </p>

            <div className="p-6 bg-alkota-surface border border-alkota-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono text-alkota-muted uppercase tracking-wider block">
                  CONTRACTUAL SLA COMMITMENT
                </span>
                <span className="text-2xl font-mono text-alkota-accent block mt-1">
                  {sector.slaMetric}
                </span>
              </div>
              <p className="text-xs text-alkota-silver max-w-sm font-light">
                {sector.slaDescription}
              </p>
            </div>
          </header>

          {/* Sector Challenge & Solution Box */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 bg-alkota-surface border border-alkota-border space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-alkota-silver uppercase tracking-widest">
                <AlertCircle className="w-4 h-4 text-alkota-muted" />
                <span>OPERATIONAL VULNERABILITY</span>
              </div>
              <h2 className="text-2xl font-display font-normal text-alkota-ivory">
                The Sector Challenge
              </h2>
              <p className="text-sm text-alkota-silver leading-relaxed font-light">
                {sector.painPoint}
              </p>
            </div>

            <div className="p-8 sm:p-10 bg-alkota-surface border border-alkota-border space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-alkota-accent uppercase tracking-widest">
                <CheckCircle2 className="w-4 h-4 text-alkota-accent" />
                <span>ALKOTA RESOLUTION</span>
              </div>
              <h2 className="text-2xl font-display font-normal text-alkota-ivory">
                Engineered Protocol
              </h2>
              <p className="text-sm text-alkota-silver leading-relaxed font-light">
                {sector.solution}
              </p>
            </div>
          </section>

          {/* Key Workflows */}
          {sector.keyWorkflows && sector.keyWorkflows.length > 0 && (
            <section className="space-y-8">
              <div className="space-y-2 border-b border-alkota-border pb-4">
                <span className="text-xs font-mono text-alkota-silver uppercase tracking-widest block">
                  CORRIDOR EXECUTION
                </span>
                <h2 className="text-3xl font-display font-normal text-alkota-ivory">
                  Dedicated Movement Workflows
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sector.keyWorkflows.map((workflow, index) => (
                  <div
                    key={index}
                    className="p-6 bg-alkota-surface border border-alkota-border space-y-3"
                  >
                    <span className="text-xs font-mono text-alkota-muted block">
                      WORKFLOW 0{index + 1}
                    </span>
                    <h3 className="text-lg font-display font-normal text-alkota-ivory">
                      {workflow.title}
                    </h3>
                    <p className="text-xs text-alkota-silver leading-relaxed font-light">
                      {workflow.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Procurement Checklist */}
          {sector.procurementChecklist && sector.procurementChecklist.length > 0 && (
            <section className="p-8 sm:p-12 bg-alkota-surface border border-alkota-border space-y-8">
              <div className="space-y-2">
                <span className="text-xs font-mono text-alkota-silver uppercase tracking-widest block">
                  DUE DILIGENCE SPECIFICATION
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-normal text-alkota-ivory">
                  Procurement Requirements for Vehicle Movements
                </h2>
                <p className="text-xs text-alkota-silver font-light">
                  Key compliance benchmarks required when procuring nationwide vehicle relocation capacity.
                </p>
              </div>
              <div className="space-y-4 pt-6 border-t border-alkota-border">
                {sector.procurementChecklist.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-alkota-accent shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-alkota-silver leading-relaxed font-light">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Recommended Core Services */}
          {sector.recommendedServices && sector.recommendedServices.length > 0 && (
            <section className="space-y-8">
              <div className="space-y-2 border-b border-alkota-border pb-4">
                <span className="text-xs font-mono text-alkota-silver uppercase tracking-widest block">
                  CAPABILITY MATRIX
                </span>
                <h2 className="text-3xl font-display font-normal text-alkota-ivory">
                  Primary Services Deployed in This Sector
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {sector.recommendedServices.map((serviceSlug) => {
                  const service = siteConfig.services.find((s) => s.slug === serviceSlug);
                  if (!service) return null;
                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="p-6 bg-alkota-surface border border-alkota-border hover:border-alkota-silver/40 transition-all flex flex-col justify-between space-y-4 group"
                    >
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono text-alkota-muted uppercase block">
                          {service.transitMode}
                        </span>
                        <h3 className="text-lg font-display font-normal text-alkota-ivory group-hover:text-alkota-accent transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs text-alkota-silver line-clamp-2 font-light">
                          {service.shortDescription}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-alkota-silver group-hover:text-alkota-ivory inline-flex items-center gap-1 transition-colors">
                        <span>View Specification</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* Sector FAQs */}
          {sector.faqs && sector.faqs.length > 0 && (
            <FaqAccordion
              faqs={sector.faqs}
              title={`Frequently Asked Questions: ${sector.title}`}
              subtitle="Operational questions commonly raised by procurement and fleet operations directors in this sector."
            />
          )}

          {/* CTA Strip */}
          <CtaStrip
            title={`Structure a Dedicated Logistics Agreement for ${sector.title}`}
            description="Our commercial operations desk will evaluate your movement profiles, corridors, and volume schedules to establish contractual SLAs and fixed rate tariffs."
          />
        </div>
      </div>
    </>
  );
}
