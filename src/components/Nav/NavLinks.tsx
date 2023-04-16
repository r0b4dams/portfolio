import Link from "next/link";
import { useRouter } from "next/router";
import { animated, useSprings, useTrail } from "@react-spring/web";

const data = [
  {
    name: "About",
    // blue
    color: "#0300AD",
  },
  {
    name: "Projects",
    // red
    color: "#E70503",
  },
  {
    name: "Contact",
    //yellow
    color: "#FDDE06",
  },
];

export const NavLinks: React.FC = () => {
  const router = useRouter();

  const linkTrail = useTrail(data.length, {
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
  });

  const routeStyles = useSprings(
    data.length,
    data.map((item) => ({
      from: { width: "0%", backgroundColor: item.color },
      to: { width: router.pathname === `/${item.name.toLowerCase()}` ? "100%" : "0%" },
    })),
  );

  return (
    <div className="hidden md:block">
      <ul className="flex space-x-12 font-semibold text-lg">
        {linkTrail.map((mountStyle, idx) => {
          const href = `/${data[idx].name.toLowerCase()}`;

          return (
            <animated.li key={data[idx].name} style={mountStyle}>
              <div
                className={
                  router.pathname === href
                    ? "pointer-events-none duration-100"
                    : "hover:scale-125 duration-100"
                }
              >
                <Link href={href}>{data[idx].name}</Link>
                <animated.div style={routeStyles[idx]} className="h-2 "></animated.div>
              </div>
            </animated.li>
          );
        })}
      </ul>
    </div>
  );
};
