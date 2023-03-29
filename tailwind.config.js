/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Poppins': 'Poppins'
      },
      backgroundImage:{
        'clearsky': "url('C:\Web Develop\REACT\weather-app\src\IMG\clear_sky.jpg')",
        'rain': "url('C:\Web Develop\REACT\weather-app\src\IMG\rain.jpg') "
      },
      backgroundColor:{
        'bluealpha': '#0870bf'
      }
    },
  },
  plugins: [],
}
