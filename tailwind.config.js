/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-orange": "#FF5555"
      },
      class: {
        "active": {
          color: '#FF5555'
        }
      }
    },
  },
  plugins: [],
}

