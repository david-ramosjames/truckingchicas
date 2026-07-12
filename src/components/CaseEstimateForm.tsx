"use client";

import { useState } from "react";
import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import { type Locale, ROUTES, PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/constants";

type Status = "idle" | "estimating" | "done" | "error";

export default function CaseEstimateForm({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const f = dict.caseEstimate.form;
  const routes = ROUTES[locale];

  const [status, setStatus] = useState<Status>("idle");
  const [estimate, setEstimate] = useState("");

  /* Form state */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [accidentDate, setAccidentDate] = useState("");
  const [location, setLocation] = useState("");
  const [truckType, setTruckType] = useState("");
  const [role, setRole] = useState("");
  const [injuries, setInjuries] = useState("");
  const [treatment, setTreatment] = useState<string[]>([]);
  const [workImpact, setWorkImpact] = useState("");
  const [policeReport, setPoliceReport] = useState("");
  const [additional, setAdditional] = useState("");

  function toggleTreatment(val: string) {
    setTreatment((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("estimating");
    // Bring the user back to the top so they see the result/spinner
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          accidentDate,
          location,
          truckType,
          role,
          injuries,
          treatment: treatment.join(", "),
          workImpact,
          policeReport,
          additional,
          locale,
        }),
      });

      if (!res.ok) throw new Error("API error");

      const data = await res.json();
      setEstimate(data.estimate);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  function reset() {
    setStatus("idle");
    setEstimate("");
    setName("");
    setPhone("");
    setEmail("");
    setAccidentDate("");
    setLocation("");
    setTruckType("");
    setRole("");
    setInjuries("");
    setTreatment([]);
    setWorkImpact("");
    setPoliceReport("");
    setAdditional("");
  }

  /* Non-commercial truck interstitial */
  if (truckType === "non_commercial") {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 md:p-8">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
          <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-brand-navy">{dict.caseEstimate.nonCommercialHeading}</h3>
        <p className="mt-3 leading-relaxed text-gray-700">{dict.caseEstimate.nonCommercialMessage}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href={routes.contact}
            className="btn-lift btn-glow-coral flex items-center justify-center gap-2 rounded-xl bg-brand-coral px-6 py-3 font-bold text-white transition-colors hover:bg-brand-coral-light"
          >
            {dict.caseEstimate.nonCommercialCta}
          </Link>
          <button
            onClick={() => setTruckType("")}
            className="rounded-xl border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            {dict.caseEstimate.tryAgain}
          </button>
        </div>
      </div>
    );
  }

  /* Estimating spinner */
  if (status === "estimating") {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-brand-coral border-t-transparent" />
        <p className="mt-4 text-lg font-medium text-brand-navy">{dict.caseEstimate.estimating}</p>
      </div>
    );
  }

  /* Result view */
  if (status === "done") {
    return (
      <div>
        {/* Prominent consultation CTA at the top */}
        <div className="mb-6 rounded-xl bg-brand-navy p-6 text-center text-white shadow-lg md:p-7">
          <h3 className="text-xl font-bold md:text-2xl">
            {locale === "en"
              ? "Want a Real Number? Talk to an Attorney — Free"
              : "¿Quieres una Cifra Real? Habla con un Abogado — Gratis"}
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-gray-300">
            {locale === "en"
              ? "This is an AI estimate. Get a free, no-obligation review of your actual case from our team."
              : "Esta es una estimación con IA. Recibe una evaluación gratuita y sin compromiso de tu caso real con nuestro equipo."}
          </p>
          <div className="mt-5 flex justify-center">
            <a
              href={`tel:+1${PHONE_NUMBER}`}
              className="btn-lift btn-glow-coral inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-red px-6 py-4 text-base font-bold text-white transition-colors hover:bg-brand-red-light sm:w-auto sm:px-8 sm:text-lg"
            >
              <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {dict.caseEstimate.ctaButton} — {dict.nav.callNow}: {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="rounded-xl border border-brand-coral/20 bg-brand-coral/5 p-6 md:p-8">
          <h3 className="mb-4 text-2xl font-bold text-brand-navy">{dict.caseEstimate.result}</h3>
          <div
            className="prose prose-gray max-w-none [&_strong]:text-brand-navy [&_li]:text-gray-700"
            dangerouslySetInnerHTML={{ __html: formatMarkdown(estimate) }}
          />
        </div>

        <div className="mt-4 rounded-lg bg-amber-50 border border-amber-200 p-4">
          <p className="text-sm text-amber-800">{dict.caseEstimate.disclaimer}</p>
        </div>

        {/* CTA */}
        <div className="mt-8 rounded-xl bg-brand-navy p-6 text-center text-white md:p-8">
          <h3 className="text-2xl font-bold">{dict.caseEstimate.ctaHeading}</h3>
          <p className="mt-2 text-gray-300">{dict.caseEstimate.ctaSubhead}</p>
          <div className="mt-6 flex justify-center">
            <a
              href={`tel:+1${PHONE_NUMBER}`}
              className="btn-lift btn-glow-coral inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-red px-6 py-4 text-base font-bold text-white transition-colors hover:bg-brand-red-light sm:w-auto sm:px-8 sm:text-lg"
            >
              <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {dict.caseEstimate.ctaButton} — {dict.nav.callNow}: {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={reset}
            className="text-sm font-medium text-brand-coral underline-offset-2 hover:underline"
          >
            {dict.caseEstimate.tryAgain}
          </button>
        </div>
      </div>
    );
  }

  /* Form */
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Accident Date */}
      <fieldset>
        <legend className="mb-3 text-lg font-bold text-brand-navy">{f.accidentDateLabel}</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            { value: "within_week", label: f.accidentDateRecent },
            { value: "within_month", label: f.accidentDateMonth },
            { value: "within_6mo", label: f.accidentDate6mo },
            { value: "within_year", label: f.accidentDateYear },
            { value: "older", label: f.accidentDateOlder },
          ].map((o) => (
            <label
              key={o.value}
              className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 transition-colors ${
                accidentDate === o.value
                  ? "border-brand-coral bg-brand-coral/5 text-brand-navy"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="accidentDate"
                value={o.value}
                checked={accidentDate === o.value}
                onChange={(e) => setAccidentDate(e.target.value)}
                className="accent-brand-coral"
                required
              />
              <span className="text-sm">{o.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Location */}
      <div>
        <label className="mb-2 block text-lg font-bold text-brand-navy">{f.locationLabel}</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder={f.locationPlaceholder}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-brand-coral focus:outline-none focus:ring-2 focus:ring-brand-coral/20"
        />
      </div>

      {/* Truck Type */}
      <fieldset>
        <legend className="mb-3 text-lg font-bold text-brand-navy">{f.truckTypeLabel}</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            { value: "18_wheeler", label: f.truckType18 },
            { value: "tanker", label: f.truckTypeTanker },
            { value: "delivery", label: f.truckTypeDelivery },
            { value: "dump_construction", label: f.truckTypeDump },
            { value: "other", label: f.truckTypeOther },
            { value: "non_commercial", label: f.truckTypeNonCommercial },
          ].map((o) => (
            <label
              key={o.value}
              className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 transition-colors ${
                truckType === o.value
                  ? "border-brand-coral bg-brand-coral/5 text-brand-navy"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="truckType"
                value={o.value}
                checked={truckType === o.value}
                onChange={(e) => setTruckType(e.target.value)}
                className="accent-brand-coral"
                required
              />
              <span className="text-sm">{o.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Role */}
      <fieldset>
        <legend className="mb-3 text-lg font-bold text-brand-navy">{f.roleLabel}</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            { value: "driver", label: f.roleDriver },
            { value: "passenger", label: f.rolePassenger },
            { value: "pedestrian", label: f.rolePedestrian },
            { value: "family", label: f.roleFamily },
          ].map((o) => (
            <label
              key={o.value}
              className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 transition-colors ${
                role === o.value
                  ? "border-brand-coral bg-brand-coral/5 text-brand-navy"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="role"
                value={o.value}
                checked={role === o.value}
                onChange={(e) => setRole(e.target.value)}
                className="accent-brand-coral"
                required
              />
              <span className="text-sm">{o.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Injuries */}
      <div>
        <label className="mb-2 block text-lg font-bold text-brand-navy">{f.injuriesLabel}</label>
        <textarea
          value={injuries}
          onChange={(e) => setInjuries(e.target.value)}
          placeholder={f.injuriesPlaceholder}
          rows={3}
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-brand-coral focus:outline-none focus:ring-2 focus:ring-brand-coral/20"
        />
      </div>

      {/* Treatment, checkboxes */}
      <fieldset>
        <legend className="mb-3 text-lg font-bold text-brand-navy">{f.treatmentLabel}</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            { value: "er", label: f.treatmentER },
            { value: "hospital", label: f.treatmentHospital },
            { value: "surgery", label: f.treatmentSurgery },
            { value: "ongoing", label: f.treatmentOngoing },
            { value: "none", label: f.treatmentNone },
          ].map((o) => (
            <label
              key={o.value}
              className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 transition-colors ${
                treatment.includes(o.value)
                  ? "border-brand-coral bg-brand-coral/5 text-brand-navy"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <input
                type="checkbox"
                checked={treatment.includes(o.value)}
                onChange={() => toggleTreatment(o.value)}
                className="accent-brand-coral"
              />
              <span className="text-sm">{o.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Work Impact */}
      <fieldset>
        <legend className="mb-3 text-lg font-bold text-brand-navy">{f.workImpactLabel}</legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {[
            { value: "missed_work", label: f.workImpactYes },
            { value: "cannot_work", label: f.workImpactCannot },
            { value: "can_work", label: f.workImpactNo },
          ].map((o) => (
            <label
              key={o.value}
              className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 transition-colors ${
                workImpact === o.value
                  ? "border-brand-coral bg-brand-coral/5 text-brand-navy"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="workImpact"
                value={o.value}
                checked={workImpact === o.value}
                onChange={(e) => setWorkImpact(e.target.value)}
                className="accent-brand-coral"
                required
              />
              <span className="text-sm">{o.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Police Report */}
      <fieldset>
        <legend className="mb-3 text-lg font-bold text-brand-navy">{f.policeReportLabel}</legend>
        <div className="flex gap-3">
          {[
            { value: "yes", label: f.policeReportYes },
            { value: "no", label: f.policeReportNo },
            { value: "unsure", label: f.policeReportUnsure },
          ].map((o) => (
            <label
              key={o.value}
              className={`flex cursor-pointer items-center gap-2 rounded-lg border px-5 py-3 transition-colors ${
                policeReport === o.value
                  ? "border-brand-coral bg-brand-coral/5 text-brand-navy"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="policeReport"
                value={o.value}
                checked={policeReport === o.value}
                onChange={(e) => setPoliceReport(e.target.value)}
                className="accent-brand-coral"
                required
              />
              <span className="text-sm">{o.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Additional */}
      <div>
        <label className="mb-2 block text-lg font-bold text-brand-navy">{f.additionalLabel}</label>
        <textarea
          value={additional}
          onChange={(e) => setAdditional(e.target.value)}
          placeholder={f.additionalPlaceholder}
          rows={3}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-brand-coral focus:outline-none focus:ring-2 focus:ring-brand-coral/20"
        />
      </div>

      {/* Contact Info */}
      <div className="rounded-xl border border-brand-coral/20 bg-brand-coral/5 p-6">
        <p className="mb-4 text-sm text-gray-600">{f.contactNote}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">{f.nameLabel} *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={f.namePlaceholder}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-brand-coral focus:outline-none focus:ring-2 focus:ring-brand-coral/20"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">{f.phoneLabel} *</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
              placeholder={f.phonePlaceholder}
              required
              inputMode="numeric"
              pattern="[0-9]*"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-brand-coral focus:outline-none focus:ring-2 focus:ring-brand-coral/20"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="mb-1 block text-sm font-medium text-gray-700">{f.emailLabel}</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={f.emailPlaceholder}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-brand-coral focus:outline-none focus:ring-2 focus:ring-brand-coral/20"
          />
        </div>
      </div>

      {/* Disclaimer + Submit */}
      <div className="rounded-lg bg-gray-50 p-4">
        <p className="text-xs text-gray-500">{dict.caseEstimate.disclaimerShort}</p>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          {locale === "en"
            ? "Something went wrong. Please try again or call us directly."
            : "Algo salió mal. Inténtalo de nuevo o llámanos directamente."}
        </p>
      )}

      <button
        type="submit"
        className="btn-lift btn-glow-coral w-full rounded-xl bg-brand-coral px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-brand-coral-light"
      >
        {f.submit}
      </button>
    </form>
  );
}

/** Minimal markdown → HTML for the estimate result */
function formatMarkdown(md: string): string {
  return md
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>\n?)+/g, (m) => `<ul class="ml-4 list-disc space-y-1 my-2">${m}</ul>`)
    .replace(/\n{2,}/g, "</p><p class='mt-3'>")
    .replace(/\n/g, "<br>")
    .replace(/^/, "<p>")
    .replace(/$/, "</p>");
}
