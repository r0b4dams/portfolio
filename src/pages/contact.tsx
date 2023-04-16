import type { GetStaticProps, NextPage } from "next";
import NextHead from "next/head";
import { useSpring } from "@react-spring/web";

import { ContactEmail, ContactIcons, NewtonsCradle, Page } from "@/components";

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
      <NextHead>
        <title>Robert Adams | Contact</title>
      </NextHead>

      <Page.Heading>Contact</Page.Heading>

      <Page.Body>
        <div className="flex flex-col grow justify-center items-center space-y-5">
          <ContactIcons showCopyEmail={showCopyEmail} />
          <ContactEmail email={email} style={style} />
          <NewtonsCradle />
        </div>
      </Page.Body>
    </Page>
  );
};

export default Contact;
