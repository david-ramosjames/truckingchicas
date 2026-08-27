import Script from "next/script";
import { CALLRAIL_SWAP_URL } from "@/lib/constants";

/**
 * CallRail Dynamic Number Insertion (DNI).
 *
 * Loads the account's swap.js, which finds the firm's phone number already
 * rendered on the page — (512) 877-3244, the configured swap target — and
 * replaces both the displayed number and its tel: link with a CallRail
 * tracking number so calls are attributed to their source.
 *
 * The swap.js URL is public (downloaded by every visitor), so nothing secret
 * lives here. The CallRail REST API key / Account ID are a separate concern:
 * they are server-side secrets and belong in .env.local, never in this file.
 */
export function CallRailSwap() {
  if (!CALLRAIL_SWAP_URL) return null;

  return (
    <Script
      id="callrail-swap"
      src={CALLRAIL_SWAP_URL}
      strategy="afterInteractive"
    />
  );
}
