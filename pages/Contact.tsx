import type { NextPage } from 'next/types';
import FaGitHubIcon from '../components/icons/FaGitHub';
import FaLinkedInIcon from '../components/icons/FaLinkedIn';

const Contact: NextPage = () => {
  return (
    <section id='contact'>
      <h1>CONTACT</h1>
      <br />
      <p>Contact me for professional opportunities or project collaboration!</p>
      <p>I look forward to hearing from you!</p>
      <br />
      <p>RESUME</p>
      <p>EMAIL</p>
      <p>
        LINKEDIN <FaLinkedInIcon />
      </p>
      <p>
        GITHUB <FaGitHubIcon />
      </p>
      <br />
    </section>
  );
};

export default Contact;
