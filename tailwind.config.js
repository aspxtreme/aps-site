/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#181B38',
        'secondary-blue': '#7BBEDB',
        'accent-red': '#D62430',
        'accent-cyan': '#7DFFFC',
      },
    },
  },
  plugins: [],
};
