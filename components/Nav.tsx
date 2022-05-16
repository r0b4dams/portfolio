import { useState } from 'react';
import Logo from './Logo';
import NavBurger from './NavBurger';
import NavList from './NavList';
import NavOverlay from './NavOverlay';

const Nav: React.FC = (): JSX.Element => {
  const [active, setActive] = useState(false);
  const toggleActive = () => setActive(() => !active);

  return (
    <div
      id='nav-bar'
      className='container flex items-center justify-between py-2'
    >
      <Logo />
      <NavList />
      <NavBurger active={active} toggleActive={toggleActive} />
      <NavOverlay active={active} toggleActive={toggleActive} />
    </div>
  );
};

export default Nav;
