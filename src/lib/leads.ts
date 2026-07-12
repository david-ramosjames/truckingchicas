/**
 * Lead delivery — notifies the firm when a form is submitted.
 *
 * Two independent channels, each enabled by an env var (both optional):
 *   1. Email via Resend
 *        RESEND_API_KEY   — your Resend API key
 *        LEAD_FROM_EMAIL  — a verified sender, e.g. "Trucking Chicas <leads@truckingchicas.com>"
 *   2. Slack via an Incoming Webhook (posts to whichever channel the webhook is bound to)
 *        SLACK_WEBHOOK_URL — https://hooks.slack.com/services/XXX/YYY/ZZZ
 *
 * If a channel's env var is missing it is skipped, and the submission is logged
 * server-side instead, so the form always succeeds for the visitor.
 */

export const LEAD_RECIPIENTS = [
  "jon@truckingchicas.com",
  "david@truckingchicas.com",
];

export type LeadField = { label: string; value?: string | null };

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Slack mrkdwn only needs &, <, > escaped.
function escapeSlack(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

async function sendEmail(
  subject: string,
  present: LeadField[],
  replyTo?: string
): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const from =
    process.env.LEAD_FROM_EMAIL ||
    "Trucking Chicas Website <leads@truckingchicas.com>";
  if (!apiKey) return false;

  const rows = present
    .map(
      (f) =>
        `<tr><td style="padding:6px 14px;font-weight:600;color:#121212;vertical-align:top;white-space:nowrap">${escapeHtml(
          f.label
        )}</td><td style="padding:6px 14px;color:#333;white-space:pre-wrap">${escapeHtml(
          String(f.value)
        )}</td></tr>`
    )
    .join("");
  const html = `<div style="font-family:Arial,Helvetica,sans-serif;max-width:640px">
    <h2 style="color:#E53935;margin:0 0 14px">${escapeHtml(subject)}</h2>
    <table style="border-collapse:collapse;width:100%">${rows}</table>
    <p style="margin-top:18px;color:#999;font-size:12px">Sent automatically from truckingchicas.com</p>
  </div>`;
  const text = present.map((f) => `${f.label}: ${f.value}`).join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from,
        to: LEAD_RECIPIENTS,
        subject,
        html,
        text,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
    });
    if (!res.ok) {
      console.error("[Lead] Resend error", res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error("[Lead] email send failed", err);
    return false;
  }
}

async function postToSlack(
  subject: string,
  present: LeadField[]
): Promise<boolean> {
  const webhook = process.env.SLACK_WEBHOOK_URL;
  if (!webhook) return false;

  const body = present
    .map((f) => `*${escapeSlack(f.label)}:* ${escapeSlack(String(f.value))}`)
    .join("\n");

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: `🚛 ${subject}`,
        blocks: [
          {
            type: "header",
            text: { type: "plain_text", text: `🚛 ${subject}`, emoji: true },
          },
          { type: "section", text: { type: "mrkdwn", text: body } },
          {
            type: "context",
            elements: [
              { type: "mrkdwn", text: "Submitted on truckingchicas.com" },
            ],
          },
        ],
      }),
    });
    if (!res.ok) {
      console.error("[Lead] Slack error", res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error("[Lead] Slack post failed", err);
    return false;
  }
}

export async function sendLead(
  subject: string,
  fields: LeadField[],
  replyTo?: string
): Promise<{ email: boolean; slack: boolean }> {
  const present = fields.filter(
    (f) => f.value != null && String(f.value).trim() !== ""
  );

  const [email, slack] = await Promise.all([
    sendEmail(subject, present, replyTo),
    postToSlack(subject, present),
  ]);

  if (!email && !slack) {
    // Nothing configured (or both failed) — keep a server-side record.
    console.log(
      `[Lead] ${subject} (no delivery channel configured)\n${present
        .map((f) => `${f.label}: ${f.value}`)
        .join("\n")}`
    );
  }

  return { email, slack };
}
