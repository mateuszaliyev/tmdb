import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const environment = createEnv({
  client: {
    NEXT_PUBLIC_BASE_URL: z
      .string()
      .url()
      .default(
        process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : `http://localhost:${process.env.PORT ?? 3000}`,
      ),
  },
  emptyStringAsUndefined: false,
  runtimeEnv: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
  server: {
    TMDB_API_KEY: z.string().min(1),
  },
});
