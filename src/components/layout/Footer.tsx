import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-alkota-plate border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-alkota-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Operational Stance */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-black border border-white/20 flex items-center justify-center font-display font-black text-lg text-white">
                A
              </div>
              <span className="font-display font-black text-xl tracking-widest text-white">
                ALKOTA
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Precision UK vehicle movement and automotive logistics. Operating single-vehicle driven transit, covered supercar transport, and enterprise fleet redistribution.
            </p>
            <div className="pt-2 flex flex-col space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-alkota-cyan" />
                <span>{siteConfig.coverageArea}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-alkota-cyan" />
                <span>{siteConfig.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-alkota-cyan" />
                <span>{siteConfig.telephone}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Core Movement Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-white uppercase">
              <Link href="/services" className="hover:text-alkota-cyan transition-colors">
                Services
              </Link>
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {siteConfig.services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-alkota-cyan transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Commercial Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-white uppercase">
              <Link href="/industries" className="hover:text-alkota-cyan transition-colors">
                Industries
              </Link>
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {siteConfig.sectors.map((sector) => (
                <li key={sector.id}>
                  <Link
                    href={`/industries/${sector.slug || sector.id}`}
                    className="hover:text-alkota-cyan transition-colors"
                  >
                    {sector.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Professional Network & Governance */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-white uppercase">
              Company & Standards
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/technology" className="hover:text-white transition-colors">
                  Digital ePOD & Telemetry
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  Logistics Guides & Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Central Dispatch Desk
                </Link>
              </li>
              <li>
                <Link
                  href="/drivers/apply"
                  className="hover:text-alkota-amber transition-colors flex items-center gap-1 text-alkota-amber"
                >
                  <span>Driver Careers & Recruitment</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Operational Disclaimer & Legal Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
            <p className="text-[11px] text-slate-600">
              Registered in England & Wales. Intended production domain: {siteConfig.domain}. Pre-launch staging deployment.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Goods in Transit Protected</span>
            </span>
            <Link href="#privacy" className="hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-slate-300">
              Terms of Movement
            </Link>
            <Link href="#modern-slavery" className="hover:text-slate-300">
              Modern Slavery Statement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
