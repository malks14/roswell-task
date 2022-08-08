/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'desktop': '1440px',
      'laptop': '1024px',
      'tablet': {'max': '1023px'},
      'mobile': '375px',
    }
  },
  plugins: [],
}
