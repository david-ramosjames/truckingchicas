"use client";

import { useState, useEffect, useCallback } from "react";
import type { Dictionary } from "@/dictionaries";
import { type Locale, PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/constants";

const STORAGE_KEY = "tc_estimate_modal_dismissed";
const MIN_TIME_ON_PAGE_MS = 8000; // Don't show before 8 seconds even on exit-intent

export default function CaseEstimateModal({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);

  const showModal = useCallback(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    setVisible(true);
    sessionStorage.setItem(STORAGE_KEY, "1");
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    // Wait minimum time before arming the exit-intent listener
    const armTimer = setTimeout(() => setReady(true), MIN_TIME_ON_PAGE_MS);
    return () => clearTimeout(armTimer);
  }, []);

  useEffect(() => {
    if (!ready) return;

    // Desktop: mouse leaves viewport (exit-intent)
    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY <= 0) {
        showModal();
      }
    }

    // Mobile fallback: trigger on back button / visibility change
    function handleVisibilityChange() {
      if (document.visibilityState === "hidden") {
        showModal();
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [ready, showModal]);

  function dismiss() {
    setVisible(false);
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
          {isEn ? "Wait \u2014 Don\u2019t Leave Without Your Free Case Review" : "Espere \u2014 No Se Vaya Sin Su Revisi\u00f3n Gratis"}
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
            ? "Speak with an experienced truck accident attorney today. One call can change everything \u2014 and it costs you nothing."
            : "Hable con un abogado experimentado en accidentes de cami\u00f3n hoy. Una llamada puede cambiarlo todo \u2014 y no le cuesta nada."}
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

        {/* Urgency */}
        <p className="mt-3 text-center text-xs font-medium text-gray-500">
          {isEn
            ? "Free consultation \u2014 no obligation"
            : "Consulta gratis \u2014 sin compromiso"}
        </p>
      </div>
    </div>
  );
}
