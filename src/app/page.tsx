import React from "react";
import HeroSection from "@/components/home/HeroSection";
import BrandNarrativeSection from "@/components/home/BrandNarrativeSection";
import ServiceMatrixSection from "@/components/home/ServiceMatrixSection";
import CommercialSectorsSection from "@/components/home/CommercialSectorsSection";
import ProcessTechnologySection from "@/components/home/ProcessTechnologySection";
import TrustAssuranceSection from "@/components/home/TrustAssuranceSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import QuoteCalculatorSection from "@/components/home/QuoteCalculatorSection";
import DriverRecruitmentBanner from "@/components/home/DriverRecruitmentBanner";

export default function HomePage() {
  return (
    <>
      {/* 1. Cinematic Hero with 3D Supercar Digital Twin & Dual CTAs */}
      <HeroSection />

      {/* 2. Scroll-Led Brand Narrative: Operational Control & Nationwide Corridors */}
      <BrandNarrativeSection />

      {/* 3. Service Overview: 5 Core Precision Movement Verticals */}
      <ServiceMatrixSection />

      {/* 4. Commercial Solutions: B2B Sector Architecture */}
      <CommercialSectorsSection />

      {/* 5. Process & Technology: 5-Phase ALKOTA Protocol & Digital ePOD */}
      <ProcessTechnologySection />

      {/* 6. Trust & Assurance: Verifiable Standards & Due Diligence */}
      <TrustAssuranceSection />

      {/* 7. Case Study Framework: Operational Profiles & Real Customer Stories */}
      <CaseStudiesSection />

      {/* 8. Conversion: Rapid Route Estimator & Enterprise Procurement */}
      <QuoteCalculatorSection />

      {/* 9. Driver Recruitment Gateway */}
      <DriverRecruitmentBanner />
    </>
  );
}
