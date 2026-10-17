import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
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
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        addressCountry: "GB",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} Transit Options`,
      itemListElement: service.features.map((feature, i) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature,
        },
        position: i + 1,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="min-h-screen bg-alkota-obsidian text-alkota-ivory pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-16">
          {/* Breadcrumbs Navigation */}
          <Breadcrumbs
            items={[
              { name: "Services", href: "/services" },
              { name: service.title, href: `/services/${service.slug}` },
            ]}
          />

          {/* Service Detail Header */}
          <header className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-[10px] font-mono tracking-[0.16em] uppercase text-alkota-accent border border-alkota-accent/30 px-2.5 py-1">
                {service.transitMode}
              </span>
              <span className="text-[11px] font-mono text-alkota-muted">
                {service.insuranceLevel}
              </span>
            </div>

            <h1 className="font-display font-light text-[42px] sm:text-[60px] lg:text-[72px] leading-[0.96] text-alkota-ivory">
              {service.title}
            </h1>

            <p className="font-sans font-light italic text-[17px] sm:text-[19px] text-alkota-silver leading-relaxed">
              {service.fullDescription}
            </p>

            {service.targetAudience && (
              <div className="pt-2 text-xs font-mono text-alkota-muted">
                <span className="text-alkota-accent uppercase tracking-wider">PRIMARY AUDIENCE: </span>
                <span>{service.targetAudience}</span>
              </div>
            )}
          </header>

          {/* Operational Problem Statement */}
          {service.operationalProblem && (
            <section className="p-8 sm:p-12 border border-alkota-border bg-alkota-surface space-y-4">
              <span className="text-[10px] font-mono text-alkota-muted uppercase tracking-[0.18em] block">
                OPERATIONAL CHALLENGE
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-normal text-alkota-ivory">
                Overcoming Traditional Movement Bottlenecks
              </h2>
              <p className="font-sans font-light text-sm sm:text-base text-alkota-silver leading-relaxed max-w-3xl">
                {service.operationalProblem}
              </p>
            </section>
          )}

          {/* Deployment Scenarios */}
          {service.whenToUse && service.whenToUse.length > 0 && (
            <section className="space-y-8">
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-alkota-accent block">
                  DEPLOYMENT SCENARIOS
                </span>
                <h2 className="font-display text-2xl sm:text-4xl font-light text-alkota-ivory">
                  When To Deploy This Movement Solution
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.whenToUse.map((scenario, index) => (
                  <div
                    key={index}
                    className="p-6 sm:p-8 border border-alkota-border bg-alkota-surface space-y-2"
                  >
                    <span className="text-[10px] font-mono text-alkota-muted block">
                      SCENARIO {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="font-sans font-light text-sm sm:text-base text-alkota-silver leading-relaxed">
                      {scenario}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Operating Process Protocol */}
          {service.operatingProcess && service.operatingProcess.length > 0 && (
            <section className="space-y-8">
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-alkota-accent block">
                  OPERATING PROTOCOL
                </span>
                <h2 className="font-display text-2xl sm:text-4xl font-light text-alkota-ivory">
                  Movement Mechanics & Chain of Custody
                </h2>
                <p className="font-sans font-light text-sm text-alkota-silver">
                  Every transit executes through our four-phase auditable workflow.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.operatingProcess.map((step) => (
                  <div
                    key={step.phase}
                    className="p-6 sm:p-8 border border-alkota-border bg-alkota-surface space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <span className="font-mono text-2xl font-light text-alkota-muted block">
                        {step.phase}
                      </span>
                      <h3 className="font-display text-xl font-normal text-alkota-ivory">
                        {step.title}
                      </h3>
                      <p className="font-sans font-light text-xs text-alkota-silver leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Technical Specifications */}
          {service.specifications && service.specifications.length > 0 && (
            <section className="p-8 sm:p-12 border border-alkota-border bg-alkota-surface space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-alkota-muted block">
                  OPERATIONAL PARAMETERS
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-light text-alkota-ivory">
                  Service Specifications & Assurance
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-alkota-border">
                {service.specifications.map((spec, i) => (
                  <div key={i} className="space-y-1">
                    <span className="text-[10px] font-mono text-alkota-muted uppercase tracking-wider block">
                      {spec.label}
                    </span>
                    <span className="text-sm font-sans text-alkota-ivory block">
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

          {/* Related Industry Solutions */}
          {service.relatedSectors && service.relatedSectors.length > 0 && (
            <section className="space-y-8 pt-8 border-t border-alkota-border">
              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-alkota-accent block">
                  INDUSTRY APPLICATIONS
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-light text-alkota-ivory">
                  Sector-Specific Deployments
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
                      className="p-6 border border-alkota-border bg-alkota-surface hover:border-alkota-accent transition-colors flex flex-col justify-between space-y-4 group"
                    >
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono text-alkota-muted uppercase block">
                          SECTOR SOLUTION
                        </span>
                        <h3 className="font-display text-xl font-normal text-alkota-ivory group-hover:text-white transition-colors">
                          {sector.title}
                        </h3>
                        <p className="text-xs font-sans font-light text-alkota-silver line-clamp-2">
                          {sector.solution}
                        </p>
                      </div>
                      <span className="text-xs font-mono tracking-[0.14em] uppercase text-alkota-ivory inline-flex items-center gap-1 group-hover:text-alkota-accent">
                        <span>View Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-alkota-muted group-hover:text-alkota-accent" />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* Commercial Conversion Call to Action */}
          <CtaStrip
            title={`Schedule ${service.title} or Request Commercial Terms`}
            description="Our central operations desk provides rapid response on UK transit corridors. Book an individual movement or discuss high-volume commercial account terms."
          />
        </div>
      </div>
    </>
  );
}
