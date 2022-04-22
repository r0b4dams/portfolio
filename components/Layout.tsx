import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<{
  page: JSX.Element | JSX.Element[];
}> = ({ page }) => {
  return (
    <>
      <Header />
      <main className='m-auto pt-[10vh] pb-[5vh]'>{page}</main>
      <Footer />
    </>
  );
};

export default Layout;
