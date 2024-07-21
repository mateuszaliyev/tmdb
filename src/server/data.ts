import "server-only";

import { unstable_cache as cache } from "next/cache";

import { environment } from "@/environment.mjs";

import type { Locale } from "@/locales";

import { searchSchema } from "@/schema";

export const search = cache(
  async (query: string, locale: Locale) => {
    const url = new URL("https://api.themoviedb.org/3/search/multi");

    url.searchParams.append("language", locale);
    url.searchParams.append("query", query);

    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${environment.TMDB_API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Upstream server responded with ${response.status} ${response.statusText}.`,
      );
    }

    const data = await response.json();

    const { results } = searchSchema.parse(data);

    return results.filter((result) => result.media_type !== "person");
  },
  ["search"],
  {
    revalidate: 60 * 60 * 24,
    tags: ["search"],
  },
);
