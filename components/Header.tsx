import Nav from './Nav';
import { getStyles } from '../utils';

const headerStyles = getStyles({
  height: 'h-[10vh]',
  background: 'bg-white',
  border: 'border-b-4 border-blue-500',
});

const Header: React.FC = (): JSX.Element => {
  return (
    <header className={headerStyles}>
      <Nav />
    </header>
  );
};

export default Header;
