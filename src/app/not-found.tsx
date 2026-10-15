import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, ShieldAlert, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-alkota-abyss px-4 sm:px-6 lg:px-8 py-24 relative overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-carbon-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-alkota-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl w-full text-center space-y-8 relative z-10">
        {/* Telemetry Status Reticle */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>ROUTE CORRIDOR UNRESOLVED // ERROR 404</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-6xl sm:text-7xl font-display font-black text-white tracking-tight">
            404
          </h1>
          <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-200">
            Waypoint Not Found in Dispatch Registry
          </h2>
          <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            The requested vehicle logistics destination or service corridor does not exist or has been relocated within the network.
          </p>
        </div>

        {/* Quick Recovery Links */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase bg-gradient-to-r from-alkota-amber to-orange-600 text-white hover:brightness-110 shadow-telemetry-amber transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/drivers/apply"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-mono font-semibold tracking-wider uppercase bg-alkota-plate hover:bg-white/10 text-slate-200 border border-white/15 transition-all flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-alkota-cyan" />
            <span>Driver Recruitment</span>
          </Link>
        </div>

        {/* Operations Desk Contact Strip */}
        <div className="pt-8 border-t border-white/10 text-xs font-mono text-slate-500 flex items-center justify-center gap-2">
          <Phone className="w-3.5 h-3.5 text-slate-400" />
          <span>Direct Dispatch Inquiries:</span>
          <a href={`tel:${siteConfig.telephone.replace(/\s+/g, "")}`} className="text-slate-300 hover:text-alkota-cyan">
            {siteConfig.telephone}
          </a>
        </div>
      </div>
    </div>
  );
}
