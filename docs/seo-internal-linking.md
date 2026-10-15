# ALKOTA — Internal-Linking Architecture & Topic Silos

**Document Version:** 1.0.0  
**Target Domain:** `https://alkota.co.uk`  
**Standard:** Strict Topical Hierarchy, Contextual Relevance, 100% Crawl Coverage  

---

## 1. Information Architecture & Link Equity Flow

The ALKOTA internal linking structure is engineered to flow authority from the high-authority root (`/`) down into commercial service verticals, B2B industry landing pages, and educational cornerstone guides, with bidirectional contextual links between them:

```text
                               ┌────────────────────────┐
                               │     Master Homepage    │
                               │           (/)          │
                               └───────────┬────────────┘
           ┌───────────────────────────────┼───────────────────────────────┐
           ▼                               ▼                               ▼
┌──────────────────────┐       ┌──────────────────────┐       ┌──────────────────────┐
│    Services Hub      │       │   Industries Hub     │       │   Insights Hub       │
│     (/services)      │       │    (/industries)     │       │     (/insights)      │
└──────────┬───────────┘       └──────────┬───────────┘       └──────────┬───────────┘
           │                               │                               │
     ┌─────┴─────┐                   ┌─────┴─────┐                   ┌─────┴─────┐
     ▼           ▼                   ▼           ▼                   ▼           ▼
[Service A]  [Service B]       [Industry X]  [Industry Y]      [Guide 1]   [Guide 2]
     ▲           ▲                   ▲           ▲                   ▲           ▲
     │           │                   │           │                   │           │
     └───────────┴───────────────────┴───────────┴───────────────────┴───────────┘
                     Contextual Cross-Linking Matrix (Bidirectional)
```

---

## 2. Global Navigation Mapping

### Header (`src/components/layout/Header.tsx`)
- **Logo:** `https://alkota.co.uk/`
- **Services:** `/services`
- **Industries:** `/industries`
- **Technology:** `/technology`
- **Insights:** `/insights`
- **Driver Network:** `/drivers/apply` (Recruiting badge)
- **Primary CTA:** `/#quote` ("Instant Route Quote")

### Footer (`src/components/layout/Footer.tsx`)
- **Column 1 (Brand):** Logo, UK Coverage summary, direct phone & email.
- **Column 2 (Movement Services):** `/services`, links to all 5 published service URLs.
- **Column 3 (Sector Solutions):** `/industries`, links to all 6 published B2B industry URLs.
- **Column 4 (Company & Standards):** `/technology`, `/insights`, `/contact`, `/drivers/apply`.
- **Column 5 (Legal & Compliance):** Privacy policy, Terms of Movement, Modern Slavery Statement.

---

## 3. Contextual Cross-Linking Matrix

Every detailed page contains bidirectional contextual links to related content:

### 1. Service Pages (`/services/[slug]`)
- **Breadcrumbs:** `Home` > `Services` > `[Service Title]`
- **Related Sectors:** Each service links to 3 tailored industry pages where this service is heavily deployed (e.g., Trade Plate Delivery links to `/industries/dealership-groups`, `/industries/corporate-fleets`, `/industries/remarketing-auctions`).
- **Primary CTA:** Links to `/#quote` with fallback to `tel:` and `mailto:`.

### 2. Industry Pages (`/industries/[slug]`)
- **Breadcrumbs:** `Home` > `Industries` > `[Sector Title]`
- **Recommended Services:** Each industry page links directly to the specific services deployed for that sector (e.g. Contract Hire & Leasing links to `/services/inspect-and-collect`, `/services/ev-fleet-logistics`, `/services/trade-plate-delivery`).
- **Primary CTA:** Links to `mailto:dispatch@alkota.co.uk?subject=Enterprise%20MSA%20Inquiry` and `/#quote`.

### 3. Editorial Intelligence Articles (`/insights/[slug]`)
- **Breadcrumbs:** `Home` > `Insights` > `[Article Title]`
- **Contextual In-Content Links:** The text references core commercial capabilities naturally with descriptive anchor text.
- **Commercial Service Strip:** Embedded box linking directly to services that solve the challenges described (e.g. What is Trade Plate Delivery links to `/services/trade-plate-delivery`, `/services/dealership-transfers`, `/services/inspect-and-collect`).

---

## 4. Anchor Text Standards & Quality Controls

1. **Descriptive, Natural Anchor Text:** Never use generic "click here" or "learn more". Anchors always describe the target resource (e.g., *"Professional Trade Plate Driven Logistics"*, *"Defleet & Logistics for Contract Hire"*).
2. **Zero Broken Links:** All internal links resolve to canonical URLs matching the dynamic sitemap without trailing-slash redirects or intermediate hops.
3. **Crawl Depth:** Every single commercial page on the domain is reachable within **2 clicks** from the homepage.
