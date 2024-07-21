import { NextRequest, NextResponse } from "next/server";

import { LOCALES } from "@/locales";
import { matchLocale } from "@/locales/match";

export const middleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  const locale = matchLocale(Object.fromEntries(request.headers));
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
};

export const config = {
  matcher: ["/((?!_next/image|_next/static|favicon.ico).*)"],
};
