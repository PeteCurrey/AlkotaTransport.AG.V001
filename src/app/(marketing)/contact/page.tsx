import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
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
      <div className="min-h-screen bg-alkota-obsidian text-alkota-ivory pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-16">
          {/* Breadcrumbs */}
          <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />

          {/* Header */}
          <header className="max-w-3xl space-y-6">
            <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.2em] uppercase text-alkota-accent">
              <span className="w-5 h-[1px] bg-alkota-accent inline-block" />
              <span>CENTRAL DISPATCH</span>
            </div>
            <h1 className="font-display font-light text-[44px] sm:text-[64px] lg:text-[76px] leading-[0.96] text-alkota-ivory">
              Operations & dispatch desk.
            </h1>
            <p className="font-sans font-light italic text-[16px] sm:text-[18px] text-alkota-silver leading-relaxed">
              Our central operations desk coordinates nationwide vehicle movement across all UK transit corridors. Connect directly to schedule a movement or structure an enterprise Master Service Agreement.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 sm:p-10 border border-alkota-border bg-alkota-surface space-y-8">
                <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-alkota-muted block">
                  DIRECTORY
                </span>

                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-alkota-muted uppercase tracking-wider block">
                      TELEPHONE DISPATCH
                    </span>
                    <a
                      href={`tel:${siteConfig.telephone.replace(/\s+/g, "")}`}
                      className="text-xl font-mono text-alkota-ivory hover:text-white transition-colors block"
                    >
                      {siteConfig.telephone}
                    </a>
                    <span className="text-xs font-sans font-light text-alkota-silver block">
                      Operations & transit exception monitoring
                    </span>
                  </div>

                  <div className="space-y-1 pt-6 border-t border-alkota-border">
                    <span className="text-[10px] font-mono text-alkota-muted uppercase tracking-wider block">
                      DIRECT INQUIRIES
                    </span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-base font-mono text-alkota-ivory hover:text-white transition-colors block"
                    >
                      {siteConfig.email}
                    </a>
                    <span className="text-xs font-sans font-light text-alkota-silver block">
                      Prompt dispatch response during UK business hours
                    </span>
                  </div>

                  <div className="space-y-1 pt-6 border-t border-alkota-border">
                    <span className="text-[10px] font-mono text-alkota-muted uppercase tracking-wider block">
                      OPERATING HOURS
                    </span>
                    <span className="text-sm font-sans text-alkota-ivory block">
                      {siteConfig.operatingHours}
                    </span>
                    <span className="text-xs font-sans font-light text-alkota-silver block">
                      Nationwide driver tracking and corridor support
                    </span>
                  </div>

                  <div className="space-y-1 pt-6 border-t border-alkota-border">
                    <span className="text-[10px] font-mono text-alkota-muted uppercase tracking-wider block">
                      COVERAGE AREA
                    </span>
                    <span className="text-sm font-sans text-alkota-ivory block">
                      {siteConfig.coverageArea}
                    </span>
                  </div>
                </div>
              </div>

              {/* Driver Careers Callout */}
              <div className="p-6 border border-alkota-border bg-alkota-surface flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono text-alkota-muted uppercase block">
                    TRADE PLATE DRIVERS
                  </span>
                  <p className="text-xs font-sans font-light text-alkota-silver mt-0.5">
                    Looking to join our professional network?
                  </p>
                </div>
                <Link
                  href="/drivers/apply"
                  className="border border-white/20 hover:border-alkota-accent text-alkota-ivory px-4 py-2 text-[11px] font-mono tracking-[0.14em] uppercase transition-colors shrink-0"
                >
                  Apply Here
                </Link>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="lg:col-span-7 p-8 sm:p-12 border border-alkota-border bg-alkota-surface space-y-8">
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-alkota-accent block">
                  COMMERCIAL INQUIRY
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-light text-alkota-ivory">
                  Send a Direct Operational Message
                </h2>
                <p className="text-xs sm:text-sm font-sans font-light text-alkota-silver leading-relaxed">
                  Submit your vehicle movement requirements. Our central routing team will respond with indicative pricing and corridor availability.
                </p>
              </div>

              <form action="mailto:dispatch@alkota.co.uk" method="GET" className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-[10px] font-mono text-alkota-muted block uppercase tracking-wider">
                      Your Full Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Marcus Hughes"
                      className="w-full px-4 py-3 bg-alkota-obsidian border border-alkota-border text-alkota-ivory placeholder-alkota-muted text-sm focus:outline-none focus:border-alkota-accent"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-[10px] font-mono text-alkota-muted block uppercase tracking-wider">
                      Business Email Address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="e.g. m.hughes@dealergroup.co.uk"
                      className="w-full px-4 py-3 bg-alkota-obsidian border border-alkota-border text-alkota-ivory placeholder-alkota-muted text-sm focus:outline-none focus:border-alkota-accent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-company" className="text-[10px] font-mono text-alkota-muted block uppercase tracking-wider">
                      Company / Organization
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      placeholder="e.g. National Fleet Leasing Ltd"
                      className="w-full px-4 py-3 bg-alkota-obsidian border border-alkota-border text-alkota-ivory placeholder-alkota-muted text-sm focus:outline-none focus:border-alkota-accent"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-phone" className="text-[10px] font-mono text-alkota-muted block uppercase tracking-wider">
                      Telephone Number
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="e.g. 07700 900456"
                      className="w-full px-4 py-3 bg-alkota-obsidian border border-alkota-border text-alkota-ivory placeholder-alkota-muted text-sm focus:outline-none focus:border-alkota-accent"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-requirements" className="text-[10px] font-mono text-alkota-muted block uppercase tracking-wider">
                    Movement Requirements / Corridor Specifications
                  </label>
                  <textarea
                    id="contact-requirements"
                    name="body"
                    rows={4}
                    placeholder="Specify vehicle types, collection & delivery postcodes, estimated monthly volume, and timeline urgency."
                    className="w-full px-4 py-3 bg-alkota-obsidian border border-alkota-border text-alkota-ivory placeholder-alkota-muted text-sm focus:outline-none focus:border-alkota-accent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-alkota-accent hover:bg-alkota-accent-hover text-white font-mono text-[11px] tracking-[0.14em] uppercase transition-colors"
                >
                  Dispatch Message to Operations
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
