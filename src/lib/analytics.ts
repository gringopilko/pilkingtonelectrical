// Thin wrapper around gtag so the rest of the app doesn't need to know
// whether analytics is configured yet. Safe to call anywhere, anytime —
// it's a no-op until VITE_GA_MEASUREMENT_ID is set (see __root.tsx) and
// the gtag.js script has loaded.
//
// If you later set up a Google Ads conversion action, add its
// send_to value (e.g. "AW-XXXXXXXXX/AbC-D_efG-h1i2J3k4") as
// VITE_GA_ADS_CONVERSION_LABEL and it'll be included automatically
// on the two events below without further code changes.

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type TrackParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(eventName: string, params: TrackParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  const adsLabel = import.meta.env.VITE_GA_ADS_CONVERSION_LABEL as string | undefined;
  window.gtag("event", eventName, {
    ...params,
    ...(adsLabel ? { send_to: adsLabel } : {}),
  });
}

// Call when someone successfully submits the quote form.
export function trackQuoteRequest(source: string) {
  trackEvent("generate_lead", { method: "quote_form", source });
}

// Call on tel:/mailto: link clicks.
export function trackContactClick(channel: "phone" | "email") {
  trackEvent(channel === "phone" ? "contact_phone_click" : "contact_email_click", {
    source: typeof window !== "undefined" ? window.location.pathname : undefined,
  });
}
