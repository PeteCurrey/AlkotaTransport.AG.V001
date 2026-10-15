import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Compass, ShieldCheck, Zap, RefreshCw, CheckSquare, ArrowUpRight, CheckCircle2 } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-6 h-6 text-alkota-cyan" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-alkota-amber" />,
  Zap: <Zap className="w-6 h-6 text-emerald-400" />,
  RefreshCw: <RefreshCw className="w-6 h-6 text-sky-400" />,
  CheckSquare: <CheckSquare className="w-6 h-6 text-violet-400" />,
};

export default function ServiceMatrixSection() {
  return (
    <section id="services" className="py-24 bg-alkota-plate relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono tracking-widest text-alkota-cyan uppercase block">
              PRECISION SERVICE VERTICALS
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
              Engineered Vehicle Movement Solutions.
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              From single-vehicle auction repatriations to climate-controlled enclosed supercar logistics, our transport architecture satisfies distinct automotive requirements.
            </p>
          </div>
          <div>
            <Link
              href="#quote"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider bg-white/5 hover:bg-white/10 border border-white/15 text-white transition-all"
            >
              <span>Instant Route Estimator</span>
              <ArrowUpRight className="w-4 h-4 text-alkota-cyan" />
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service, index) => (
            <div
              key={service.id}
              className={`p-8 rounded-2xl bg-alkota-abyss border border-white/10 flex flex-col justify-between group hover:border-alkota-cyan/40 transition-all ${
                index === 1 ? "md:col-span-2 lg:col-span-1 border-alkota-amber/20" : ""
              }`}
            >
              <div className="space-y-6">
                {/* Header Strip with Icon & Transit Mode Tag */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {iconMap[service.iconName] || <Compass className="w-6 h-6 text-alkota-cyan" />}
                  </div>
                  <span className="px-2.5 py-1 rounded text-[10px] font-mono tracking-wider uppercase bg-white/5 border border-white/10 text-slate-300">
                    {service.transitMode}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-alkota-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Feature Checkpoints */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block">
                    OPERATIONAL PARAMETERS
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-alkota-cyan shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Vehicle Types Tag Strip */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {service.vehicleTypes.map((vType, vIndex) => (
                    <span
                      key={vIndex}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/5 text-slate-400"
                    >
                      {vType}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Link */}
              <div className="pt-8 mt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">
                  {service.insuranceLevel}
                </span>
                <Link
                  href={`#quote`}
                  className="text-xs font-mono font-semibold text-alkota-cyan hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Book Movement</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
