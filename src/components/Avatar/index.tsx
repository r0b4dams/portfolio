import Image from "next/image";
import { animated, useSpring } from "@react-spring/web";
import avatar from "./avatar.jpg";

export const Avatar: React.FC = () => {
  const [style, animation] = useSpring(() => ({ scale: 0, opacity: 0 }));

  const AnimatedImg = animated(Image);

  const animate = () => {
    animation.start({ scale: 1, opacity: 1 });
  };

  return (
    <AnimatedImg
      style={style}
      src={avatar}
      alt="avatar"
      className="avatar rounded-full"
      height={164}
      width={164}
      onLoadingComplete={animate}
    />
  );
};
