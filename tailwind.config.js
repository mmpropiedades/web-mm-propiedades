/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Comfortaa', 'cursive'],
        body: ['Questrial', 'sans-serif'],
      },
      colors: {
        brand: {
          title: '#00cd9c',    // Verde agua para títulos
          subtitle: '#218491', // Azul verdoso para subtítulos
          text: '#000000',     // Negro puro para textos
          light: '#F8F9FA'     // Fondo gris muy claro para contraste
        }
      }
    },
  },
  plugins: [],
}