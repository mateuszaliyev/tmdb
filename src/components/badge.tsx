import type { ComponentPropsWithRef } from "react";

import { cx } from "@/utilities/classname";

export type BadgeProps = ComponentPropsWithRef<"span">;

export const Badge = ({ className, ...props }: BadgeProps) => (
  <span
    className={cx(
      "inline-flex items-center rounded bg-brand-400 bg-opacity-10 px-2 py-1 text-xs font-medium text-brand-400 ring-1 ring-inset ring-brand-400 ring-opacity-30",
      className,
    )}
    {...props}
  />
);
