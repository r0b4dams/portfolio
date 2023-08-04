'use client';

import { usePathname } from 'next/navigation';
import { Footer, Header } from '@/components';
import { open_sans } from '@/theme/font';
import '@/theme/globals.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  const pathname = usePathname();

  return (
    <html lang='en'>
      <body className={open_sans.className}>
        {(() => {
          switch (pathname) {
            case '/': // landing page
              return children;

            default:
              return (
                <>
                  <Header />
                  <main className='h-screen flex flex-col'>
                    <div className='flex flex-col container grow px-5'>{children}</div>
                  </main>
                  <Footer />
                </>
              );
          }
        })()}
      </body>
    </html>
  );
}
