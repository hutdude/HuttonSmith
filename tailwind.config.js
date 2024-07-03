/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans'], // Use 'sans', 'serif', 'mono' as fallbacks
      },
      boxShadow:{
        'basic': '0px 0px 7.1px rgba(255, 255, 255, 0.25)'
      }
    },
  },
  plugins: [
    // Register a plugin to add text shadow utilities
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0px 0px 7.1px rgba(255, 255, 255, 0.25)'
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }),
  ],
}

