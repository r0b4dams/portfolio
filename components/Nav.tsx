import { useState } from 'react';
import Logo from './Logo';
import NavBurger from './NavBurger';
import NavList from './NavList';
import NavOverlay from './NavOverlay';

const Nav: React.FC = (): JSX.Element => {
  const [show, set] = useState(false);

  const handleToggle = () => {
    document.querySelector('body')!.classList.toggle('noscroll', !show);
    set(() => !show);
  };

  return (
    <>
      <div
        id='nav-bar'
        className='container flex items-center justify-between py-2 px-2'
      >
        <Logo />
        <NavList />
        <NavBurger active={show} handleToggle={handleToggle} />
        <NavOverlay active={show} handleToggle={handleToggle} />
      </div>
    </>
  );
};

export default Nav;
