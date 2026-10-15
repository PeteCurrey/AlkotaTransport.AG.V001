# ALKOTA Content Model, Asset Inventory & Commercial Registry
**Brand:** ALKOTA Automotive Logistics | **Domain:** `alkota.co.uk` | **Document Version:** 1.0.0
**Integrity Rule:** Zero fabricated statistics, clients, testimonials, insurance values, or operational claims. All unconfirmed items marked as `[PENDING CLIENT VERIFICATION]`.

---

## 1. Brand Voice, Tone & Messaging Pillars

### Editorial Tone
* **Authoritative & Architectural:** Concise, confident, precision-engineered language. We speak like a tier-1 motorsport engineering group and an enterprise technology company, not a typical courier service.
* **Radical Transparency:** No ambiguous terms like "fast delivery". We specify exact mechanics: *"Timestamped ePOD sign-offs, GPS-tracked transit corridors, and BVRLA-trained drivers."*
* **Terminology Standards:**
  * Use *"Vehicle Movement"* and *"Automotive Logistics"* (Avoid generic *"car towing"* or *"man with a van"*).
  * Use *"Trade Plate Driven"* or *"Enclosed Covered Transporter"*.
  * Use *"Electronic Proof of Delivery (ePOD)"* and *"Digital Condition Appraisal"*.
  * Use *"Defleet & Remarketing Transit"*.

---

## 2. Page-by-Page Content Architecture

### 2.1 Homepage (`/`)
* **Hero Headline:** Precision Automotive Logistics. Nationwide. On Demand.
* **Sub-headline:** Transforming UK vehicle movement with live telemetry, verified trade plate professionals, and enterprise-grade SLA transparency.
* **Trust Badges:** Placeholders for BVRLA, Logistics UK, and Comprehensive Goods in Transit coverage.
* **Key Service Pillars:**
  1. Driven Logistics (Single vehicle trade plate movement)
  2. Enclosed Transport (High-value & prototype covered movement)
  3. EV Fleet Logistics (High-voltage trained, state-of-charge assured)
  4. Dealer & Fleet Redistribution (Inter-branch swaps & defleet logistics)
* **The ALKOTA Protocol (How It Works):**
  * Step 1: Rapid Algorithmic Quoting (< 30 seconds)
  * Step 2: Intelligent Driver Dispatch & Job Assignment
  * Step 3: 48-Point Digital ePOD Collection Appraisal
  * Step 4: Live Corridor GPS Tracking
  * Step 5: Verified Handover & Instant Client Sign-off
* **Lead Conversion Module:** Embedded interactive mileage & quote estimator.

### 2.2 Core Service Pages (`/services/*`)
Each service page contains:
* Technical overview and operational process
* Equipment and driver qualifications specified
* Real-world use cases (e.g., dealer swaps, auction collections, private client deliveries)
* Standard SLAs and insurance terms
* Direct service-specific instant quote trigger

### 2.3 Fleet Solutions (`/fleet-solutions/*`)
* Enterprise B2B landing pages tailored to:
  * Contract hire and leasing companies (defleet, lease-end appraisal, inspection).
  * Automotive OEMs (media fleets, prototype testing, dealer network launches).
  * Commercial corporate fleets (company car reallocations, employee handovers).
* Clear call-to-action: Request an Enterprise Master Service Agreement (MSA) or Schedule a Fleet Discovery Call.

### 2.4 Technology & Telemetry (`/technology`)
* Deep dive into the digital backbone:
  * Digital ePOD app mechanics (timestamping, geotagging, 360° photo capture).
  * Client Portal overview (centralized booking, multi-depot invoicing, live driver map).
  * DataClear GDPR assurance (secure deletion of personal infotainment data upon handover).

### 2.5 Driver Careers & Network (`/drivers/apply`)
* Clear, transparent qualification criteria:
  * Minimum 5 years UK manual driving licence.
  * Maximum 3 to 6 penalty points (no DR/CD/IN endorsements).
  * Secure off-road residential parking required for overnight carry-over vehicles.
  * Professional smartphone capability.
* Value proposition: Competitive mileage pay, pre-loaded corporate travel expense cards, modern scheduling app, dedicated driver support team.

