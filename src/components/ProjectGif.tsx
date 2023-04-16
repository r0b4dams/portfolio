import NextImage from "next/image";
import { animated, config, useSpring } from "@react-spring/web";

interface Props {
  id: string;
  name: string;
}

export const ProjectGif: React.FC<Props> = ({ id, name }): JSX.Element => {
  const [style, animation] = useSpring(() => ({ opacity: 0 }));

  const handleImageLoaded = () => {
    animation.start({ opacity: 1, config: config.molasses });
  };

  return (
    <animated.div style={style} className="flex">
      <NextImage
        priority
        src={`/images/${id}-demo.gif`}
        alt={name}
        width={640}
        height={360}
        className="rounded"
        onLoadingComplete={handleImageLoaded}
      />
    </animated.div>
  );
};
