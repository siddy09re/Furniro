/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],   
                  },
        colors: {
          'custom-pink': '#FFF3E3', 
          'custom-brown' : '#B88E2F',
          'peach':'#FCF8F3',
        },

    },
  },
  plugins: [],
}

