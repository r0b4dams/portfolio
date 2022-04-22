import React from 'react';
import FaGitHubIcon from './icons/FaGitHub';
import FaLinkedInIcon from './icons/FaLinkedIn';

const year = new Date().getFullYear();

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className='portfolio-footer'>
      <div>Robert Adams ©{year}</div>
      <div>
        <a href='https://github.com/comatosino'>
          <FaGitHubIcon />
        </a>
        <a href='https://www.linkedin.com/in/robert-adams-comatosino'>
          <FaLinkedInIcon />
        </a>
      </div>
      <div>
        <span>Built with</span>
        <a href='https://nextjs.org/' className='underline'>
          {' '}
          Next.js
        </a>
      </div>
      <div>
        <span>Styled with</span>
        <a href='https://tailwindcss.com/' className='underline'>
          {' '}
          TailwindCSS
        </a>
      </div>
    </footer>
  );
};

export default Footer;
