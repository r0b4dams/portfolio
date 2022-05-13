module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        '2xl': '1280px',
      },
      animation: {
        'left-swing': 'swingLeft 1.2s infinite ease',
        'right-swing': 'swingRight 1.2s 0.6s infinite ease',
      },
      keyframes: {
        swingLeft: {
          '25%': { transform: 'rotate(30deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        swingRight: {
          '25%': { transform: 'rotate(-30deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
    },
  },
};
