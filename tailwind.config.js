/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'aux-dark': '#0E172A',
        'aux-green': '#2A9974',
        'aux-gray': '#BDC3C1',
        'aux-light': '#F8FAFC',
      },
    },
  },
  plugins: [],
};
