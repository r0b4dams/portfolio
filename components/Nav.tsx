import { useState } from 'react';
import Logo from './Logo';
import NavBurger from './NavBurger';
import NavList from './NavList';
import NavOverlay from './NavOverlay';

const Nav: React.FC = (): JSX.Element => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    const body = document.querySelector('body');
    body?.classList.toggle('noscroll', !active);
    setActive(() => !active);
  };

  return (
    <>
      <div
        id='nav-bar'
        className='container flex items-center justify-between py-2 px-2'
      >
        <Logo />
        <NavList />
        <NavBurger active={active} handleToggle={handleToggle} />
        <NavOverlay active={active} handleToggle={handleToggle} />
      </div>
    </>
  );
};

export default Nav;
