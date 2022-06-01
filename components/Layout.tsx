import React from 'react';
import Header from './Header';
import Footer from './Footer';

import { useTransition, animated } from 'react-spring';

const Layout: React.FC<{
  page: JSX.Element | JSX.Element[];
}> = ({ page }) => {
  const transition = useTransition(page, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    exitBeforeEnter: true,
  });

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      {transition((styles, item) => (
        <animated.main
          style={styles}
          className='flex grow hide-scrollbar w-[95%] m-auto lg:w-full'
        >
          {item}
        </animated.main>
      ))}
      <Footer />
    </div>
  );
};

export default Layout;
