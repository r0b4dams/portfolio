import { NavLinks } from "./NavLinks";

export const Nav: React.FC = (): JSX.Element => {
  return (
    <nav className="hidden md:block">
      <NavLinks />
    </nav>
  );
};
