import type { ReactNode } from "react";

import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import type { Locale } from "@/locales";

import { cx } from "@/utilities/classname";

import "./style.css";

import { getDictionary } from "@/locales/dictionary";

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
  <html className={cx("scroll-smooth", figtree.variable)} lang={locale}>
    <body className="antialiased">{children}</body>
  </html>
);

export default RootLayout;
