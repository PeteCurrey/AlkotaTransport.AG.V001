import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, Clock, MapPin, ArrowRight, Compass } from "lucide-react";
import { siteConfig } from "@/config/site";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact Central Dispatch & Operations Desk | ALKOTA",
  description:
    "Contact ALKOTA's central UK vehicle logistics and dispatch desk. Phone, email, operational hours, and direct booking inquiries for dealerships, leasing firms, and fleet operators.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact ALKOTA Central Dispatch | UK Automotive Logistics",
    description:
      "Direct operational contacts for UK vehicle movement. 24/7 nationwide dispatch desk for urgent transfers and enterprise account management.",
    url: `${siteConfig.url}/contact`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact ALKOTA | UK Automotive Logistics Desk",
    description: "24/7 nationwide dispatch desk for urgent vehicle movement.",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "ALKOTA Central Dispatch Operations",
    description: "UK vehicle movement central operations and dispatch contacts.",
    mainEntity: {
      "@type": "AutomotiveBusiness",
      name: siteConfig.name,
      telephone: siteConfig.telephone,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        addressCountry: "GB",
      },
      openingHours: "Mo-Su 00:00-24:00",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-alkota-abyss text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumbs */}
          <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />

          {/* Header */}
          <header className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-alkota-cyan">
              <Compass className="w-3.5 h-3.5" />
              <span>CENTRAL UK DISPATCH // DIRECT ACCESS</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-display font-black uppercase tracking-tight text-white leading-tight">
              Central Dispatch & Operations Desk.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Our central operations desk coordinates nationwide vehicle movement across all UK motorway corridors. Speak directly with a controller to schedule an individual movement or discuss enterprise Master Service Agreements.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-2xl bg-alkota-plate border border-white/10 space-y-6">
                <span className="text-xs font-mono text-alkota-cyan uppercase tracking-widest block">
                  OPERATIONAL CONTACT DIRECTORY
                </span>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-alkota-abyss border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-alkota-cyan" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-xs font-mono text-slate-500 uppercase block">
                        DIRECT DISPATCH PHONE
                      </span>
                      <a
                        href={`tel:${siteConfig.telephone.replace(/\s+/g, "")}`}
                        className="text-lg font-mono font-bold text-white hover:text-alkota-cyan transition-colors"
                      >
                        {siteConfig.telephone}
                      </a>
                      <span className="text-xs text-slate-400 block">
                        24/7 Operations & Route Exception Monitoring
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-alkota-abyss border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-alkota-amber" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-xs font-mono text-slate-500 uppercase block">
                        DISPATCH & QUOTE INQUIRIES
                      </span>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-base font-mono font-semibold text-white hover:text-alkota-amber transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                      <span className="text-xs text-slate-400 block">
                        Sub-15 minute response time during business hours
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-alkota-abyss border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-xs font-mono text-slate-500 uppercase block">
                        OPERATING HOURS
                      </span>
                      <span className="text-sm font-semibold text-white block">
                        {siteConfig.operatingHours}
                      </span>
                      <span className="text-xs text-slate-400 block">
                        Nationwide driver tracking and weekend emergency response
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-alkota-abyss border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-xs font-mono text-slate-500 uppercase block">
                        COVERAGE NETWORK
                      </span>
                      <span className="text-sm font-semibold text-white block">
                        United Kingdom Nationwide
                      </span>
                      <span className="text-xs text-slate-400 block">
                        {siteConfig.coverageArea}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Driver Careers Callout */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-alkota-amber uppercase block">
                    DRIVER CAREERS
                  </span>
                  <p className="text-xs text-slate-300 mt-1">
                    Looking to join our trade plate driver network?
                  </p>
                </div>
                <Link
                  href="/drivers/apply"
                  className="px-4 py-2 rounded-lg text-xs font-mono font-semibold uppercase bg-alkota-amber text-white hover:brightness-110 transition-all shrink-0"
                >
                  Apply Here
                </Link>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-2xl bg-alkota-plate border border-white/10 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono text-alkota-cyan uppercase tracking-widest block">
                  FAST COMMERCIAL INQUIRY
                </span>
                <h2 className="text-2xl font-display font-bold text-white">
                  Send a Direct Operational Message
                </h2>
                <p className="text-xs text-slate-400">
                  Submit your vehicle movement requirements and our dispatch team will respond with indicative pricing and corridor availability.
                </p>
              </div>

              <form action="mailto:dispatch@alkota.co.uk" method="GET" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-mono text-slate-400 block uppercase tracking-wider">
                      Your Full Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Marcus Hughes"
                      className="w-full px-4 py-3 rounded-xl bg-alkota-abyss border border-white/15 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-alkota-cyan"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-mono text-slate-400 block uppercase tracking-wider">
                      Business Email Address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="e.g. m.hughes@dealergroup.co.uk"
                      className="w-full px-4 py-3 rounded-xl bg-alkota-abyss border border-white/15 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-alkota-cyan"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-company" className="text-xs font-mono text-slate-400 block uppercase tracking-wider">
                      Company / Organization
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      placeholder="e.g. National Fleet Leasing Ltd"
                      className="w-full px-4 py-3 rounded-xl bg-alkota-abyss border border-white/15 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-alkota-cyan"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-phone" className="text-xs font-mono text-slate-400 block uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="e.g. 07700 900456"
                      className="w-full px-4 py-3 rounded-xl bg-alkota-abyss border border-white/15 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-alkota-cyan"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-requirements" className="text-xs font-mono text-slate-400 block uppercase tracking-wider">
                    Movement Requirements / Corridor Details
                  </label>
                  <textarea
                    id="contact-requirements"
                    name="body"
                    rows={4}
                    placeholder="Provide details on vehicle types, collection & delivery postcodes, estimated monthly volume, and urgency."
                    className="w-full px-4 py-3 rounded-xl bg-alkota-abyss border border-white/15 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-alkota-cyan"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-xs font-mono font-bold tracking-wider uppercase bg-gradient-to-r from-alkota-amber to-orange-600 text-white hover:brightness-110 shadow-telemetry-amber transition-all flex items-center justify-center gap-2"
                >
                  <span>Dispatch Message to Operations</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
