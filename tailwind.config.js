/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        DEFAULT: '#2C2D2D',
        grey900: '#2C2D2D',
      },
      colors: {
        primary: '#5CC556',
        lightGreen: '#F0FBEF',
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}