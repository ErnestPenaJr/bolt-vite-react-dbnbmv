/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2EBCBC',
        secondary: '#2DAAA7',
        accent: '#DAEDE4',
      },
    },
  },
  plugins: [],
}