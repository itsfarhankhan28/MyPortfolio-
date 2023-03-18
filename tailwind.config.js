/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        herofont:['Prompt']
      },
      colors:{
        'custom-brown':'#E3DFDB',
      }
    },
  },
  plugins: [],
}
