"use client";

import React, { useState } from "react";
import { ArrowRight, Calculator, CheckCircle2 } from "lucide-react";
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
    <section id="quote" className="py-24 bg-alkota-abyss relative border-t border-white/10">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-carbon-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-alkota-amber/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-alkota-amber/10 border border-alkota-amber/30 text-xs font-mono text-alkota-amber">
            <Calculator className="w-3.5 h-3.5" />
            <span>INSTANT ROUTE ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
            Rapid Quoting & Fleet Procurement.
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Calculate instant indicative transit rates across UK corridors or initiate an enterprise fleet account for volume contractual pricing.
          </p>
        </div>

        {/* The Calculator Card */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-alkota-plate border border-white/10 p-6 sm:p-10 shadow-2xl relative">
          {!submitted ? (
            <div className="space-y-8">
              {/* Step 1: Movement Configuration */}
              <form onSubmit={handleCalculate} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Origin */}
                  <div className="space-y-2">
                    <label htmlFor="quote-collection-postcode" className="text-xs font-mono tracking-widest text-slate-400 uppercase block">
                      Collection UK Postcode
                    </label>
                    <input
                      id="quote-collection-postcode"
                      type="text"
                      placeholder="e.g. B1 1AA (Birmingham)"
                      value={collectionPostcode}
                      onChange={(e) => setCollectionPostcode(e.target.value.toUpperCase())}
                      required
                      autoComplete="postal-code"
                      className="w-full px-4 py-3 rounded-xl bg-alkota-abyss border border-white/15 text-white placeholder-slate-600 focus:outline-none focus:border-alkota-cyan font-mono text-sm uppercase transition-colors"
                    />
                  </div>

                  {/* Destination */}
                  <div className="space-y-2">
                    <label htmlFor="quote-delivery-postcode" className="text-xs font-mono tracking-widest text-slate-400 uppercase block">
                      Delivery UK Postcode
                    </label>
                    <input
                      id="quote-delivery-postcode"
                      type="text"
                      placeholder="e.g. SW1A 1AA (London)"
                      value={deliveryPostcode}
                      onChange={(e) => setDeliveryPostcode(e.target.value.toUpperCase())}
                      required
                      autoComplete="postal-code"
                      className="w-full px-4 py-3 rounded-xl bg-alkota-abyss border border-white/15 text-white placeholder-slate-600 focus:outline-none focus:border-alkota-cyan font-mono text-sm uppercase transition-colors"
                    />
                  </div>
                </div>

                {/* Mode Selector */}
                <div className="space-y-2">
                  <span className="text-xs font-mono tracking-widest text-slate-400 uppercase block">
                    Transport Specification
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" role="group" aria-label="Transport specification mode">
                    <button
                      type="button"
                      onClick={() => setTransitMode("driven")}
                      aria-pressed={transitMode === "driven"}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        transitMode === "driven"
                          ? "bg-alkota-cyan/10 border-alkota-cyan text-white shadow-telemetry-cyan"
                          : "bg-alkota-abyss border-white/10 text-slate-400 hover:text-white"
                      }`}
                    >
                      <span className="text-xs font-mono font-bold block">Driven (Trade Plate)</span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">Fastest, single vehicle</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTransitMode("covered")}
                      aria-pressed={transitMode === "covered"}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        transitMode === "covered"
                          ? "bg-alkota-amber/10 border-alkota-amber text-white shadow-telemetry-amber"
                          : "bg-alkota-abyss border-white/10 text-slate-400 hover:text-white"
                      }`}
                    >
                      <span className="text-xs font-mono font-bold block">Covered Transporter</span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">Enclosed, zero mileage</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTransitMode("ev")}
                      aria-pressed={transitMode === "ev"}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        transitMode === "ev"
                          ? "bg-emerald-500/10 border-emerald-500 text-white"
                          : "bg-alkota-abyss border-white/10 text-slate-400 hover:text-white"
                      }`}
                    >
                      <span className="text-xs font-mono font-bold block">Specialist EV Transit</span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">Battery state-of-charge assured</span>
                    </button>
                  </div>
                </div>

                {/* Volume Selector */}
                <div className="space-y-2">
                  <span className="text-xs font-mono tracking-widest text-slate-400 uppercase block">
                    Volume Tier
                  </span>
                  <div className="grid grid-cols-3 gap-3" role="group" aria-label="Volume tier selection">
                    <button
                      type="button"
                      onClick={() => setFleetVolume("single")}
                      aria-pressed={fleetVolume === "single"}
                      className={`py-2 px-3 rounded-lg border text-xs font-mono transition-all ${
                        fleetVolume === "single"
                          ? "bg-white/15 border-white text-white font-semibold"
                          : "bg-alkota-abyss border-white/10 text-slate-400"
                      }`}
                    >
                      Single Movement
                    </button>

                    <button
                      type="button"
                      onClick={() => setFleetVolume("batch")}
                      aria-pressed={fleetVolume === "batch"}
                      className={`py-2 px-3 rounded-lg border text-xs font-mono transition-all ${
                        fleetVolume === "batch"
                          ? "bg-white/15 border-white text-white font-semibold"
                          : "bg-alkota-abyss border-white/10 text-slate-400"
                      }`}
                    >
                      Batch (2–10 Units)
                    </button>

                    <button
                      type="button"
                      onClick={() => setFleetVolume("contract")}
                      aria-pressed={fleetVolume === "contract"}
                      className={`py-2 px-3 rounded-lg border text-xs font-mono transition-all ${
                        fleetVolume === "contract"
                          ? "bg-white/15 border-white text-white font-semibold"
                          : "bg-alkota-abyss border-white/10 text-slate-400"
                      }`}
                    >
                      Enterprise Contract
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-xs font-mono font-bold tracking-wider uppercase bg-gradient-to-r from-alkota-amber to-orange-600 text-white hover:brightness-110 shadow-telemetry-amber transition-all flex items-center justify-center gap-2"
                >
                  <span>Calculate Indicative Corridor Rate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Calculated Rate Display & Lead Capture */}
              {calculated && (
                <div className="pt-8 border-t border-white/10 space-y-6" aria-live="polite">
                  {/* Real-time Rate Card Callout */}
                  <div className="p-6 rounded-xl bg-black/60 border border-alkota-cyan/30 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-alkota-cyan uppercase block">
                        INDICATIVE CORRIDOR ESTIMATE // {collectionPostcode} TO {deliveryPostcode}
                      </span>
                      <span className="text-3xl font-display font-black text-white block mt-1">
                        {transitMode === "driven"
                          ? "£1.35 – £1.65 / mile"
                          : transitMode === "covered"
                          ? "£2.65 – £3.20 / mile"
                          : "£1.55 – £1.85 / mile"}
                      </span>
                      <span className="text-xs text-slate-400 block mt-1">
                        Indicative rate. Includes comprehensive motor trade insurance & 48-point digital ePOD.
                      </span>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-[10px] font-mono text-slate-500 uppercase block">
                        DISPATCH SLA
                      </span>
                      <span className="text-lg font-mono font-bold text-emerald-400 block">
                        24–48 Hours
                      </span>
                    </div>
                  </div>

                  {/* Dispatch Confirmation Form */}
                  <form onSubmit={handleSubmitLead} className="space-y-4">
                    <span className="text-xs font-mono tracking-widest text-white uppercase block">
                      Lock In Priority Dispatch & Formal Quotation:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="quote-contact-name" className="text-xs font-mono text-slate-400 block uppercase tracking-wider">
                          Full Name / Fleet Contact
                        </label>
                        <input
                          id="quote-contact-name"
                          type="text"
                          placeholder="e.g. Sarah Jenkins"
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          required
                          autoComplete="name"
                          className="w-full px-4 py-3 rounded-xl bg-alkota-abyss border border-white/15 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-alkota-cyan"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="quote-contact-email" className="text-xs font-mono text-slate-400 block uppercase tracking-wider">
                          Work Email Address
                        </label>
                        <input
                          id="quote-contact-email"
                          type="email"
                          placeholder="e.g. s.jenkins@dealergroup.co.uk"
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          required
                          autoComplete="email"
                          className="w-full px-4 py-3 rounded-xl bg-alkota-abyss border border-white/15 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-alkota-cyan"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="quote-company-name" className="text-xs font-mono text-slate-400 block uppercase tracking-wider">
                          Company / Dealership Name
                        </label>
                        <input
                          id="quote-company-name"
                          type="text"
                          placeholder="e.g. Apex Automotive Group"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          required
                          autoComplete="organization"
                          className="w-full px-4 py-3 rounded-xl bg-alkota-abyss border border-white/15 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-alkota-cyan"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="quote-contact-phone" className="text-xs font-mono text-slate-400 block uppercase tracking-wider">
                          Direct Phone Number
                        </label>
                        <input
                          id="quote-contact-phone"
                          type="tel"
                          placeholder="e.g. 020 8092 7800"
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          required
                          autoComplete="tel"
                          className="w-full px-4 py-3 rounded-xl bg-alkota-abyss border border-white/15 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-alkota-cyan"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl text-xs font-mono font-bold tracking-wider uppercase bg-alkota-cyan text-black hover:bg-cyan-300 shadow-telemetry-cyan transition-all flex items-center justify-center gap-2"
                    >
                      <span>Submit For Immediate Dispatch Confirmation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <p className="text-[11px] font-mono text-slate-400 text-center">
                      Zero commercial obligation. Our operations team responds within 15 minutes during UK business hours.
                    </p>
                  </form>
                </div>
              )}
            </div>
          ) : (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">
                Dispatch Request Received.
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, {contactName || "Client"}. Our central UK routing team is reviewing transit corridor availability between {collectionPostcode} and {deliveryPostcode}. We will contact you at {contactEmail || "your email"} shortly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setCalculated(false);
                }}
                className="text-xs font-mono text-alkota-cyan hover:underline pt-2 block mx-auto"
              >
                Calculate Another Route
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
