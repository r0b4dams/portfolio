'use client';

import { usePathname } from 'next/navigation';
import { Footer, Header } from '@/components';
import { open_sans } from '@/theme/font';
import '@/theme/globals.css';

interface LayoutProps {
  children: React.ReactNode;
}

function DefaultLayout({ children: page }: LayoutProps) {
  return (
    <div id='app' className='flex flex-col min-h-screen'>
      <Header />
      <main className='container grow'>{page}</main>
      <Footer />
    </div>
  );
}

function getLayout(pathname: string, page: React.ReactNode) {
  switch (pathname) {
    case '/': // standalone landing page
      return page;

    default:
      return <DefaultLayout>{page}</DefaultLayout>;
  }
}

// the children react node(s) here represent a page
export default function RootLayout({ children: page }: LayoutProps) {
  return (
    <html lang='en'>
      <body className={open_sans.className}>{getLayout(usePathname(), page)}</body>
    </html>
  );
}
