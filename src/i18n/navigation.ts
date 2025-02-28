// import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

// import { localePrefix, locales, pathnames } from './config';

// export const { Link, getPathname, redirect, usePathname, useRouter } =
//   createLocalizedPathnamesNavigation({
//     locales,
//     pathnames,
//     localePrefix,
//   });
  import {createNavigation} from 'next-intl/navigation';
  import {routing} from './routing';
   
  export const {Link, redirect, usePathname, useRouter, getPathname} = createNavigation(routing);