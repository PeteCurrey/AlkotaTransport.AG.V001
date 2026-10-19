# ALKOTA — Editorial Content Roadmap & Publishing Engine

**Document Version:** 1.0.0  
**Target Domain:** `https://alkota.co.uk/insights`  
**Focus:** Informational Search Intent, Topical Authority & Organic B2B Acquisition  

---

## 1. Editorial Strategy & Quality Standards

1. **Topical Authority Over Volume:** We do not publish shallow, repetitive AI articles. Every piece must provide authoritative, practical guidance for fleet managers, dealer principals, and procurement executives.
2. **Fact Integrity:** Cite official UK legislation (DVLA, Road Vehicles Regulations 1986) and industry standards (BVRLA Fair Wear & Tear). Never invent case study data or unverified claims.
3. **Conversion Alignment:** Every article addresses an operational problem that ALKOTA solves, with natural contextual links to the corresponding commercial service page.

---

## 2. Published Cornerstone Guides (Phase 6 Launch)

### Guide 01: What is Trade Plate Delivery? UK Legal Framework, Costs & Operating Guide
- **URL:** `/insights/what-is-trade-plate-delivery`
- **Search Intent:** Informational / Practical Investigation
- **Target Persona:** Dealership Stock Controllers, Auction Buyers, Private Movers
- **Primary Topic:** DVLA Trade Licence regulations, legal exemptions, driven vs transporter economics.
- **Unique Angle:** Dispels common misconceptions about trade plates (e.g. that trade plates provide insurance) and provides practical cost comparison heuristics.
- **Internal Links:** `/services/trade-plate-delivery`, `/services/dealership-transfers`, `/industries/dealership-groups`.
- **Conversion Goal:** Direct reader to the instant quote calculator for driven transport.
- **Status:** **LIVE & PUBLISHED**

### Guide 02: BVRLA Fair Wear & Tear Standards: The Definitive End-of-Lease Handback Guide
- **URL:** `/insights/bvrla-fair-wear-and-tear-guide`
- **Search Intent:** Informational / Compliance
- **Target Persona:** Corporate Fleet Drivers, Lease Customers, Fleet Operations Managers
- **Primary Topic:** Objective wear-and-tear thresholds (dents, scratches, wheels, tyres) and digital inspection mechanics.
- **Unique Angle:** Explains why neutral on-site photographic inspection eliminates post-handover invoice friction and provides a 48-hour pre-collection preparation checklist.
- **Internal Links:** `/services/inspect-and-collect`, `/services/ev-fleet-logistics`, `/industries/contract-hire-leasing`.
- **Conversion Goal:** Inquire about ALKOTA's independent inspect-and-collect service.
- **Status:** **LIVE & PUBLISHED**

---

## 3. Prioritised Publishing Roadmap (Upcoming Quarters)

| Phase | Proposed Topic | Target Search Intent | Target Audience | Primary Internal Link | Commercial Objective | Dependencies |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Q1-W1** | **How Dealerships Can Eliminate Inter-Branch Transfer Bottlenecks** | Commercial / Operational | Franchise Dealer Principals, Stock Controllers | `/services/dealership-transfers` | Drive dealer group multi-branch transfer contracts. | ✅ **LIVE & PUBLISHED** — `/insights/eliminate-dealer-inter-branch-transfer-bottlenecks` |
| **Q1-W3** | **Selecting a UK Vehicle Movement Supplier: The 10-Point Procurement Checklist** | High-Intent Commercial Investigation | Fleet Procurement Directors, Lessors | `/industries/corporate-fleets` | Lead generation for enterprise Master Service Agreements. | ✅ **LIVE & PUBLISHED** — `/insights/uk-vehicle-movement-supplier-procurement-checklist` |
| **Q1-W5** | **Electric Vehicle Logistics: Managing State of Charge, Cold Weather & Battery Health** | Technical Informational | Corporate ESG Leads, Fleet Managers | `/services/ev-fleet-logistics` | Position ALKOTA as the definitive EV fleet logistics authority. | Validation of rapid hub charging protocols. |
| **Q2-W1** | **Vehicle Condition Appraisals & Handover Documentation: The Legal Risk of Paper Forms** | Compliance & Legal | Fleet Compliance Leads, Leasing Companies | `/technology` | Highlight ALKOTA 48-point digital ePOD and DataClear protocols. | Legal review of electronic signature admissibility. |
| **Q2-W3** | **Managing Motorway Delays & Operational Exceptions in Nationwide Vehicle Transit** | Operational Best Practice | Operations Controllers, Logistics Buyers | `/contact` | Showcase proactive GPS telemetry and mitigation protocols. | Telematics platform feature documentation. |
| **Q2-W5** | **Evaluating Service Level Agreements (SLAs) for National Vehicle Movement Contracts** | Procurement Guidance | Enterprise Procurement Heads | `/industries/contract-hire-leasing` | Inbound RFP submissions and enterprise tenders. | Commercial pricing model approval. |

---

## 4. Content Production & Approval Protocol

1. **Drafting:** Authored using structured JSON model with typed sections, checkpoints, and FAQ entities.
2. **Technical Compliance Review:** Verify all legal statements against current DVLA and BVRLA publications.
3. **Schema Generation:** Every published guide automatically emits Schema.org `Article`, `BreadcrumbList`, and `FAQPage` JSON-LD.
4. **Indexability:** Automatically added to `src/app/sitemap.ts` with publication date and priority `0.8`.
