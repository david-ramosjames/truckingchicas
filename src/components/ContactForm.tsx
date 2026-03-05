"use client";

import { useState } from "react";
import type { Dictionary } from "@/dictionaries";

export default function ContactForm({ dict }: { dict: Dictionary }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // TODO: Connect to form submission endpoint (e.g., /api/contact)
    // For now, simulate success
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg bg-green-50 p-8 text-center">
        <svg className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <p className="mt-4 text-lg font-semibold text-green-800">{dict.form.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
          {dict.form.name} *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
          {dict.form.phone} *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
          {dict.form.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
          {dict.form.message} *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
        />
      </div>
      <p className="text-sm text-gray-500">{dict.cta.microcopy}</p>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-brand-gold px-8 py-4 text-lg font-bold text-brand-navy transition-colors hover:bg-brand-gold-light disabled:opacity-60"
      >
        {status === "sending"
          ? "..."
          : dict.form.submit}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600">{dict.form.error}</p>
      )}
    </form>
  );
}
