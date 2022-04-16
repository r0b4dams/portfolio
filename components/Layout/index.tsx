import React, { ReactElement } from 'react';
import Header from '../Header';
import Footer from '../Footer';

type LayoutProps = {
  page?: JSX.Element | JSX.Element[];
};

const Layout: React.FC<LayoutProps> = ({ page }) => {
  return (
    <>
      <Header />
      <main>{page}</main>
      <Footer />
    </>
  );
};

export default Layout;
