import { useState } from 'react';
import NavBurger from '../NavBurger';
import NavOverlay from '../NavOverlay';

const Navbar: React.FC = (): JSX.Element => {
  const [active, setActive] = useState(false);

  const toggleActive = () => setActive(() => !active);

  return (
    <div id='nav-bar' className='flex items-center h-full w-full'>
      <NavBurger active={active} toggleActive={toggleActive} />
      <NavOverlay active={active} toggleActive={toggleActive} />
    </div>
  );
};

export default Navbar;
