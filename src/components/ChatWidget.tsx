"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/constants";

/* ─── Types ─── */
type Locale = "en" | "es";
type BubbleRole = "assistant" | "user";

interface ChatMessage {
  role: BubbleRole;
  content: string;
  showSeen?: boolean;
}

interface FlowStep {
  message: string;
  buttons: { label: string; value: string }[];
}

/* ─── Flow definitions ─── */
function getFlow(locale: Locale): FlowStep[] {
  const isEn = locale === "en";
  return [
    {
      message: isEn
        ? "Hi, I\u2019m Maria with Trucking Chicas. I can help you find out if you may have a truck accident case in about 30 seconds."
        : "Hola, soy Mar\u00eda de Trucking Chicas. Puedo ayudarle a descubrir si tiene un caso de accidente de cami\u00f3n en unos 30 segundos.",
      buttons: isEn
        ? [
            { label: "Yes \u2014 truck accident", value: "truck" },
            { label: "Not sure", value: "unsure" },
            { label: "Different situation", value: "other" },
          ]
        : [
            { label: "S\u00ed \u2014 accidente de cami\u00f3n", value: "truck" },
            { label: "No estoy seguro/a", value: "unsure" },
            { label: "Otra situaci\u00f3n", value: "other" },
          ],
    },
    {
      message: isEn
        ? "Did this involve an 18-wheeler or commercial truck?"
        : "\u00bfEstuvo involucrado un tr\u00e1iler o cami\u00f3n comercial?",
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
        ? "Were you or a loved one injured?"
        : "\u00bfResult\u00f3 usted o un ser querido lesionado/a?",
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
        ? "When did this happen?"
        : "\u00bfCu\u00e1ndo ocurri\u00f3?",
      buttons: isEn
        ? [
            { label: "Within 30 days", value: "recent" },
            { label: "1\u20136 months ago", value: "medium" },
            { label: "6+ months ago", value: "old" },
          ]
        : [
            { label: "\u00daltimos 30 d\u00edas", value: "recent" },
            { label: "Hace 1\u20136 meses", value: "medium" },
            { label: "M\u00e1s de 6 meses", value: "old" },
          ],
    },
  ];
}

function isHighIntent(answers: string[]): boolean {
  return (
    (answers[0] === "truck" || answers[0] === "unsure") &&
    (answers[1] === "yes" || answers[1] === "unsure")
  );
}

/* ─── Sub-components ─── */

function TypingIndicator() {
  return (
    <div className="mb-3 flex items-start gap-2">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
        M
      </div>
      <div className="rounded-2xl rounded-tl-sm bg-[#f1f1f1] px-4 py-3">
        <div className="flex gap-1">
          <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: "0ms" }} />
          <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: "150ms" }} />
          <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}

