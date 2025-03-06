import { NextIntlClientProvider, useMessages } from 'next-intl';

import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import AuthProvider from '@/providers/authProvider';

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
      <div className="min-h-screen bg-background text-foreground">
        <AuthProvider>
          {children}
        </AuthProvider>
      </div>
      <Footer />
    </NextIntlClientProvider>
  );
}
