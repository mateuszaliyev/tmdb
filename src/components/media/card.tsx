import type { ComponentPropsWithRef } from "react";

import { Badge } from "@/components/badge";
import {
  Card,
  CardImage,
  CardImageContainer,
  CardTitle,
} from "@/components/card";
import { Link } from "@/components/link";
import { Rating } from "@/components/rating";
import { Skeleton } from "@/components/skeleton";

import { DEFAULT_LOCALE, type Locale } from "@/locales";
import { getDictionary } from "@/locales/dictionary";

import type { Media } from "@/schema";

import { getTmdbPosterUrl, getTmdbUrl } from "@/utilities/url";

export type MediaCardProps = Omit<
  ComponentPropsWithRef<typeof Card>,
  "asChild"
> & {
  locale?: Locale;
  media: Media;
};

export const MediaCard = async ({
  locale = DEFAULT_LOCALE,
  media,
  ...props
}: MediaCardProps) => {
  const dictionary = await getDictionary(locale);

  const releaseOrFirstAirDate =
    media.media_type === "movie" ? media.release_date : media.first_air_date;

  const date = releaseOrFirstAirDate
    ? new Date(releaseOrFirstAirDate)
    : undefined;

  const title = media.media_type === "movie" ? media.title : media.name;

  return (
    <Card asChild className="group relative h-full" {...props}>
      <Link href={getTmdbUrl(media.media_type, media.id)} target="_blank">
        <CardImageContainer>
          {media.poster_path && (
            <CardImage
              alt={title}
              sizes="200px"
              src={getTmdbPosterUrl(media.poster_path)}
            />
          )}
        </CardImageContainer>
        <CardTitle className="transition group-focus-within:text-white group-hover:text-white">
          {title}
        </CardTitle>
        <div className="mt-auto flex items-center justify-between">
          <Badge className="self-start">
            {dictionary.media[media.media_type]}
          </Badge>
          {media.vote_average !== 0 && (
            <Rating locale={locale} rating={media.vote_average} />
          )}
          {typeof date !== "undefined" && (
            <time className="text-sm" dateTime={date.toISOString()}>
              {date.toLocaleDateString(locale, {
                dateStyle: "medium",
              })}
            </time>
          )}
        </div>
      </Link>
    </Card>
  );
};

export const MediaCardSkeleton = () => (
  <div className="flex w-56 shrink-0 flex-col gap-4 rounded-lg p-3">
    <Skeleton className="aspect-[2/3] w-full rounded" />
    <div className="py-0.5">
      <Skeleton className="h-5 w-2/3 rounded" />
    </div>
    <div className="flex items-center justify-between py-0.5">
      <Skeleton className="h-5 w-10 rounded" />
      <Skeleton className="h-4 w-10 rounded" />
      <Skeleton className="h-4 w-20 rounded" />
    </div>
  </div>
);
