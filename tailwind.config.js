/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: 'Poppins'
      },
      backgroundImage: {
        'Banner': "url('./assets/Banner.jpg')",
      },
      screens: {
        'Laptop-L': {'max': '1282'},
        'Laptop-M': { 'max': '1024px' },
        'Tabelt': { 'max': '769px' },
        'Mobile-L': { 'max': '426px' },
        'Mobile-M': { 'max': '376px' },
        'Mobile-S': { 'max': '321px' },
      }
    },
    plugins: [
    ],
  }
}
