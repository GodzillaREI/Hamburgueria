/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontfamily:{
      'sans': ['Poppins','sans-serif']
    },
    extend: {
      backgroundImage:{
        "home": "url('/assents/assents/bg.png')"
      }
    },
  },
  plugins: [],
}

