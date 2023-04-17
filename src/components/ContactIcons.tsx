import { useEffect } from "react";
import { animated, useTrail } from "@react-spring/web";

import { Icon } from "@/components";
import { CONFIG } from "@/config";

// const data = [
//   { icon: "gmail", href: `mailto:${CONFIG.EMAIL}` },
//   { icon: "linkedin", href: CONFIG.LINKEDIN },
//   { icon: "github", href: CONFIG.GITHUB },
// ];

interface Link {
  icon: string;
  href: string;
}
interface Props {
  links: Link[];
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

        if (icon === "gmail") {
          return (
            <animated.li key={idx} style={style} onMouseEnter={handleMouseEnter}>
              <a href={href}>
                <Icon
                  icon={links[idx].icon}
                  size={52}
                  className="xl:hover:scale-125 duration-100"
                />
              </a>
            </animated.li>
          );
        }

        return (
          <animated.li key={idx} style={style}>
            <a href={links[idx].href} target="_blank" rel="noopener noreferrer">
              <Icon icon={links[idx].icon} size={52} className="xl:hover:scale-125 duration-100" />
            </a>
          </animated.li>
        );
      })}
    </ul>
  );
};
