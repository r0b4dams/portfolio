import { NavLinks } from "./NavLinks";

export const Nav: React.FC = () => {
  return (
    <nav className="hidden md:block">
      <NavLinks />
    </nav>
  );
};
