import type { MediaType } from "@/schema";

export const getTmdbApiUrl = (path: string) =>
  `https://api.themoviedb.org/3${path}`;

export const getTmdbPosterUrl = (path: string) =>
  `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${path}`;

export const getTmdbUrl = (mediaType: MediaType, id: number) =>
  `https://themoviedb.org/${mediaType}/${id}`;
