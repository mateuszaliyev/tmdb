import { MediaCarousel } from "@/components/media/carousel";

import type { Locale } from "@/locales";

import type { DigitalMediaType } from "@/schema";

import { getTopRatedMedia } from "@/server/data";

export type TopRatedMediaProps = {
  locale: Locale;
  mediaType: DigitalMediaType;
};

export const TopRatedMedia = async ({
  locale,
  mediaType,
}: TopRatedMediaProps) => {
  const media = await getTopRatedMedia(mediaType, locale);
  return <MediaCarousel locale={locale} media={media} />;
};
