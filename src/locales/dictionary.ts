import "server-only";

import type { Locale } from "@/locales";

export type Dictionary = typeof import("./en.json");

const DICTIONARIES: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./en.json").then((module) => module.default),
  pl: () => import("./pl.json").then((module) => module.default),
};

export const getDictionary = (locale: Locale) => DICTIONARIES[locale]();
