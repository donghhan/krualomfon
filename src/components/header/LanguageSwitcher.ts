import {
  Pathnames,
  createLocalizedPathnamesNavigation,
} from "next-intl/navigation";

const locales = ["en", "th"] as const;
const pathnames = {
  "/": "/",
} satisfies Pathnames<typeof locales>;
const localePrefix = undefined;

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({ locales, pathnames, localePrefix });
