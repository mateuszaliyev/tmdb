import { Suspense } from "react";

import { MediaCarouselSkeleton } from "@/components/media/carousel";
import { MediaCarouselSection } from "@/components/media/carousel/section";
import { TopRatedMedia } from "@/components/media/top-rated";

import type { Locale } from "@/locales";
import { getDictionary } from "@/locales/dictionary";

import type { DigitalMediaType } from "@/schema";

export type TopRatedMediaSectionProps = {
  locale: Locale;
  mediaType: DigitalMediaType;
};

export const TopRatedMediaSection = async ({
  locale,
  mediaType,
}: TopRatedMediaSectionProps) => {
  const dictionary = await getDictionary(locale);

  return (
    <MediaCarouselSection
      deck={dictionary.media["top-rated"][mediaType].deck}
      heading={dictionary.media["top-rated"][mediaType].title}
      id={dictionary.media["top-rated"][mediaType].slug}
      locale={locale}
    >
      <Suspense fallback={<MediaCarouselSkeleton />}>
        <TopRatedMedia locale={locale} mediaType={mediaType} />
      </Suspense>
    </MediaCarouselSection>
  );
};
