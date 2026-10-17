"use client";

import React, { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export default function QuoteCalculatorSection() {
  const [collectionPostcode, setCollectionPostcode] = useState("");
  const [deliveryPostcode, setDeliveryPostcode] = useState("");
  const [transitMode, setTransitMode] = useState<"driven" | "covered" | "ev">("driven");
  const [fleetVolume, setFleetVolume] = useState<"single" | "batch" | "contract">("single");
  const [calculated, setCalculated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form Inputs
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (collectionPostcode && deliveryPostcode) {
      setCalculated(true);
      trackEvent({
        name: "quote_calculator_step_1_completed",
        properties: {
          transit_mode: transitMode,
          volume_tier: fleetVolume,
        },
      });
    }
  };

  const handleSubmitLead = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    trackEvent({
      name: "commercial_lead_submitted",
      properties: {
        transit_mode: transitMode,
        volume_tier: fleetVolume,
        source_section: "homepage_quote_calculator",
      },
    });
  };

  return (
    <section id="quote" className="py-24 sm:py-32 bg-alkota-obsidian border-t border-alkota-border relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl space-y-4 pb-16">
          <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.2em] uppercase text-alkota-accent">
            <span className="w-5 h-[1px] bg-alkota-accent inline-block" />
            <span>DISPATCH RATE CALCULATOR</span>
          </div>
          <h2 className="font-display font-light text-[38px] sm:text-[52px] leading-[1.02] text-alkota-ivory">
            Indicative corridor pricing & fleet procurement.
          </h2>
          <p className="font-sans font-light text-[15px] sm:text-[16px] text-alkota-silver leading-relaxed">
            Estimate indicative corridor rates or connect directly with our central routing desk for high-volume contract pricing.
          </p>
        </div>

        {/* The Concierge Calculator Panel */}
        <div className="max-w-4xl border border-alkota-border bg-alkota-surface p-6 sm:p-12 relative">
          {!submitted ? (
            <div className="space-y-10">
              {/* Step 1: Route Configuration */}
              <form onSubmit={handleCalculate} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Origin */}
                  <div className="space-y-2">
                    <label htmlFor="quote-collection-postcode" className="text-[10px] font-mono tracking-[0.18em] uppercase text-alkota-muted block">
                      Collection UK Postcode
                    </label>
                    <input
                      id="quote-collection-postcode"
                      type="text"
                      placeholder="e.g. B1 1AA"
                      value={collectionPostcode}
                      onChange={(e) => setCollectionPostcode(e.target.value.toUpperCase())}
                      required
                      autoComplete="postal-code"
                      className="w-full px-4 py-3.5 bg-alkota-obsidian border border-alkota-border text-alkota-ivory placeholder-alkota-muted focus:outline-none focus:border-alkota-accent font-mono text-sm uppercase transition-colors"
                    />
                  </div>

                  {/* Destination */}
                  <div className="space-y-2">
                    <label htmlFor="quote-delivery-postcode" className="text-[10px] font-mono tracking-[0.18em] uppercase text-alkota-muted block">
                      Delivery UK Postcode
                    </label>
                    <input
                      id="quote-delivery-postcode"
                      type="text"
                      placeholder="e.g. SW1A 1AA"
                      value={deliveryPostcode}
                      onChange={(e) => setDeliveryPostcode(e.target.value.toUpperCase())}
                      required
                      autoComplete="postal-code"
                      className="w-full px-4 py-3.5 bg-alkota-obsidian border border-alkota-border text-alkota-ivory placeholder-alkota-muted focus:outline-none focus:border-alkota-accent font-mono text-sm uppercase transition-colors"
                    />
                  </div>
                </div>

                {/* Mode Selector */}
                <div className="space-y-2.5">
                  <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-alkota-muted block">
                    Transport Specification
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" role="group" aria-label="Transport specification mode">
                    <button
                      type="button"
                      onClick={() => setTransitMode("driven")}
                      aria-pressed={transitMode === "driven"}
                      className={`p-4 border text-left transition-all ${
                        transitMode === "driven"
                          ? "border-alkota-accent bg-alkota-accent-dim text-alkota-ivory"
                          : "border-alkota-border bg-alkota-obsidian text-alkota-silver hover:border-white/20"
                      }`}
                    >
                      <span className="text-xs font-mono font-medium block">Driven (Trade Plate)</span>
                      <span className="text-[11px] font-sans font-light text-alkota-silver block mt-1">Single vehicle transit</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTransitMode("covered")}
                      aria-pressed={transitMode === "covered"}
                      className={`p-4 border text-left transition-all ${
                        transitMode === "covered"
                          ? "border-alkota-accent bg-alkota-accent-dim text-alkota-ivory"
                          : "border-alkota-border bg-alkota-obsidian text-alkota-silver hover:border-white/20"
                      }`}
                    >
                      <span className="text-xs font-mono font-medium block">Covered Transporter</span>
                      <span className="text-[11px] font-sans font-light text-alkota-silver block mt-1">Enclosed, zero mileage</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTransitMode("ev")}
                      aria-pressed={transitMode === "ev"}
                      className={`p-4 border text-left transition-all ${
                        transitMode === "ev"
                          ? "border-alkota-accent bg-alkota-accent-dim text-alkota-ivory"
                          : "border-alkota-border bg-alkota-obsidian text-alkota-silver hover:border-white/20"
                      }`}
                    >
                      <span className="text-xs font-mono font-medium block">Specialist EV Logistics</span>
                      <span className="text-[11px] font-sans font-light text-alkota-silver block mt-1">State-of-charge assured</span>
                    </button>
                  </div>
                </div>

                {/* Volume Selector */}
                <div className="space-y-2.5">
                  <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-alkota-muted block">
                    Volume Tier
                  </span>
                  <div className="grid grid-cols-3 gap-3" role="group" aria-label="Volume tier selection">
                    <button
                      type="button"
                      onClick={() => setFleetVolume("single")}
                      aria-pressed={fleetVolume === "single"}
                      className={`py-3 px-3 border text-xs font-mono tracking-wider transition-all ${
                        fleetVolume === "single"
                          ? "border-alkota-accent bg-alkota-accent-dim text-alkota-ivory"
                          : "border-alkota-border bg-alkota-obsidian text-alkota-silver"
                      }`}
                    >
                      Single Unit
                    </button>

                    <button
                      type="button"
                      onClick={() => setFleetVolume("batch")}
                      aria-pressed={fleetVolume === "batch"}
                      className={`py-3 px-3 border text-xs font-mono tracking-wider transition-all ${
                        fleetVolume === "batch"
                          ? "border-alkota-accent bg-alkota-accent-dim text-alkota-ivory"
                          : "border-alkota-border bg-alkota-obsidian text-alkota-silver"
                      }`}
                    >
                      Batch (2–10)
                    </button>

                    <button
                      type="button"
                      onClick={() => setFleetVolume("contract")}
                      aria-pressed={fleetVolume === "contract"}
                      className={`py-3 px-3 border text-xs font-mono tracking-wider transition-all ${
                        fleetVolume === "contract"
                          ? "border-alkota-accent bg-alkota-accent-dim text-alkota-ivory"
                          : "border-alkota-border bg-alkota-obsidian text-alkota-silver"
                      }`}
                    >
                      Contract Volume
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-alkota-accent hover:bg-alkota-accent-hover text-white font-mono text-[11px] tracking-[0.14em] uppercase transition-colors"
                >
                  Calculate Indicative Corridor Rate
                </button>
              </form>

              {/* Calculated Rate & Formal Quotation Lead Form */}
              {calculated && (
                <div className="pt-8 border-t border-alkota-border space-y-8" aria-live="polite">
                  <div className="p-6 sm:p-8 border border-alkota-border bg-alkota-obsidian flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                      <span className="text-[10px] font-mono tracking-[0.18em] text-alkota-accent uppercase block">
                        INDICATIVE RATE ESTIMATE // {collectionPostcode} &rarr; {deliveryPostcode}
                      </span>
                      <span className="font-display text-3xl sm:text-4xl font-normal text-alkota-ivory block mt-2">
                        {transitMode === "driven"
                          ? "£1.35 – £1.65 / mile"
                          : transitMode === "covered"
                          ? "£2.65 – £3.20 / mile"
                          : "£1.55 – £1.85 / mile"}
                      </span>
                      <span className="text-xs font-sans font-light text-alkota-silver block mt-1">
                        Includes comprehensive motor trade indemnity & 48-point digital ePOD condition audit.
                      </span>
                    </div>

                    <div className="text-left sm:text-right shrink-0">
                      <span className="text-[10px] font-mono tracking-[0.16em] uppercase text-alkota-muted block">
                        TYPICAL DISPATCH SLA
                      </span>
                      <span className="font-mono text-base text-alkota-ivory block mt-1">
                        24–48 Hours
                      </span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmitLead} className="space-y-5">
                    <span className="text-xs font-mono tracking-[0.16em] uppercase text-alkota-ivory block">
                      Confirm Dispatch Availability & Request Formal Schedule:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="quote-contact-name" className="text-[10px] font-mono uppercase tracking-[0.16em] text-alkota-muted block">
                          Contact Name
                        </label>
                        <input
                          id="quote-contact-name"
                          type="text"
                          placeholder="e.g. Sarah Jenkins"
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          required
                          autoComplete="name"
                          className="w-full px-4 py-3 bg-alkota-obsidian border border-alkota-border text-alkota-ivory placeholder-alkota-muted text-sm focus:outline-none focus:border-alkota-accent"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="quote-contact-email" className="text-[10px] font-mono uppercase tracking-[0.16em] text-alkota-muted block">
                          Email Address
                        </label>
                        <input
                          id="quote-contact-email"
                          type="email"
                          placeholder="e.g. s.jenkins@dealergroup.co.uk"
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          required
                          autoComplete="email"
                          className="w-full px-4 py-3 bg-alkota-obsidian border border-alkota-border text-alkota-ivory placeholder-alkota-muted text-sm focus:outline-none focus:border-alkota-accent"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="quote-company-name" className="text-[10px] font-mono uppercase tracking-[0.16em] text-alkota-muted block">
                          Company / Dealership
                        </label>
                        <input
                          id="quote-company-name"
                          type="text"
                          placeholder="e.g. Apex Automotive Group"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          required
                          autoComplete="organization"
                          className="w-full px-4 py-3 bg-alkota-obsidian border border-alkota-border text-alkota-ivory placeholder-alkota-muted text-sm focus:outline-none focus:border-alkota-accent"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="quote-contact-phone" className="text-[10px] font-mono uppercase tracking-[0.16em] text-alkota-muted block">
                          Direct Telephone
                        </label>
                        <input
                          id="quote-contact-phone"
                          type="tel"
                          placeholder="e.g. 020 8092 7800"
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          required
                          autoComplete="tel"
                          className="w-full px-4 py-3 bg-alkota-obsidian border border-alkota-border text-alkota-ivory placeholder-alkota-muted text-sm focus:outline-none focus:border-alkota-accent"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-alkota-accent hover:bg-alkota-accent-hover text-white font-mono text-[11px] tracking-[0.14em] uppercase transition-colors"
                    >
                      Submit For Immediate Dispatch Confirmation
                    </button>

                    <p className="text-[11px] font-mono text-alkota-muted text-center">
                      Zero commercial obligation. Our central operations team responds promptly during UK business hours.
                    </p>
                  </form>
                </div>
              )}
            </div>
          ) : (
            <div className="py-12 text-center space-y-4">
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-alkota-accent block">
                REQUEST RECEIVED
              </span>
              <h3 className="font-display text-3xl font-light text-alkota-ivory">
                Dispatch Request Confirmed.
              </h3>
              <p className="text-sm font-sans font-light text-alkota-silver max-w-md mx-auto leading-relaxed">
                Thank you, {contactName || "Client"}. Our routing desk is verifying corridor capacity between {collectionPostcode} and {deliveryPostcode}. We will confirm schedules via {contactEmail || "email"} shortly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setCalculated(false);
                }}
                className="text-xs font-mono tracking-[0.14em] uppercase text-alkota-silver hover:text-white pt-4 block mx-auto transition-colors"
              >
                &larr; Calculate Another Route
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
