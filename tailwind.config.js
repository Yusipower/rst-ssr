/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'lg': {max: '1023px'},
      'md': {max: '767px'},
      'sm': {max: '475px'},
    },
    extend: {
      colors: {
        "brand-1": "#03536D"
      }
    },
  },
  plugins: [],
}
