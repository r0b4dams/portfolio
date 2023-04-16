import { animated, useSprings } from "@react-spring/web";

interface Config {
  [key: string]: {
    to: {
      [key: string]: any;
    };
    from: {
      [key: string]: any;
    };
  };
}

const config: Config = {
  top: {
    from: { y: -6, rotate: 0 },
    to: { y: 0, rotate: 45 },
  },
  mid: {
    from: { opacity: 1 },
    to: { opacity: 0 },
  },
  bot: {
    from: { y: 6, rotate: 0 },
    to: { y: 0, rotate: -45 },
  },
};

const keys = Object.keys(config);

interface Props {
  active: boolean;
  toggle: () => void;
  size?: number;
}

export const NavBurger: React.FC<Props> = ({ active, toggle, size = 50 }) => {
  const bars = useSprings(
    keys.length,
    keys.map((item) => ({
      to: active ? config[item].to : config[item].from,
    })),
  );

  const handleClick = () => {
    toggle();
  };

  return (
    <button onClick={handleClick}>
      <svg
        id="navburger"
        width={size}
        height={size}
        className="md:hidden"
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
            stroke="#000000"
            strokeWidth="2"
          />
        ))}
      </svg>
    </button>
  );
};
