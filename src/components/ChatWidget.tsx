"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/constants";

type Locale = "en" | "es";

interface IntakeStep {
  message: string;
  buttons: { label: string; value: string }[];
}

function getSteps(locale: Locale): IntakeStep[] {
  const isEn = locale === "en";
  return [
    {
      message: isEn
        ? "Do you have a truck accident case? I can help you find out in 30 seconds."
        : "\u00bfTiene un caso de accidente de cami\u00f3n? Puedo ayudarle a averiguarlo en 30 segundos.",
      buttons: isEn
        ? [
            { label: "Yes, I was in a truck accident", value: "yes" },
            { label: "Not sure", value: "unsure" },
          ]
        : [
            { label: "S\u00ed, tuve un accidente de cami\u00f3n", value: "yes" },
            { label: "No estoy seguro/a", value: "unsure" },
          ],
    },
    {
      message: isEn
        ? "About when did the accident happen?"
        : "\u00bfAproximadamente cu\u00e1ndo ocurri\u00f3 el accidente?",
      buttons: isEn
        ? [
            { label: "Within the last 30 days", value: "recent" },
            { label: "1\u20136 months ago", value: "medium" },
            { label: "More than 6 months ago", value: "old" },
          ]
        : [
            { label: "\u00daltimos 30 d\u00edas", value: "recent" },
            { label: "Hace 1\u20136 meses", value: "medium" },
            { label: "Hace m\u00e1s de 6 meses", value: "old" },
          ],
    },
    {
      message: isEn ? "Were you injured?" : "\u00bfResult\u00f3 lesionado/a?",
      buttons: isEn
        ? [
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
            { label: "Not sure", value: "unsure" },
          ]
        : [
            { label: "S\u00ed", value: "yes" },
            { label: "No", value: "no" },
            { label: "No estoy seguro/a", value: "unsure" },
          ],
    },
    {
      message: isEn
        ? "Was a commercial truck (18-wheeler) involved?"
        : "\u00bfEstuvo involucrado un cami\u00f3n comercial (tr\u00e1iler)?",
      buttons: isEn
        ? [
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
            { label: "Not sure", value: "unsure" },
          ]
        : [
            { label: "S\u00ed", value: "yes" },
            { label: "No", value: "no" },
            { label: "No estoy seguro/a", value: "unsure" },
          ],
    },
  ];
}

function isStrongCase(answers: string[]): boolean {
  // answers: [0] accident, [1] timing, [2] injured, [3] truck
  const timing = answers[1];
  const injured = answers[2];
  const truck = answers[3];
  return (
    (timing === "recent" || timing === "medium") &&
    (injured === "yes" || injured === "unsure") &&
    (truck === "yes" || truck === "unsure")
  );
}

interface ChatMessage {
  role: "bot" | "user";
  content: string;
}

