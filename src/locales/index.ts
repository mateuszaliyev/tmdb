export type Locale = (typeof LOCALES)[number];

export const LOCALES = ["en", "pl"] as const;

export const DEFAULT_LOCALE = "en" satisfies Locale;
