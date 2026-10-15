"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { ServiceFaq } from "@/types";

interface FaqAccordionProps {
  faqs: ServiceFaq[];
  title?: string;
  subtitle?: string;
  renderSchema?: boolean;
}

export default function FaqAccordion({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Direct answers to operational, insurance, and scheduling questions.",
  renderSchema = true,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {renderSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <section className="py-16 bg-alkota-plate/50 rounded-3xl border border-white/10 p-6 sm:p-10 space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-alkota-cyan uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>OPERATIONAL CLARITY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            {title}
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const faqId = `faq-item-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-alkota-abyss overflow-hidden transition-colors hover:border-white/20"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={faqId}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-white hover:text-alkota-cyan transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-alkota-cyan" : ""
                      }`}
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={faqId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
