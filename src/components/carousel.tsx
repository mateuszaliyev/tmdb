"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ComponentPropsWithRef,
  type KeyboardEvent,
  type ReactNode,
} from "react";

import {
  default as useEmblaCarousel,
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

import { Button } from "@/components/button";

import { ChevronIcon } from "@/icons/chevron";

import { cva, cx } from "@/utilities/classname";

type CarouselApi = UseEmblaCarouselType[1];

type CarouselContextProps = CarouselProviderProps & {
  api: ReturnType<typeof useEmblaCarousel>[1];
  canScrollToNext: boolean;
  canScrollToPrevious: boolean;
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  scrollToNext: () => void;
  scrollToPrevious: () => void;
};

type CarouselOptions = UseCarouselParameters[0];

type CarouselPlugin = UseCarouselParameters[1];

export type CarouselProps = ComponentPropsWithRef<"div">;

export type CarouselProviderProps = {
  children?: ReactNode;
  options?: CarouselOptions;
  orientation?: "horizontal" | "vertical";
  plugins?: CarouselPlugin;
  setApi?: (api: CarouselApi) => void;
};

type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;

const carouselButton = cva({
  base: "flex h-8 w-8 items-center justify-center rounded-full transition sm:h-10 sm:w-10",
  defaultVariants: { disabled: false },
  variants: { disabled: { true: "opacity-0" } },
});

const carouselButtonIcon = cva({
  base: "h-4 w-4 sm:h-5 sm:w-5",
  compoundVariants: [
    { className: "rotate-90", orientation: "horizontal", variant: "next" },
    { className: "-rotate-90", orientation: "horizontal", variant: "previous" },
    { className: "rotate-180", orientation: "vertical", variant: "next" },
  ],
  defaultVariants: { orientation: "horizontal" },
  variants: {
    orientation: { horizontal: "", vertical: "" },
    variant: { next: "", previous: "" },
  },
});

const CarouselContext = createContext<CarouselContextProps | null>(null);

const useCarousel = () => {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error("`useCarousel` must be used within a `<Carousel />`");
  }

  return context;
};

export const Carousel = ({
  className,
  onKeyDownCapture,
  ...props
}: CarouselProps) => {
  const { scrollToNext, scrollToPrevious } = useCarousel();

  const handleKeyDownCapture = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollToPrevious();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollToNext();
      }

      onKeyDownCapture?.(event);
    },
    [scrollToNext, scrollToPrevious],
  );

  return (
    <div
      aria-roledescription="carousel"
      className={cx("relative", className)}
      onKeyDownCapture={handleKeyDownCapture}
      role="region"
      {...props}
    />
  );
};

export const CarouselProvider = ({
  children,
  options,
  orientation = "horizontal",
  plugins = [],
  setApi,
}: CarouselProviderProps) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...options,
      axis: orientation === "horizontal" ? "x" : "y",
      dragFree: options?.dragFree ?? true,
      skipSnaps: options?.skipSnaps ?? false,
    },
    [WheelGesturesPlugin({ forceWheelAxis: true }), ...plugins],
  );

  const [canScrollToNext, setCanScrollToNext] = useState(false);
  const [canScrollToPrevious, setCanScrollToPrevious] = useState(false);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;

    setCanScrollToPrevious(api.canScrollPrev());
    setCanScrollToNext(api.canScrollNext());
  }, []);

  const scrollToPrevious = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollToNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  useEffect(() => {
    if (!api || !setApi) return;

    setApi(api);
  }, [api, setApi]);

  useEffect(() => {
    if (!api) return;

    onSelect(api);

    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        api,
        canScrollToNext,
        canScrollToPrevious,
        carouselRef,
        orientation:
          orientation || (options?.axis === "y" ? "vertical" : "horizontal"),
        options,
        scrollToNext,
        scrollToPrevious,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
};

export const CarouselContent = ({
  className,
  ...props
}: ComponentPropsWithRef<"div">) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div className="overflow-hidden" ref={carouselRef}>
      <div
        className={cx(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className,
        )}
        {...props}
      />
    </div>
  );
};

export const CarouselItem = ({
  className,
  ...props
}: ComponentPropsWithRef<"div">) => {
  const { orientation } = useCarousel();

  return (
    <div
      aria-roledescription="slide"
      className={cx(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className,
      )}
      role="group"
      {...props}
    />
  );
};

export const CarouselNext = ({
  children,
  className,
  icon = true,
  variant = "secondary",
  ...props
}: ComponentPropsWithRef<typeof Button>) => {
  const { canScrollToNext, orientation, scrollToNext } = useCarousel();
  const disabled = !canScrollToNext;

  return (
    <Button
      className={carouselButton({ className, disabled })}
      disabled={disabled}
      icon={icon}
      onClick={scrollToNext}
      variant={variant}
      {...props}
    >
      <ChevronIcon
        className={carouselButtonIcon({
          className,
          orientation,
          variant: "next",
        })}
      />
      <span className="sr-only">{children}</span>
    </Button>
  );
};

export const CarouselPrevious = ({
  children,
  className,
  icon = true,
  variant = "secondary",
  ...props
}: ComponentPropsWithRef<typeof Button>) => {
  const { canScrollToPrevious, orientation, scrollToPrevious } = useCarousel();
  const disabled = !canScrollToPrevious;

  return (
    <Button
      className={carouselButton({ className, disabled })}
      disabled={disabled}
      icon={icon}
      onClick={scrollToPrevious}
      variant={variant}
      {...props}
    >
      <ChevronIcon
        className={carouselButtonIcon({
          className,
          orientation,
          variant: "previous",
        })}
      />
      <span className="sr-only">{children}</span>
    </Button>
  );
};
