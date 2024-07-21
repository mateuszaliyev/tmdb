import type { ComponentPropsWithRef } from "react";

import { cva, type VariantProps } from "@/utilities/classname";

export type InputProps = ComponentPropsWithRef<"input"> &
  VariantProps<typeof input>;

const input = cva({
  base: "bg-black bg-opacity-80 font-light outline-none backdrop-blur-sm backdrop-saturate-150 transition placeholder:text-gray-400 focus-visible:ring focus-visible:ring-brand-400",
  defaultVariants: {
    variant: "base",
  },
  variants: {
    variant: {
      base: "rounded-md px-3 py-1.5",
      lg: "rounded-lg px-4 py-2 text-lg",
      xl: "rounded-xl px-6 py-3 text-xl",
    },
  },
});

export const Input = ({ className, variant, ...props }: InputProps) => (
  <input className={input({ className, variant })} {...props} />
);
