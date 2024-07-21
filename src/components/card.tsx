import type { ComponentPropsWithRef } from "react";

import Image from "next/image";

import { Slot } from "@radix-ui/react-slot";

import { cx } from "@/utilities/classname";

export type CardProps = ComponentPropsWithRef<"div"> & {
  asChild?: boolean;
};

export type CardImageProps = ComponentPropsWithRef<typeof Image>;

export type CardImageContainerProps = ComponentPropsWithRef<"div">;

export type CardTitleProps = ComponentPropsWithRef<"h3"> & {
  asChild?: boolean;
};

export const Card = ({
  asChild,
  children,
  className,
  title,
  ...props
}: CardProps) => {
  const Component = asChild ? Slot : "div";

  return (
    <Component
      className={cx(
        "flex flex-col gap-4 rounded-lg bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 bg-top p-3 text-gray-300 outline-none transition-all [background-size:100%_200%] hover:bg-bottom focus-visible:bg-bottom",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export const CardImage = ({
  alt,
  className,
  fill = true,
  ...props
}: CardImageProps) => (
  <Image
    alt={alt}
    className={cx("object-cover", className)}
    fill={fill}
    {...props}
  />
);

export const CardImageContainer = (props: CardImageContainerProps) => (
  <div
    className="relative aspect-[2/3] w-full overflow-clip rounded bg-gradient-to-b from-gray-900 to-gray-800"
    {...props}
  />
);

export const CardTitle = ({ asChild, className, ...props }: CardTitleProps) => {
  const Component = asChild ? Slot : "h3";
  return <Component className={cx("truncate", className)} {...props} />;
};
