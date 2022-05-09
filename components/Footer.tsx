import React from 'react';
// import Icon from '../components/Icon';

const year = new Date().getFullYear();

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className='bg-white h-[5vh] border-t-4 border-blue-500'>
      <div>Robert Adams ©{year}</div>
    </footer>
  );
};

export default Footer;
