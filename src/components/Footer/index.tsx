import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSpring, animated } from "@react-spring/web";
import Link from "next/link";

const year = new Date().getFullYear();

export const Footer: React.FC = (): JSX.Element => {
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
        <Link
          href="/contact"
          className={
            router.pathname === "/contact"
              ? "pointer-events-none font-semibold space-x-1"
              : "font-semibold space-x-1"
          }
        >
          <span className="border-b-pm-blue border-b">Robert</span>
          <span className="border-b-pm-red border-b">Adams</span>
          <span>©</span>
          <span className="border-b-pm-yellow border-b">{year}</span>
        </Link>
      </animated.div>
    </footer>
  );
};
