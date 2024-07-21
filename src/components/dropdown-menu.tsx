"use client";

import type { ComponentPropsWithRef } from "react";

import {
  Content,
  Group,
  Item,
  Label,
  Portal,
  Root,
  SubContent,
  SubTrigger,
} from "@radix-ui/react-dropdown-menu";

import { ChevronIcon } from "@/icons/chevron";

import { cva, cx } from "@/utilities/classname";

export {
  Portal as DropdownMenuPortal,
  Sub as DropdownMenuSub,
  Trigger as DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

const dropdownMenuContent = cva({
  base: "z-popover flex min-w-32 flex-col gap-5 overflow-hidden rounded-lg bg-black px-9 py-4 shadow-inner shadow-gray-900 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
});

const dropdownMenuItem = cva({
  base: "flex cursor-pointer select-none items-center text-gray-300 outline-none transition hover:text-white focus-visible:text-white data-[disabled]:pointer-events-none data-[disabled]:cursor-default data-[disabled]:opacity-50",
  defaultVariants: {
    stretch: false,
  },
  variants: {
    stretch: {
      false: "self-start",
    },
  },
});

export const DropdownMenu = ({
  modal = false,
  ...props
}: ComponentPropsWithRef<typeof Root>) => <Root modal={modal} {...props} />;

export const DropdownMenuContent = ({
  className,
  sideOffset = 8,
  ...props
}: ComponentPropsWithRef<typeof Content>) => (
  <Portal>
    <Content
      className={dropdownMenuContent({ className })}
      sideOffset={sideOffset}
      {...props}
    />
  </Portal>
);

export const DropdownMenuGroup = ({
  className,
  ...props
}: ComponentPropsWithRef<typeof Group>) => (
  <Group className={cx("contents", className)} {...props} />
);

export const DropdownMenuItem = ({
  className,
  ...props
}: ComponentPropsWithRef<typeof Item>) => (
  <Item className={dropdownMenuItem({ className })} {...props} />
);

export const DropdownMenuLabel = ({
  className,
  ...props
}: ComponentPropsWithRef<typeof Label>) => (
  <Label className={cx("font-semibold", className)} {...props} />
);

export const DropdownMenuSubContent = ({
  className,
  sideOffset = 8,
  ...props
}: ComponentPropsWithRef<typeof SubContent>) => (
  <SubContent
    className={dropdownMenuContent({ className })}
    sideOffset={sideOffset}
    {...props}
  />
);

export const DropdownMenuSubTrigger = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<typeof SubTrigger>) => (
  <SubTrigger
    className={dropdownMenuItem({ className, stretch: true })}
    {...props}
  >
    {children}
    <ChevronIcon className="ml-auto h-4 w-4 rotate-90" />
  </SubTrigger>
);
