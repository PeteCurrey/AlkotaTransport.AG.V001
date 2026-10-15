import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Compass,
  Zap,
  RefreshCw,
  CheckSquare,
  AlertCircle,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FaqAccordion from "@/components/common/FaqAccordion";
import CtaStrip from "@/components/common/CtaStrip";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return siteConfig.services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const titleMap: Record<string, string> = {
    "trade-plate-delivery": "Trade Plate Vehicle Delivery Services UK | ALKOTA",
    "covered-vehicle-transport": "Covered & Enclosed Vehicle Transport UK | ALKOTA",
    "ev-fleet-logistics": "Electric Vehicle Fleet Logistics UK | ALKOTA",
    "dealership-transfers": "Inter-Dealer Vehicle Transfers & Stock Swaps | ALKOTA",
    "inspect-and-collect": "Vehicle Inspection & Collection Services | ALKOTA",
  };

  const title = titleMap[service.slug] || `${service.title} | ALKOTA Automotive Logistics`;

  return {
    title,
    description: service.shortDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title,
      description: service.fullDescription,
      url: `${siteConfig.url}/services/${service.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: service.shortDescription,
    },
  };
}

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-8 h-8 text-alkota-cyan" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-alkota-amber" />,
  Zap: <Zap className="w-8 h-8 text-emerald-400" />,
  RefreshCw: <RefreshCw className="w-8 h-8 text-cyan-400" />,
  CheckSquare: <CheckSquare className="w-8 h-8 text-blue-400" />,
};

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Schema.org Service JSON-LD
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/services/${service.slug}#service`,
    name: service.title,
    serviceType: service.transitMode,
    description: service.fullDescription,
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.features.map((feature) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="min-h-screen bg-alkota-abyss text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Breadcrumb Navigation */}
          <Breadcrumbs
            items={[
              { name: "Services", href: "/services" },
              { name: service.title, href: `/services/${service.slug}` },
            ]}
          />

          {/* Service Hero Header */}
          <header className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-alkota-cyan animate-pulse" />
              <span className="text-alkota-cyan font-semibold">{service.transitMode}</span>
              <span className="text-slate-500">{"//"}</span>
              <span className="text-slate-300">NATIONWIDE UK LOGISTICS</span>
            </div>

            <div className="flex items-center gap-4">
              {iconMap[service.iconName] && (
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shrink-0">
                  {iconMap[service.iconName]}
                </div>
              )}
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight text-white leading-tight">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              {service.fullDescription}
            </p>

            {service.targetAudience && (
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs font-mono text-slate-400 flex items-center gap-2">
                <span className="text-alkota-cyan font-bold">PRIMARY AUDIENCE:</span>
                <span>{service.targetAudience}</span>
              </div>
            )}
          </header>

          {/* Operational Problem Statement */}
          {service.operationalProblem && (
            <section className="p-8 sm:p-10 rounded-2xl bg-alkota-plate border border-red-500/20 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-red-400 uppercase tracking-widest">
                <AlertCircle className="w-4 h-4" />
                <span>THE OPERATIONAL FRICTION WE RESOLVE</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                Overcoming Traditional Movement Bottlenecks
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {service.operationalProblem}
              </p>
            </section>
          )}

          {/* When to Use This Service */}
          {service.whenToUse && service.whenToUse.length > 0 && (
            <section className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-alkota-cyan uppercase tracking-widest block">
                  DEPLOYMENT SCENARIOS
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  When To Deploy This Movement Solution
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.whenToUse.map((scenario, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-alkota-plate border border-white/10 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-alkota-cyan shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-200 leading-relaxed">{scenario}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Operating Process Timeline */}
          {service.operatingProcess && service.operatingProcess.length > 0 && (
            <section className="space-y-8">
              <div className="space-y-2">
                <span className="text-xs font-mono text-alkota-cyan uppercase tracking-widest block">
                  THE ALKOTA PROTOCOL
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  Transparent Step-by-Step Movement Mechanics
                </h2>
                <p className="text-sm text-slate-400">
                  Every movement executes through our rigorous four-phase compliance workflow.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.operatingProcess.map((step) => (
                  <div
                    key={step.phase}
                    className="p-6 rounded-xl bg-alkota-plate border border-white/10 flex flex-col justify-between space-y-4 hover:border-alkota-cyan/30 transition-all"
                  >
                    <div className="space-y-3">
                      <span className="text-3xl font-mono font-black text-slate-600 block">
                        {step.phase}
                      </span>
                      <h3 className="text-base font-display font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Technical Specifications & SLA Card */}
          {service.specifications && service.specifications.length > 0 && (
            <section className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
                  VERIFIED OPERATIONAL PARAMETERS
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                  Service Specifications & Assurance
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-white/10">
                {service.specifications.map((spec, i) => (
                  <div key={i} className="space-y-1">
                    <span className="text-xs font-mono text-slate-500 uppercase block">
                      {spec.label}
                    </span>
                    <span className="text-sm font-semibold text-slate-200 block">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Frequently Asked Questions */}
          {service.faqs && service.faqs.length > 0 && (
            <FaqAccordion
              faqs={service.faqs}
              title={`Frequently Asked Questions: ${service.title}`}
              subtitle="Direct answers to operational, legal, and scheduling questions regarding this service."
            />
          )}

          {/* Related Industry Solutions & Cross-linking */}
          {service.relatedSectors && service.relatedSectors.length > 0 && (
            <section className="space-y-6 pt-6 border-t border-white/10">
              <div className="space-y-1">
                <span className="text-xs font-mono text-alkota-cyan uppercase tracking-widest block">
                  INDUSTRY-SPECIFIC APPLICATIONS
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                  Tailored Sector Deployments
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {service.relatedSectors.map((sectorSlug) => {
                  const sector = siteConfig.sectors.find((s) => s.slug === sectorSlug);
                  if (!sector) return null;
                  return (
                    <Link
                      key={sector.id}
                      href={`/industries/${sector.slug}`}
                      className="p-6 rounded-xl bg-alkota-plate border border-white/10 hover:border-alkota-cyan/30 transition-all flex flex-col justify-between space-y-3 group"
                    >
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono text-slate-500 uppercase block">
                          SECTOR SOLUTION
                        </span>
                        <h3 className="text-base font-display font-bold text-white group-hover:text-alkota-cyan transition-colors">
                          {sector.title}
                        </h3>
                        <p className="text-xs text-slate-400 line-clamp-2">
                          {sector.solution}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-alkota-cyan inline-flex items-center gap-1 group-hover:underline">
                        <span>View Sector Architecture</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* Commercial Conversion Call to Action */}
          <CtaStrip
            title={`Schedule ${service.title} or Request Rate Card`}
            description="Our central operations desk provides rapid response on UK transit corridors. Book an individual movement or discuss high-volume commercial account terms."
          />
        </div>
      </div>
    </>
  );
}
