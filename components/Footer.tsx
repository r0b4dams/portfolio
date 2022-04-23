import React from 'react';
import Icon from '../components/Icon';

const year = new Date().getFullYear();

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className='portfolio-footer px-[30px] h-min-[30px]'>
      <div>Robert Adams ©{year}</div>

      <span className='flex'>
        <a href='https://github.com/comatosino' className='px-[10px]'>
          <Icon
            src='/icons/github.svg'
            className='bg-slate-50 rounded-md flex'
          />
        </a>
        <a href='https://www.linkedin.com/in/robert-adams-comatosino'>
          <Icon
            src='/icons/linkedin.svg'
            className='bg-slate-50 rounded-md flex'
          />
        </a>
      </span>
    </footer>
  );
};

export default Footer;
