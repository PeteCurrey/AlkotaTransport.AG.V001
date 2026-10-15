# ALKOTA B2B Analytics & Commercial Telemetry Framework
## Stage 10: Measurement Plan & Privacy-Compliant Conversion Tracking

---

## 1. Executive Summary & Measurement Philosophy

The Alkota commercial web platform serves two distinct operational audiences:
1. **Commercial B2B Clients:** Automotive logistics buyers (dealership groups, leasing companies, fleet managers, OEM remarketers) seeking trade plate movements, covered vehicle transport, or EV fleet logistics.
2. **Subcontractor & Employed Trade Plate Drivers:** Professional logistics drivers seeking regional corridor work.

To maintain pristine operational clarity and prevent qualification contamination, the analytics architecture enforces **strict funnel separation** and **uncompromising data minimisation** under the **UK General Data Protection Regulation (UK GDPR)** and the **Privacy and Electronic Communications Regulations (PECR)**.

### Core Architecture Rules:
- **Zero PII Telemetry:** No customer names, email addresses, telephone numbers, residential addresses, or precise UK postcodes are ever passed to client-side analytics vendors (e.g. Google Analytics 4, PostHog, or Meta Pixel).
- **Consent-First Gating:** Analytics tags do not execute without explicit consent. When consent is absent or pending, internal application operations proceed uninterrupted without firing tracking beacons.
- **Dual Conversion Taxonomy:** Commercial logistics quote requests are tracked under `commercial_lead_submitted`, while driver recruitment applications are tracked under `driver_application_submitted`.

---

## 2. Event Taxonomy & Parameter Schemas

All event dispatches are routed through the central dispatcher at [`src/lib/analytics.ts`](file:///Users/petercurrey/Desktop/Websites/Alkota%20Transport.AG.V001/src/lib/analytics.ts).

### 2.1 Commercial Funnel Events

#### Event: `quote_calculator_step_1_completed`
- **Trigger:** When a commercial prospect completes origin/destination inputs and transport specifications in the interactive quote calculator before proceeding to lead contact capture.
- **Parameters:**
  ```typescript
  {
    transit_mode: "driven" | "covered" | "ev";
    volume_tier: "single" | "batch" | "contract";
  }
  ```
- **Business Purpose:** Measures drop-off rate between transit calculation and contact form completion.

#### Event: `commercial_lead_submitted`
- **Trigger:** When a qualified B2B client submits the full commercial quote request form.
- **Parameters:**
  ```typescript
  {
    transit_mode: "driven" | "covered" | "ev";
    volume_tier: "single" | "batch" | "contract";
    source_section: string; // e.g., "homepage_quote_calculator", "service_page_cta"
  }
  ```
- **Business Purpose:** Primary commercial macro-conversion. Signals sales desk dispatch.

---

### 2.2 Driver Recruitment Funnel Events

#### Event: `driver_eligibility_checked`
- **Trigger:** When a prospective driver completes the 4 compliance screening questions (licence tenure, penalty points, off-road driveway, endorsement history) on `/drivers/apply`.
- **Parameters:**
  ```typescript
  {
    is_eligible: boolean;
    licence_years: string; // e.g., "5+" | "under5"
    points: string;        // e.g., "0" | "1-3" | "4-6" | "7+"
  }
  ```
- **Business Purpose:** Calculates recruitment qualification efficiency and identifies non-compliant drop-off bottlenecks without capturing candidate identities.

#### Event: `driver_application_submitted`
- **Trigger:** When an eligible driver candidate submits their completed application form.
- **Parameters:**
  ```typescript
  {
    licence_years: string;
    status: "submitted";
  }
  ```
- **Business Purpose:** Measures driver recruitment acquisition volume by regional operations corridor.

---

### 2.3 Micro-Conversion & Interaction Events

#### Event: `dispatch_phone_clicked`
- **Trigger:** When a user taps or clicks any `tel:0333...` link across headers, footers, or CTA strips.
- **Parameters:**
  ```typescript
  {
    placement: string; // e.g., "header_nav", "footer_dispatch", "service_cta_strip"
  }
  ```
- **Business Purpose:** Quantifies urgent or high-value phone bookings initiated by transport controllers.

#### Event: `dispatch_email_clicked`
- **Trigger:** When a user clicks any `mailto:operations@alkota.co.uk` link.
- **Parameters:**
  ```typescript
  {
    placement: string; // e.g., "contact_page", "cta_strip"
  }
  ```

#### Event: `cta_clicked`
- **Trigger:** Secondary call-to-action interactions directing visitors to high-intent conversion destinations.
- **Parameters:**
  ```typescript
  {
    cta_text: string;
    destination: string;
    placement: string;
  }
  ```

---

## 3. Implementation Matrix Across Codebase

| Component | File Path | Events Emitted | Privacy Verification |
| :--- | :--- | :--- | :--- |
| **Quote Calculator** | `src/components/home/QuoteCalculatorSection.tsx` | `quote_calculator_step_1_completed`<br>`commercial_lead_submitted` | Only transit parameters transmitted. Postcode inputs and contact details stripped. |
| **Driver Application** | `src/components/drivers/DriverApplicationForm.tsx` | `driver_eligibility_checked`<br>`driver_application_submitted` | Candidate name, phone, email, and postcode strictly excluded from telemetry payload. |
| **Global Header** | `src/components/layout/Header.tsx` | Navigation telemetry hookable | Canonical routes referenced (`/services`, `/industries`). |
| **Commercial CTA Strip** | `src/components/common/CtaStrip.tsx` | Direct enquiry links | Clear outbound dispatch anchors. |

---

## 4. Privacy & Compliance Controls (UK GDPR / PECR)

1. **Client-Side Data Sanitisation:**
   The `trackEvent` function signature in `src/lib/analytics.ts` uses strict TypeScript discriminated unions (`CommercialAnalyticsEvent`). Any attempt by developers to pass parameters like `name`, `email`, `telephone`, or `vehicle_registration` fails compilation at build time (`tsc --noEmit`).

2. **Server-Side Lead Processing:**
   When lead forms are submitted, actual contact details are transmitted over TLS 1.3 directly to authenticated server actions or backend endpoints, isolated entirely from marketing tracking scripts.

3. **No Third-Party Ad Pixels Preloaded:**
   No Facebook/Meta pixel, LinkedIn Insight Tag, or Google Ads Remarketing script is hardcoded into `src/app/layout.tsx`. All tags require explicit user opt-in via a compliant consent banner before dynamic injection.

---

## 5. Verification & Testing Protocol

- **Local Development Inspection:**
  In `development` environments (`NODE_ENV === "development"`), `trackEvent` logs structured telemetry payloads directly to the browser console:
  ```
  [Telemetry Event] commercial_lead_submitted { transit_mode: "driven", volume_tier: "contract", source_section: "homepage_quote_calculator" }
  ```
- **Production Validation:**
  When Google Analytics 4 (`window.gtag`) or PostHog (`window.posthog`) is present in `production`, payloads are safely dispatched through the provider's API. If no vendor library is detected, the event fails silently without disrupting the user interface.
