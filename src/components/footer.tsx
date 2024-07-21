import { Container } from "@/components/container";
import { Logo } from "@/components/logo";

import type { Locale } from "@/locales";
import { getDictionary } from "@/locales/dictionary";

import { Link } from "./link";

export type FooterProps = {
  locale: Locale;
};

export const Footer = async ({ locale }: FooterProps) => {
  const dictionary = await getDictionary(locale);

  const topRatedMedia = Object.values(dictionary.media["top-rated"]);

  return (
    <footer className="bg-black py-12">
      <Container className="grid justify-items-center gap-4 text-center text-gray-400 [grid-template-areas:'logo'_'description'_'navigation'_'copyright'] md:justify-items-start md:text-start md:[grid-template-areas:'logo_navigation'_'description_navigation'_'copyright_navigation']">
        <Logo className="h-8 [grid-area:logo]" />
        <p className="max-w-[50ch] text-balance [grid-area:description]">
          {dictionary.meta.description}
        </p>
        <ul className="mt-auto flex items-center gap-4 [grid-area:navigation] md:justify-self-end">
          {topRatedMedia.map(({ slug, title }) => (
            <li key={slug}>
              <Link
                className="text-gray-300 outline-none transition hover:text-white focus-visible:text-white"
                href={`#${slug}`}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <p className="[grid-area:copyright]">
          &copy; {new Date().getFullYear()} tmdb. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};
