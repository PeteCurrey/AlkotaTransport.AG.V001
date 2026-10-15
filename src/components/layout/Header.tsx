"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Menu, X, ArrowUpRight, Activity } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-alkota-abyss/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Telemetry Indicator */}
          <div className="flex items-center gap-6">
            <Link href="/" className="group flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-alkota-plate to-black border border-white/15 flex items-center justify-center font-display font-black text-xl text-white tracking-wider group-hover:border-alkota-cyan transition-colors">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-lg tracking-widest text-white">
                  ALKOTA
                </span>
                <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase -mt-1">
                  Automotive Logistics
                </span>
              </div>
            </Link>

            {/* Live Operational Beacon (Desktop Only) */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>NATIONWIDE DISPATCH: ACTIVE</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="px-3 py-1.5 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1.5"
              >
                <span>{item.title}</span>
                {item.badge && (
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-alkota-amber/20 text-alkota-amber border border-alkota-amber/30">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Direct Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/#quote"
              className="px-4 py-2 rounded-lg text-xs font-mono font-semibold tracking-wider uppercase bg-gradient-to-r from-alkota-amber to-orange-600 text-white hover:brightness-110 shadow-telemetry-amber transition-all flex items-center gap-1.5"
            >
              <span>Instant Route Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-alkota-plate border-b border-white/10 px-4 pt-4 pb-6 space-y-3">
          <div className="flex items-center gap-2 pb-3 border-b border-white/10 text-xs font-mono text-emerald-400">
            <Activity className="w-3.5 h-3.5" />
            <span>NATIONWIDE UK DISPATCH ACTIVE</span>
          </div>

          <div className="flex flex-col space-y-1">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-white/5 flex items-center justify-between"
              >
                <span>{item.title}</span>
                {item.badge && (
                  <span className="px-2 py-0.5 rounded text-xs font-mono bg-alkota-amber/20 text-alkota-amber">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10">
            <Link
              href="/#quote"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-lg text-center text-xs font-mono font-bold tracking-wider uppercase bg-alkota-amber text-white block shadow-telemetry-amber"
            >
              Instant Route Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
