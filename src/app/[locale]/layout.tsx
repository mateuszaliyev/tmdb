import type { ReactNode } from "react";

import { Figtree } from "next/font/google";

import { Navigation } from "@/components/navigation";

import type { Locale } from "@/locales";
import { getDictionary } from "@/locales/dictionary";

import { cx } from "@/utilities/classname";

import "./style.css";

type RootLayoutProps = {
  children: ReactNode;
  params: {
    locale: Locale;
  };
};

export const generateMetadata = async ({
  params: { locale },
}: Pick<RootLayoutProps, "params">) => {
  const dictionary = await getDictionary(locale);

  return {
    title: dictionary.meta.title,
  };
};

const figtree = Figtree({
  subsets: ["latin", "latin-ext"],
  variable: "--font-figtree",
});

const RootLayout = ({ children, params: { locale } }: RootLayoutProps) => (
  <html
    className={cx(
      "scroll-smooth bg-neutral-950 text-white [color-scheme:dark]",
      figtree.variable,
    )}
    lang={locale}
  >
    <body className="antialiased">
      <Navigation locale={locale} />
      {children}
    </body>
  </html>
);

export default RootLayout;
