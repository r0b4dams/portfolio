'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';

import { AnimatedPage, Footer, Header } from '@/components';
import { open_sans } from '@/theme/font';
import '@/theme/style.css';

interface Props {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<Props> = ({ children: page }) => {
  return (
    <>
      <Header />
      {page}
      <Footer />
    </>
  );
};

const RootLayout: React.FC<Props> = ({ children: page }) => {
  const pathname = usePathname();

  return (
    <html lang='en'>
      <body className={open_sans.className}>
        {(() => {
          switch (pathname) {
            case '/': // intro page
              return <AnimatedPage>{page}</AnimatedPage>;
            default:
              return (
                <DefaultLayout>
                  <AnimatedPage>{page}</AnimatedPage>
                </DefaultLayout>
              );
          }
        })()}
        {/* Next has added functionality with app router but ESLint hasn't been updated */}
        <Script id='dark-mode' src='/scripts/dark-mode.js' strategy='beforeInteractive' />
      </body>
    </html>
  );
};

export default RootLayout;
