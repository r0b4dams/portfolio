import { useState } from "react";
import { NavBurger } from "./NavBurger";
import { NavLinks } from "./NavLinks";
import { NavOverlay } from "./NavOverlay";

export const Nav: React.FC = () => {
  const [active, set] = useState(false);

  const toggle = () => {
    document.querySelector("body")?.classList.toggle("noscroll", !active);
    set((state) => !state);
  };

  return (
    <nav className="px-3 md:px-0 flex items-center">
      <NavLinks />
      <NavBurger active={active} toggle={toggle} />
      <NavOverlay active={active} toggle={toggle} />
    </nav>
  );
};
