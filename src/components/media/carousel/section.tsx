import type { ComponentPropsWithRef, ReactNode } from "react";

import {
  CarouselNext,
  CarouselPrevious,
  CarouselProvider,
} from "@/components/carousel";
import { Container } from "@/components/container";
import { Deck, Heading } from "@/components/typography";

import type { Locale } from "@/locales";
import { getDictionary } from "@/locales/dictionary";

import { cx } from "@/utilities/classname";

export type MediaCarouselSectionProps = ComponentPropsWithRef<"section"> & {
  deck?: ReactNode;
  heading: ReactNode;
  locale: Locale;
};

export const MediaCarouselSection = async ({
  children,
  className,
  deck,
  heading,
  locale,
  ...props
}: MediaCarouselSectionProps) => {
  const dictionary = await getDictionary(locale);

  return (
    <section className={cx("my-32", className)} {...props}>
      <Container>
        <CarouselProvider>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <Heading>{heading}</Heading>
              {deck && <Deck>{deck}</Deck>}
            </div>
            <div className="flex items-center gap-1">
              <CarouselPrevious>{dictionary.slide.previous}</CarouselPrevious>
              <CarouselNext>{dictionary.slide.next}</CarouselNext>
            </div>
          </div>
          {children}
        </CarouselProvider>
      </Container>
    </section>
  );
};
