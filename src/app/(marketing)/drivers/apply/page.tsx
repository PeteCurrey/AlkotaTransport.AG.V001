import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, UserCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import DriverApplicationForm from "@/components/drivers/DriverApplicationForm";

export const metadata: Metadata = {
  title: "Apply to Drive | Professional Trade Plate Driver Network",
  description:
    "Join ALKOTA's nationwide network of professional trade plate drivers. Review commercial motor trade insurer criteria and submit your driver onboarding application.",
  alternates: {
    canonical: "/drivers/apply",
  },
  openGraph: {
    title: "Apply to Drive | Professional Trade Plate Driver Network | ALKOTA",
    description:
      "Join ALKOTA's nationwide network of professional trade plate drivers. Review commercial motor trade insurer criteria and submit your driver onboarding application.",
    url: `${siteConfig.url}/drivers/apply`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply to Drive | Trade Plate Driver Recruitment | ALKOTA",
    description:
      "Join ALKOTA's nationwide network of professional trade plate drivers. Compliance criteria & online application.",
  },
};

export default function DriverApplicationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "JobPosting",
        title: "Professional Trade Plate Driver (Independent Contractor)",
        description:
          "Relocate single vehicles nationwide between franchise dealerships, auction centers, and customer addresses. Requires minimum 5 years manual UK driving licence, max 6 points, no major endorsements, and dedicated off-road parking.",
        hiringOrganization: {
          "@type": "Organization",
          name: siteConfig.name,
          sameAs: siteConfig.url,
          logo: `${siteConfig.url}/brand/logo-light.svg`,
        },
        employmentType: "CONTRACTOR",
        jobLocationType: "TELECOMMUTE",
        applicantLocationRequirements: {
          "@type": "Country",
          name: "United Kingdom",
        },
        datePosted: "2026-10-15",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Driver Recruitment",
            item: `${siteConfig.url}/drivers/apply`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-alkota-abyss text-white pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Navigation Breadcrumb */}
          <nav aria-label="Breadcrumb">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-alkota-cyan transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>RETURN TO MASTER PORTAL</span>
            </Link>
          </nav>

          {/* Page Header */}
          <header className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-alkota-amber/10 border border-alkota-amber/30 text-xs font-mono text-alkota-amber">
              <UserCheck className="w-3.5 h-3.5" />
              <span>TRADE PLATE PROFESSIONAL RECRUITMENT</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-black uppercase tracking-tight text-white">
              Join The ALKOTA Driver Network.
            </h1>
            <p className="text-base text-slate-300 max-w-2xl leading-relaxed">
              We are actively recruiting professional, independent trade plate drivers across all UK regions. Complete our 4-step eligibility screen to confirm compliance with our commercial motor trade insurer.
            </p>
          </header>

          {/* Interactive Application Form */}
          <DriverApplicationForm />
        </div>
      </div>
    </>
  );
}
