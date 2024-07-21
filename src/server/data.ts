import "server-only";

import { unstable_cache as cache } from "next/cache";

import { environment } from "@/environment.mjs";

import type { Locale } from "@/locales";

import {
  searchSchema,
  topRatedMediaSchema,
  type DigitalMediaType,
} from "@/schema";

import { getTmdbApiUrl } from "@/utilities/url";

export const getTopRatedMedia = cache(
  async (mediaType: DigitalMediaType, locale: Locale) => {
    const url = new URL(getTmdbApiUrl(`/${mediaType}/top_rated`));

    url.searchParams.append("api_key", environment.TMDB_API_KEY);
    url.searchParams.append("language", locale);

    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      console.error(url);

      throw new Error(
        `Upstream server responded with ${response.status} ${response.statusText}.`,
      );
    }

    const data = await response.json();

    const { results } = topRatedMediaSchema.parse(data);

    return results;
  },
  ["top-rated-media"],
  {
    revalidate: 60 * 60 * 24,
    tags: ["top-rated-media", "top-rated-movies", "top-rated-series"],
  },
);

export const search = cache(
  async (query: string, locale: Locale) => {
    const url = new URL(getTmdbApiUrl("/search/multi"));

    url.searchParams.append("api_key", environment.TMDB_API_KEY);
    url.searchParams.append("language", locale);
    url.searchParams.append("query", query);

    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
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
