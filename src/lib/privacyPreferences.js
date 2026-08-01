// Consent storage + Google Consent Mode v2 bridge.
//
// Deliberately named without "cookie" anywhere (file, keys, event name) -
// several ad blocker filter lists hide/neutralize anything matching that
// term, which would make a real cookie-consent banner invisible to exactly
// the privacy-conscious users who most want to see it. The choice itself is
// stored in localStorage, not a cookie.

const STORAGE_KEY = "glow_privacy_preferences";
export const PRIVACY_REOPEN_EVENT = "open-privacy-settings";

const DEFAULTS = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function getStoredConsent() {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveConsent(preferences) {
  const record = {
    ...DEFAULTS,
    ...preferences,
    necessary: true,
    timestamp: new Date().toISOString(),
  };

  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  }

  applyConsentToGtag(record);
  return record;
}

export function applyConsentToGtag(preferences) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("consent", "update", {
    ad_storage: preferences.marketing ? "granted" : "denied",
    ad_user_data: preferences.marketing ? "granted" : "denied",
    ad_personalization: preferences.marketing ? "granted" : "denied",
    analytics_storage: preferences.analytics ? "granted" : "denied",
  });
}

export function openPrivacySettings() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(PRIVACY_REOPEN_EVENT));
}
