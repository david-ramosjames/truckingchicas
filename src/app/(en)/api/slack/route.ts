import { NextRequest, NextResponse } from "next/server";
import { type ChatSession, generateLeadPayload, generateChatLogPayload } from "@/lib/triage";

/**
 * Dual Slack channel routing:
 * - channel: "leads"  → SLACK_LEADS_WEBHOOK_URL (#tc-leads)
 *   Triggered when: phone captured, user requests call, or "likely_case" triage
 * - channel: "log"    → SLACK_LOG_WEBHOOK_URL (#tc-chat-log)
 *   Triggered when: chat ends, idle 7min, or 10+ turns
 *
 * Falls back to SLACK_WEBHOOK_URL if specific channel URLs are not set.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const channel: "leads" | "log" = body.channel || "leads";
    const session: ChatSession = body;

    if (!session.sessionId) {
      return NextResponse.json({ error: "Session data is required" }, { status: 400 });
    }

    const fallbackUrl = process.env.SLACK_WEBHOOK_URL;

    if (channel === "leads") {
      const webhookUrl = process.env.SLACK_LEADS_WEBHOOK_URL || fallbackUrl;
      if (!webhookUrl) {
        console.warn("SLACK_LEADS_WEBHOOK_URL not configured — skipping lead notification");
        return NextResponse.json({ ok: true, skipped: true });
      }

      const payload = generateLeadPayload(session);
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        console.error("Slack leads webhook error:", res.status);
        return NextResponse.json({ error: "Lead notification failed" }, { status: 502 });
      }
    }

    if (channel === "log") {
      const webhookUrl = process.env.SLACK_LOG_WEBHOOK_URL || fallbackUrl;
      if (!webhookUrl) {
        console.warn("SLACK_LOG_WEBHOOK_URL not configured — skipping chat log");
        return NextResponse.json({ ok: true, skipped: true });
      }

      const payload = generateChatLogPayload(session);
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        console.error("Slack log webhook error:", res.status);
        return NextResponse.json({ error: "Chat log notification failed" }, { status: 502 });
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Slack API error:", error);
    return NextResponse.json({ error: "Failed to send notification" }, { status: 500 });
  }
}
