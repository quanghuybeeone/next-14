import { NextIntlClientProvider, useMessages } from 'next-intl';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Nav />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
