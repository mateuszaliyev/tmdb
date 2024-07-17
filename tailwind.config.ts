import type { Config } from "tailwindcss";
import tailwindCssAnimate from "tailwindcss-animate";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{js,jsx,mdx,ts,tsx}"],
  plugins: [tailwindCssAnimate],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-figtree)", ...fontFamily.sans],
      },
      zIndex: {
        popover: "1",
      },
    },
  },
};

export default config;
