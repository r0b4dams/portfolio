const DM_SKIP = ["bash", "kubernetes"];

const grayscale = "dark:grayscale";
const inverted = grayscale + " dark:brightness-0 dark:invert";

export const filterDarkMode = (skill?: string) => {
  if (skill) {
    return DM_SKIP.includes(skill) ? grayscale : inverted;
  }
  return grayscale;
};
