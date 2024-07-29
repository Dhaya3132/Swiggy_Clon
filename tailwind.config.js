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
    },
    plugins: [
    ],
  }
}
