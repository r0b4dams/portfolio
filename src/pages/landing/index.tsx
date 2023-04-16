import type { NextPage } from "next";
import Head from "next/head";
import { Page } from "@/components";
import { Salutation } from "./Salutation";
import { Animation } from "./Animation";

const Landing: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>Robert Adams | Portfolio</title>
      </Head>

      <main className="container w-screen h-screen flex flex-col-reverse justify-center items-center md:flex-row">
        <Salutation />
        <Animation />
      </main>
    </Page>
  );
};

export default Landing;
