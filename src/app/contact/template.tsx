'use client';

import { animated, useTransition } from '@react-spring/web';

interface TemplateProps {
  children: React.ReactNode;
}

// NODE: exit animation not functional currently
// https://github.com/vercel/next.js/issues/49279#issuecomment-1541939624
export default function PageTransition({ children }: TemplateProps) {
  const transition = useTransition(children, {
    delay: 500,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
    exitBeforeEnter: true,
  });

  return transition((style, page) => (
    <animated.div id='animated' style={style}>
      {page}
    </animated.div>
  ));
}
