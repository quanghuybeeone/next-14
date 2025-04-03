// import { redirect } from "@/i18n/routing";

import { redirect } from "next/navigation";

// This page only renders when the app is built statically (output: 'export')
export default function NotFound() {
  // redirect({locale: 'vi',href: '/not-found'});
  redirect('/not-found')
}
