const year = new Date().getFullYear();

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className='bg-white h-[5vh] border-t-4 border-blue-500 flex flex-col items-center justify-center'>
      <div>Robert Adams ©{year}</div>
    </footer>
  );
};

export default Footer;
