import { useEffect } from "react";
import { animated, useTrail } from "@react-spring/web";

import { Badge } from "./Badge";

interface Props {
  title: string;
  skills: string[];
}

export const BadgeList: React.FC<Props> = ({ title, skills }): JSX.Element => {
  const [trail, animation] = useTrail(skills.length, () => ({ opacity: 0, y: 20 }));

  useEffect(() => {
    animation.start({ opacity: 1, y: 0 });
  });

  return (
    <div>
      <h3 className="font-semibold">{title}</h3>
      <ul className="flex flex-wrap mt-2">
        {trail.map((style, i) => (
          <animated.li key={i} style={style}>
            <Badge skill={skills[i]} size={28} />
          </animated.li>
        ))}
      </ul>
    </div>
  );
};
