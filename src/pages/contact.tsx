import type { GetStaticProps, NextPage } from "next";
import NextHead from "next/head";
import { useSpring } from "@react-spring/web";

import { ContactEmail, ContactIcons, NewtonsCradle, Page } from "@/components";
import { CONFIG } from "@/config";

interface Props {
  email: string;
  github: string;
  linkedin: string;
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      email: CONFIG.EMAIL,
      github: CONFIG.GITHUB,
      linkedin: CONFIG.LINKEDIN,
    },
  };
};

const Contact: NextPage<Props> = ({ email, github, linkedin }) => {
  const [style, animation] = useSpring(() => ({ scale: 0 }));

  const showCopyEmail = () => {
    animation.start({ scale: 1 });
  };

  const data = [
    { icon: "gmail", href: email },
    { icon: "linkedin", href: github },
    { icon: "github", href: linkedin },
  ];

  return (
    <Page>
      <NextHead>
        <title>Robert Adams | Contact</title>
      </NextHead>

      <Page.Heading>Contact</Page.Heading>

      <Page.Body>
        <div className="flex flex-col grow justify-center items-center space-y-5">
          <ContactIcons links={data} showCopyEmail={showCopyEmail} />
          <ContactEmail email={email} style={style} />
          <NewtonsCradle />
        </div>
      </Page.Body>
    </Page>
  );
};

export default Contact;
