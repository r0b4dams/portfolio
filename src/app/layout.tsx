'use client';

import { usePathname } from 'next/navigation';
import { Footer, Header } from '@/components';
import { theme, font } from '@/theme';
import '@/theme/globals.css';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children: page }: LayoutProps) {
  return (
    <div id='app' className='flex flex-col min-h-screen'>
      <Header />
      <main className='container grow'>{page}</main>
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
      <body className={font}>{pathname === '/' ? page : <Layout>{page}</Layout>}</body>
    </html>
  );
}
