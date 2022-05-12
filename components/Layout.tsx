import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<{
  page: JSX.Element | JSX.Element[];
}> = ({ page }) => {
  return (
    <>
      <div className='flex flex-col min-h-screen justify-between'>
        <div>
          <Header />
          <main className='hide-scrollbar'>{page}</main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
