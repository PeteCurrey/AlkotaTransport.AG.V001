import React from "react";
import Link from "next/link";
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
    <section className="border border-alkota-border bg-alkota-surface p-8 sm:p-14 relative my-16">
      <div className="max-w-4xl space-y-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-[10px] font-mono tracking-[0.2em] text-alkota-accent uppercase">
            <span className="w-5 h-[1px] bg-alkota-accent inline-block" />
            <span>CENTRAL UK DISPATCH DESK</span>
          </div>
          <h2 className="font-display font-light text-2xl sm:text-4xl text-alkota-ivory leading-tight">
            {title}
          </h2>
          <p className="font-sans font-light text-sm sm:text-base text-alkota-silver max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <Link
            href={primaryCtaHref}
            className="bg-alkota-accent hover:bg-alkota-accent-hover text-white font-mono text-[11px] tracking-[0.14em] uppercase px-8 py-4 transition-colors text-center"
          >
            {primaryCtaText}
          </Link>

          <a
            href={`tel:${siteConfig.telephone.replace(/\s+/g, "")}`}
            className="border border-white/20 hover:border-alkota-accent text-alkota-ivory hover:text-white px-6 py-4 text-xs font-mono tracking-[0.14em] uppercase transition-colors text-center"
          >
            {siteConfig.telephone}
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            className="border border-white/20 hover:border-alkota-accent text-alkota-ivory hover:text-white px-6 py-4 text-xs font-mono tracking-[0.14em] uppercase transition-colors text-center"
          >
            {siteConfig.email}
          </a>
        </div>

        {showCredentials && (
          <div className="pt-6 border-t border-alkota-border flex flex-wrap gap-x-8 gap-y-2 text-xs font-mono text-alkota-muted">
            <span>Comprehensive Motor Trade Insurance</span>
            <span>&bull;</span>
            <span>BVRLA Appraisal Standards</span>
            <span>&bull;</span>
            <span>48-Point Digital ePOD Audit</span>
          </div>
        )}
      </div>
    </section>
  );
}
