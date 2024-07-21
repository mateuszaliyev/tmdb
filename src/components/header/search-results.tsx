import { MediaCarousel } from "@/components/media/carousel";

import type { Locale } from "@/locales";

import { search } from "@/server/data";

export type SearchResultsProps = {
  locale: Locale;
  query: string;
};

export const SearchResults = async ({ locale, query }: SearchResultsProps) => {
  const results = await search(query, locale);
  return <MediaCarousel locale={locale} media={results} />;
};
