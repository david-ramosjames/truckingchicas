"use client";

import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import { type Locale, ROUTES, PHONE_NUMBER } from "@/lib/constants";

export default function StickyMobileCTA({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const routes = ROUTES[locale];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-brand-navy p-2 shadow-[0_-4px_12px_rgba(0,0,0,0.3)] md:hidden">
      <div className="flex gap-2">
        {/* PRIMARY: Call — bright red, dominant */}
        <a
          href={`tel:+1${PHONE_NUMBER}`}
          className="pulse-halo btn-glow-coral flex flex-[1.2] items-center justify-center gap-2 rounded-xl bg-brand-red px-4 py-3 font-bold text-white transition-colors hover:bg-brand-red-light"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          {dict.cta.callNow}
        </a>
        {/* SECONDARY: Free Review — dark red */}
        <Link
          href={routes.contact}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-red-dark px-4 py-3 font-bold text-white transition-colors hover:bg-[#A52222]"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          {dict.cta.freeReview}
        </Link>
      </div>
    </div>
  );
}
