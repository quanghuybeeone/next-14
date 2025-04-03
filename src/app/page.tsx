// import { redirect } from "@/i18n/routing";

import { redirect } from "next/navigation";

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  // redirect({locale: 'vi',href: '/'});
  redirect('/vi')
}
