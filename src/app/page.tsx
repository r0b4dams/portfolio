'use client';

import type { Metadata } from 'next';
import { Greeting, IntroAnimation, Page } from '@/components';

export default function Intro() {
  return (
    <Page>
      <main className='container w-screen h-screen flex flex-col-reverse justify-center items-center md:flex-row'>
        <Greeting />
        <IntroAnimation />
      </main>
    </Page>
  );
}
