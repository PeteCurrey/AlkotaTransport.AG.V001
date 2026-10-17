"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Menu, X } from "lucide-react";

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
          ? "bg-alkota-obsidian/92 backdrop-blur-md border-b border-alkota-border py-4 shadow-subtle"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link href="/" className="group flex items-baseline gap-2.5 focus:outline-none">
            <span className="font-display text-2xl font-light tracking-[0.06em] text-alkota-ivory group-hover:text-white transition-colors">
              ALKOTA
            </span>
            <span className="hidden sm:inline-block text-[9px] font-mono tracking-[0.22em] uppercase text-alkota-muted">
              AUTOMOTIVE
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-[13px] font-sans font-light tracking-wide text-alkota-silver hover:text-alkota-ivory transition-colors duration-200"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Desktop Direct Action CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/contact"
              className="border border-white/20 hover:border-alkota-accent hover:text-white text-alkota-ivory font-mono text-[11px] tracking-[0.14em] uppercase px-5 py-2.5 transition-all duration-200"
            >
              Discuss Requirements
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-white/10 text-alkota-silver hover:text-white hover:border-white/25 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-alkota-obsidian/98 border-b border-alkota-border px-6 pt-5 pb-8 space-y-5 backdrop-blur-xl">
          <div className="flex flex-col space-y-3">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-display font-light text-alkota-ivory hover:text-alkota-accent transition-colors py-1"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-alkota-border">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 border border-alkota-accent text-center text-xs font-mono tracking-[0.14em] uppercase text-white hover:bg-alkota-accent transition-colors block"
            >
              Discuss Requirements
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
