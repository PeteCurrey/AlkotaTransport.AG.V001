import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, Mail, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

interface CtaStripProps {
  title?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  showCredentials?: boolean;
}

export default function CtaStrip({
  title = "Ready to Schedule a Vehicle Movement or Set Up an Account?",
  description = "Speak directly with our central operations and dispatch desk or calculate instant indicative corridor pricing.",
  primaryCtaText = "Calculate Route Rate",
  primaryCtaHref = "/#quote",
  showCredentials = true,
}: CtaStripProps) {
  return (
    <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-alkota-plate via-alkota-abyss to-black border border-alkota-cyan/20 shadow-2xl relative overflow-hidden my-16">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-alkota-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-mono tracking-widest text-alkota-cyan uppercase block">
            CENTRAL UK OPERATIONS // DISPATCH DESK
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <Link
            href={primaryCtaHref}
            className="px-8 py-4 rounded-xl text-xs font-mono font-bold tracking-wider uppercase bg-gradient-to-r from-alkota-amber to-orange-600 text-white hover:brightness-110 shadow-telemetry-amber transition-all flex items-center justify-center gap-2"
          >
            <span>{primaryCtaText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={`tel:${siteConfig.telephone.replace(/\s+/g, "")}`}
            className="px-6 py-4 rounded-xl text-xs font-mono font-semibold tracking-wider uppercase bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-alkota-cyan" />
            <span>{siteConfig.telephone}</span>
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            className="px-6 py-4 rounded-xl text-xs font-mono font-semibold tracking-wider uppercase bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            <span>{siteConfig.email}</span>
          </a>
        </div>

        {showCredentials && (
          <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Comprehensive Motor Trade Insurance</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>BVRLA Appraisal Standards Aligned</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>48-Point Digital ePOD Timestamping</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
