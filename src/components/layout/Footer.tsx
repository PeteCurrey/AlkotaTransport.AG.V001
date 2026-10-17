import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-alkota-obsidian border-t border-alkota-border pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-alkota-border">
          {/* Column 1: Brand & Contact Stance */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block focus:outline-none">
              <span className="font-display text-2xl font-light tracking-[0.06em] text-alkota-ivory">
                ALKOTA
              </span>
            </Link>
            <p className="text-sm font-sans font-light text-alkota-silver max-w-sm leading-relaxed">
              Nationwide vehicle logistics, engineered around the needs of modern automotive businesses. Driven trade plate movements, covered supercar transport, and fleet repatriation.
            </p>
            <div className="pt-2 flex flex-col space-y-2 text-xs font-mono text-alkota-muted">
              <div>{siteConfig.coverageArea}</div>
              <div>{siteConfig.email}</div>
              <div>{siteConfig.telephone}</div>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-mono tracking-[0.16em] uppercase text-alkota-ivory">
              <Link href="/services" className="hover:text-alkota-accent transition-colors">
                Services
              </Link>
            </h4>
            <ul className="space-y-2.5 text-sm font-sans font-light text-alkota-silver">
              {siteConfig.services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-alkota-ivory transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Commercial Solutions */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-mono tracking-[0.16em] uppercase text-alkota-ivory">
              <Link href="/industries" className="hover:text-alkota-accent transition-colors">
                Industries
              </Link>
            </h4>
            <ul className="space-y-2.5 text-sm font-sans font-light text-alkota-silver">
              {siteConfig.sectors.map((sector) => (
                <li key={sector.id}>
                  <Link
                    href={`/industries/${sector.slug || sector.id}`}
                    className="hover:text-alkota-ivory transition-colors"
                  >
                    {sector.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Standards & Dispatch */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-mono tracking-[0.16em] uppercase text-alkota-ivory">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm font-sans font-light text-alkota-silver">
              <li>
                <Link href="/technology" className="hover:text-alkota-ivory transition-colors">
                  Digital ePOD Architecture
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-alkota-ivory transition-colors">
                  Logistics Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-alkota-ivory transition-colors">
                  Central Dispatch Desk
                </Link>
              </li>
              <li>
                <Link
                  href="/drivers/apply"
                  className="hover:text-alkota-ivory transition-colors flex items-center gap-1.5"
                >
                  <span>Trade Plate Careers</span>
                  <ArrowUpRight className="w-3 h-3 text-alkota-muted" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Operational Disclaimer & Legal Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 text-xs font-mono text-alkota-muted">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
            <p className="text-[11px] text-alkota-muted/80">
              Registered in England & Wales. Verified single-carrier logistics network.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <span>Comprehensive Motor Trade Policy</span>
            <Link href="#privacy" className="hover:text-alkota-silver transition-colors">
              Privacy
            </Link>
            <Link href="#terms" className="hover:text-alkota-silver transition-colors">
              Terms
            </Link>
            <Link href="#modern-slavery" className="hover:text-alkota-silver transition-colors">
              Governance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
