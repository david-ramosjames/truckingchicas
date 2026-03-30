"use client";

import { useState, useEffect } from "react";
import type { Dictionary } from "@/dictionaries";
import { type Locale, PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/constants";

const STORAGE_KEY = "tc_estimate_modal_dismissed";
const SHOW_DELAY_MS = 25000; // 25 seconds — let users engage with content first

export default function CaseEstimateModal({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  }

  if (!visible) return null;

  const isEn = locale === "en";

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={dismiss} />

      {/* Modal */}
      <div className="relative w-full max-w-md animate-[slideUp_0.3s_ease-out] rounded-2xl bg-white p-6 shadow-2xl md:p-8">
        {/* Close button */}
        <button
          onClick={dismiss}
          className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-gray-600"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Icon */}
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red/10">
          <svg className="h-7 w-7 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>

        {/* Headline */}
        <h3 className="text-center text-2xl font-extrabold text-gray-900">
          {isEn ? "Injured in a Truck Accident?" : "\u00bfLesionado en un Accidente de Cami\u00f3n?"}
        </h3>

        {/* Trust badges */}
        <div className="mt-3 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider">
          <span className="text-brand-red">
            {isEn ? "No Fees Unless We Win" : "No Cobramos Si No Ganamos"}
          </span>
          <span className="text-gray-300">|</span>
          <span className="text-brand-red">
            {isEn ? "Available 24/7" : "Disponible 24/7"}
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 text-center text-gray-600">
          {isEn
            ? "Get a free, no-obligation case review from an experienced truck accident attorney. One call can change everything."
            : "Obtenga una revisi\u00f3n gratuita de su caso sin compromiso con un abogado experimentado en accidentes de cami\u00f3n. Una llamada puede cambiar todo."}
        </p>

        {/* Primary CTA — Call */}
        <a
          href={`tel:+1${PHONE_NUMBER}`}
          className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-xl bg-brand-red px-6 py-4 text-lg font-bold text-white shadow-lg shadow-brand-red/25 transition-all hover:bg-brand-red-light hover:shadow-brand-red/40"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          {isEn ? `Call Now: ${PHONE_DISPLAY}` : `Llame Ahora: ${PHONE_DISPLAY}`}
        </a>

        {/* Urgency note */}
        <p className="mt-3 text-center text-xs font-medium text-gray-500">
          {isEn
            ? "Speak with an attorney today — free consultation"
            : "Hable con un abogado hoy \u2014 consulta gratis"}
        </p>
      </div>
    </div>
  );
}
