import NextLink from "next/link";

import { Logo } from "../Logo";
import { Nav } from "../Nav";
import { SpringBorder } from "./SpringBorder";

export const Header: React.FC = () => {
  return (
    <>
      <header className="container flex items-center justify-between px-5">
        <NextLink href="/">
          <Logo className="h-[50px] lg:h-[100px]" />
        </NextLink>
        <Nav />
      </header>
      <SpringBorder />
    </>
  );
};
