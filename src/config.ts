import { Pathnames } from 'next-intl/navigation';
import { UrlObject } from 'url';

export const locales = ['vi', 'en'];
export const defaultLocale = 'vi';

export const pathnames = {
  '/': '/',
  '/about': {
    en: '/about',
    vi: '/gioi-thieu',
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
type ExcludeType<T, Exclude> = T extends Exclude ? never : T;
type AppPathnamesWithSlug = AppPathnames & `${string}[${string}`;
type AppPathnamesWithoutSlug = ExcludeType<AppPathnames, AppPathnamesWithSlug>;

export type Href =
  | AppPathnamesWithoutSlug
  | ({
      pathname: AppPathnames;
      params?: unknown;
    } & Omit<UrlObject, 'pathname'>);
