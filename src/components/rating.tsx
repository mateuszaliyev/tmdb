import type { ComponentPropsWithRef } from "react";

import { StarIcon } from "@/icons/star";

import { DEFAULT_LOCALE, getNumberFormat, type Locale } from "@/locales";

import { cx } from "@/utilities/classname";

export type RatingProps = Omit<
  ComponentPropsWithRef<"div"> & {
    locale?: Locale;
    rating: number;
  },
  "children"
>;

export const Rating = ({
  className,
  locale = DEFAULT_LOCALE,
  rating,
  ...props
}: RatingProps) => {
  const numberFormat = getNumberFormat(locale, {
    maximumFractionDigits: 1,
    minimumFractionDigits: 1,
  });

  return (
    <div
      className={cx("flex items-center gap-1 text-sm", className)}
      {...props}
    >
      <StarIcon className="h-4 w-4 -translate-y-px text-brand-400" />
      <span>{numberFormat.format(rating)}</span>
    </div>
  );
};
