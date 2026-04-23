/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Aquí definimos los colores exactos de tu imagen
        'nova-black': '#0D0D0D',   // Fondo oscuro profundo
        'nova-card': '#161616',    // Fondo de los cuadritos
        'nova-green': '#00FFA3',   // El verde neón brillante
        'nova-border': '#2A2A2A',  // El color de los bordes sutiles
      },
      borderRadius: {
        'nova': '2.5rem', // Los bordes bien redondeados que te gustaron
      }
    },
  },
  plugins: [],
}