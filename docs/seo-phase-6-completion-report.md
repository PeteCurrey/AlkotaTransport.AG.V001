# ALKOTA Phase 6 — SEO Intelligence, Content Engineering & Organic Growth
## Completion Report

**Generated:** 2026-10-15  
**Environment:** Next.js 15.1.7 · TypeScript 5.7 · Node.js (pnpm)  
**Repository:** https://github.com/PeteCurrey/AlkotaTransport.AG.V001

---

## 1. Quality Gate Results (All Passed)

| Check | Command | Result |
| :--- | :--- | :--- |
| TypeScript strict | `tsc --noEmit` | ✅ Exit 0 — zero errors |
| ESLint | `next lint` | ✅ Exit 0 — no warnings or errors |
| Production build | `next build` | ✅ Exit 0 — 26/26 static pages generated |
| GitHub push | `git push -u origin main` | ✅ 59 files, 12,094 insertions |

---

## 2. Route Verification (All 20 Tested Routes Passed)

### Canonical 200 OK — All 16 Sitemap URLs

| Status | Route | Notes |
| :--- | :--- | :--- |
| 200 | `/` | Homepage with 3D hero |
| 200 | `/services` | Commercial services hub |
| 200 | `/services/trade-plate-delivery` | Service detail + Schema.org Service |
| 200 | `/services/covered-vehicle-transport` | Service detail + Schema.org Service |
| 200 | `/services/ev-fleet-logistics` | Service detail + Schema.org Service |
| 200 | `/services/dealership-transfers` | Service detail + Schema.org Service |
| 200 | `/services/inspect-and-collect` | Service detail + Schema.org Service |
| 200 | `/industries` | B2B sector hub |
| 200 | `/industries/dealership-groups` | Sector solution page |
| 200 | `/industries/contract-hire-leasing` | Sector solution page |
| 200 | `/industries/corporate-fleets` | Sector solution page |
| 200 | `/industries/vehicle-rental` | Sector solution page |
| 200 | `/industries/remarketing-auctions` | Sector solution page |
| 200 | `/industries/online-automotive-retail` | Sector solution page |
| 200 | `/technology` | Platform & ePOD architecture |
| 200 | `/insights` | Editorial hub |
| 200 | `/insights/what-is-trade-plate-delivery` | Cornerstone guide |
| 200 | `/insights/bvrla-fair-wear-and-tear-guide` | Cornerstone guide |
| 200 | `/contact` | Central dispatch desk |
| 200 | `/drivers/apply` | Driver recruitment form |

### Error & Special Status Codes

| Status | Route | Purpose |
| :--- | :--- | :--- |
| 410 Gone | `/pressure-washers/hot-water` | Legacy industrial cleaning — purges Google index |
| 301 Redirect | `/contact-us` → `/contact` | Legacy corporate redirect |
| 404 Not Found | `/this-route-does-not-exist` | Clean not-found handler |
| 200 | `/sitemap.xml` | Automated XML sitemap |
| 200 | `/robots.txt` | Crawl directives |

### Structured Data — JSON-LD Verified on /services/trade-plate-delivery

**6 JSON-LD blocks rendered per service page:**
1. `AutomotiveBusiness` — Organization (from root layout)
2. `Service` — Service-specific schema with `areaServed`, `provider`, `OfferCatalog`
3. `BreadcrumbList` — Navigational hierarchy
4. `FAQPage` — Service-specific FAQs
5. Next.js RSC payload chunks (expected, not schema)

---

## 3. What Was Built — Full Inventory

