export interface LeadFields {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  incidentDate?: string;
  injuries?: string;
  treatment?: string;
  role?: string;
  policeReport?: string;
  truckingCompany?: string;
}

export type TriageStatus = "likely_case" | "needs_review" | "general_info";

export interface ChatSession {
  sessionId: string;
  locale: "en" | "es";
  leadFields: LeadFields;
  triageStatus: TriageStatus;
  transcript: { role: "user" | "assistant"; content: string; ts: number }[];
}

/**
 * Simple, transparent "case fit" heuristic.
 * Factors considered:
 * - Texas incident
 * - Commercial truck involvement
 * - Injuries / medical care
 * - Within general statute window (does NOT assert exact statute as absolute)
 */
export function triageCase(fields: LeadFields): TriageStatus {
  const hasTexas = true; // Assume Texas since they're on our site
  const hasTruck = true; // Assume truck since they're chatting about it
  const hasInjury =
    fields.injuries?.toLowerCase() !== "no" && fields.injuries !== undefined;
  const hasTreatment =
    fields.treatment?.toLowerCase() !== "no" && fields.treatment !== undefined;

  // Check if incident date is within a reasonable window
  let withinWindow = true;
  if (fields.incidentDate) {
    try {
      const incidentDate = new Date(fields.incidentDate);
      const now = new Date();
      const diffYears =
        (now.getTime() - incidentDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000);
      // If more than ~2 years, flag for review (but do NOT definitively say it's too late)
      if (diffYears > 2) {
        withinWindow = false;
      }
    } catch {
      // Can't parse date — don't penalize
    }
  }

  if (hasTexas && hasTruck && (hasInjury || hasTreatment) && withinWindow) {
    return "likely_case";
  }

  if (hasTexas && hasTruck) {
    return "needs_review";
  }

  return "general_info";
}

export function generateSlackPayload(session: ChatSession) {
  const statusEmoji = {
    likely_case: "🟢",
    needs_review: "🟡",
    general_info: "🔵",
  };

  const statusLabel = {
    likely_case: "Likely Case",
    needs_review: "Needs Review",
    general_info: "General Question",
  };

  const fields = session.leadFields;
  const contactLines = [
    fields.name && `*Name:* ${fields.name}`,
    fields.phone && `*Phone:* ${fields.phone}`,
    fields.email && `*Email:* ${fields.email}`,
    fields.city && `*City:* ${fields.city}`,
    fields.incidentDate && `*Incident Date:* ${fields.incidentDate}`,
    fields.injuries && `*Injuries:* ${fields.injuries}`,
    fields.treatment && `*Medical Treatment:* ${fields.treatment}`,
    fields.role && `*Role:* ${fields.role}`,
    fields.policeReport && `*Police Report:* ${fields.policeReport}`,
    fields.truckingCompany && `*Trucking Company:* ${fields.truckingCompany}`,
  ]
    .filter(Boolean)
    .join("\n");

  // Summarize transcript (last 10 messages, truncated)
  const recentTranscript = session.transcript
    .slice(-10)
    .map((m) => `${m.role === "user" ? "👤" : "🤖"} ${m.content.slice(0, 200)}`)
    .join("\n");

  return {
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: `${statusEmoji[session.triageStatus]} New Lead — ${statusLabel[session.triageStatus]}`,
        },
      },
      {
        type: "section",
        fields: [
          { type: "mrkdwn", text: `*Status:* ${statusLabel[session.triageStatus]}` },
          { type: "mrkdwn", text: `*Language:* ${session.locale.toUpperCase()}` },
          { type: "mrkdwn", text: `*Session:* ${session.sessionId.slice(0, 8)}` },
        ],
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: `*Contact Info:*\n${contactLines || "_No contact info captured_"}` },
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: `*Conversation Summary:*\n${recentTranscript || "_No messages_"}` },
      },
      {
        type: "divider",
      },
    ],
  };
}
