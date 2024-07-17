export type Locale = (typeof LOCALES)[number];

export const LOCALES = ["en", "pl"] as const;

export const DEFAULT_LOCALE = "en" satisfies Locale;

export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  pl: "Polski",
};
