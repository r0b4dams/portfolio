import Nav from './Nav';

const Header: React.FC = (): JSX.Element => {
  return (
    <>
      <header>
        <Nav />
        <div className='space-y-1'>
          <div className='h-1 bg-blue-500 w-full relative z-10'></div>
          <div className='h-1 bg-red-500 w-2/3 relative z-10'></div>
          <div className='h-1 bg-yellow-200 w-1/3 relative z-10'></div>
        </div>
      </header>
    </>
  );
};

export default Header;
