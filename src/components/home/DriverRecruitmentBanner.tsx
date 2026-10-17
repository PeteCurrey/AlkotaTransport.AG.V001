import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function DriverRecruitmentBanner() {
  return (
    <section className="py-20 bg-alkota-surface border-t border-alkota-border relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="p-8 sm:p-14 border border-alkota-border bg-alkota-obsidian grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.2em] uppercase text-alkota-accent">
              <span className="w-5 h-[1px] bg-alkota-accent inline-block" />
              <span>DRIVER NETWORK</span>
            </div>

            <h2 className="font-display font-light text-[32px] sm:text-[44px] leading-[1.05] text-alkota-ivory">
              Professional trade plate careers, properly supported.
            </h2>

            <p className="font-sans font-light text-sm sm:text-base text-alkota-silver leading-relaxed max-w-2xl">
              We empower trade plate professionals with pre-funded travel expenses, digitized route scheduling, and transparent weekly compensation.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-xs font-mono text-alkota-muted">
              <span>Pre-Loaded Travel Expenses</span>
              <span>&bull;</span>
              <span>Comprehensive Motor Trade Cover</span>
              <span>&bull;</span>
              <span>Dedicated Dispatch Desk</span>
            </div>
          </div>

          {/* Right Action */}
          <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end space-y-2">
            <Link
              href="/drivers/apply"
              className="border border-white/20 hover:border-alkota-accent text-alkota-ivory hover:text-white font-mono text-[11px] tracking-[0.14em] uppercase px-7 py-4 transition-colors inline-flex items-center gap-2 group"
            >
              <span>Driver Application Portal</span>
              <ArrowUpRight className="w-4 h-4 text-alkota-muted group-hover:text-white transition-colors" />
            </Link>
            <span className="text-[10px] font-mono tracking-wider uppercase text-alkota-muted">
              4-Step Online Eligibility Check
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
