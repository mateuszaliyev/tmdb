import type { ReactNode } from "react";

import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

import { environment } from "@/environment.mjs";

import { LOCALES, type Locale } from "@/locales";
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
}: Pick<RootLayoutProps, "params">): Promise<Metadata> => {
  const dictionary = await getDictionary(locale);

  const description = dictionary.meta.description;

  const languages = Object.fromEntries(
    LOCALES.map((locale) => [locale, `/${locale}`]),
  ) as Record<Locale, string>;

  const title: Metadata["title"] = {
    default: dictionary.meta.title,
    template: "%s - tmdb",
  };

  return {
    alternates: {
      languages,
    },
    description,
    keywords: dictionary.meta.keywords,
    metadataBase: new URL(environment.NEXT_PUBLIC_BASE_URL),
    openGraph: {
      alternateLocale: LOCALES.filter((element) => element !== locale),
      description,
      locale,
      siteName: "tmdb",
      title,
      type: "website",
      url: "/",
    },
    title,
  };
};

const figtree = Figtree({
  subsets: ["latin", "latin-ext"],
  variable: "--font-figtree",
});

const RootLayout = ({ children, params: { locale } }: RootLayoutProps) => (
  <html
    className={cx(
      "scroll-pt-24 scroll-smooth bg-gray-950 text-white [color-scheme:dark]",
      figtree.variable,
    )}
    lang={locale}
  >
    <body className="antialiased">
      <Navigation locale={locale} />
      {children}
      <Footer locale={locale} />
    </body>
  </html>
);

export default RootLayout;
