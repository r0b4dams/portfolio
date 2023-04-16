import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useSpring } from "@react-spring/web";

import { NewtonsCradle, Page } from "@/components";
import { ContactIcons } from "./ContactIcons";
import { CopyEmail } from "./CopyEmail";

interface Props {
  email: string;
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: { email: process.env.EMAIL } };
};

const Contact: NextPage<Props> = ({ email }) => {
  const [style, animation] = useSpring(() => ({ scale: 0 }));

  const showCopyEmail = () => {
    animation.start({ scale: 1 });
  };

  return (
    <Page>
      <Head>
        <title>Robert Adams | Contact</title>
      </Head>

      <Page.Heading>Contact</Page.Heading>

      <Page.Body>
        <div className="flex flex-col grow justify-center items-center space-y-5">
          <ContactIcons showCopyEmail={showCopyEmail} />
          <CopyEmail email={email} style={style} />
          <NewtonsCradle />
        </div>
      </Page.Body>
    </Page>
  );
};

export default Contact;
