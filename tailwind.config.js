/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#111',
      'blue': '#3a80e9',
      'grey': '#888',
      'darkgrey': '#1b1b1b',
      'green': '#61c96f',
      'red': '#f94141',
    },
    fontFamily: {
      'sans': ["Inter", "sans-serif"],
    },
    extend: {
      boxShadow: {
        'box-design': '5px 10px 10px rgba(58, 128,233, 0.5)',
      }
    },
  },
  plugins: [],
}

