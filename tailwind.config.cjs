/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      serif: ['DM Serif Display'],
      jost: ['Jost'],
    },
    extend: {
      colors: {
      white: '#FFFF',
      primary1:'#CDA274',
      primary2:'#292F36',
      primary3:'#F4F0EC',
    },
    fontSize:{
      h1: '50px',
      h2: '35px',
      h3: '25px',
      h4: '22px',
      h5: '20px',
      h6: '18px'
    },

    },
  },
  plugins: [],
}