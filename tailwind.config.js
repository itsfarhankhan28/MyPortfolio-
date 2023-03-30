/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    debugScreens: {
      selector: '.debug-screens',
      position: ['bottom', 'left'],
      style: {
        backgroundColor: '#C0FFEE',
        color: 'black',
      },
      prefix: 'screen: ',

    },
    screens: {
      xxsm: '350px',
      xsm: '425px',
      mobile: '425px',
      sm: '640px',
      tablet: '640px',
      md: '768px',
      lg: '1024px',
      laptop: '1024px',
      xl: '1440px',
      desktop: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily:{
        herofont:['Prompt']
      },
      colors:{
        'custom-brown':'#E3DFDB',
        'custom-warm':'#F3DEBA'
      }
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ]
}
