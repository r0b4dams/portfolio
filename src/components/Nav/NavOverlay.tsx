import NextLink from "next/link";
import { useRouter } from "next/router";
import { animated, useSpring, useSprings } from "@react-spring/web";

import { routes } from "./routes";

interface Props {
  active: boolean;
  toggle: () => void;
}

export const NavOverlay: React.FC<Props> = ({ active, toggle }) => {
  const location = useRouter().pathname;

  const overlay = useSpring({
    from: {
      opacity: 0,
      x: "100%",
    },
    to: {
      opacity: active ? 1 : 0,
      x: active ? "0%" : "100%",
    },
  });

  const borders = useSprings(
    routes.length,
    routes.map((route) => ({
      from: {
        borderBottomColor: "transparent",
        borderBottomWidth: 4,
      },
      to: {
        borderBottomColor: location === route.path ? route.color : "transparent",
      },
    })),
  );

  return (
    <animated.div
      style={overlay}
      className="fixed flex justify-center z-50 top-[12vh] right-0 left-0 bottom-0 md:hidden bg-white"
    >
      <ul className="font-bold text-3xl pt-10 space-y-5">
        {routes.map((route, i) => {
          return (
            <li
              key={i}
              className={
                location === route.path
                  ? "first-letter:uppercase pointer-events-none"
                  : "first-letter:uppercase"
              }
            >
              <NextLink href={route.path} onClick={toggle}>
                {route.name}
              </NextLink>
              <animated.div style={borders[i]} />
            </li>
          );
        })}
      </ul>
    </animated.div>
  );
};
