import { search } from "@/server/data";

import { MediaCard } from "@/components/card/media";
import { Carousel, CarouselContent, CarouselItem } from "@/components/carousel";

import type { Locale } from "@/locales";

export type SearchResultsProps = {
  locale: Locale;
  query: string;
};

export const SearchResults = async ({ locale, query }: SearchResultsProps) => {
  const results = await search(query, locale);

  return (
    <Carousel>
      <CarouselContent className="-ml-4">
        {results.map((media) => (
          <CarouselItem className="basis-60 pl-4" key={media.id}>
            <MediaCard locale={locale} media={media} withMediaType />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
