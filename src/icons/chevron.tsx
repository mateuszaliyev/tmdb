import type { IconProps } from "@/types";

export const ChevronIcon = ({
  "aria-hidden": ariaHidden = true,
  fill = "currentColor",
  ...props
}: IconProps) => (
  <svg
    aria-hidden={ariaHidden}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11.29 8.71 6.7 13.3a.996.996 0 1 0 1.41 1.41L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0" />
  </svg>
);
