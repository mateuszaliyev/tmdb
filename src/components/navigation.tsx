import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu";
import { Link } from "@/components/link";
import { SwitchLocaleLink } from "@/components/link/locale";
import { Logo } from "@/components/logo";

import { ChevronIcon } from "@/icons/chevron";
import { MenuIcon } from "@/icons/menu";
import { XIcon } from "@/icons/x";

import { Locale, LOCALE_NAMES, LOCALES } from "@/locales";
import { getDictionary } from "@/locales/dictionary";

import { container, cva } from "@/utilities/classname";

export type NavigationProps = {
  locale: Locale;
};

const navigationLink = cva({
  base: "flex items-center text-neutral-400 outline-none transition hover:text-white focus-visible:text-white",
});

export const Navigation = async ({ locale }: NavigationProps) => {
  const dictionary = await getDictionary(locale);

  const links = Object.values(dictionary.sections);

  return (
    <nav className="bg-black">
      <div
        className={container({
          className: "flex items-center gap-10 py-5",
        })}
      >
        <Logo className="h-8 shrink-0" />
        <ul className="hidden gap-5 sm:flex">
          {links.map(({ slug, title }) => (
            <li key={slug}>
              <Link className={navigationLink()} href={`#${slug}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <DropdownMenu>
          <DropdownMenuTrigger
            className={navigationLink({
              className: "group ml-auto flex items-center gap-1 uppercase",
            })}
          >
            {locale}
            <ChevronIcon className="h-4 w-4 transition-transform group-data-[state=closed]:-rotate-180" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {LOCALES.map((locale) => (
              <DropdownMenuItem asChild key={locale}>
                <SwitchLocaleLink locale={locale}>
                  {LOCALE_NAMES[locale]}
                </SwitchLocaleLink>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger
            className={navigationLink({ className: "group sm:hidden" })}
          >
            <div className="relative h-6 w-6">
              <MenuIcon className="absolute inset-0 transition-opacity group-data-[state=open]:opacity-0" />
              <XIcon className="absolute inset-0 opacity-0 transition-opacity group-data-[state=open]:opacity-100" />
            </div>
            <span className="sr-only">{dictionary.menu}</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuGroup>
              {links.map(({ slug, title }) => (
                <DropdownMenuItem asChild key={slug}>
                  <Link className={navigationLink()} href={`#${slug}`}>
                    {title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};
