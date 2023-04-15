import type { NextPage } from "next";
import Head from "next/head";
import { Page } from "@/components";

interface Props {
  [key: string]: string;
}

const Contact: NextPage<Props> = () => {
  return (
    <Page>
      <Head>
        <title>Robert Adams | Contact</title>
      </Head>
      <Page.Heading>Contact</Page.Heading>
      <Page.Body>content</Page.Body>
    </Page>
  );
};

export default Contact;
