"use client";

import type { Dictionary } from "@/dictionaries";
import { type Locale, PHONE_NUMBER } from "@/lib/constants";

export default function StickyMobileCTA({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <div className="fixed left-3 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-3 md:hidden">
      {/* Call button */}
      <a
        href={`tel:+1${PHONE_NUMBER}`}
        className="flex items-center gap-2 rounded-full bg-red-600 py-2.5 pl-3 pr-4 text-sm font-bold text-white shadow-lg shadow-red-600/30 transition-transform hover:scale-105 active:scale-95"
        aria-label={locale === "en" ? "Call us" : "Llámenos"}
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        {locale === "en" ? "Call Us" : "Llámenos"}
      </a>

      {/* Text button */}
      <a
        href={`sms:+1${PHONE_NUMBER}`}
        className="flex items-center gap-2 rounded-full bg-red-600 py-2.5 pl-3 pr-4 text-sm font-bold text-white shadow-lg shadow-red-600/30 transition-transform hover:scale-105 active:scale-95"
        aria-label={locale === "en" ? "Text us" : "Envíenos un mensaje"}
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        {locale === "en" ? "Text Us" : "Mensaje"}
      </a>
    </div>
  );
}
