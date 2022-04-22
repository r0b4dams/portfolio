import type { NextPage } from 'next/types';
import Image from 'next/image';

const About: NextPage = () => {
  return (
    <section id='about'>
      <Image src='/images/avatar.jpg' alt='avatar' height={144} width={144} />
      <h1>ABOUT</h1>
      <br />
      <p>
        Coming out of college I accepted a position as an avionics repair
        technician. It was a promising job and my adaptability and ability to
        learn quickly paid off: in less than a year I had earned trainer status
        in both the repair of in-flight hardware as well as the maintenance
        repair software used for documentation.
      </p>
      <br />
      <p>
        Unfortunately, the uncertainty caused by the pandemic led to a lot of
        restructuring and I felt like I’d hit a wall in my professional growth.
        I realized I needed to make a change. I’d always enjoyed the programming
        aspects of my physics degree, so when I saw a chance to apply for a full
        stack web development certificate, I jumped at it.
      </p>
      <br />
      <p>
        I’m glad I did, because in earning it, it really solidified my
        appreciation for what I enjoy in a job: learning new things, problem
        solving, and helping build something tangible. I’m eager to contribute
        my skills to a collaborative environment, and look to find a position
        where I can further develop current skills as well as acquire new ones.
        I’m really excited and I look forward to learning more!
      </p>
      <br />
    </section>
  );
};

export default About;
