import { SpringValue, animated, config, useSpring } from "@react-spring/web";

interface Props {
  email: string;
  style: {
    scale: SpringValue<number>;
  };
}

const STROKE_DASH_ARRAY = 100;

export const CopyEmail: React.FC<Props> = ({ email, style }) => {
  const [{ x }, animation] = useSpring(() => ({ x: 0 }));

  const animate = () => {
    animation.start({ x: 1, config: config.default });
    setTimeout(() => {
      animation.start({ x: 0, config: config.molasses });
    }, 2500);
  };

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = async () => {
    try {
      if (!email) {
        throw new Error("email not found");
      }
      animate();
      await navigator.clipboard.writeText(email);
    } catch (error) {
      animation.stop();
      alert("Error copying email to clipboard");
    }
  };

  const clipboardOffset = x.to((x) => x * STROKE_DASH_ARRAY);
  const checkmarkOffset = x.to((x) => (x - 1) * STROKE_DASH_ARRAY);

  return (
    <animated.button
      id="email"
      style={style}
      className="cursor-pointer	relative border rounded p-5"
      onClick={handleClick}
    >
      <div className="absolute top-0 right-0 h-5 w-5 ">
        <animated.svg
          id="clipboard"
          className="absolute"
          width="20px"
          height="20px"
          viewBox="0 0 16 16"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={STROKE_DASH_ARRAY}
          strokeDashoffset={clipboardOffset}
        >
          <path d="M5.75 4.75H10.25V1.75H5.75V4.75Z" />
          <path d="M3.25 2.88379C2.9511 3.05669 2.75 3.37987 2.75 3.75001V13.25C2.75 13.8023 3.19772 14.25 3.75 14.25H12.25C12.8023 14.25 13.25 13.8023 13.25 13.25V3.75001C13.25 3.37987 13.0489 3.05669 12.75 2.88379" />
        </animated.svg>
        <animated.svg
          id="check"
          className="absolute"
          width="20"
          height="20"
          viewBox="0 0 16 16"
          fill="none"
          stroke="#00ff00"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={STROKE_DASH_ARRAY}
          strokeDashoffset={checkmarkOffset}
        >
          <path d="M13.25 4.75L6 12L2.75 8.75" />
        </animated.svg>
      </div>
      <span className="font-medium">{email}</span>
    </animated.button>
  );
};
