import type { GetStaticProps, NextPage } from "next";
import NextHead from "next/head";
import { useSpring } from "@react-spring/web";

import { CONFIG } from "@/config";
import { ContactEmail, ContactIcons, NewtonsCradle, Page } from "@/components";
import { ContactLink } from "@/types";

interface Props {
  email: string;
  links: ContactLink[];
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      email: CONFIG.EMAIL,
      links: [
        { name: "gmail", href: CONFIG.EMAIL },
        { name: "linkedin", href: CONFIG.LINKEDIN },
        { name: "github", href: CONFIG.GITHUB },
      ],
    },
  };
};

const Contact: NextPage<Props> = ({ email, links }) => {
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
          <ContactIcons links={links} showCopyEmail={showCopyEmail} />
          <ContactEmail email={email} style={style} />
          <NewtonsCradle />
        </div>
      </Page.Body>
    </Page>
  );
};

export default Contact;
