import { Metadata } from 'next/types';
import { Greeting, IntroAnimation, Page } from '@/components';

export const metadata: Metadata = {
  title: 'Robert Adams | Portfolio',
};

export default function Intro() {
  return (
    <Page>
      <main className='container w-screen h-screen flex flex-col-reverse justify-center items-center lg:flex-row'>
        <Greeting />
        <IntroAnimation />
      </main>
    </Page>
  );
}
