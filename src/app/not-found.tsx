import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, ShieldAlert, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-alkota-obsidian px-4 sm:px-6 lg:px-8 py-32 relative overflow-hidden">
      <div className="max-w-xl w-full text-center space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-alkota-silver uppercase">
          <ShieldAlert className="w-3.5 h-3.5 text-alkota-accent" />
          <span>ERROR 404 // PAGE NOT FOUND</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-7xl sm:text-8xl font-display font-normal text-alkota-ivory tracking-tight">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-display font-normal text-alkota-ivory">
            Page Not Found
          </h2>
          <p className="text-sm text-alkota-silver max-w-md mx-auto leading-relaxed font-light">
            The requested destination or service corridor does not exist or has been relocated within the network.
          </p>
        </div>

        {/* Quick Recovery Links */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3.5 text-xs font-mono tracking-widest uppercase bg-alkota-accent hover:bg-blue-600 text-white transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto px-6 py-3.5 text-xs font-mono tracking-widest uppercase bg-alkota-surface hover:bg-alkota-elevated text-alkota-ivory border border-alkota-border transition-colors flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-alkota-silver" />
            <span>View Services</span>
          </Link>
        </div>

        {/* Operations Desk Contact Strip */}
        <div className="pt-8 border-t border-alkota-border text-xs font-mono text-alkota-muted flex items-center justify-center gap-2">
          <Phone className="w-3.5 h-3.5 text-alkota-silver" />
          <span>Direct Dispatch Enquiries:</span>
          <a href={`tel:${siteConfig.telephone.replace(/\s+/g, "")}`} className="text-alkota-silver hover:text-alkota-ivory transition-colors">
            {siteConfig.telephone}
          </a>
        </div>
      </div>
    </div>
  );
}
