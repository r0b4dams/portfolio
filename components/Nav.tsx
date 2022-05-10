import { useState } from 'react';
import Logo from './Logo';
import NavList from './NavList';

const Nav: React.FC = (): JSX.Element => {
  const [active, setActive] = useState(false);
  const toggleActive = () => setActive(() => !active);

  return (
    <div
      id='nav-bar'
      className='container flex items-center justify-between h-full'
    >
      <Logo />
      <NavList />
    </div>
  );
};

export default Nav;
