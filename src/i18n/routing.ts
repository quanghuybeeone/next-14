import {defineRouting} from 'next-intl/routing';
import { defaultLocale, localePrefix, locales, pathnames } from '@/config';
import { createNavigation } from "next-intl/navigation";
export const routing = defineRouting({
  locales,
  pathnames,
  defaultLocale,
  localePrefix
});

// export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);