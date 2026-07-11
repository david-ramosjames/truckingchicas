/**
 * Lead delivery — emails form submissions to the firm.
 *
 * Sends via Resend (https://resend.com) using a simple HTTPS call so there is
 * no extra dependency. Configure two env vars in production:
 *   RESEND_API_KEY   — your Resend API key
 *   LEAD_FROM_EMAIL  — a verified sender, e.g. "Trucking Chicas <leads@truckingchicas.com>"
 * If RESEND_API_KEY is not set, the lead is logged server-side instead of emailed,
 * so the form still succeeds for the visitor.
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

export async function sendLead(
  subject: string,
  fields: LeadField[],
  replyTo?: string
): Promise<{ delivered: boolean }> {
  const present = fields.filter(
    (f) => f.value != null && String(f.value).trim() !== ""
  );

  const text = present.map((f) => `${f.label}: ${f.value}`).join("\n");
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

  const apiKey = process.env.RESEND_API_KEY;
  const from =
    process.env.LEAD_FROM_EMAIL ||
    "Trucking Chicas Website <leads@truckingchicas.com>";

  if (!apiKey) {
    console.log(`[Lead] ${subject} (email not configured)\n${text}`);
    return { delivered: false };
  }

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
      return { delivered: false };
    }
    return { delivered: true };
  } catch (err) {
    console.error("[Lead] send failed", err);
    return { delivered: false };
  }
}
