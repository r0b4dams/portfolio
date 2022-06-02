import Nav from './Nav';
import HeaderBorder from './HeaderBorder';

const Header: React.FC = (): JSX.Element => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <HeaderBorder />
    </>
  );
};

export default Header;
