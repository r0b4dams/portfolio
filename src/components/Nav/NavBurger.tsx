import { animated, useSprings } from "@react-spring/web";

import { animationValues } from "./config";

interface Props {
  active: boolean;
  toggle: () => void;
  size?: number;
}

export const NavBurger: React.FC<Props> = ({ active, toggle, size = 50 }) => {
  const bars = useSprings(
    animationValues.length,
    animationValues.map((styles) => ({
      to: active ? styles.to : styles.from,
    })),
  );

  const handleClick = () => {
    toggle();
  };

  return (
    <button onClick={handleClick}>
      <svg
        id="navburger"
        className="md:hidden"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        {bars.map((style, i) => (
          <animated.path
            key={i}
            style={style}
            d="m 0,12 h 24 v 0"
            fill="none"
            className="stroke-slate-900 dark:stroke-slate-50"
            strokeWidth="2"
          />
        ))}
      </svg>
    </button>
  );
};
