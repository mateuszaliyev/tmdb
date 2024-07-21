import type { ComponentPropsWithRef } from "react";

import { Slot } from "@radix-ui/react-slot";

import { cx } from "@/utilities/classname";

export type ContainerProps = ComponentPropsWithRef<"div"> & {
  asChild?: boolean;
};

export const Container = ({ asChild, className, ...props }: ContainerProps) => {
  const Component = asChild ? Slot : "div";

  return (
    <Component
      className={cx("mx-auto w-full max-w-screen-xl px-4", className)}
      {...props}
    />
  );
};
