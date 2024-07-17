import { defineConfig } from "cva";
import { twMerge as onComplete } from "tailwind-merge";

export type { VariantProps } from "cva";

export const { compose, cva, cx } = defineConfig({
  hooks: { onComplete },
});

export const container = cva({ base: "mx-auto w-full max-w-screen-xl px-4" });
