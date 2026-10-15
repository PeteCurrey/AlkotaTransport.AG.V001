# ALKOTA — SEO Phase 6 Implementation Audit

**Audit Date:** 15 October 2026  
**Auditor:** Principal Technical SEO Engineer & Next.js Architect  
**Codebase State:** Next.js 15.1.7 (App Router), React 19, TypeScript 5.7, Tailwind CSS 3.4.17  
**Production Server Verification:** `next start` on `http://localhost:3001`  

---

## 1. Executive Summary & Inventory

The ALKOTA website was initiated with a high-craft homepage and a driver application funnel. In Phase 5, critical baseline issues were addressed (including resolving 11 premature 404 links in `sitemap.ts`, fixing broken font CSS variables, adding canonical URL tags, adding an accessible skip-link, and enforcing clean ESLint and TypeScript compilation).

However, from an **organic search growth, content engineering, and commercial acquisition** standpoint, major structural opportunities and content gaps remain:
1. **Commercial Service Pages are Absent:** While `siteConfig.services` defines 5 core service offerings, there are no published `/services` or `/services/[slug]` routes. The sitemap was appropriately trimmed to prevent 404 crawler errors, but this leaves the site without rankable URLs for high-intent queries like *"trade plate delivery UK"*, *"covered car transport UK"*, or *"EV fleet logistics"*.
2. **Industry / B2B Vertical Pages are Absent:** Enterprise fleet buyers (leasing companies, franchise dealerships, rental operators) search with sector-specific intent. These personas currently only see a tabbed widget on the homepage, with no dedicated, indexable landing pages.
3. **Information Hub & Educational Content Engine is Missing:** No editorial guides, industry articles, or case study detail pages exist to establish topical authority, capture informational search queries, or build natural internal links.
4. **Domain Migration Risk (alkota.co.uk):** The domain `alkota.co.uk` historically hosted an industrial cleaning / pressure washer equipment business. Launching an automotive logistics business on this domain without a strict legacy migration map risks 404 crawl waste and legacy keyword confusion.
5. **Analytics & Conversion Event Instrumentation:** The frontend forms currently manage local UI state without event-level analytics hooks to differentiate commercial quotes from driver applications.

---

## 2. Granular Route & Component Audit

| ID | Area / Route | Finding / Problem | Commercial or SEO Consequence | Action Required | Verification Method |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **AUD-01** | `/services` & `/services/[slug]` | No dedicated routes exist; content is confined to a homepage summary section. | Cannot rank for commercial service searches (e.g. *"trade plate delivery"*, *"covered vehicle transport"*). Zero indexable service URLs. | Implement `/services` index hub and 5 comprehensive, differentiated service pages with rich structured data. | Server returns HTTP 200, canonical URL present, sitemap updated, rich schema validated. |
| **AUD-02** | `/industries` & `/industries/[slug]` | Industry solutions exist only as an interactive tab component in `CommercialSectorsSection.tsx`. | B2B buyers searching *"logistics for vehicle leasing"* or *"dealership car transfer service"* find no dedicated landing page. | Implement `/industries` index hub and dedicated sector pages tailored to specific operational pain points. | Server returns HTTP 200, valid BreadcrumbList schema, unique metadata. |
| **AUD-03** | `/sitemap.xml` | Currently lists only `/` and `/drivers/apply`. | Crawlers only discover two indexable pages, limiting domain crawl budget and keyword footprint. | Expand `src/app/sitemap.ts` to dynamically include newly built, valid 200 routes for services, industries, and guides. | `curl -s http://localhost:3001/sitemap.xml` verifies 100% of emitted URLs return HTTP 200. |
| **AUD-04** | Header Navigation (`src/components/layout/Header.tsx`) | Header links point to homepage anchor hashes (`#about`, `#services`, `#industries`, `#technology`) rather than dedicated URLs. | Dilutes internal link equity; sub-pages lack primary navigation links back to core commercial hubs. | Update navigation model to support deep links (`/services`, `/industries`, `/technology`) while maintaining smooth in-page scrolling on homepage. | Verify crawler parses standard `<a href="/services">` links on all pages. |
| **AUD-05** | Structured Data (Schema.org) | Global `AutomotiveBusiness`, `LogisticsService`, `WebSite`, and `JobPosting` exist, but service-specific schemas are missing. | Search engines cannot display Rich Results for individual logistics services, offer catalogs, or sector solutions. | Implement typed `Service`, `BreadcrumbList`, and `Article` JSON-LD components on all new routes. | Python Schema validator parses valid JSON-LD on every new page without warnings. |
| **AUD-06** | Editorial / Content Engine (`/insights`) | Zero editorial articles or guides exist. | Fails to capture informational / top-of-funnel searches (e.g. *"what is trade plate delivery"*, *"BVRLA fair wear and tear guide"*). | Build an `/insights` hub with initial high-utility cornerstone operational guides. | Verify article routes render SSR HTML with `Article` schema and internal service cross-links. |
| **AUD-07** | Domain Migration (`alkota.co.uk`) | Historical domain was an industrial cleaning equipment brand (pressure washers, steam cleaners). | Googlebot may hold historical cleaning entity associations or encounter legacy 404s. | Implement a formal URL disposition map and Next.js middleware with explicit 410 Gone / 301 Redirect rules. | Test legacy URLs with curl to verify correct HTTP status (410 for irrelevant cleaning, 301 where applicable). |
| **AUD-08** | Analytics & Event Measurement | No structured event layer exists for commercial conversion tracking (quote submission, demo request, driver application). | Cannot measure organic landing-page conversion rate, cost per lead, or distinguish fleet buyers from drivers. | Implement a type-safe telemetry / analytics dispatch utility with data minimisation (no PII in event payloads). | Console / network inspection confirms event firing upon successful user actions. |
| **AUD-09** | Image Optimisation & Responsive Sizing | Current sections use Unsplash URLs or CSS graphics; inner pages will require automotive imagery. | Unoptimised images risk regressing Core Web Vitals (LCP > 2.5s, CLS > 0.1). | Enforce Next.js `next/image` with explicit width/height, AVIF/WebP formats, and descriptive alt text. | Audit DOM output to confirm zero layout shift and presence of responsive `srcset`. |
| **AUD-10** | Technology & Platform Route (`/technology`) | Mentioned in header as `#technology` anchor only. | High-value search terms around *"vehicle movement software"*, *"digital ePOD app"*, and *"automated fleet logistics"* are untargeted. | Create a dedicated `/technology` landing page explaining the ALKOTA software backbone and DataClear protocol. | HTTP 200, valid metadata, internal links to `/services` and `/quote`. |

---

## 3. Technical SEO Baseline Verification

- **Node / Next.js Runtime:** Next.js 15.1.7 (ESM, App Router).
- **TypeScript:** Strict mode enabled, 0 type errors.
- **ESLint:** 0 errors, 0 warnings.
- **Production Build:** Static page generation (SSG) with client hydration where required.
- **Robots.txt:** Correctly disallows `/api/`, `/portal/`, `/admin/` and specifies canonical sitemap.
- **Security:** No API keys or credentials exposed in client bundles.
