/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    '!./node_modules', // 👈
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--inter-font)'],
      },
    },
  },
  plugins: [],
}
