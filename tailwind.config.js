/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        buttonGreen: '#0C821F',
        bgColor: '#FCFCFC',
        textColor: '#21242A',
      },
      backgroundImage: {
        'footer-gradient': 'linear-gradient(to right, #869499, #E0F7FF)',
      },
      
    },
  },
  plugins: [],
}