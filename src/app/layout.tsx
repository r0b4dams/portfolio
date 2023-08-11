'use client';

import { usePathname } from 'next/navigation';
import { Footer, Header } from '@/components';
import { theme, fontClass } from '@/theme';
import '@/theme/globals.css';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children: page }: LayoutProps) {
  return (
    <div id='app' className='flex flex-col min-h-screen'>
      <Header />
      <main className='container grow px-3 md:px-0'>{page}</main>
      <Footer />
    </div>
  );
}

export default function RootLayout({ children: page }: LayoutProps) {
  const pathname = usePathname();
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <script id='theme' dangerouslySetInnerHTML={theme()} />
      </head>
      <body className={fontClass}>{pathname === '/' ? page : <Layout>{page}</Layout>}</body>
    </html>
  );
}
