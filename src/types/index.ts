export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  vehicleTypes: string[];
  insuranceLevel: string;
  transitMode: "Driven (Trade Plate)" | "Covered Transporter" | "Specialist EV" | "Open Transporter";
  iconName: string;
  // Extended fields for dedicated deep-dive service pages
  targetAudience?: string;
  operationalProblem?: string;
  whenToUse?: string[];
  operatingProcess?: {
    phase: string;
    title: string;
    detail: string;
  }[];
  specifications?: {
    label: string;
    value: string;
  }[];
  faqs?: ServiceFaq[];
  relatedSectors?: string[];
  relatedServices?: string[];
}

export interface SectorSolution {
  id: string;
  slug?: string;
  title: string;
  targetAudience: string;
  painPoint: string;
  solution: string;
  slaMetric: string;
  slaDescription: string;
  // Extended fields for dedicated B2B sector pages
  detailedContext?: string;
  keyWorkflows?: {
    title: string;
    description: string;
  }[];
  procurementChecklist?: string[];
  faqs?: ServiceFaq[];
  recommendedServices?: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  telemetryTag: string;
  details: string[];
}

export interface TrustCredential {
  title: string;
  badge: string;
  description: string;
  verificationNote: string;
  status: "Verified Practice" | "Operational Standard" | "Pending Client Certificate";
}

export interface CaseStudyFramework {
  sector: string;
  movementType: string;
  challenge: string;
  solutionProvided: string;
  operationalOutcome: string;
  verifiedStatus: string;
}

export interface EditorialArticle {
  slug: string;
  title: string;
  metaDescription: string;
  category: "Operational Guide" | "Industry Insight" | "Compliance & Standards";
  publishedDate: string;
  readingTimeMinutes: number;
  author: {
    name: string;
    role: string;
  };
  summary: string;
  sections: {
    heading: string;
    subheading?: string;
    paragraphs: string[];
    checkpoints?: string[];
  }[];
  faqs: ServiceFaq[];
  relatedServices: string[];
  relatedIndustries: string[];
}

export interface BreadcrumbItem {
  name: string;
  href: string;
}
