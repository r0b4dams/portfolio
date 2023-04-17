import { useEffect } from "react";
import { animated, useTrail } from "@react-spring/web";

import { Icon } from "@/components";
import { ContactLink } from "@/types";

interface Props {
  links: ContactLink[];
  showCopyEmail: () => void;
}

export const ContactIcons: React.FC<Props> = ({ links, showCopyEmail }) => {
  const [trail, animation] = useTrail(links.length, () => ({
    scale: 0,
  }));

  useEffect(() => {
    animation.start({ scale: 1 });
  }, [animation]);

  const handleMouseEnter = () => {
    showCopyEmail();
  };

  return (
    <ul id="icons" className="flex space-x-10">
      {trail.map((style, idx) => {
        const { icon, href } = links[idx];

        const iconJSX = <Icon icon={icon} size={52} className="xl:hover:scale-125 duration-100" />;

        if (icon === "gmail") {
          return (
            <animated.li key={idx} style={style} onMouseEnter={handleMouseEnter}>
              <a href={`mailto:${href}`}>{iconJSX}</a>
            </animated.li>
          );
        }

        return (
          <animated.li key={idx} style={style}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              {iconJSX}
            </a>
          </animated.li>
        );
      })}
    </ul>
  );
};
