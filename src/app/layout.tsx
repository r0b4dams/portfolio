'use client';

import { usePathname } from 'next/navigation';
import { Footer, Header } from '@/components';
import { theme, fontClass } from '@/theme';
import '@/theme/globals.css';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div id='app' className='flex flex-col min-h-screen'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default function RootLayout({ children }: LayoutProps) {
  const pathname = usePathname();
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <script id='theme' dangerouslySetInnerHTML={theme()} />
      </head>
      <body className={fontClass}>{pathname === '/' ? children : <Layout>{children}</Layout>}</body>
    </html>
  );
}
