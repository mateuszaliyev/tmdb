import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/locales";

export const matchLocale = (headers: Record<string, string>) => {
  const languages = new Negotiator({ headers }).languages();
  return match(languages, LOCALES, DEFAULT_LOCALE) as Locale;
};
