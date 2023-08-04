import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSpring, animated } from "@react-spring/web";
import NextLink from "next/link";

const year = new Date().getFullYear();

export const Footer: React.FC = () => {
  const router = useRouter();

  const [style, api] = useSpring(() => ({
    opacity: 0,
    y: 20,
  }));

  useEffect(() => {
    api.start({ opacity: 1, y: 0 });
  }, [api]);

  return (
    <footer className="container flex flex-col items-center py-8">
      <animated.div style={style}>
        <NextLink
          href="/contact"
          className={
            router.pathname === "/contact"
              ? "pointer-events-none font-semibold space-x-1"
              : "font-semibold space-x-1"
          }
        >
          <span className="border-b-pm-blue border-b-2">Robert</span>
          <span className="border-b-pm-red border-b-2">Adams</span>
          <span>©</span>
          <span className="border-b-pm-yellow border-b-2">{year}</span>
        </NextLink>
      </animated.div>
    </footer>
  );
};
