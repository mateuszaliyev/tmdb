import { Carousel, CarouselContent, CarouselItem } from "@/components/carousel";
import { MediaCard, MediaCardSkeleton } from "@/components/media/card";

import type { Locale } from "@/locales";

import type { Media } from "@/schema";

export type MediaCarouselProps = {
  locale: Locale;
  media: Media[];
};

export const MediaCarousel = ({ locale, media }: MediaCarouselProps) => (
  <Carousel>
    <CarouselContent className="-ml-4">
      {media.map((media) => (
        <CarouselItem className="basis-60 pl-4" key={media.id}>
          <MediaCard locale={locale} media={media} />
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
);

export const MediaCarouselSkeleton = () => (
  <div className="flex gap-4 overflow-hidden">
    {Array.from({ length: 6 }, (_, index) => (
      <MediaCardSkeleton key={index} />
    ))}
  </div>
);
