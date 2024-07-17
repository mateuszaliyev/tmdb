import type { ComponentPropsWithRef } from "react";

export type IconProps = Omit<ComponentPropsWithRef<"svg">, "viewBox" | "xmlns">;
