import { Metadata } from 'next/types';
import { Page } from '@/components';
import { ContactContainer } from './ContactContainer';

export const metadata: Metadata = {
  title: 'Robert Adams | Contact',
};

export default function Contact() {
  return (
    <Page>
      <Page.Heading>Contact</Page.Heading>
      <Page.Body>
        <ContactContainer />
      </Page.Body>
    </Page>
  );
}
