import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { DefaultLayout } from "@/layouts";
import "@/styles/globals.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  const Page = <Component {...pageProps} />;

  switch (router.pathname) {
    default:
      return <DefaultLayout page={Page} />;
    case "/":
      return Page;
  }
};

export default App;
