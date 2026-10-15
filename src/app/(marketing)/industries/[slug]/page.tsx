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
      <div className="min-h-screen bg-alkota-abyss text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { name: "Industries", href: "/industries" },
              { name: sector.title, href: `/industries/${sector.slug || sector.id}` },
            ]}
          />

          {/* Sector Hero Header */}
          <header className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-alkota-cyan">
              <Building2 className="w-3.5 h-3.5" />
              <span>INDUSTRY ARCHITECTURE // {sector.targetAudience}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight text-white leading-tight">
              {sector.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              {sector.detailedContext || sector.solution}
            </p>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-slate-500 uppercase block">
                  CONTRACTUAL SLA COMMITMENT
                </span>
                <span className="text-2xl font-mono font-bold text-alkota-cyan block mt-0.5">
                  {sector.slaMetric}
                </span>
              </div>
              <p className="text-xs text-slate-400 max-w-sm">
                {sector.slaDescription}
              </p>
            </div>
          </header>

          {/* Sector Challenge & Solution Box */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-alkota-plate border border-red-500/20 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-red-400 uppercase tracking-widest">
                <AlertCircle className="w-4 h-4" />
                <span>PRIMARY OPERATIONAL BOTTLENECK</span>
              </div>
              <h2 className="text-xl font-display font-bold text-white">
                The Sector Challenge
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {sector.painPoint}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-alkota-plate border border-alkota-cyan/20 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-alkota-cyan uppercase tracking-widest">
                <CheckCircle2 className="w-4 h-4" />
                <span>ALKOTA OPERATIONAL SOLUTION</span>
              </div>
              <h2 className="text-xl font-display font-bold text-white">
                Engineered Workflow
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {sector.solution}
              </p>
            </div>
          </section>

          {/* Key Workflows */}
          {sector.keyWorkflows && sector.keyWorkflows.length > 0 && (
            <section className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-alkota-cyan uppercase tracking-widest block">
                  OPERATIONAL WORKFLOWS
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  Specific Movement Workflows for This Sector
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sector.keyWorkflows.map((workflow, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-alkota-plate border border-white/10 space-y-3"
                  >
                    <span className="text-xs font-mono font-bold text-alkota-cyan block">
                      WORKFLOW 0{index + 1}
                    </span>
                    <h3 className="text-base font-display font-bold text-white">
                      {workflow.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {workflow.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Procurement Checklist */}
          {sector.procurementChecklist && sector.procurementChecklist.length > 0 && (
            <section className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
                  BUYER EVALUATION CRITERIA
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                  What Fleet Procurement Leads Should Demand From Suppliers
                </h2>
                <p className="text-xs text-slate-400">
                  Critical due diligence questions when auditing national vehicle movement contracts.
                </p>
              </div>
              <div className="space-y-3 pt-4 border-t border-white/10">
                {sector.procurementChecklist.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Recommended Core Services */}
          {sector.recommendedServices && sector.recommendedServices.length > 0 && (
            <section className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono text-alkota-cyan uppercase tracking-widest block">
                  SERVICE SELECTION
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
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
                      className="p-6 rounded-xl bg-alkota-plate border border-white/10 hover:border-alkota-cyan/30 transition-all flex flex-col justify-between space-y-3 group"
                    >
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono text-slate-500 uppercase block">
                          {service.transitMode}
                        </span>
                        <h3 className="text-base font-display font-bold text-white group-hover:text-alkota-cyan transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs text-slate-400 line-clamp-2">
                          {service.shortDescription}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-alkota-cyan inline-flex items-center gap-1 group-hover:underline">
                        <span>View Service Details</span>
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
              subtitle="Operational questions commonly raised by procurement and operations managers in this sector."
            />
          )}

          {/* CTA Strip */}
          <CtaStrip
            title={`Structure a Dedicated Logistics Agreement for ${sector.title}`}
            description="Our commercial operations team will evaluate your corridor routes and vehicle volumes to establish fixed rate cards and guaranteed dispatch SLAs."
          />
        </div>
      </div>
    </>
  );
}
