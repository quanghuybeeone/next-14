import {defineRouting} from 'next-intl/routing';
import { defaultLocale, localePrefix, locales, pathnames } from '@/config';
export const routing = defineRouting({
  locales,
  pathnames,
  defaultLocale,
  localePrefix
});