function ChatBubble({ msg, isEn }: { msg: ChatMessage; isEn: boolean }) {
  if (msg.role === "user") {
    return (
      <div className="mb-3 animate-[fadeSlideIn_0.25s_ease-out]">
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-black px-4 py-2.5 text-sm text-white">
            {msg.content}
          </div>
        </div>
        {msg.showSeen && (
          <p className="mt-0.5 text-right text-[10px] text-gray-400">
            {isEn ? "Seen" : "Visto"}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="mb-3 flex items-start gap-2 animate-[fadeSlideIn_0.3s_ease-out]">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
        M
      </div>
      <div>
        <p className="mb-0.5 text-[10px] font-semibold text-gray-500">
          {isEn ? "Maria \u2022 Case Specialist" : "Mar\u00eda \u2022 Especialista de Casos"}
        </p>
        <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-[#f1f1f1] px-4 py-2.5 text-sm leading-relaxed text-[#111]">
          {msg.content}
        </div>
      </div>
    </div>
  );
}

/* ─── Nudge storage ─── */
const NUDGE_KEY = "tc_chat_nudges";

function getNudgeCount(): number {
  try {
    return parseInt(sessionStorage.getItem(NUDGE_KEY) || "0", 10);
  } catch {
    return 0;
  }
}

function incrementNudge(): number {
  const n = getNudgeCount() + 1;
  try {
    sessionStorage.setItem(NUDGE_KEY, String(n));
  } catch { /* */ }
  return n;
}

/* ─── Main Component ─── */

export default function ChatWidget() {
  const pathname = usePathname();
  const locale: Locale = pathname.startsWith("/es") ? "es" : "en";
  const isEn = locale === "en";
  const flow = getFlow(locale);

  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typing, setTyping] = useState(false);
  const [showCallCta, setShowCallCta] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [nudgeText, setNudgeText] = useState("");
  const [buttonLabel, setBtnLabel] = useState(isEn ? "Do I have a case?" : "\u00bfTengo un caso?");
  const [expandLabel, setExpandLabel] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const nudgedRef = useRef({ scroll: false, idle: false, exit: false, initial: false });

  /* ─── Scroll to bottom ─── */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  /* ─── Add assistant message with typing delay ─── */
  const addAssistantMessage = useCallback(
    (text: string, delay = 700 + Math.random() * 500) => {
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setMessages((prev) => [...prev, { role: "assistant", content: text }]);
      }, delay);
    },
    []
  );

  /* ─── Open chat ─── */
  const openChat = useCallback(() => {
    setIsOpen(true);
    setNudgeText("");
    if (!hasBeenOpened) {
      setHasBeenOpened(true);
      setMessages([]);
      addAssistantMessage(flow[0].message, 600);
    }
  }, [hasBeenOpened, addAssistantMessage, flow]);

  /* ─── Show nudge (minimized prompt) ─── */
  const showNudge = useCallback(
    (text: string) => {
      if (isOpen || getNudgeCount() >= 3) return;
      incrementNudge();
      setNudgeText(text);
      setTimeout(() => setNudgeText(""), 8000);
    },
    [isOpen]
  );

  /* ─── TRIGGER 1: Initial expand (3s) ─── */
  useEffect(() => {
    if (nudgedRef.current.initial) return;
    const t = setTimeout(() => {
      nudgedRef.current.initial = true;
      setExpandLabel(true);
      setTimeout(() => setExpandLabel(false), 4000);
    }, 3000);
    return () => clearTimeout(t);
  }, []);

  /* ─── TRIGGER 2: Scroll 50% ─── */
  useEffect(() => {
    function onScroll() {
      if (nudgedRef.current.scroll) return;
      const scrollPct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollPct > 0.5) {
        nudgedRef.current.scroll = true;
        if (!isOpen && hasBeenOpened) {
          showNudge(isEn ? "Still wondering if you have a case?" : "\u00bfA\u00fan se pregunta si tiene un caso?");
        } else if (!isOpen) {
          openChat();
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen, hasBeenOpened, openChat, showNudge, isEn]);

  /* ─── TRIGGER 3: Idle 25s ─── */
  const resetIdleTimer = useCallback(() => {
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => {
      if (nudgedRef.current.idle) return;
      nudgedRef.current.idle = true;
      if (!isOpen) {
        showNudge(isEn ? "Want me to check your case?" : "\u00bfQuiere que revise su caso?");
      }
    }, 25000);
  }, [isOpen, showNudge, isEn]);

  useEffect(() => {
    resetIdleTimer();
    const events = ["mousemove", "keydown", "scroll", "touchstart"];
    events.forEach((e) => window.addEventListener(e, resetIdleTimer, { passive: true }));
    return () => {
      events.forEach((e) => window.removeEventListener(e, resetIdleTimer));
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [resetIdleTimer]);

  /* ─── TRIGGER 4: Exit intent (desktop) ─── */
  useEffect(() => {
    function onMouseLeave(e: MouseEvent) {
      if (e.clientY > 0 || nudgedRef.current.exit || isOpen) return;
      nudgedRef.current.exit = true;
      showNudge(
        isEn
          ? "Before you go \u2014 check your case in 30 seconds"
          : "Antes de irse \u2014 revise su caso en 30 segundos"
      );
    }
    document.addEventListener("mouseleave", onMouseLeave);
    return () => document.removeEventListener("mouseleave", onMouseLeave);
  }, [isOpen, showNudge, isEn]);

  /* ─── Handle answer selection ─── */
  function handleAnswer(label: string, value: string) {
    const showSeen = Math.random() > 0.4;
    const newAnswers = [...answers, value];
    const newMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: label, showSeen },
    ];

    setAnswers(newAnswers);
    setMessages(newMessages);

    const currentStep = step;

    // Check for high-intent shortcut after step 2 (truck accident + commercial truck)
    if (currentStep === 1 && isHighIntent(newAnswers)) {
      setStep(flow.length);
      setShowCallCta(true);
      setTimeout(() => {
        setTyping(true);
        setTimeout(() => {
          setTyping(false);
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content: isEn
                ? "Based on what you\u2019ve shared, you may have a strong case. Truck accident cases are often worth significantly more than standard injury claims. Speak to a lawyer now \u2014 it\u2019s free and takes 2 minutes."
                : "Seg\u00fan lo que ha compartido, es posible que tenga un caso s\u00f3lido. Los casos de accidentes de cami\u00f3n a menudo valen significativamente m\u00e1s que las reclamaciones est\u00e1ndar. Hable con un abogado ahora \u2014 es gratis y toma 2 minutos.",
            },
          ]);
        }, 900 + Math.random() * 400);
      }, 200);
      return;
    }

    // Continue to next step
    if (currentStep < flow.length - 1) {
      const nextStep = currentStep + 1;
      setStep(nextStep);
      setTimeout(() => {
        addAssistantMessage(flow[nextStep].message);
      }, 200);
    } else {
      // Final step — show result
      setStep(flow.length);
      const strong =
        (newAnswers[0] === "truck" || newAnswers[0] === "unsure") &&
        (newAnswers[2] === "yes" || newAnswers[2] === "unsure");
      setShowCallCta(strong);
      const resultMsg = strong
        ? isEn
          ? "You may have a strong case. Truck accident cases are often worth significantly more than standard injury claims. Speak to a lawyer now \u2014 it\u2019s free."
          : "Es posible que tenga un caso s\u00f3lido. Los casos de accidentes de cami\u00f3n valen significativamente m\u00e1s. Hable con un abogado ahora \u2014 es gratis."
        : isEn
          ? "Thanks for sharing. A lawyer can review your situation and give you a free assessment."
          : "Gracias por compartir. Un abogado puede revisar su situaci\u00f3n y darle una evaluaci\u00f3n gratuita.";

      setTimeout(() => addAssistantMessage(resultMsg), 200);
    }
  }

  /* ─── Submit contact form ─── */
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    try {
      await fetch("/api/slack", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ channel: "leads", leadFields: { name, phone }, intake: answers, locale }),
      });
    } catch { /* silent */ }

    setSubmitted(true);
    addAssistantMessage(
      isEn
        ? `Thank you, ${name.split(" ")[0]}! Our team will call you shortly. You can also reach us now at ${PHONE_DISPLAY}.`
        : `\u00a1Gracias, ${name.split(" ")[0]}! Nuestro equipo le llamar\u00e1 pronto. Tambi\u00e9n puede llamarnos al ${PHONE_DISPLAY}.`
    );
  }

  const showForm = step >= flow.length && !submitted;
  const currentButtons = step < flow.length ? flow[step].buttons : [];

  return (
    <>
      {/* ═══ FLOATING BUTTON ═══ */}
      {!isOpen && (
        <div className="fixed bottom-20 right-4 z-50 flex flex-col items-end gap-2 md:bottom-6">
          {/* Nudge bubble */}
          {nudgeText && (
            <button
              onClick={openChat}
              className="animate-[fadeSlideIn_0.3s_ease-out] rounded-2xl bg-black px-4 py-2.5 text-left text-sm text-white shadow-xl"
              style={{ maxWidth: 260 }}
            >
              {nudgeText}
            </button>
          )}

          {/* Main button */}
          <button
            onClick={openChat}
            className="flex items-center gap-2 rounded-full bg-red-600 px-4 py-3 text-white shadow-lg shadow-red-600/30 transition-all hover:scale-105 hover:bg-red-700"
            aria-label={isEn ? "Open chat" : "Abrir chat"}
          >
            <svg className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span
              className={`whitespace-nowrap text-sm font-bold transition-all duration-500 ${
                expandLabel ? "max-w-[200px] opacity-100" : "max-w-0 overflow-hidden opacity-0"
              }`}
            >
              {buttonLabel}
            </span>
            {/* Online pulse */}
            <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
            </span>
          </button>
        </div>
      )}

      {/* ═══ CHAT WINDOW ═══ */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 z-50 flex h-[85vh] w-full flex-col shadow-2xl sm:bottom-4 sm:right-4 sm:h-[36rem] sm:w-[380px] sm:rounded-2xl" style={{ maxHeight: "calc(100vh - 20px)" }}>

          {/* ── Header ── */}
          <div className="flex items-center justify-between bg-black px-4 py-3 sm:rounded-t-2xl">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <div>
                <p className="text-sm font-bold text-white">Trucking Chicas</p>
                <p className="text-[10px] text-gray-400">
                  {isEn ? "Live case screening" : "Evaluaci\u00f3n de caso en vivo"}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 transition-colors hover:text-white"
              aria-label="Close chat"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* ── Messages ── */}
          <div className="flex-1 overflow-y-auto bg-[#f7f7f7] px-4 py-4">
            {messages.map((msg, i) => (
              <ChatBubble key={i} msg={msg} isEn={isEn} />
            ))}
            {typing && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {/* ── Action area ── */}
          <div className="border-t border-gray-200 bg-white px-4 py-3 sm:rounded-b-2xl">
            {/* Step buttons */}
            {step < flow.length && !typing && messages.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {currentButtons.map((btn) => (
                  <button
                    key={btn.value}
                    onClick={() => handleAnswer(btn.label, btn.value)}
                    className="rounded-full border-2 border-black bg-white px-4 py-2.5 text-sm font-semibold text-black transition-all hover:bg-black hover:text-white active:scale-95"
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            )}

            {/* High-intent call CTA */}
            {showForm && showCallCta && !submitted && (
              <div className="space-y-3">
                <a
                  href={`tel:+1${PHONE_NUMBER}`}
                  className="flex w-full items-center justify-center gap-2.5 rounded-full bg-red-600 px-5 py-3.5 text-base font-bold text-white shadow-lg shadow-red-600/25 transition-all hover:bg-red-700 active:scale-95"
                >
                  <span className="text-lg">📞</span>
                  {isEn ? `Call Now ${PHONE_DISPLAY}` : `Llame Ahora ${PHONE_DISPLAY}`}
                </a>

                <button
                  onClick={() => setShowCallCta(false)}
                  className="w-full rounded-full border-2 border-black bg-white px-4 py-2.5 text-sm font-semibold text-black transition-all hover:bg-black hover:text-white"
                >
                  {isEn ? "Continue chat instead" : "Continuar por chat"}
                </button>
              </div>
            )}

            {/* Contact form (after dismissing call CTA or low intent) */}
            {showForm && !showCallCta && !submitted && (
              <form onSubmit={handleSubmit} className="space-y-2.5">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={isEn ? "Your name" : "Su nombre"}
                  className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                  required
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={isEn ? "Phone number" : "N\u00famero de tel\u00e9fono"}
                  className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                  required
                />
                <a
                  href={`tel:+1${PHONE_NUMBER}`}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-red-600 px-4 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-red-700 active:scale-95"
                >
                  <span>📞</span>
                  {isEn ? `Call Now ${PHONE_DISPLAY}` : `Llame Ahora ${PHONE_DISPLAY}`}
                </a>
                <button
                  type="submit"
                  className="w-full rounded-full border-2 border-black bg-white px-4 py-2.5 text-sm font-semibold text-black transition-all hover:bg-black hover:text-white active:scale-95"
                >
                  {isEn ? "Get Free Case Review" : "Obtener Revisi\u00f3n Gratis"}
                </button>
              </form>
            )}

            {/* After submission */}
            {submitted && (
              <a
                href={`tel:+1${PHONE_NUMBER}`}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-red-600 px-4 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-red-700 active:scale-95"
              >
                <span>📞</span>
                {isEn ? `Call Now ${PHONE_DISPLAY}` : `Llame Ahora ${PHONE_DISPLAY}`}
              </a>
            )}

            {/* Footer trust line */}
            <p className="mt-2 text-center text-[10px] text-gray-400">
              {isEn ? "No fee unless we win" : "No cobramos si no ganamos"} &bull;{" "}
              {isEn ? "Available 24/7" : "Disponible 24/7"}
            </p>
          </div>
        </div>
      )}

      {/* ═══ Keyframe for fade + slide ═══ */}
      <style jsx global>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
