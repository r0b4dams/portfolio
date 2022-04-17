import React from 'react';
import Nav from '../Nav';

const styles = {
  height: 'h-[10vh]',
  flex: 'flex items-center',
  color: 'bg-slate-900',
};

const Header: React.FC = (): JSX.Element => {
  return (
    <header className={`${styles.height} ${styles.flex} ${styles.color}`}>
      <Nav />
    </header>
  );
};

export default Header;
