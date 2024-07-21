import type { ComponentPropsWithRef } from "react";

import { Slot } from "@radix-ui/react-slot";

import { cva, type VariantProps } from "@/utilities/classname";

export type DeckProps = ComponentPropsWithRef<"p"> & {
  asChild?: true;
};

export type HeadingProps = ComponentPropsWithRef<"h2"> &
  VariantProps<typeof heading> & {
    asChild?: true;
  };

export const deck = cva({
  base: "mt-1 text-balance text-gray-400",
});

export const heading = cva({
  base: "text-balance",
  defaultVariants: {
    level: 2,
  },
  variants: {
    level: {
      2: "mr-4 inline-flex items-center gap-2 text-3xl text-gray-300",
    },
  },
});

export const Deck = ({ asChild, className, ...props }: DeckProps) => {
  const Component = asChild ? Slot : "p";
  return <Component className={deck({ className })} {...props} />;
};

export const Heading = ({
  asChild,
  className,
  level,
  ...props
}: HeadingProps) => {
  const Component = asChild ? Slot : "h2";
  return <Component className={heading({ className, level })} {...props} />;
};
