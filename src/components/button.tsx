import { ComponentPropsWithRef } from "react";

import { cva, VariantProps } from "@/utilities/classname";

export type ButtonProps = ComponentPropsWithRef<"button"> &
  VariantProps<typeof button>;

export const button = cva({
  base: "rounded-lg outline-none transition",
  defaultVariants: {
    icon: false,
    variant: "primary",
  },
  variants: {
    icon: {
      false: "px-4 py-2",
      true: "p-2",
    },
    variant: {
      ghost: "text-gray-300 hover:bg-gray-900 focus-visible:bg-gray-900",
      primary:
        "bg-brand-400 text-brand-950 hover:bg-brand-300 focus-visible:bg-brand-300",
      secondary:
        "bg-gray-800 text-gray-300 shadow-inner shadow-gray-700 hover:bg-gray-700 hover:shadow-gray-600 focus-visible:bg-gray-700 focus-visible:shadow-gray-600",
      tertiary:
        "bg-gray-900 text-gray-300 shadow-inner shadow-gray-800 hover:bg-gray-800 hover:shadow-gray-700 focus-visible:bg-gray-800 focus-visible:shadow-gray-700",
    },
  },
});

export const Button = ({ className, icon, variant, ...props }: ButtonProps) => (
  <button className={button({ className, icon, variant })} {...props} />
);
