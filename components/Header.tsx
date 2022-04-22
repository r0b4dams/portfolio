import React from 'react';
import Nav from './Nav';

const Header: React.FC = (): JSX.Element => {
  return (
    <header className='portfolio-header'>
      <Nav />
    </header>
  );
};

export default Header;
