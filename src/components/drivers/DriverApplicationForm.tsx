"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function DriverApplicationForm() {
  const [licenceYears, setLicenceYears] = useState("5+");
  const [points, setPoints] = useState("0");
  const [hasDriveway, setHasDriveway] = useState<boolean | null>(null);
  const [hasMajorEndorsement, setHasMajorEndorsement] = useState<boolean | null>(false);

  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postcode, setPostcode] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isEligible =
    licenceYears === "5+" &&
    (points === "0" || points === "1-3" || points === "4-6") &&
    hasDriveway === true &&
    hasMajorEndorsement === false;

  const eligibilityTrackedRef = useRef<string>("");

  useEffect(() => {
    if (hasDriveway !== null && hasMajorEndorsement !== null) {
      const key = `${licenceYears}-${points}-${hasDriveway}-${hasMajorEndorsement}`;
      if (eligibilityTrackedRef.current !== key) {
        eligibilityTrackedRef.current = key;
        trackEvent({
          name: "driver_eligibility_checked",
          properties: {
            is_eligible: isEligible,
            licence_years: licenceYears,
            points: points,
          },
        });
      }
    }
  }, [hasDriveway, hasMajorEndorsement, licenceYears, points, isEligible]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEligible) {
      trackEvent({
        name: "driver_application_submitted",
        properties: {
          licence_years: licenceYears,
          status: "submitted",
        },
      });
      setSubmitted(true);
    }
  };

  return (
    <div className="p-8 sm:p-12 rounded-3xl bg-alkota-plate border border-white/10 shadow-2xl relative">
      {!submitted ? (
        <div className="space-y-10">
          {/* Part 1: Commercial Eligibility Checker */}
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs font-mono tracking-widest text-alkota-cyan uppercase block">
                STEP 01 // MANDATORY INSURANCE QUALIFICATION
              </span>
              <h2 className="text-xl font-display font-bold text-white mt-1">
                Compliance Verification Criteria
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Criterion 1: Licence Age */}
              <div className="space-y-2">
                <label htmlFor="licence-years" className="text-xs font-mono text-slate-300 block">
                  1. UK Manual Driving Licence Tenure
                </label>
                <select
                  id="licence-years"
                  value={licenceYears}
                  onChange={(e) => setLicenceYears(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-alkota-abyss border border-white/15 text-white text-sm focus:outline-none focus:border-alkota-cyan"
                >
                  <option value="5+">5 Years or More (Compliant)</option>
                  <option value="under5">Less than 5 Years (Non-compliant)</option>
                </select>
              </div>

              {/* Criterion 2: Penalty Points */}
              <div className="space-y-2">
                <label htmlFor="penalty-points" className="text-xs font-mono text-slate-300 block">
                  2. Current Driving Licence Points
                </label>
                <select
                  id="penalty-points"
                  value={points}
                  onChange={(e) => setPoints(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-alkota-abyss border border-white/15 text-white text-sm focus:outline-none focus:border-alkota-cyan"
                >
                  <option value="0">0 Points (Clean)</option>
                  <option value="1-3">1 to 3 Points</option>
                  <option value="4-6">4 to 6 Points</option>
                  <option value="7+">7+ Points (Non-compliant)</option>
                </select>
              </div>

              {/* Criterion 3: Driveway / Off-Road Parking */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-300 block">
                  3. Dedicated Off-Road Parking for Overnight Vehicles
                </span>
                <div className="grid grid-cols-2 gap-3" role="group" aria-label="Dedicated off-road parking choice">
                  <button
                    type="button"
                    onClick={() => setHasDriveway(true)}
                    aria-pressed={hasDriveway === true}
                    className={`py-3 px-4 rounded-xl border text-xs font-mono font-semibold transition-all ${
                      hasDriveway === true
                        ? "bg-emerald-500/10 border-emerald-500 text-emerald-400"
                        : "bg-alkota-abyss border-white/10 text-slate-400 hover:text-white"
                    }`}
                  >
                    Yes, Private Driveway
                  </button>
                  <button
                    type="button"
                    onClick={() => setHasDriveway(false)}
                    aria-pressed={hasDriveway === false}
                    className={`py-3 px-4 rounded-xl border text-xs font-mono font-semibold transition-all ${
                      hasDriveway === false
                        ? "bg-red-500/10 border-red-500 text-red-400"
                        : "bg-alkota-abyss border-white/10 text-slate-400 hover:text-white"
                    }`}
                  >
                    No (Street Parking)
                  </button>
                </div>
              </div>

              {/* Criterion 4: Major Endorsements */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-300 block">
                  4. Any Historical DR, CD, IN or TT Codes?
                </span>
                <div className="grid grid-cols-2 gap-3" role="group" aria-label="Historical endorsement codes choice">
                  <button
                    type="button"
                    onClick={() => setHasMajorEndorsement(false)}
                    aria-pressed={hasMajorEndorsement === false}
                    className={`py-3 px-4 rounded-xl border text-xs font-mono font-semibold transition-all ${
                      hasMajorEndorsement === false
                        ? "bg-emerald-500/10 border-emerald-500 text-emerald-400"
                        : "bg-alkota-abyss border-white/10 text-slate-400 hover:text-white"
                    }`}
                  >
                    No Major Codes
                  </button>
                  <button
                    type="button"
                    onClick={() => setHasMajorEndorsement(true)}
                    aria-pressed={hasMajorEndorsement === true}
                    className={`py-3 px-4 rounded-xl border text-xs font-mono font-semibold transition-all ${
                      hasMajorEndorsement === true
                        ? "bg-red-500/10 border-red-500 text-red-400"
                        : "bg-alkota-abyss border-white/10 text-slate-400 hover:text-white"
                    }`}
                  >
                    Yes, Past Codes
                  </button>
                </div>
              </div>
            </div>

            {/* Real-Time Compliance Badge */}
            <div className="p-4 rounded-xl border text-xs font-mono flex items-center justify-between" aria-live="polite">
              <div className="flex items-center gap-2">
                {isEligible ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-emerald-400 font-semibold">
                      ELIGIBILITY CONFIRMED: YOU SATISFY ALKOTA RECRUITMENT REQUIREMENTS
                    </span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
                    <span className="text-amber-400">
                      PLEASE COMPLETE ALL 4 COMPLIANCE QUESTIONS ACCURATELY
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Part 2: Applicant Information Form */}
          {isEligible && (
            <form onSubmit={handleSubmit} className="space-y-6 pt-4 border-t border-white/10">
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs font-mono tracking-widest text-alkota-cyan uppercase block">
                  STEP 02 // CANDIDATE DETAILS
                </span>
                <h2 className="text-xl font-display font-bold text-white mt-1">
                  Direct Application Submission
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="driver-full-name" className="text-xs font-mono text-slate-400 block uppercase tracking-wider">
                    Full Legal Name
                  </label>
                  <input
                    id="driver-full-name"
                    type="text"
                    placeholder="e.g. David Clarke"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    autoComplete="name"
                    className="w-full px-4 py-3 rounded-xl bg-alkota-abyss border border-white/15 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-alkota-cyan"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="driver-email" className="text-xs font-mono text-slate-400 block uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    id="driver-email"
                    type="email"
                    placeholder="e.g. david.clarke@example.co.uk"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                    className="w-full px-4 py-3 rounded-xl bg-alkota-abyss border border-white/15 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-alkota-cyan"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="driver-phone" className="text-xs font-mono text-slate-400 block uppercase tracking-wider">
                    Mobile Phone Number
                  </label>
                  <input
                    id="driver-phone"
                    type="tel"
                    placeholder="e.g. 07700 900123"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    autoComplete="tel"
                    className="w-full px-4 py-3 rounded-xl bg-alkota-abyss border border-white/15 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-alkota-cyan"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="driver-postcode" className="text-xs font-mono text-slate-400 block uppercase tracking-wider">
                    Residential UK Postcode
                  </label>
                  <input
                    id="driver-postcode"
                    type="text"
                    placeholder="e.g. CV1 2AB"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                    required
                    autoComplete="postal-code"
                    className="w-full px-4 py-3 rounded-xl bg-alkota-abyss border border-white/15 text-white placeholder-slate-600 text-sm uppercase font-mono focus:outline-none focus:border-alkota-cyan"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl text-xs font-mono font-bold tracking-wider uppercase bg-gradient-to-r from-alkota-amber to-orange-600 text-white hover:brightness-110 shadow-telemetry-amber transition-all flex items-center justify-center gap-2"
              >
                <span>Submit Candidate Application</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] font-mono text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-alkota-cyan shrink-0" />
                <span>
                  Data is processed confidentially under UK GDPR strictly for driver onboarding and vetting purposes.
                </span>
              </div>
            </form>
          )}
        </div>
      ) : (
        <div className="py-12 text-center space-y-4" role="status" aria-live="polite">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-display font-bold text-white">
            Application Successfully Submitted.
          </h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            Thank you, {fullName}. Our driver recruitment and compliance desk will review your details against regional corridor allocations around {postcode} and contact you at {email} within 2 business days.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-alkota-cyan hover:underline pt-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Master Homepage</span>
          </Link>
        </div>
      )}
    </div>
  );
}
