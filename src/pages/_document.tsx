import { Html, Head, Main, NextScript } from "next/document";
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
      </body>
    </Html>
  );
};

export default Document;
