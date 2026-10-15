import React from "react";
import type { Metadata } from "next";
import { Cpu, Activity, Smartphone, Lock, CheckCircle2 } from "lucide-react";
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
      <div className="min-h-screen bg-alkota-abyss text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Breadcrumbs */}
          <Breadcrumbs items={[{ name: "Technology", href: "/technology" }]} />

          {/* Hero Header */}
          <header className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-alkota-cyan">
              <Cpu className="w-3.5 h-3.5" />
              <span>DIGITAL OPERATIONAL BACKBONE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight text-white leading-tight">
              Software-Governed Vehicle Logistics & Telemetry.
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              Eliminating the operational blind spots of legacy vehicle logistics. From algorithmic dispatch to 48-point cryptographic ePOD appraisals and DataClear™ infotainment sanitisation, our digital architecture enforces compliance at every waypoint.
            </p>
          </header>

          {/* Core Pillars Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-alkota-plate border border-white/10 space-y-5">
              <div className="w-12 h-12 rounded-xl bg-alkota-abyss border border-white/10 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-alkota-cyan" />
              </div>
              <h2 className="text-xl font-display font-bold text-white">
                48-Point Digital ePOD
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Before collection, the driver conducts a high-resolution photographic inspection documenting all exterior panels, glass, tyre treads, odometers, and fluid levels. Geotagged and timestamped to produce an incontrovertible baseline audit.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-alkota-plate border border-white/10 space-y-5">
              <div className="w-12 h-12 rounded-xl bg-alkota-abyss border border-white/10 flex items-center justify-center">
                <Activity className="w-6 h-6 text-alkota-amber" />
              </div>
              <h2 className="text-xl font-display font-bold text-white">
                Live Corridor Telematics
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Active telematics track transit progression between collection and destination. Operations teams monitor milestone waypoints and proactively mitigate traffic anomalies before they cause recipient handover delays.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-alkota-plate border border-white/10 space-y-5">
              <div className="w-12 h-12 rounded-xl bg-alkota-abyss border border-white/10 flex items-center justify-center">
                <Lock className="w-6 h-6 text-emerald-400" />
              </div>
              <h2 className="text-xl font-display font-bold text-white">
                DataClear™ Infotainment Sanitisation
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                UK GDPR strictly governs customer data stored in connected vehicles. Our handover protocol includes physical deletion of paired Bluetooth phones, home address navigation caches, and saved garage door codes before vehicle remarketing.
              </p>
            </div>
          </section>

          {/* The 5-Phase Process Walkthrough */}
          <section className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/10 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-mono text-alkota-cyan uppercase tracking-widest block">
                END-TO-END PIPELINE
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                The Synchronised Operational Pipeline
              </h2>
            </div>

            <div className="space-y-6">
              {siteConfig.processSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-6 rounded-xl bg-alkota-plate border border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
                >
                  <div className="md:col-span-2">
                    <span className="text-4xl font-mono font-black text-slate-600 block">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono text-alkota-cyan uppercase tracking-wider">
                      PHASE {step.step}
                    </span>
                  </div>

                  <div className="md:col-span-6 space-y-1">
                    <h3 className="text-lg font-display font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="md:col-span-4 md:border-l md:border-white/10 md:pl-6 space-y-1.5">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-alkota-cyan shrink-0" />
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
            title="Integrate the ALKOTA Logistics Platform with Your DMS or Fleet Portal"
            description="Our operations desk supports automated job booking feeds, webhook dispatch status callbacks, and direct PDF invoice reconciliation for enterprise automotive operators."
          />
        </div>
      </div>
    </>
  );
}
