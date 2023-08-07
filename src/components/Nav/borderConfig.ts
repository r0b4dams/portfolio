const ANIMATION_VALUES = {
  'top-bar': {
    from: { y: -6, rotate: 0 },
    to: { y: 0, rotate: 45 },
  },
  'middle-bar': {
    from: { opacity: 1 },
    to: { opacity: 0 },
  },
  'bottom-bar': {
    from: { y: 6, rotate: 0 },
    to: { y: 0, rotate: -45 },
  },
};

export const animationValues = Object.values(ANIMATION_VALUES);
