import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, Zap, RefreshCw, CheckSquare, Layers } from "lucide-react";
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

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-6 h-6 text-alkota-cyan" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-alkota-amber" />,
  Zap: <Zap className="w-6 h-6 text-emerald-400" />,
  RefreshCw: <RefreshCw className="w-6 h-6 text-cyan-400" />,
  CheckSquare: <CheckSquare className="w-6 h-6 text-blue-400" />,
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
      <div className="min-h-screen bg-alkota-abyss text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumb Navigation */}
          <Breadcrumbs items={[{ name: "Services", href: "/services" }]} />

          {/* Hub Header */}
          <header className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-alkota-cyan">
              <Layers className="w-3.5 h-3.5" />
              <span>CORE SERVICE VERTICALS</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-display font-black uppercase tracking-tight text-white leading-tight">
              Comprehensive UK Vehicle Movement Services.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Precision-engineered automotive logistics for single-vehicle movements, fleet transfers, high-value enclosed transport, and remarketing return cycles. Every movement is backed by 48-point digital ePOD auditing and comprehensive commercial motor insurance.
            </p>
          </header>

          {/* Service Matrix Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {siteConfig.services.map((service) => (
              <article
                key={service.slug}
                className="p-8 rounded-2xl bg-alkota-plate border border-white/10 hover:border-alkota-cyan/30 transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-alkota-abyss border border-white/10 flex items-center justify-center">
                      {iconMap[service.iconName] || <Compass className="w-6 h-6 text-alkota-cyan" />}
                    </div>
                    <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400">
                      {service.transitMode}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-xl font-display font-bold text-white group-hover:text-alkota-cyan transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/5 space-y-2">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                      CORE CAPABILITIES
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-400">
                      {service.features.slice(0, 3).map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-alkota-cyan">▪</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-alkota-cyan hover:underline"
                  >
                    <span>Full Service Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Operational Standards Callout */}
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center sm:text-left">
            <div>
              <span className="text-xs font-mono text-alkota-cyan block uppercase tracking-wider">
                INSURANCE COVERAGE
              </span>
              <h3 className="text-base font-display font-bold text-white mt-1">
                Commercial Motor Trade
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Full comprehensive indemnity covering driven and transporter relocations nationwide.
              </p>
            </div>
            <div>
              <span className="text-xs font-mono text-alkota-amber block uppercase tracking-wider">
                APPRAISAL RIGOUR
              </span>
              <h3 className="text-base font-display font-bold text-white mt-1">
                48-Point Digital ePOD
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                High-resolution geotagged photographs documenting condition before keys change hands.
              </p>
            </div>
            <div>
              <span className="text-xs font-mono text-emerald-400 block uppercase tracking-wider">
                DRIVER VETTING
              </span>
              <h3 className="text-base font-display font-bold text-white mt-1">
                5+ Year Licence Benchmark
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Uniformed, experienced trade plate drivers with zero major endorsement codes.
              </p>
            </div>
          </div>

          {/* Commercial CTA Strip */}
          <CtaStrip
            title="Book a Vehicle Movement or Request Commercial Rate Cards"
            description="Our central dispatch desk operates 24/7. Connect directly with logistics specialists to schedule urgent vehicle transfers or open an enterprise account."
          />
        </div>
      </div>
    </>
  );
}
