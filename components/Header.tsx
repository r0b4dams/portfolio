import React from 'react';
import Navbar from './Navbar';

const styles = {
  height: 'h-[10vh]',
  flex: 'flex items-center',
  color: 'bg-slate-900',
};

const Header: React.FC = (): JSX.Element => {
  return (
    <header className={`${styles.height} ${styles.flex} ${styles.color}`}>
      <Navbar />
    </header>
  );
};

export default Header;
