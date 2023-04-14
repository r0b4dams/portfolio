import { Page } from "@/components";
import Head from "next/head";
import Link from "next/link";

export const _404: React.FC = () => {
  return (
    <Page>
      <Head>
        <title>Robert Adams | 404</title>
      </Head>

      <Page.Body>
        <div id="404" className="m-auto flex flex-col space-y-3">
          <h1 className="font-semibold text-3xl">404</h1>
          <p className=" text-gray-500">Sorry, I can’t find the page you’re looking for.</p>

          <Link href="/projects" className="self-center p-2 rounded border-2 border-gray-100">
            Back to portfolio
          </Link>
        </div>
      </Page.Body>
    </Page>
  );
};

export default _404;
