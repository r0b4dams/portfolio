import { Page } from "@/components";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
interface Props {
  [key: string]: string;
}

const Landing: NextPage<Props> = () => {
  return (
    <Page>
      <Head>
        <title>Robert Adams | Portfolio</title>
      </Head>

      <main className="container w-screen h-screen flex flex-col-reverse justify-center items-center md:flex-row">
        <div className="w-1/2 md:w-full flex flex-col justify-center items-center">
          <h1>{"Hi! I'm Robert!"}</h1>
          <h2>{"Web Developer"}</h2>
          <Link href="/about">View Portfolio</Link>
        </div>
        <div className="w-1/2 md:w-full flex flex-col justify-center items-center">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ab voluptatum magni
            temporibus, accusantium ducimus expedita. Molestiae, sint natus facere optio tempora
            eaque itaque repellendus modi consequuntur veritatis voluptatibus veniam.
          </p>
        </div>
      </main>
    </Page>
  );
};

export default Landing;
