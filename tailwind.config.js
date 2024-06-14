/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cabin-sketch': ['Cabin Sketch', 'sans-serif'],
        'shantell-sans': ['Shantell Sans', 'sans-serif'],

      }
    },
  },
  plugins: [],
}

