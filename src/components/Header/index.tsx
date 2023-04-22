import NextLink from "next/link";

import { Logo } from "../Logo";
import { Nav } from "../Nav";
import { ToggleDarkMode } from "../ToggleDarkMode";
import { SpringBorder } from "./SpringBorder";

export const Header: React.FC = () => {
  return (
    <>
      <header className="container flex items-center justify-between px-5">
        <NextLink href="/">
          <Logo className="h-[50px] lg:h-[100px]" />
        </NextLink>
        <div className="flex items-center justify-center space-x-10">
          <Nav />
          <ToggleDarkMode />
        </div>
      </header>
      <SpringBorder />
    </>
  );
};
