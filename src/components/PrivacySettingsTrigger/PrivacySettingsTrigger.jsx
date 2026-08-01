"use client";

import { openPrivacySettings } from "@/lib/privacyPreferences";

export default function PrivacySettingsTrigger({ className = "", children }) {
  return (
    <button type="button" className={className} onClick={openPrivacySettings}>
      {children}
    </button>
  );
}
