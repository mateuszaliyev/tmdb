import { z } from "zod";

export type Media = Movie | Series;

export type MediaType = z.infer<
  typeof searchSchema
>["results"][number]["media_type"];

export type Movie = z.infer<typeof movieSchema>;

export type Series = z.infer<typeof seriesSchema>;

const movieSeriesCommonSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  genre_ids: z.number().array(),
  id: z.number(),
  original_language: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string().nullable(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export const movieSchema = movieSeriesCommonSchema.merge(
  z.object({
    media_type: z.literal("movie"),
    original_title: z.string(),
    release_date: z
      .literal("")
      .transform(() => undefined)
      .or(z.string().date()),
    title: z.string(),
    video: z.boolean(),
  }),
);

export const seriesSchema = movieSeriesCommonSchema.merge(
  z.object({
    first_air_date: z
      .literal("")
      .transform(() => undefined)
      .or(z.string().date()),
    media_type: z.literal("tv"),
    name: z.string(),
    origin_country: z.string().array(),
    original_name: z.string(),
  }),
);

export const personSchema = z.object({
  adult: z.boolean(),
  gender: z.number(),
  id: z.number(),
  known_for: z
    .discriminatedUnion("media_type", [movieSchema, seriesSchema])
    .array(),
  known_for_department: z.string(),
  media_type: z.literal("person"),
  name: z.string(),
  original_name: z.string(),
  popularity: z.number(),
  profile_path: z.string().nullable(),
});

export const searchSchema = z.object({
  page: z.number(),
  results: z
    .discriminatedUnion("media_type", [movieSchema, personSchema, seriesSchema])
    .array(),
  total_pages: z.number(),
  total_results: z.number(),
});
