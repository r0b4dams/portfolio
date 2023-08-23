const SKIP = ['bash', 'kubernetes', 'webpack', 'mocha', 'vite'];

const grayscale = 'dark:grayscale';
const inverted = grayscale + ' dark:brightness-0 dark:invert';

export const darkModeIconClass = (skill?: string) => {
  if (skill) {
    return SKIP.includes(skill) ? grayscale : inverted;
  }
  return grayscale;
};
