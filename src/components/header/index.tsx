import { Suspense } from "react";

import Image from "next/image";
import { redirect } from "next/navigation";

import background from "@/assets/images/header.png";

import { Container } from "@/components/container";
import { DebouncedSearchInput } from "@/components/input/debounced";
import { MediaCarouselSkeleton } from "@/components/media/carousel";
import { MediaCarouselSection } from "@/components/media/carousel/section";

import { SearchIcon } from "@/icons/search";

import type { Locale } from "@/locales";
import { getDictionary } from "@/locales/dictionary";

import { SearchResults } from "./search-results";

export type HeaderProps = {
  locale: Locale;
  query?: string;
};

const updateSearchParameters = async (locale: Locale, formData: FormData) => {
  "use server";

  const query = formData.get("query");

  if (!query || typeof query !== "string") return;

  redirect(`/${locale}?query=${query}`);
};

export const Header = async ({ locale, query }: HeaderProps) => {
  const dictionary = await getDictionary(locale);

  const updateSearchParametersWithLocale = updateSearchParameters.bind(
    null,
    locale,
  );

  return (
    <header className="relative min-h-dvh">
      <div className="absolute inset-0 h-dvh">
        <Image
          alt=""
          className="object-cover object-bottom hue-rotate-15"
          fill
          priority
          sizes="100vw"
          src={background}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-gray-950" />
      </div>
      <Container className="relative pt-20">
        <form
          action={updateSearchParametersWithLocale}
          className="my-32 flex justify-center"
        >
          <div className="relative w-1/3 min-w-60">
            <DebouncedSearchInput
              className="w-full pr-14"
              defaultValue={query}
              name="query"
              placeholder={dictionary.header.input.placeholder}
              variant="xl"
            />
            <SearchIcon className="absolute right-4 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-400" />
          </div>
        </form>
        {typeof query !== "undefined" && (
          <MediaCarouselSection
            deck={`${dictionary.header.search.results.deck}: "${query}"`}
            heading={dictionary.header.search.results.heading}
            locale={locale}
          >
            <Suspense fallback={<MediaCarouselSkeleton />}>
              <SearchResults locale={locale} query={query} />
            </Suspense>
          </MediaCarouselSection>
        )}
      </Container>
    </header>
  );
};
