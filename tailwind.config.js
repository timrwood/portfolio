/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './src/app.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Libre Baskerville', 'serif']
      },
      aspectRatio: {
        portrait: '2 / 3',
        landscape: '3 / 2'
      }
    }
  }
};
