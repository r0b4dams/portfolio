/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'pm-blue': '#0300AD',
        'pm-red': '#E70503',
        'pm-yellow': '#FDDE06',
        'pm-gray': '#EAEFE9',
        'pm-black': '#050103',
      },
      screens: {
        '2xl': '1280px',
      },
    },
  },
};
