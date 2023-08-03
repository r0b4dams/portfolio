'use client';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { AnimatedPage, Footer, Header } from '@/components';
import { open_sans } from '@/theme/font';
import '@/theme/globals.css';

interface LayoutProps {
  children: React.ReactNode;
}

function DefaultLayout({ children: main }: LayoutProps) {
  return (
    <>
      <Header />
      {main}
      <Footer />
    </>
  );
}

export default function RootLayout({ children: main }: LayoutProps) {
  const pathname = usePathname();

  return (
    <html lang='en'>
      <body className={open_sans.className}>
        {(() => {
          switch (pathname) {
            case '/': // intro page
              return main;
            default:
              return (
                <DefaultLayout>
                  <AnimatedPage>{main}</AnimatedPage>
                </DefaultLayout>
              );
          }
        })()}
        {/* Next has added functionality with app router but ESLint hasn't been updated */}
        <Script id='dark-mode' src='/scripts/dark-mode.js' strategy='beforeInteractive' />
      </body>
    </html>
  );
}
