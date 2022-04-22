import { useState } from 'react';
import Logo from './Logo';
import NavBurger from './NavBurger';
import NavOverlay from './NavOverlay';

const Nav: React.FC = (): JSX.Element => {
  const [active, setActive] = useState(false);
  const toggleActive = () => setActive(() => !active);
  return (
    <div
      id='nav-bar'
      className='flex items-center justify-between h-full w-full'
    >
      <Logo />
      <NavBurger active={active} toggleActive={toggleActive} />
      <NavOverlay active={active} toggleActive={toggleActive} />
    </div>
  );
};

export default Nav;
