import { ThemeProvider } from '@/context/ThemeProvider';
import './globals.css';

import Script from 'next/script';
import { ReactNode } from 'react';
import App from './App';
type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return <>
    <html>
      <head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider>
          <App>
            {children}
          </App>
        </ThemeProvider>
        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" strategy="afterInteractive" />
      </body>
    </html>
  </>;
}
