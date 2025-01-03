/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  //this line is added as broswer console renders cy is not defined
  define: {
    'window.Cypress': undefined
  }
}