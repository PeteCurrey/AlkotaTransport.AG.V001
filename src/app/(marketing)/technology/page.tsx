import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CtaStrip from "@/components/common/CtaStrip";

export const metadata: Metadata = {
  title: "Vehicle Movement Technology Platform & Digital ePOD | ALKOTA",
  description:
    "Explore the ALKOTA technology architecture: real-time corridor GPS tracking, 48-point digital ePOD condition appraisals, DataClear™ GDPR infotainment erasure, and API integration for UK fleet operators.",
  alternates: {
    canonical: "/technology",
  },
  openGraph: {
    title: "Vehicle Movement Technology Platform & Digital ePOD | ALKOTA",
    description:
      "Software-governed vehicle logistics platform with live telematics, digital damage auditing, and DataClear personal data sanitisation.",
    url: `${siteConfig.url}/technology`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automotive Logistics Technology & ePOD Platform | ALKOTA",
    description:
      "Software-governed vehicle logistics platform with live telematics and digital damage auditing.",
  },
};

export default function TechnologyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ALKOTA Dispatch & Digital ePOD Platform",
    operatingSystem: "Cloud / Web / iOS / Android",
    applicationCategory: "BusinessApplication",
    description:
      "Cloud-native automotive logistics platform coordinating real-time driver dispatch, 48-point photographic condition appraisals, and automated ePOD PDF delivery.",
    provider: {
      "@type": "AutomotiveBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
    },
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
          <Breadcrumbs items={[{ name: "Technology", href: "/technology" }]} />

          {/* Hero Header */}
          <header className="max-w-4xl space-y-6">
            <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.2em] uppercase text-alkota-accent">
              <span className="w-5 h-[1px] bg-alkota-accent inline-block" />
              <span>DIGITAL OPERATIONAL ARCHITECTURE</span>
            </div>

            <h1 className="font-display font-light text-[44px] sm:text-[64px] lg:text-[76px] leading-[0.96] text-alkota-ivory">
              Software-governed logistics & telemetry.
            </h1>

            <p className="font-sans font-light italic text-[16px] sm:text-[18px] text-alkota-silver leading-relaxed">
              Eliminating the operational blind spots of legacy vehicle movements. From corridor matching to 48-point photographic appraisals and DataClear™ infotainment sanitisation, our digital architecture enforces compliance at every waypoint.
            </p>
          </header>

          {/* Core Pillars Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-alkota-border bg-alkota-surface space-y-4">
              <span className="text-[10px] font-mono tracking-[0.16em] uppercase text-alkota-accent block">
                AUDITING PROTOCOL
              </span>
              <h2 className="font-display text-2xl font-normal text-alkota-ivory">
                48-Point Digital ePOD
              </h2>
              <p className="text-xs sm:text-sm font-sans font-light text-alkota-silver leading-relaxed">
                Prior to collection, drivers conduct a systematic photographic inspection capturing exterior panels, glass, wheels, fluid levels, and odometer readings. Geotagged and timestamped to produce an incontrovertible condition baseline.
              </p>
            </div>

            <div className="p-8 border border-alkota-border bg-alkota-surface space-y-4">
              <span className="text-[10px] font-mono tracking-[0.16em] uppercase text-alkota-accent block">
                CORRIDOR TELEMETRICS
              </span>
              <h2 className="font-display text-2xl font-normal text-alkota-ivory">
                Corridor Telematics
              </h2>
              <p className="text-xs sm:text-sm font-sans font-light text-alkota-silver leading-relaxed">
                Active telematics track transit progression along primary UK arteries. Dispatch operations monitor key milestones and proactively mitigate congestion anomalies before they cause recipient handover delays.
              </p>
            </div>

            <div className="p-8 border border-alkota-border bg-alkota-surface space-y-4">
              <span className="text-[10px] font-mono tracking-[0.16em] uppercase text-alkota-accent block">
                DATA GOVERNANCE
              </span>
              <h2 className="font-display text-2xl font-normal text-alkota-ivory">
                DataClear™ Sanitisation
              </h2>
              <p className="text-xs sm:text-sm font-sans font-light text-alkota-silver leading-relaxed">
                UK GDPR strictly governs customer data stored in connected vehicles. Our handover protocol includes physical deletion of paired Bluetooth phones, navigation addresses, and stored home locations before vehicle redistribution.
              </p>
            </div>
          </section>

          {/* Process Protocol */}
          <section className="p-8 sm:p-14 border border-alkota-border bg-alkota-surface space-y-10">
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-alkota-muted block">
                END-TO-END PIPELINE
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-light text-alkota-ivory">
                The Synchronised Operational Pipeline
              </h2>
            </div>

            <div className="divide-y divide-alkota-border border-t border-alkota-border">
              {siteConfig.processSteps.map((step) => (
                <div
                  key={step.step}
                  className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
                >
                  <div className="md:col-span-2 flex items-baseline gap-2">
                    <span className="font-mono text-2xl text-alkota-muted block">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono tracking-[0.16em] uppercase text-alkota-silver">
                      PHASE {step.step}
                    </span>
                  </div>

                  <div className="md:col-span-6 space-y-1">
                    <h3 className="font-display text-xl font-normal text-alkota-ivory">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-sans font-light text-alkota-silver leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="md:col-span-4 md:border-l md:border-alkota-border md:pl-6 space-y-1.5">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-sans font-light text-alkota-silver">
                        <span className="text-alkota-accent">&bull;</span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Strip */}
          <CtaStrip
            title="Integrate the ALKOTA Platform with Your Fleet Management System"
            description="Our operations desk supports automated job booking feeds, milestone webhook callbacks, and consolidated invoicing for enterprise automotive operators."
          />
        </div>
      </div>
    </>
  );
}
