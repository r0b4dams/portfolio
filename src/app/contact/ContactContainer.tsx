'use client';

import { useSpring } from '@react-spring/web';
import { ContactEmail, ContactIcons, NewtonsCradle } from '.';
import { CONFIG } from '@/config';

const links = [
  { name: 'gmail', href: CONFIG.EMAIL },
  { name: 'linkedin', href: CONFIG.LINKEDIN_URL },
  { name: 'github', href: CONFIG.GITHUB_URL },
];

export const ContactContainer = () => {
  const [style, animation] = useSpring(() => ({ scale: 0 }));

  const showCopyEmail = () => {
    animation.start({ scale: 1 });
  };
  return (
    <div className='flex flex-col grow justify-center items-center space-y-5'>
      <ContactIcons links={links} showCopyEmail={showCopyEmail} />
      <ContactEmail email={CONFIG.EMAIL!} style={style} />
      <NewtonsCradle />
    </div>
  );
};
