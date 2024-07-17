"use client";

import { useMemo, type ComponentPropsWithRef } from "react";

import { usePathname, useSearchParams } from "next/navigation";

import { Link } from "@/components/link";

import { Locale } from "@/locales";

export type SwitchLocaleLinkProps = Omit<
  ComponentPropsWithRef<typeof Link>,
  "href" | "locale"
> & { locale: Locale };

export const SwitchLocaleLink = ({
  locale,
  ...props
}: SwitchLocaleLinkProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const segments = useMemo(
    () => pathname.split("/").filter(Boolean),
    [pathname],
  );

  const href = useMemo(() => {
    let searchParamsString = searchParams.toString();

    if (searchParamsString.length > 0) {
      searchParamsString = `?${searchParamsString}`;
    }

    return `/${locale}${segments.slice(1)}${searchParamsString}`;
  }, [locale, searchParams, segments]);

  return <Link href={href} {...props} />;
};
