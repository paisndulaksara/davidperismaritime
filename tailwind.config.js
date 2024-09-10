/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#FeFeFe',
        blueDark: '#006090',
        blueMedium: '#0379b7',
        blueLight: '#007ec0',
        grayDark: '#2b3237',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        abril: ['Abril Fatface', 'serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}