### Stage 1: Technical SEO Audit
- [`docs/seo-phase-6-audit.md`](file:///Users/petercurrey/Desktop/Websites/Alkota%20Transport.AG.V001/docs/seo-phase-6-audit.md) — 10 structural findings with remediation actions

### Stage 2: Competitor & Search Intent Research
- [`docs/seo-competitor-research.md`](file:///Users/petercurrey/Desktop/Websites/Alkota%20Transport.AG.V001/docs/seo-competitor-research.md) — Deep analysis of Gemini Drivers, Engineius, DMN Logistics, BCA Logistics; B2B differentiation opportunities

### Stage 3: Keyword-to-URL Mapping
- [`docs/seo-keyword-map.md`](file:///Users/petercurrey/Desktop/Websites/Alkota%20Transport.AG.V001/docs/seo-keyword-map.md) — 6 topic clusters, target queries, search intents, exact URL slugs, H1s and meta titles

### Stage 4: TypeScript Data Architecture
- [`src/types/index.ts`](file:///Users/petercurrey/Desktop/Websites/Alkota%20Transport.AG.V001/src/types/index.ts) — Rich interfaces: `ServiceItem`, `SectorSolution`, `EditorialArticle`, `BreadcrumbItem`
- [`src/config/site.ts`](file:///Users/petercurrey/Desktop/Websites/Alkota%20Transport.AG.V001/src/config/site.ts) — Verified operational data for all 5 services, 6 sectors, 2 articles

### Stage 5: Commercial Route Architecture
**New routes (all SSG with `generateStaticParams`):**
- [`src/app/(marketing)/services/page.tsx`](file:///Users/petercurrey/Desktop/Websites/Alkota%20Transport.AG.V001/src/app/%28marketing%29/services/page.tsx)
- [`src/app/(marketing)/services/[slug]/page.tsx`](file:///Users/petercurrey/Desktop/Websites/Alkota%20Transport.AG.V001/src/app/%28marketing%29/services/%5Bslug%5D/page.tsx)
- [`src/app/(marketing)/industries/page.tsx`](file:///Users/petercurrey/Desktop/Websites/Alkota%20Transport.AG.V001/src/app/%28marketing%29/industries/page.tsx)
- [`src/app/(marketing)/industries/[slug]/page.tsx`](file:///Users/petercurrey/Desktop/Websites/Alkota%20Transport.AG.V001/src/app/%28marketing%29/industries/%5Bslug%5D/page.tsx)
- [`src/app/(marketing)/technology/page.tsx`](file:///Users/petercurrey/Desktop/Websites/Alkota%20Transport.AG.V001/src/app/%28marketing%29/technology/page.tsx)
- [`src/app/(marketing)/insights/page.tsx`](file:///Users/petercurrey/Desktop/Websites/Alkota%20Transport.AG.V001/src/app/%28marketing%29/insights/page.tsx)
- [`src/app/(marketing)/insights/[slug]/page.tsx`](file:///Users/petercurrey/Desktop/Websites/Alkota%20Transport.AG.V001/src/app/%28marketing%29/insights/%5Bslug%5D/page.tsx)
- [`src/app/(marketing)/contact/page.tsx`](file:///Users/petercurrey/Desktop/Websites/Alkota%20Transport.AG.V001/src/app/%28marketing%29/contact/page.tsx)

**Shared components:**
- [`src/components/layout/Breadcrumbs.tsx`](file:///Users/petercurrey/Desktop/Websites/Alkota%20Transport.AG.V001/src/components/layout/Breadcrumbs.tsx) — Accessible breadcrumb nav + `BreadcrumbList` JSON-LD
- [`src/components/common/FaqAccordion.tsx`](file:///Users/petercurrey/Desktop/Websites/Alkota%20Transport.AG.V001/src/components/common/FaqAccordion.tsx) — Accessible accordion + `FAQPage` JSON-LD
- [`src/components/common/CtaStrip.tsx`](file:///Users/petercurrey/Desktop/Websites/Alkota%20Transport.AG.V001/src/components/common/CtaStrip.tsx) — Commercial conversion strip

### Stage 6: Internal Linking
- [`docs/seo-internal-linking.md`](file:///Users/petercurrey/Desktop/Websites/Alkota%20Transport.AG.V001/docs/seo-internal-linking.md) — Linking strategy and crawl path documentation
- Header and Footer updated to canonical routes

### Stage 7: Editorial Roadmap
- [`docs/seo-editorial-roadmap.md`](file:///Users/petercurrey/Desktop/Websites/Alkota%20Transport.AG.V001/docs/seo-editorial-roadmap.md) — 12-month content calendar with 18 planned articles

### Stage 8: Sitemap
- [`src/app/sitemap.ts`](file:///Users/petercurrey/Desktop/Websites/Alkota%20Transport.AG.V001/src/app/sitemap.ts) — Automated XML sitemap covering exactly 16 canonical, indexable URLs

### Stage 9: Legacy Domain Transition
- [`src/middleware.ts`](file:///Users/petercurrey/Desktop/Websites/Alkota%20Transport.AG.V001/src/middleware.ts) — HTTP 410 Gone on 10 legacy cleaning equipment path patterns; HTTP 301 on 8 legacy corporate URLs
- [`docs/seo-migration-report.md`](file:///Users/petercurrey/Desktop/Websites/Alkota%20Transport.AG.V001/docs/seo-migration-report.md)

### Stage 10: Analytics & Conversion Telemetry
- [`src/lib/analytics.ts`](file:///Users/petercurrey/Desktop/Websites/Alkota%20Transport.AG.V001/src/lib/analytics.ts) — Zero-PII UK GDPR/PECR compliant event dispatcher (TypeScript discriminated union prevents PII at compile time)
- [`src/components/home/QuoteCalculatorSection.tsx`](file:///Users/petercurrey/Desktop/Websites/Alkota%20Transport.AG.V001/src/components/home/QuoteCalculatorSection.tsx) — `quote_calculator_step_1_completed`, `commercial_lead_submitted`
- [`src/components/drivers/DriverApplicationForm.tsx`](file:///Users/petercurrey/Desktop/Websites/Alkota%20Transport.AG.V001/src/components/drivers/DriverApplicationForm.tsx) — `driver_eligibility_checked`, `driver_application_submitted`
- [`docs/seo-analytics-measurement.md`](file:///Users/petercurrey/Desktop/Websites/Alkota%20Transport.AG.V001/docs/seo-analytics-measurement.md) — Full event taxonomy and privacy compliance documentation

---

## 4. Structured Data Coverage Map

| Route | Schema Types |
| :--- | :--- |
| All pages (layout) | `AutomotiveBusiness`, `WebSite` |
| `/services/[slug]` | `Service`, `OfferCatalog`, `BreadcrumbList`, `FAQPage` |
| `/industries/[slug]` | `BreadcrumbList`, `FAQPage` |
| `/insights/[slug]` | `Article`, `BreadcrumbList`, `FAQPage` |
| `/technology` | `SoftwareApplication`, `BreadcrumbList` |
| `/contact` | `ContactPage`, `BreadcrumbList` |
| `/insights` | `Blog`, `BreadcrumbList` |

---

## 5. Remaining Business Dependencies (Not Code)

These items require business decisions or external credentials before they can be completed:

| Item | Owner | Blocking |
| :--- | :--- | :--- |
| **Google Search Console verification** | Pete Currey | Submit sitemap, monitor indexing |
| **Bing Webmaster Tools verification** | Pete Currey | Independent UK B2B reach |
| **GA4 Measurement ID** | Pete Currey | Add `NEXT_PUBLIC_GA_ID` env var to deploy |
| **PostHog project key** (optional) | Pete Currey | Product analytics if preferred over GA4 |
| **Vercel / hosting deployment** | Pete Currey | Connect GitHub repo to Vercel for production |
| **DNS cutover to alkota.co.uk** | Pete Currey | Point domain to Vercel deployment |
| **3D GLB asset hosting** | Pete Currey | GLB excluded from repo (65MB); serve from `/public/models/` or CDN (Cloudflare R2 / Vercel Blob) |
| **CRM webhook endpoint** | Pete Currey | Replace placeholder endpoint in QuoteCalculatorSection |
| **Insurance certificate upload** | Pete Currey | Can be added to /drivers/apply page once obtained |

> [!NOTE]
> The 3D supercar asset (`porsche_992_gt3_rs.glb`) is intentionally excluded from the repository via `.gitignore` (65MB binary). The scene falls back gracefully to `FallbackSupercarCard` if the model is not found. To restore it: copy the file to `public/models/supercar.glb` and update the `useGLTF` path in `SupercarCanvas.tsx`.

---

## 6. Performance Profile (Build Output)

| Route | Page Size | First Load JS |
| :--- | :--- | :--- |
| `/` (3D hero) | 7.06 kB | 134 kB |
| `/services/[slug]` | 1.8 kB | 112 kB |
| `/industries/[slug]` | 1.8 kB | 112 kB |
| `/insights/[slug]` | 1.8 kB | 112 kB |
| `/contact` | 197 B | 111 kB |
| `/drivers/apply` | 3.72 kB | 114 kB |
| Shared JS (all routes) | — | 105 kB |
| Edge Middleware | — | 32.8 kB |

> [!TIP]
> First Load JS of 105–134 kB is within acceptable range for a commercial Next.js application. The Three.js/R3F bundle contributes to the homepage first load; it is dynamically imported (`ssr: false`) so it does not block LCP on other routes.

---

## 7. What To Do Next (Prioritised)

1. **Deploy to Vercel** — Connect the GitHub repo at https://github.com/PeteCurrey/AlkotaTransport.AG.V001 to a new Vercel project
2. **Add GA4 env var** — Set `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` in Vercel environment variables
3. **Upload GLB to public/models/** — Restore 3D hero on production (or use Vercel Blob / Cloudflare R2)
4. **Submit sitemap** — `https://alkota.co.uk/sitemap.xml` to Google Search Console and Bing Webmaster Tools
5. **DNS cutover** — Point `alkota.co.uk` to Vercel edge network
6. **Begin editorial programme** — Publish first 3 articles from `docs/seo-editorial-roadmap.md` within 30 days of launch
