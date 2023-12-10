/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        baseblack: '#0D0000',
        myyellow: '#DAC983',
        myorange: '#BA721E',
        myred: '#731702',
        darkred: '#401107'
      },
    },
  },
  plugins: [],
}

