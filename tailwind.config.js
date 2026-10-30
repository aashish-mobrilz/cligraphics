/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Option A promotional palette
        promo: {
          primary: '#0B3B60',       // Trustworthy deep commercial navy
          primaryHover: '#072842',
          accent: '#E65100',        // Vibrant promotional orange/amber
          accentHover: '#C64500',
          badge: '#EBF4FA',
          subtle: '#F4F7F9',
          border: '#D1DCE5',
        },
        // Option B editorial corporate palette
        editorial: {
          primary: '#1A2328',       // Refined executive slate/charcoal
          primaryHover: '#0F1518',
          accent: '#B8860B',        // Muted bronze / antique gold
          accentHover: '#986D07',
          surface: '#FBFBFA',       // Warm gallery cream
          subtle: '#F1F1EE',
          border: '#E2E2DC',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'Cambria', 'serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

