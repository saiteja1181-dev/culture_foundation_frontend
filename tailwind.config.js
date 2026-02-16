/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E8F2FF',
          100: '#C5DFFF',
          200: '#9BC9FF',
          300: '#71B3FF',
          400: '#4A90E2',
          500: '#1E6FD9',
          600: '#0D4A9C',
          700: '#09377A',
          800: '#062658',
          900: '#031A3B',
        },
        secondary: {
          orange: '#FF7A45',
          green: '#00B894',
          purple: '#8A4FFF',
          teal: '#00CEC9',
        },
        neutral: {
          50: '#F8F9FA',
          100: '#F1F3F4',
          200: '#E8EAED',
          300: '#DADCE0',
          400: '#BDC1C6',
          500: '#9AA0A6',
          600: '#5D6D7E',
          700: '#3C4043',
          800: '#2C3E50',
          900: '#1A1A1A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}