import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { open_sans } from "@/theme/font";

const Document: React.FC = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <body className={`${open_sans.className} `}>
        <Main />
        <NextScript />
        <Script id="dark-mode" src="/scripts/dark-mode.js" strategy="beforeInteractive" />
      </body>
    </Html>
  );
};

export default Document;
