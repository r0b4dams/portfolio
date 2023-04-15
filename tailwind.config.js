/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "5rem",
    },
    extend: {
      colors: {
        "pm-blue": "#0300AD",
        "pm-red": "#E70503",
        "pm-yellow": "#FDDE06",
        "pm-gray": "#EAEFE9",
        "pm-black": "#050103",
      },
      screens: {
        "2xl": "1280px",
      },
    },
  },
};
