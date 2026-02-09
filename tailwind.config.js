/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#faf9f6',
          100: '#f5f3ed',
          200: '#e8e3d3',
          300: '#d4c7a4',
          400: '#c4ab6e',
          500: '#b8994a',
          600: '#a68439',
          700: '#8a6b2f',
          800: '#72572a',
          900: '#5e4826',
        },
        brown: {
          50: '#f8f5f2',
          100: '#ede7df',
          200: '#dacfbe',
          300: '#c2b095',
          400: '#ac926c',
          500: '#9d7d55',
          600: '#8f6e4a',
          700: '#775a3e',
          800: '#614b36',
          900: '#513f2e',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
