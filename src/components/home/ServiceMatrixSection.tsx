import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowUpRight } from "lucide-react";

export default function ServiceMatrixSection() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-alkota-obsidian border-t border-alkota-border relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-alkota-border">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.2em] uppercase text-alkota-accent">
              <span className="w-5 h-[1px] bg-alkota-accent inline-block" />
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="font-display font-light text-[38px] sm:text-[52px] leading-[1.02] text-alkota-ivory">
              Precision vehicle movement, engineered to scale.
            </h2>
          </div>

          <div>
            <Link
              href="/services"
              className="text-alkota-silver font-sans font-light text-[14px] hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <span>View full service specifications</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Editorial Service Rows */}
        <div className="divide-y divide-alkota-border">
          {siteConfig.services.map((service, index) => (
            <div
              key={service.id}
              className="py-10 sm:py-12 group transition-colors duration-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Number & Transit Mode */}
                <div className="lg:col-span-2 flex items-baseline gap-3">
                  <span className="text-[12px] font-mono text-alkota-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.16em] uppercase text-alkota-silver border border-white/10 px-2 py-0.5">
                    {service.transitMode}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="lg:col-span-5 space-y-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-normal text-alkota-ivory group-hover:text-white transition-colors">
                    <Link href={`/services/${service.slug}`} className="hover:underline focus:outline-none">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="font-sans font-light text-sm text-alkota-silver leading-relaxed max-w-md">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Key Attributes & Action */}
                <div className="lg:col-span-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 lg:pt-0">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-alkota-muted block">
                      SUITABLE ASSETS
                    </span>
                    <span className="text-xs font-sans text-alkota-silver block">
                      {service.vehicleTypes.slice(0, 3).join(" · ")}
                    </span>
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.14em] uppercase text-alkota-ivory group-hover:text-alkota-accent transition-colors pt-2 sm:pt-0"
                  >
                    <span>Explore Specifications</span>
                    <ArrowUpRight className="w-4 h-4 text-alkota-muted group-hover:text-alkota-accent transition-colors" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
