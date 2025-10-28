/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-navy': '#1a365d',
        'secondary-blue': '#4a90a4', 
        'accent-cyan': '#34C0DE',
        'accent-teal': '#5c9ea8',
        'light-cream': '#faf9f6',
        'warm-white': '#ffffff',
        'text-gray': '#4a5568',
        'soft-blue': '#e6f3f6',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};