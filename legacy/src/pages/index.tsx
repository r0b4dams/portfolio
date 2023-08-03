import type { NextPage } from "next";
import NextHead from "next/head";

import { Greeting, IntroAnimation, Page } from "@/components";

const Landing: NextPage = () => {
  const title = `Robert Adams | Portfolio`;

  return (
    <Page>
      <NextHead>
        <title>{title}</title>
      </NextHead>

      <main className="container w-screen h-screen flex flex-col-reverse justify-center items-center md:flex-row">
        <Greeting />
        <IntroAnimation />
      </main>
    </Page>
  );
};

export default Landing;
