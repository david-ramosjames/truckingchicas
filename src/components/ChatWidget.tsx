"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { chatStrings, detectLanguage, type ChatLocale } from "@/lib/i18nChat";
import { triageCase, type LeadFields, type ChatSession } from "@/lib/triage";
import { PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/constants";

interface Message {
  role: "user" | "assistant";
  content: string;
  ts: number;
}

export default function ChatWidget({ initialLocale = "en" }: { initialLocale?: ChatLocale }) {
  const [isOpen, setIsOpen] = useState(false);
  const [locale, setLocale] = useState<ChatLocale>(initialLocale);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [consentShown, setConsentShown] = useState(false);
  const [leadFields, setLeadFields] = useState<LeadFields>({});
  const [sessionId] = useState(() => crypto.randomUUID());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const t = chatStrings[locale];

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  function openChat() {
    setIsOpen(true);
    if (!consentShown) {
      setConsentShown(true);
      setMessages([
        { role: "assistant", content: t.consent, ts: Date.now() },
        { role: "assistant", content: t.greeting, ts: Date.now() + 1 },
      ]);
    }
  }

  async function sendMessage(text: string) {
    if (!text.trim() || sending) return;

    // Detect language from user input
    const detected = detectLanguage(text);
    if (detected !== locale) {
      setLocale(detected);
    }

    const userMsg: Message = { role: "user", content: text, ts: Date.now() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await res.json();
      const assistantMsg: Message = {
        role: "assistant",
        content: data.reply || "...",
        ts: Date.now(),
      };
      setMessages((prev) => [...prev, assistantMsg]);

      // Try to extract lead fields from conversation context
      extractLeadInfo(text);
    } catch {
      const errorMsg = locale === "es"
        ? "Lo siento, hubo un error. Por favor intenta de nuevo o llámanos directamente."
        : "Sorry, there was an error. Please try again or call us directly.";
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: errorMsg, ts: Date.now() },
      ]);
    }

    setSending(false);
  }

  function extractLeadInfo(text: string) {
    // Simple extraction heuristics
    const phoneMatch = text.match(/\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/);
    if (phoneMatch) {
      setLeadFields((prev) => ({ ...prev, phone: phoneMatch[0] }));
    }

    const emailMatch = text.match(/[\w.-]+@[\w.-]+\.\w+/);
    if (emailMatch) {
      setLeadFields((prev) => ({ ...prev, email: emailMatch[0] }));
    }
  }

  async function triggerSlackNotify() {
    const session: ChatSession = {
      sessionId,
      locale,
      leadFields,
      triageStatus: triageCase(leadFields),
      transcript: messages.map((m) => ({ role: m.role, content: m.content, ts: m.ts })),
    };

    try {
      await fetch("/api/slack", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(session),
      });
    } catch {
      // Silent fail for Slack — don't block user experience
    }
  }

  function handleQuickReply(text: string) {
    sendMessage(text);
  }

  function handleRequestReview() {
    triggerSlackNotify();
    const msg = locale === "es" ? t.collectContact : t.collectContact;
    setMessages((prev) => [...prev, { role: "assistant", content: msg, ts: Date.now() }]);
  }

  const quickReplies = [
    { label: t.quickReplies.callNow, action: "call" },
    { label: t.quickReplies.freeReview, action: "review" },
  ];

  return (
    <>
      {/* Chat launcher button - positioned above sticky CTA bar */}
      {!isOpen && (
        <button
          onClick={openChat}
          className="fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold shadow-lg transition-transform hover:scale-110 md:bottom-6"
          aria-label={locale === "es" ? "Abrir chat" : "Open chat"}
        >
          <svg className="h-6 w-6 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 z-50 flex h-full w-full flex-col bg-white shadow-2xl sm:bottom-4 sm:right-4 sm:h-[32rem] sm:w-96 sm:rounded-xl">
          {/* Header */}
          <div className="flex items-center justify-between rounded-t-xl bg-brand-navy px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <span className="font-bold">{t.chatTitle}</span>
            </div>
            <div className="flex items-center gap-2">
              {/* Language toggle inside chat */}
              <button
                onClick={() => setLocale(locale === "en" ? "es" : "en")}
                className="rounded border border-white/30 px-2 py-0.5 text-xs font-bold hover:bg-white/10"
              >
                {locale === "en" ? "ES" : "EN"}
              </button>
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
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-3 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                    msg.role === "user"
                      ? "bg-brand-navy text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {sending && (
              <div className="mb-3 flex justify-start">
                <div className="rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-500">
                  <span className="inline-flex gap-1">
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce" style={{ animationDelay: "0.1s" }}>.</span>
                    <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>.</span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          <div className="flex gap-2 border-t border-gray-100 px-4 py-2">
            {quickReplies.map((qr) => (
              <button
                key={qr.label}
                onClick={() => {
                  if (qr.action === "call") {
                    window.location.href = `tel:+1${PHONE_NUMBER}`;
                  } else {
                    handleRequestReview();
                  }
                }}
                className="rounded-full border border-brand-gold px-3 py-1 text-xs font-medium text-brand-navy transition-colors hover:bg-brand-gold/10"
              >
                {qr.label}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 px-4 py-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.inputPlaceholder}
                className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
                disabled={sending}
              />
              <button
                type="submit"
                disabled={sending || !input.trim()}
                className="rounded-lg bg-brand-gold px-4 py-2 text-sm font-bold text-brand-navy transition-colors hover:bg-brand-gold-light disabled:opacity-50"
              >
                {t.sendButton}
              </button>
            </form>
            <p className="mt-1 text-center text-[10px] text-gray-400">
              {t.poweredBy} &middot;{" "}
              <a href={`tel:+1${PHONE_NUMBER}`} className="underline">
                {PHONE_DISPLAY}
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
