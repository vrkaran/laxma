/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'vitality-teal': '#2D8A82',
        'subtle-sage': '#B2D8D5',
        'bio-tech-blue': '#2A6F9E',
        'healing-leaf': '#3E8E56',
        'pulse-coral': '#E45A49',
        'clinical-white': '#F9F9F9',
        'ayur-gold': '#C69200',
        'brand-gray': '#4A4A4A',
        'light-gray': '#EAEAEA'
      }
    },
  },
  plugins: [],
};
