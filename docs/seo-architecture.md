# ALKOTA Technical SEO & URL Architecture
**Domain:** `alkota.co.uk` | **Document Version:** 1.0.0
**Target Market:** United Kingdom Automotive Movement, Fleet Logistics & Trade Plate Transport
**Lead:** Technical SEO Lead & Product Architect

---

## 1. Information Architecture & URL Hierarchy

The URL structure is engineered for high topical authority, clean silo isolation, and zero keyword cannibalization across service types, enterprise industries, and geographic hubs.

```text
alkota.co.uk/
├── (Root)
│   ├── /                               # Master Brand & Core Movement Portal
│   ├── /about                          # Company Heritage, Technology & Leadership
│   ├── /contact                        # Nationwide Operations & Direct Contacts
│   ├── /technology                     # Digital ePOD, Live GPS & Telemetry Portal
│   └── /quote                          # Rapid Route & Mileage Pricing Calculator
│
├── /services/                          # Core Service Verticals
│   ├── /trade-plate-delivery           # Single Driven Vehicle Logistics
│   ├── /covered-vehicle-transport      # High-Value, Prestige & Prototype Enclosed Transit
│   ├── /ev-fleet-logistics             # Electric Vehicle Delivery & High-Voltage Transport
│   ├── /dealership-transfers           # Inter-Dealer Stock Redistribution & Dealer Swaps
│   └── /inspect-and-collect            # BVRLA Fair Wear-and-Tear Return Inspections & ePOD
│
├── /fleet-solutions/                   # Enterprise B2B Sector Verticals
│   ├── /leasing-contract-hire          # Defleet, End-of-Lease Return Logistics
│   ├── /oem-manufacturers              # Press Fleets, Launch Events, Factory-to-Hub
│   └── /corporate-fleets               # Company Car Reallocation & Employee Handovers
│
├── /coverage/                          # Programmatic UK Geographic Corridors & Hubs
│   ├── /london                         # Greater London, M25, ULEZ Compliant Logistics
│   ├── /birmingham                     # West Midlands Logistics Hub & Central Freight
│   ├── /manchester                     # North West Automotive Corridor & M62 Transit
│   ├── /leeds                          # Yorkshire Commercial & Fleet Interchange
│   ├── /bristol                        # South West & M4 Corridor
│   └── /scotland                       # Central Belt (Glasgow & Edinburgh) Movements
│
└── /drivers/                           # Recruitment & Network Growth Funnel
    ├── /                               # Driver Careers & Trade Plate Network Overview
    └── /apply                          # 4-Step Trade Plate Driver Application & Vetting
```

---

## 2. Keyword Mapping & Search Intent Matrix

| URL Slug | Primary Target Keyword | Secondary Keywords | Search Intent | Target Persona |
| :--- | :--- | :--- | :--- | :--- |
| `/` | UK vehicle movement logistics | car delivery service UK, trade plate logistics | Commercial / Navigational | Fleet Directors, Dealership GMs |
| `/services/trade-plate-delivery` | trade plate delivery UK | driven vehicle movement, trade plate drivers UK | Commercial Investigation | Dealership Stock Controllers, Auction Buyers |
| `/services/covered-vehicle-transport` | covered car transport UK | enclosed vehicle delivery, prestige car transport | High-Ticket Commercial | Supercar Owners, OEM Launch Teams, Concours |
| `/services/ev-fleet-logistics` | EV logistics UK | electric vehicle transport, EV fleet movement | Commercial / Transactional | Fleet Operators, Corporate ESG Leads |
| `/services/dealership-transfers` | dealer swap transport | dealership car movements, inter-dealer stock transfer | Transactional | Franchise Dealer Groups, Multi-Site Managers |
| `/services/inspect-and-collect` | vehicle inspection and collection | BVRLA defleet inspection, digital ePOD vehicle handover | Commercial B2B | Contract Hire & Leasing (BCH/PCH) |
| `/fleet-solutions/leasing-companies` | vehicle defleet logistics | end of lease vehicle collection, leasing logistics UK | Enterprise B2B | Fleet Lease Directors (Lex, Alphabet, Arval type) |
| `/coverage/birmingham` | vehicle transport Birmingham | car delivery West Midlands, Birmingham trade plate drivers | Local Commercial | Regional Dealerships, Auction Centres |
| `/quote` | vehicle movement quote | car transport cost calculator, vehicle delivery prices UK | High Intent Transactional | Active vehicle movers, private buyers |
| `/drivers/apply` | trade plate driver jobs | become a trade plate driver UK, Gemini drivers alternative | Employment Transactional | Self-employed professional drivers |