export default function ChatWidget() {
  const pathname = usePathname();
  const locale: Locale = pathname.startsWith("/es") ? "es" : "en";
  const isEn = locale === "en";

  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const steps = getSteps(locale);

  // Expand the floating button after 3 seconds, then collapse after 4 more
  useEffect(() => {
    const expandTimer = setTimeout(() => setExpanded(true), 3000);
    const collapseTimer = setTimeout(() => setExpanded(false), 7000);
    return () => {
      clearTimeout(expandTimer);
      clearTimeout(collapseTimer);
    };
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Add first bot message when chat opens
  function openChat() {
    setIsOpen(true);
    if (messages.length === 0) {
      setMessages([{ role: "bot", content: steps[0].message }]);
    }
  }

  function handleAnswer(buttonLabel: string, value: string) {
    const currentStep = step;
    const newAnswers = [...answers, value];
    const newMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: buttonLabel },
    ];

    setAnswers(newAnswers);

    if (currentStep < steps.length - 1) {
      // Next question
      const nextStep = currentStep + 1;
      newMessages.push({ role: "bot", content: steps[nextStep].message });
      setMessages(newMessages);
      setStep(nextStep);
    } else {
      // Final step — show result
      const strong = isStrongCase(newAnswers);
      const resultMsg = strong
        ? isEn
          ? "Based on what you shared, you may have a strong case. Let\u2019s get you connected with an attorney right away."
          : "Seg\u00fan lo que comparti\u00f3, es posible que tenga un caso s\u00f3lido. Conect\u00e9mosle con un abogado de inmediato."
        : isEn
          ? "Thanks for sharing. A lawyer can review your situation and give you a free assessment."
          : "Gracias por compartir. Un abogado puede revisar su situaci\u00f3n y darle una evaluaci\u00f3n gratuita.";
      newMessages.push({ role: "bot", content: resultMsg });
      setMessages(newMessages);
      setStep(steps.length); // Move past all steps to show contact form
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    try {
      await fetch("/api/slack", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          channel: "leads",
          leadFields: { name, phone },
          intake: answers,
          locale,
        }),
      });
    } catch {
      // Silent
    }

    setSubmitted(true);
    setMessages((prev) => [
      ...prev,
      {
        role: "bot",
        content: isEn
          ? `Thank you, ${name.split(" ")[0]}! Our team will call you shortly. You can also call us now at ${PHONE_DISPLAY}.`
          : `\u00a1Gracias, ${name.split(" ")[0]}! Nuestro equipo le llamar\u00e1 pronto. Tambi\u00e9n puede llamarnos al ${PHONE_DISPLAY}.`,
      },
    ]);
  }

  const showForm = step >= steps.length && !submitted;
  const currentButtons = step < steps.length ? steps[step].buttons : [];

  return (
    <>
      {/* ===== FLOATING BUTTON ===== */}
      {!isOpen && (
        <button
          onClick={openChat}
          className="fixed bottom-20 right-4 z-50 flex items-center gap-2 rounded-full bg-brand-red px-4 py-3 text-white shadow-lg shadow-brand-red/30 transition-all hover:scale-105 hover:shadow-brand-red/40 md:bottom-6"
          aria-label={isEn ? "Open chat" : "Abrir chat"}
        >
          {/* Chat icon */}
          <svg className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          {/* Expandable text */}
          <span
            className={`whitespace-nowrap text-sm font-bold transition-all duration-500 ${
              expanded ? "max-w-[200px] opacity-100" : "max-w-0 overflow-hidden opacity-0"
            }`}
          >
            {isEn ? "Do I have a case?" : "\u00bfTengo un caso?"}
          </span>
          {/* Online pulse */}
          <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
          </span>
        </button>
      )}

      {/* ===== CHAT WINDOW ===== */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 z-50 flex h-full w-full flex-col bg-white shadow-2xl sm:bottom-4 sm:right-4 sm:h-[34rem] sm:w-96 sm:rounded-xl">
          {/* Header */}
          <div className="flex items-center justify-between rounded-t-none bg-brand-navy px-4 py-3 text-white sm:rounded-t-xl">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <span className="font-bold">
                {isEn ? "Trucking Chicas" : "Trucking Chicas"}
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300"
              aria-label="Close chat"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-3 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-brand-navy text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Step buttons OR contact form */}
          <div className="border-t border-gray-100 px-4 py-3">
            {/* Active step — show answer buttons */}
            {step < steps.length && (
              <div className="flex flex-wrap gap-2">
                {currentButtons.map((btn) => (
                  <button
                    key={btn.value}
                    onClick={() => handleAnswer(btn.label, btn.value)}
                    className="rounded-full border-2 border-brand-red bg-white px-4 py-2 text-sm font-semibold text-brand-red transition-all hover:bg-brand-red hover:text-white"
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            )}

            {/* Contact form */}
            {showForm && (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={isEn ? "Your name" : "Su nombre"}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
                  required
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={isEn ? "Your phone number" : "Su n\u00famero de tel\u00e9fono"}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
                  required
                />
                {/* Primary CTA: Call */}
                <a
                  href={`tel:+1${PHONE_NUMBER}`}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-red px-4 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-brand-red-light"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {isEn ? `Call Now: ${PHONE_DISPLAY}` : `Llame Ahora: ${PHONE_DISPLAY}`}
                </a>
                {/* Secondary CTA: Submit form */}
                <button
                  type="submit"
                  className="w-full rounded-lg border-2 border-brand-navy bg-white px-4 py-2.5 text-sm font-bold text-brand-navy transition-all hover:bg-brand-navy hover:text-white"
                >
                  {isEn ? "Get Free Case Review" : "Obtener Revisi\u00f3n Gratis"}
                </button>
              </form>
            )}

            {/* After submission */}
            {submitted && (
              <a
                href={`tel:+1${PHONE_NUMBER}`}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-red px-4 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-brand-red-light"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {isEn ? `Call Now: ${PHONE_DISPLAY}` : `Llame Ahora: ${PHONE_DISPLAY}`}
              </a>
            )}

            <p className="mt-2 text-center text-[10px] text-gray-400">
              {isEn ? "No fees unless we win" : "No cobramos si no ganamos"} &middot;{" "}
              {isEn ? "Available 24/7" : "Disponible 24/7"}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