---

## 3. Commercial Registry: Unverified Facts & Open Questions

> [!WARNING]
> The following parameters MUST NOT be published as factual statements until explicitly confirmed in writing by the ALKOTA executive leadership team.

| Operational Domain | Current Working Assumption | Verification Status | Action Required |
| :--- | :--- | :--- | :--- |
| **Legal Entity** | ALKOTA Logistics Ltd | `[UNVERIFIED]` | Confirm registered Companies House name and company number. |
| **Goods in Transit Insurance** | £5,000,000 per movement indemnity | `[UNVERIFIED]` | Obtain insurer policy schedule to verify exact single-vehicle and total transit liability limits. |
| **Driver Network Scale** | "Nationwide network of vetted drivers" | `[UNVERIFIED]` | Confirm initial fleet size / launch network count. Do not state a specific driver count (e.g. "500+ drivers") without proof. |
| **Industry Accreditations** | BVRLA Associate, Logistics UK, FORS | `[UNVERIFIED]` | Confirm if memberships are active, in application, or planned. Display with appropriate "Aligned with BVRLA Standards" wording until certified. |
| **Pricing Heuristics** | Base dispatch fee + graduated per-mile rate | `[UNVERIFIED]` | Commercial team must provide the exact rate card (e.g. £1.40/mile driven, £2.80/mile covered, minimum £85 booking charge). |
| **Fuel Surcharge Policy** | Fuel included or indexed to RAC fuel watch | `[UNVERIFIED]` | Define fuel surcharge formula for corporate billing. |
| **Client Testimonials & Logos** | None currently live | `[STRICT RULE]` | Do not use fake or synthetic company logos (e.g., BMW, Audi, JLR). Use verified anonymized case studies or client approval. |

---

## 4. Required Third-Party Services & Integrations

To achieve full operational parity with modern UK logistics platforms, the following external APIs and SaaS integrations are planned:

1. **UK Postcode & Address Lookup API:**
   * *Recommended:* **Postcoder (Allies Computing)** or **GetAddress.io**.
   * *Purpose:* Instant address autocomplete for collection and delivery postcodes, preventing driver route errors.
2. **Routing & Mileage Calculation:**
   * *Recommended:* **Google Maps Distance Matrix API** or **OpenRouteService**.
   * *Purpose:* Real-time road mileage and transit time calculation for the rapid quote estimator.
3. **Transactional Notifications & Dispatch Alerts:**
   * *Recommended:* **Resend** (Email) + **Twilio** (SMS).
   * *Purpose:* Instant automated quote summaries, driver arrival notifications, and ePOD handover links.
4. **CRM & Lead Ingestion:**
   * *Recommended:* **HubSpot API** or **Webhook ingestion**.
   * *Purpose:* Capturing enterprise fleet quote inquiries directly into the sales pipeline.
5. **Product Analytics & Privacy-Compliant Tracking:**
   * *Recommended:* **PostHog** (EU cloud or self-hosted) / **Google Analytics 4** (with UK/GDPR Cookie Consent Mode v2).
   * *Purpose:* Multi-step funnel drop-off analysis and conversion attribution.

---

## 5. Asset Inventory & Procurement Needs

| Asset Type | Requirement | Status / Source |
| :--- | :--- | :--- |
| **3D Vehicle Model** | Low-poly, optimized modern saloon/SUV (`.glb` format, Draco compressed, < 2.5MB) | To be designed/acquired via high-end 3D automotive asset library. |
| **3D Environment Map** | Studio HDRI lighting map (`.hdr` or `.exr`, < 250KB) | Bespoke automotive studio lighting preset. |
| **Brand Identity** | Vector SVGs: ALKOTA wordmark, logomark, favicon suite | To be generated/vectorized according to design system specifications. |
| **Photography** | Authentic imagery of UK transport (trade plates, enclosed trailers, driver app in use) | Commissioned photoshoot or premium licensed automotive stock. No generic low-res imagery. |
| **Legal Documentation** | Privacy Policy, Terms of Service, Modern Slavery Statement, BVRLA Fair Wear-and-Tear disclaimer | Client legal counsel sign-off. |
