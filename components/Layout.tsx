import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<{
  page: JSX.Element | JSX.Element[];
}> = ({ page }) => {
  return (
    <>
      <div className='flex flex-col min-h-screen w-[95%] m-auto lg:w-full'>
        <Header />
        <main className='grow hide-scrollbar'>{page}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
