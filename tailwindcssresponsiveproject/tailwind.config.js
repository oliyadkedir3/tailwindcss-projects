/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
const rotateY = plugin(function({ addUtilities }){
  addUtilities ({
    '.rotate-y-180': {
      transform: "rotateY(180deg)"
    },

    '.-rotate-y-180': {
      transform: "rotateY(-180deg)"
    }
  })
})

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "color-primary":"01051e",
        "color-primary":"#020726",
        "color-primary-dark":"#010417",
        "color-secondary":"#ff7d3b",
        "color-gray":"#333",
        "color-white":"#fff",
        "color-blob":"#A427Df",
      }
    },
    container: {
      center:true,
      padding:{
        default: '20px',
        md:"50px"
      }
    }
  },
  plugins: [ rotateY],
}

