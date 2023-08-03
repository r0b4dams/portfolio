import { useEffect } from "react";
import { animated, config, useTrail } from "@react-spring/web";
import paths from "./paths.json";

interface IProps {
  className: string;
}

export const Logo: React.FC<IProps> = (props) => {
  const [trail, api] = useTrail(paths.length, () => ({ x: 0 }));

  useEffect(() => {
    api.start({ x: 1, config: config.molasses });
  }, [api]);

  return (
    <svg
      {...props}
      id="logo"
      viewBox="0 0 24.0 24.0"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      {trail.map(({ x }, idx) => (
        <animated.path
          key={paths[idx].id}
          fill="none"
          id={paths[idx].id}
          d={paths[idx].d}
          stroke={paths[idx].stroke}
          strokeWidth="2"
          strokeDasharray={100}
          strokeDashoffset={x.to((x) => (1 - x) * 100)}
        />
      ))}
    </svg>
  );
};
