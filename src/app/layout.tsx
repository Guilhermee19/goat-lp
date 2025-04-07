import localFont from 'next/font/local';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import { ReactNode } from 'react';
import './styles/globals.scss';
import QueryProvider from './query-provider';
import { Navbar } from '@/components/ui/navbar';
import { Source_Sans_3 } from 'next/font/google';
import { Hanken_Grotesk } from 'next/font/google';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sourceSans3',
  weight: ['200', '300', '400', '500', '600', '700'],
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hankenGrotesk',
  weight: ['300', '400', '500', '600', '700'],
});

type Props = {
  children: ReactNode;
};

export default async function LocaleLayout({ children }: Props) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <head>
        <title>Goatcom</title>
      </head>
      <body
        className={`${geistSans.className} ${geistMono.className} ${sourceSans3.className} ${hankenGrotesk.className} antialiased transform-gpu`}
      >
        <QueryProvider>
          <NextIntlClientProvider>
            <Navbar />
            {children}
          </NextIntlClientProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
