import { useEffect } from "react";
import { animated, useTrail } from "@react-spring/web";

import { Badge } from "./Badge";

interface Props {
  title: string;
  badges: string[];
}

export const Badges: React.FC<Props> = ({ title, badges }): JSX.Element => {
  const [trail, animation] = useTrail(badges.length, () => ({ opacity: 0, y: 20 }));

  useEffect(() => {
    animation.start({ opacity: 1, y: 0 });
  });

  return (
    <div>
      <h3 className="font-semibold">{title}</h3>
      <div>
        <ul className="flex flex-wrap">
          {trail.map((style, idx) => (
            <animated.li key={badges[idx]} style={style}>
              <Badge name={badges[idx]} size={20} />
            </animated.li>
          ))}
        </ul>
      </div>
    </div>
  );
};