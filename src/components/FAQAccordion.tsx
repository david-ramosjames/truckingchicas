"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQAccordion({ items }: { items: readonly FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="rounded-lg border border-gray-200 bg-white">
          <button
            className="flex w-full items-center justify-between px-6 py-4 text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <h3 className="pr-4 text-lg font-semibold text-brand-navy">
              {item.q}
            </h3>
            <svg
              className={`h-5 w-5 shrink-0 text-brand-gold transition-transform ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === i && (
            <div className="border-t border-gray-100 px-6 py-4">
              <p className="leading-relaxed text-gray-600">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
