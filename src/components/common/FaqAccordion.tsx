"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
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
      <section className="py-16 sm:py-24 border-t border-alkota-border space-y-10">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2.5 text-[10px] font-mono tracking-[0.2em] text-alkota-accent uppercase">
            <span className="w-5 h-[1px] bg-alkota-accent inline-block" />
            <span>OPERATIONAL CLARITY</span>
          </div>
          <h2 className="font-display font-light text-2xl sm:text-4xl text-alkota-ivory">
            {title}
          </h2>
          <p className="font-sans font-light text-sm sm:text-base text-alkota-silver leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="divide-y divide-alkota-border border-y border-alkota-border">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const faqId = `faq-item-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={index} className="py-6 group">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={faqId}
                    className="w-full text-left flex items-center justify-between gap-6 text-base sm:text-lg font-sans font-normal text-alkota-ivory hover:text-white transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-alkota-muted shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-alkota-accent" : ""
                      }`}
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={faqId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="pt-4 text-sm font-sans font-light text-alkota-silver leading-relaxed max-w-3xl"
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
