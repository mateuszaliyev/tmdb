import type { ComponentPropsWithRef } from "react";

import { cx } from "@/utilities/classname";

export const Skeleton = ({
  className,
  ...props
}: ComponentPropsWithRef<"div">) => (
  <div className={cx("animate-pulse bg-gray-500", className)} {...props} />
);
