/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          black: '#021526',
          blue: '#03346E',
          white: '#e5e7eb',
        },
        secondary: {
          blue: '#041F39',
        },
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}