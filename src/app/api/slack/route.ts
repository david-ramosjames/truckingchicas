import { NextRequest, NextResponse } from "next/server";
import { type ChatSession, generateSlackPayload } from "@/lib/triage";

export async function POST(request: NextRequest) {
  try {
    const webhookUrl = process.env.SLACK_WEBHOOK_URL;

    if (!webhookUrl) {
      console.warn("SLACK_WEBHOOK_URL not configured — skipping notification");
      return NextResponse.json({ ok: true, skipped: true });
    }

    const session: ChatSession = await request.json();

    if (!session.sessionId) {
      return NextResponse.json(
        { error: "Session data is required" },
        { status: 400 }
      );
    }

    const payload = generateSlackPayload(session);

    const slackResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!slackResponse.ok) {
      console.error("Slack webhook error:", slackResponse.status);
      return NextResponse.json(
        { error: "Slack notification failed" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Slack API error:", error);
    return NextResponse.json(
      { error: "Failed to send notification" },
      { status: 500 }
    );
  }
}
