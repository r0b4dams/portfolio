'use client';

import { animated, useTransition } from '@react-spring/web';

// NODE: exit animation not functional currently
// https://github.com/vercel/next.js/issues/49279#issuecomment-1541939624
export function PageTransition({ children }: { children: React.ReactNode }) {
  const transition = useTransition(children, {
    delay: 500,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
    exitBeforeEnter: true,
  });
  return transition((style, page) => (
    <animated.div data-animated_type='page-transition' style={style}>
      {page}
    </animated.div>
  ));
}
