'use client';

import { useSpring } from '@react-spring/web';
import { CONFIG } from '@/config';
import { ContactEmail, NewtonsCradle, Page } from '@/components';
import { ContactIcons } from './ContactIcons';

const links = [
  { name: 'gmail', href: CONFIG.EMAIL },
  { name: 'linkedin', href: CONFIG.LINKEDIN_URL },
  { name: 'github', href: CONFIG.GITHUB_URL },
];

export default function Contact() {
  const [style, animation] = useSpring(() => ({ scale: 0 }));

  const showCopyEmail = () => {
    animation.start({ scale: 1 });
  };

  return (
    <Page>
      <Page.Heading>Contact</Page.Heading>

      <Page.Body>
        <div className='flex flex-col grow justify-center items-center space-y-5'>
          <ContactIcons links={links} showCopyEmail={showCopyEmail} />
          <ContactEmail email={CONFIG.EMAIL!} style={style} />
          <NewtonsCradle />
        </div>
      </Page.Body>
    </Page>
  );
}
