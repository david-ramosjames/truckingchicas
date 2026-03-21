"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import { type Locale, ROUTES } from "@/lib/constants";

const STORAGE_KEY = "tc_estimate_modal_dismissed";
const SHOW_DELAY_MS = 5000; // Show after 5 seconds

export default function CaseEstimateModal({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const [visible, setVisible] = useState(false);
  const routes = ROUTES[locale];

  useEffect(() => {
    // Don't show if already dismissed this session
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
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={dismiss} />

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
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-coral/10">
          <svg className="h-7 w-7 text-brand-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>

        {/* Content */}
        <h3 className="text-center text-2xl font-bold text-gray-900">
          {isEn ? "What's Your Case Worth?" : "¿Cuánto Vale Tu Caso?"}
        </h3>
        <p className="mt-3 text-center text-gray-600">
          {isEn
            ? "Get a free AI-powered estimate of your truck accident case value in minutes. No obligation, completely confidential."
            : "Obtén una estimación gratuita del valor de tu caso de accidente de camión con IA en minutos. Sin compromiso, completamente confidencial."}
        </p>

        {/* CTA */}
        <Link
          href={routes.caseEstimate}
          onClick={dismiss}
          className="btn-lift btn-glow-coral mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-coral px-6 py-4 text-lg font-bold text-white transition-colors hover:bg-brand-coral-light"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          {isEn ? "Get My Free Estimate" : "Obtener Mi Estimación Gratis"}
        </Link>

        <p className="mt-3 text-center text-xs text-gray-400">
          {isEn ? "Takes less than 2 minutes" : "Toma menos de 2 minutos"}
        </p>
      </div>
    </div>
  );
}
