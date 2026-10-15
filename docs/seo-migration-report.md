# ALKOTA — Domain Migration Strategy & URL Disposition Report

**Document Version:** 1.0.0  
**Domain:** `alkota.co.uk`  
**Historical Entity:** Industrial Cleaning & Pressure Washing Systems  
**New Entity:** UK Automotive Logistics & Vehicle Movement Platform  
**Target Search Engine Strategy:** Fast Entity Reassignment, Zero Soft-404 Crawl Waste  

---

## 1. Entity Migration Principles

Migrating a domain from an industrial cleaning equipment catalog to an automotive logistics business requires strict technical SEO discipline. 

> [!WARNING]
> **Why Catch-All 301 Redirects to the Homepage are Prohibited:**  
> Automatically redirecting hundreds of legacy pressure washer product pages to an automotive homepage triggers Google's automated **Soft 404** classification. Google recognizes that the target page has zero topical relevance to the original query. This wastes crawl budget, confuses Google's Knowledge Graph, and delays ranking for new commercial automotive keywords.

### Strict Disposition Rules:
1. **HTTP 410 Gone (Permanently Retired):** Applied to all legacy industrial cleaning product, category, and equipment URLs that have no conceptual equivalent in automotive logistics. A 410 response instructs Googlebot to purge the URL from the index immediately, preserving crawl budget for the new site.
2. **HTTP 301 Moved Permanently:** Applied exclusively to corporate utility pages where a genuine modern equivalent exists (e.g. `/contact-us` -> `/contact`, `/privacy-policy` -> `/#privacy`).

---

## 2. Master Legacy URL Disposition Table

| Original Legacy URL Pattern | Disposition | HTTP Status | Target Destination | Rationale | Verification Method |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/pressure-washers/*` | Permanently Retired | **410 Gone** | N/A | Industrial cleaning products have no successor in automotive logistics. | `curl -i http://localhost:3001/pressure-washers/hot-water` returns 410. |
| `/hot-water/*` | Permanently Retired | **410 Gone** | N/A | Obsolete product category. Purge index immediately. | `curl -i http://localhost:3001/hot-water-pressure-washers` returns 410. |
| `/steam-cleaners/*` | Permanently Retired | **410 Gone** | N/A | Obsolete product category. Purge index immediately. | `curl -i http://localhost:3001/steam-cleaners` returns 410. |
| `/industrial-parts-washers/*` | Permanently Retired | **410 Gone** | N/A | Obsolete product category. Purge index immediately. | `curl -i http://localhost:3001/industrial-parts-washers` returns 410. |
| `/cleaning-equipment/*` | Permanently Retired | **410 Gone** | N/A | Obsolete product catalog. | `curl -i http://localhost:3001/cleaning-equipment` returns 410. |
| `/spares/*` & `/accessories/*` | Permanently Retired | **410 Gone** | N/A | Industrial spare parts catalog. | `curl -i http://localhost:3001/spares/nozzles` returns 410. |
| `/products/*` & `/category/*` | Permanently Retired | **410 Gone** | N/A | General legacy e-commerce paths. | `curl -i http://localhost:3001/products/cleaner-100` returns 410. |
| `/contact-us` or `/contact-us/` | Redirect | **301 Moved** | `https://alkota.co.uk/contact` | Legitimate business contact intent mapped to new central dispatch desk. | `curl -i http://localhost:3001/contact-us` returns 301 to `/contact`. |
| `/about-us` or `/about-us/` | Redirect | **301 Moved** | `https://alkota.co.uk/` | Corporate brand intent mapped to new master portal. | `curl -i http://localhost:3001/about-us` returns 301 to `/`. |
| `/privacy-policy` | Redirect | **301 Moved** | `https://alkota.co.uk/#privacy` | Legal privacy intent mapped to new privacy policy. | `curl -i http://localhost:3001/privacy-policy` returns 301 to `/#privacy`. |
| `/terms-and-conditions` | Redirect | **301 Moved** | `https://alkota.co.uk/#terms` | Terms intent mapped to new terms. | `curl -i http://localhost:3001/terms-and-conditions` returns 301 to `/#terms`. |

---

## 3. Implementation Architecture

The migration rules execute at the edge via Next.js Middleware in [`src/middleware.ts`](file:///Users/petercurrey/Desktop/Websites/Alkota%20Transport.AG.V001/src/middleware.ts).

### Performance Impact:
- **Zero Database Lookups:** Fast regex patterns evaluate in sub-millisecond edge time.
- **Custom 410 Response:** Sends a lightweight, styled HTML response informing human visitors of the business transition while including `X-Robots-Tag: noindex` to ensure search bots process the retirement immediately.
- **Bypass Static Assets:** Middleware config strictly skips static assets (`_next/static`, images, icons, robots, sitemap) so ordinary page delivery is never slowed down.
