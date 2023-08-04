import { useEffect } from "react";
import { animated, useTrail } from "@react-spring/web";

import { icons } from "@/lib/icons";
import { Icon } from "@/components";

interface Props {
  links: IContactLink[];
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
        const link = links[idx];
        const icon = icons[link.name];

        const iconJSX = (
          <Icon
            src={icon.path}
            size={52}
            className="xl:hover:scale-125 duration-100 dark:grayscale dark:brightness-0 dark:invert"
          />
        );

        if (link.name === "gmail") {
          return (
            <animated.li key={idx} style={style} onMouseEnter={handleMouseEnter}>
              <a href={`mailto:${link.href}`}>{iconJSX}</a>
            </animated.li>
          );
        }

        return (
          <animated.li key={idx} style={style}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {iconJSX}
            </a>
          </animated.li>
        );
      })}
    </ul>
  );
};
