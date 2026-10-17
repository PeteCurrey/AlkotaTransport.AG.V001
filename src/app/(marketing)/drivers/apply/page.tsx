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
      <div className="min-h-screen bg-alkota-obsidian text-alkota-ivory pt-32 pb-24 border-b border-alkota-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Navigation Breadcrumb */}
          <nav aria-label="Breadcrumb">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-alkota-silver hover:text-alkota-ivory transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>RETURN TO HOME</span>
            </Link>
          </nav>

          {/* Page Header */}
          <header className="space-y-5 border-b border-alkota-border pb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-alkota-silver uppercase">
              <UserCheck className="w-3.5 h-3.5 text-alkota-accent" />
              <span>TRADE PLATE DRIVER ONBOARDING</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-display font-normal tracking-tight text-alkota-ivory">
              Join the Alkota Driver Network.
            </h1>
            <p className="text-base text-alkota-silver max-w-2xl leading-relaxed font-light">
              We recruit professional, independent trade plate drivers across all UK corridors. Complete our 4-point eligibility assessment to verify qualification under our motor trade fleet insurer criteria.
            </p>
          </header>

          {/* Interactive Application Form */}
          <DriverApplicationForm />
        </div>
      </div>
    </>
  );
}
