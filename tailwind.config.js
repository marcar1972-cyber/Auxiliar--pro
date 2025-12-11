/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'aux-dark': '#0E172A',   // Azul Oscuro
        'aux-green': '#2A9974',  // Verde Teal
        'aux-gray': '#BDC3C1',
        'aux-light': '#F8FAFC',
      },
    },
  },
  plugins: [],
};
