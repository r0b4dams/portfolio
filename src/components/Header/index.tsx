import Link from "next/link";
import { Logo } from "../Logo";
import { Nav } from "../Nav";
import { SpringBorder } from "./SpringBorder";

export const Header: React.FC = (): JSX.Element => {
  return (
    <>
      <header className="container flex items-center justify-between">
        <Link href="/">
          <Logo className="h-[50px] lg:h-[100px]" />
        </Link>
        <Nav />
      </header>
      <SpringBorder />
    </>
  );
};
