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
  '/sign-in': {
    en: '/sign-in',
    vi: '/dang-nhap',
  },
  '/not-found': {
    en: '/not-found',
    vi: '/khong-tim-thay',
  },
  '/admin': {
    en: '/admin',
    vi: '/quan-ly',
  },
  '/admin/products': {
    en: '/admin/products',
    vi: '/quan-ly/san-pham',
  },
  '/admin/products/[slug]': {
    en: '/admin/products/[slug]',
    vi: '/quan-ly/san-pham/[slug]',
  },
  '/test': {
    en: '/test',
    vi: '/test',
  },
} satisfies Pathnames<typeof locales>;

const publicPathname: string[] = ["/", "/sign-in", "/contact", "/about", "/test"]

export const rolePermissions = {
  guest: [...publicPathname],
  user: [...publicPathname, "/profile"],
  manager: [...publicPathname, "/admin"],
  admin: ["*"],
};

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
