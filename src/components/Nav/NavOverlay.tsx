import Link from "next/link";
import { useRouter } from "next/router";
import { animated, useSpring, useSprings } from "@react-spring/web";

const data = [
  { path: "about", color: "#0300AD" },
  { path: "projects", color: "#E70503" },
  { path: "contact", color: "#FDDE06" },
];

interface Props {
  active: boolean;
  toggle: () => void;
}

export const NavOverlay: React.FC<Props> = ({ active, toggle }) => {
  const path = useRouter().pathname.substring(1);

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

  const links = useSprings(
    data.length,
    data.map((item) => ({
      from: { borderBottomColor: "transparent", borderBottomWidth: 4 },
      to: {
        borderBottomColor: path === item.path ? item.color : "transparent",
      },
    })),
  );

  return (
    <animated.div
      style={overlay}
      className="fixed flex justify-center z-50 top-[12vh] right-0 left-0 bottom-0 md:hidden bg-white"
    >
      <ul className="font-bold text-3xl pt-10 space-y-5">
        {links.map((style, idx) => (
          <animated.li
            key={idx}
            style={style}
            className={
              path === data[idx].path
                ? "first-letter:uppercase pointer-events-none"
                : "first-letter:uppercase"
            }
          >
            <Link href={`/${data[idx].path}`} onClick={toggle}>
              {data[idx].path}
            </Link>
          </animated.li>
        ))}
      </ul>
    </animated.div>
  );
};
