import { useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";

export const ResumeSpring: React.FC = () => {
  const [{ y }, spring] = useSpring(() => ({ y: 0.25 }));

  useEffect(() => {
    spring.start({
      y: 1,
      config: {
        mass: 1,
        tension: 125,
        friction: 3,
      },
    });
  }, []);

  return (
    <div className="flex flex-col items-center relative">
      <div className="h-2 bg-pm-blue w-32" />
      <animated.svg
        style={{ scaleY: y.to((y) => y) }}
        id="spring"
        className="origin-top"
        width="50px"
        height="100px"
        viewBox="0 0 210 297"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke="#c7c7c7"
          strokeOpacity="1"
          strokeWidth="8px"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 105,-61.5 0,-40.5 H 210 L 0,1.5 H 210 L 0,43.5 H 210 L 0,85.5 h 210 l -210,42 h 210 l -210,42 h 210 l -210,42 h 210 l -210,42 h 210 l -210,42 h 210 l -210,42 h 210 l -105,21 v 0 0"
        />
      </animated.svg>

      <animated.div
        style={{ translateY: y.to((y) => 100 * y - 100) }}
        className="py-1 px-3 mb-5 relative border rounded bg-white"
      >
        <a href="#" target="_blank" rel="noopener noreferrer" className="font-semibold ">
          Resume
        </a>
        <div className="origin-center h-1 bg-pm-red" />
      </animated.div>
    </div>
  );
};