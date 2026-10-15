/**
 * ALKOTA Commercial Analytics & Telemetry Dispatcher
 * Adheres strictly to UK GDPR & Data Minimisation Standards:
 * - Never records PII (names, emails, phone numbers, postcodes) in event properties
 * - Separates Commercial B2B Leads from Driver Recruitment funnels
 * - Supports Google Analytics 4 (gtag), PostHog, or custom server endpoints
 */

export type CommercialAnalyticsEvent =
  | {
      name: "quote_calculator_step_1_completed";
      properties: {
        transit_mode: "driven" | "covered" | "ev";
        volume_tier: "single" | "batch" | "contract";
      };
    }
  | {
      name: "commercial_lead_submitted";
      properties: {
        transit_mode: "driven" | "covered" | "ev";
        volume_tier: "single" | "batch" | "contract";
        source_section: string;
      };
    }
  | {
      name: "driver_eligibility_checked";
      properties: {
        is_eligible: boolean;
        licence_years: string;
        points: string;
      };
    }
  | {
      name: "driver_application_submitted";
      properties: {
        licence_years: string;
        status: "submitted";
      };
    }
  | {
      name: "dispatch_phone_clicked";
      properties: {
        placement: string;
      };
    }
  | {
      name: "dispatch_email_clicked";
      properties: {
        placement: string;
      };
    }
  | {
      name: "cta_clicked";
      properties: {
        cta_text: string;
        destination: string;
        placement: string;
      };
    };

export function trackEvent(event: CommercialAnalyticsEvent): void {
  if (typeof window === "undefined") return;

  // In development, log clean telemetry to console
  if (process.env.NODE_ENV !== "production") {
    console.log(`[ALKOTA TELEMETRY] ${event.name}:`, event.properties);
  }

  // Google Analytics 4 / Google Tag Manager integration (if window.gtag exists)
  const win = window as unknown as { gtag?: (...args: unknown[]) => void };
  if (typeof win.gtag === "function") {
    win.gtag("event", event.name, event.properties);
  }

  // Custom dispatch event for extensible monitoring
  try {
    const customEvent = new CustomEvent("alkota:telemetry", {
      detail: event,
    });
    window.dispatchEvent(customEvent);
  } catch {
    // Ignore legacy browser event errors
  }
}
