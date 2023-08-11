export { fontClass } from './font';

// https://tailwindcss.com/docs/dark-mode#supporting-system-preference-and-manual-selection
export const theme = () => ({
  // tailwind docs recommend running this script to avoid FOUC
  // using inline js or next/script throws errors about hydration mismatches
  // so use innerHTML to run the script before the components render
  __html: `
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
    `,
});
