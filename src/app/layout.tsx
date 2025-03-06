'use client';
import './globals.css';

import Script from 'next/script';
import { ReactNode } from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import ReduxProvider from '@/providers/ReduxProvider';
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
        <ReduxProvider>
          <App>
            {children}
          </App>
        </ReduxProvider>
        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" strategy="afterInteractive" />
      </body>
    </html>
  </>;
}
