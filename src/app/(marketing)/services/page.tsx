import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CtaStrip from "@/components/common/CtaStrip";

export const metadata: Metadata = {
  title: "Vehicle Movement & Automotive Logistics Services | Nationwide",
  description:
    "Explore ALKOTA's precision UK vehicle movement services: trade plate driven delivery, covered supercar transport, electric vehicle (EV) fleet logistics, dealership transfers, and BVRLA defleet inspect & collect.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Vehicle Movement & Automotive Logistics Services | ALKOTA",
    description:
      "Precision vehicle movement services across the UK. Driven trade plate logistics, enclosed supercar carriers, specialist EV transport, and dealership inventory balancing.",
    url: `${siteConfig.url}/services`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automotive Logistics & Vehicle Movement Services | ALKOTA",
    description:
      "Precision vehicle movement services across the UK. Driven trade plate logistics, enclosed supercar carriers, and EV fleet transport.",
  },
};

const serviceImages: Record<string, string> = {
  "trade-plate-delivery": "/images/case-meridian.jpg",
  "covered-vehicle-transport": "/images/supercar-hero.png",
  "ev-fleet-logistics": "/images/case-pinnacle.jpg",
  "dealership-transfers": "/images/dealership.png",
  "inspect-and-collect": "/images/case-pinnacle.jpg",
};

export default function ServicesHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        name: "ALKOTA Vehicle Movement & Automotive Logistics Services",
        itemListElement: siteConfig.services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${siteConfig.url}/services/${service.slug}`,
          name: service.title,
          description: service.shortDescription,
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
          {/* Breadcrumb Navigation */}
          <Breadcrumbs items={[{ name: "Services", href: "/services" }]} />

          {/* Cinematic Opening Header */}
          <header className="max-w-3xl space-y-6">
            <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.2em] uppercase text-alkota-accent">
              <span className="w-5 h-[1px] bg-alkota-accent inline-block" />
              <span>CORE SERVICE VERTICALS</span>
            </div>

            <h1 className="font-display font-light text-[44px] sm:text-[64px] lg:text-[76px] leading-[0.96] text-alkota-ivory">
              Specialized logistics for every movement requirement.
            </h1>

            <p className="font-sans font-light italic text-[16px] sm:text-[18px] text-alkota-silver leading-relaxed max-w-2xl">
              From driven trade-plate relocations and dealership stock balancing to climate-controlled enclosed supercar logistics, our operations deliver verified national capability.
            </p>
          </header>

          {/* Asymmetric Image-Led Service Showcases */}
          <div className="space-y-16 sm:space-y-24 pt-6">
            {siteConfig.services.map((service, index) => {
              const isEven = index % 2 === 0;
              const imageSrc = serviceImages[service.slug] || "/images/case-meridian.jpg";

              return (
                <article
                  key={service.slug}
                  className="border-t border-alkota-border pt-12 sm:pt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
                >
                  {/* Visual Frame */}
                  <div
                    className={`lg:col-span-6 relative h-[320px] sm:h-[420px] w-full overflow-hidden bg-alkota-surface border border-alkota-border ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Image
                      src={imageSrc}
                      alt={service.title}
                      fill
                      className="object-cover object-center grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-[10px] font-mono tracking-[0.16em] uppercase bg-black/80 backdrop-blur-sm text-alkota-ivory border border-white/15">
                        {service.transitMode}
                      </span>
                    </div>
                  </div>

                  {/* Editorial Description */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono text-alkota-muted">
                        VERTICAL {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-display text-3xl sm:text-4xl font-normal text-alkota-ivory">
                        {service.title}
                      </h2>
                    </div>

                    <p className="font-sans font-light text-sm sm:text-base text-alkota-silver leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Operational Highlights */}
                    <div className="pt-4 border-t border-alkota-border space-y-3">
                      <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-alkota-muted block">
                        KEY CAPABILITIES
                      </span>
                      <ul className="space-y-2 text-xs font-sans font-light text-alkota-silver">
                        {service.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="text-alkota-accent">&bull;</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <span className="text-xs font-mono text-alkota-muted">
                        {service.insuranceLevel}
                      </span>

                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 border border-white/20 hover:border-alkota-accent text-alkota-ivory hover:text-white px-5 py-3 text-xs font-mono tracking-[0.14em] uppercase transition-colors"
                      >
                        <span>Full Specifications</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-alkota-muted" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Operational Standards Bar */}
          <div className="p-8 sm:p-12 border border-alkota-border bg-alkota-surface grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-alkota-accent block">
                INSURANCE COVERAGE
              </span>
              <h3 className="font-display text-xl font-normal text-alkota-ivory">
                Commercial Motor Trade
              </h3>
              <p className="text-xs font-sans font-light text-alkota-silver leading-relaxed">
                Full comprehensive motor trade indemnity covering both driven trade plate and transporter relocations nationwide.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-alkota-accent block">
                APPRAISAL RIGOUR
              </span>
              <h3 className="font-display text-xl font-normal text-alkota-ivory">
                48-Point Digital ePOD
              </h3>
              <p className="text-xs font-sans font-light text-alkota-silver leading-relaxed">
                Timestamped, geotagged condition photography capturing all panels, glass, wheels, and charging accessories.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-alkota-accent block">
                DRIVER VETTING
              </span>
              <h3 className="font-display text-xl font-normal text-alkota-ivory">
                5+ Year Clean Licence Benchmark
              </h3>
              <p className="text-xs font-sans font-light text-alkota-silver leading-relaxed">
                Uniformed trade plate professionals trained in BVRLA fair wear-and-tear appraisal and customer familiarisation.
              </p>
            </div>
          </div>

          {/* Refined Commercial CTA Strip */}
          <CtaStrip
            title="Book a Movement or Request Commercial Rate Schedules"
            description="Our central dispatch desk operates nationwide. Connect directly with logistics specialists to schedule urgent vehicle transfers or open an enterprise account."
          />
        </div>
      </div>
    </>
  );
}
