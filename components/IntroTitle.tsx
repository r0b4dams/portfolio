import { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const IntroTitle: React.FC<{ handleLoopDone: () => void }> = ({
  handleLoopDone,
}) => {
  const [show, set] = useState(true);  // cursor visibility
  const mount = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const { text } = useTypewriter({
    words: ["Hi! I'm Robert!"],
    onLoopDone: () => {
      set(() => false);
      handleLoopDone();
    },
  });

  return (
    <h1 className='text-5xl my-5 md:text-6xl'>
      <span>{text}</span>
      {mount(
        (style, visible) =>
          visible && (
            <animated.span style={style}>
              <Cursor />
            </animated.span>
          )
      )}
    </h1>
  );
};

export default IntroTitle;
