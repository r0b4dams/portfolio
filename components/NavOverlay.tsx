import NavList from './NavList';

type MenuProps = {
  active: boolean;
  toggleActive: () => void;
};

const NavOverlay: React.FC<MenuProps> = ({ active, toggleActive }) => (
  <div className='hidden'>
    <NavList />
  </div>
);

export default NavOverlay;