---

## 3. Structured Data & JSON-LD Schema Architecture

Every route automatically renders rich, validated JSON-LD schema using a centralized schema generator component.

### 3.1 Global Graph (Root Layout)
* **`Organization` / `AutomotiveBusiness`**:
  * Formal business legal entity: `ALKOTA Logistics Limited` (pending confirmation).
  * Legal name, logo, URL (`https://alkota.co.uk`), contact points, and official social handles.
  * Geographic service area: `GeoCircle` / `Country: United Kingdom` (`GB`).
* **`WebSite`**:
  * Name: `ALKOTA`
  * Potential action: `SearchAction` for route lookups.

### 3.2 Service Pages Schema Example (`/services/trade-plate-delivery`)
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LogisticsService",
      "@id": "https://alkota.co.uk/services/trade-plate-delivery#service",
      "name": "Trade Plate Vehicle Delivery",
      "provider": {
        "@type": "AutomotiveBusiness",
        "name": "ALKOTA",
        "url": "https://alkota.co.uk"
      },
      "serviceType": "Driven Automotive Logistics",
      "areaServed": {
        "@type": "Country",
        "name": "United Kingdom"
      },
      "description": "Nationwide single-vehicle trade plate driven movement powered by professional, BVRLA-trained drivers and real-time digital ePOD inspection.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Vehicle Movement Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Standard Single Vehicle Movement"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Priority Same-Day Vehicle Transfer"
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://alkota.co.uk"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://alkota.co.uk/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Trade Plate Delivery",
          "item": "https://alkota.co.uk/services/trade-plate-delivery"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does trade plate vehicle delivery work in the UK?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Trade plate delivery allows licensed, fully insured professional drivers to move untaxed or unregistered vehicles legally on public UK roads from auctions, dealerships, or collection points to their destination."
          }
        },
        {
          "@type": "Question",
          "name": "What insurance coverage is in place during transit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All movements with ALKOTA are covered under our comprehensive commercial motor trade and Goods in Transit insurance policies, backed by digital pre-collection condition appraisals."
          }
        }
      ]
    }
  ]
}
```

---

## 4. Technical SEO Directives & Configuration

### 4.1 Canonicalization & Domain Standards
* Primary canonical domain: `https://alkota.co.uk`
* Strict redirect of `http://` and `www.alkota.co.uk` to `https://alkota.co.uk` via Cloudflare / edge middleware with HTTP status `301 Moved Permanently`.
* Self-referencing canonical tags on every indexable page.

### 4.2 Dynamic XML Sitemap (`src/app/sitemap.ts`)
* Automatically queries static route definitions, service catalog, and programmatic coverage hubs.
* Emits `<lastmod>`, `<changefreq>`, and `<priority>`:
  * Homepage: `1.0`
  * Core Services & Quote Tool: `0.9`
  * Fleet Solutions: `0.8`
  * Geographic Hubs: `0.7`
  * Legal & Utility: `0.3`

### 4.3 Robots.txt Directives (`src/app/robots.ts`)
```text
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /portal/
Disallow: /*?*quote_token=

Sitemap: https://alkota.co.uk/sitemap.xml
```

---

## 5. Performance, Crawl Budget & Core Web Vitals Guardrails

1. **Server-Side Rendered (SSR) HTML:**
   * Googlebot receives 100% complete textual content, heading hierarchies (`H1` through `H3`), internal links, and semantic metadata on the initial raw HTTP response.
   * Client-side JavaScript execution is never a prerequisite for search indexing.
2. **Next.js Image Optimization (`next/image`):**
   * Automatic AVIF and WebP transcoding.
   * Explicit `priority` set on the primary hero graphic; all below-the-fold graphics lazy-loaded with placeholder blur data URLs.
3. **Core Web Vitals Thresholds:**
   * **LCP (Largest Contentful Paint):** Target `< 1.8s` (Mobile 4G).
   * **INP (Interaction to Next Paint):** Target `< 100ms`.
   * **CLS (Cumulative Layout Shift):** Target `< 0.02` (Strict zero-shift layouts via reserved aspect ratios).
