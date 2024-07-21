import { cache } from "react";

export type Locale = (typeof LOCALES)[number];

export const LOCALES = ["en", "pl"] as const;

export const DEFAULT_LOCALE = "en" satisfies Locale;

export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  pl: "Polski",
};

export const getNumberFormat = cache(
  (...parameters: ConstructorParameters<(typeof Intl)["NumberFormat"]>) =>
    new Intl.NumberFormat(...parameters),
);
