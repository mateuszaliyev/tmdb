import { IconProps } from "@/types";

export const MenuIcon = ({
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
    <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1" />
  </svg>
);
