import type { Config } from "tailwindcss";
import tailwindCssAnimate from "tailwindcss-animate";
import {
  black,
  violet as brand,
  current,
  slate as gray,
  transparent,
  white,
} from "tailwindcss/colors";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{js,jsx,mdx,ts,tsx}"],
  plugins: [tailwindCssAnimate],
  theme: {
    colors: {
      black,
      brand,
      current,
      gray,
      transparent,
      white,
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-figtree)", ...fontFamily.sans],
      },
      zIndex: {
        navigation: "1",
        popover: "2",
      },
    },
  },
};

export default config;
