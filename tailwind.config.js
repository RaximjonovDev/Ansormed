/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'os': 'Open Sans'
      },
      colors:{
        'pink': '#DE2E54',
        'aqua': '#0EB4C1'
      },
      spacing:{
        '1140':  '1140px',
        '120': '120px',
        '80': '80px',
      },
      fontSize:{
        '15':'15px'
      }
    },
  },
  plugins: [],
}

