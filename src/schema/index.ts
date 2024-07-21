import { z } from "zod";

export type DigitalMediaType = Extract<MediaType, "movie" | "tv">;

export type Media = Movie | Series;

export type MediaType = z.infer<
  typeof searchSchema
>["results"][number]["media_type"];

export type Movie = z.infer<typeof movieSchemaWithMediaType>;

export type Series = z.infer<typeof seriesSchemaWithMediaType>;

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
    original_title: z.string(),
    release_date: z
      .literal("")
      .transform(() => undefined)
      .or(z.string().date()),
    title: z.string(),
    video: z.boolean(),
  }),
);

export const movieSchemaWithMediaType = movieSchema.merge(
  z.object({ media_type: z.literal("movie") }),
);

export const seriesSchema = movieSeriesCommonSchema.merge(
  z.object({
    first_air_date: z
      .literal("")
      .transform(() => undefined)
      .or(z.string().date()),
    name: z.string(),
    origin_country: z.string().array(),
    original_name: z.string(),
  }),
);

export const seriesSchemaWithMediaType = seriesSchema.merge(
  z.object({ media_type: z.literal("tv") }),
);

export const personSchema = z.object({
  adult: z.boolean(),
  gender: z.number(),
  id: z.number(),
  known_for: z
    .discriminatedUnion("media_type", [
      movieSchemaWithMediaType,
      seriesSchemaWithMediaType,
    ])
    .array(),
  known_for_department: z.string(),
  name: z.string(),
  original_name: z.string(),
  popularity: z.number(),
  profile_path: z.string().nullable(),
});

export const personSchemaWithMediaType = personSchema.merge(
  z.object({ media_type: z.literal("person") }),
);

export const resultsSchema = z.object({
  page: z.number(),
  total_pages: z.number(),
  total_results: z.number(),
});

export const searchSchema = resultsSchema.merge(
  z.object({
    results: z
      .discriminatedUnion("media_type", [
        movieSchemaWithMediaType,
        personSchemaWithMediaType,
        seriesSchemaWithMediaType,
      ])
      .array(),
  }),
);

export const topRatedMediaSchema = resultsSchema.merge(
  z.object({
    results: z
      .union([
        movieSchema.transform((movie) => ({
          ...movie,
          media_type: "movie" as const,
        })),
        seriesSchema.transform((series) => ({
          ...series,
          media_type: "tv" as const,
        })),
      ])
      .array(),
  }),
);
