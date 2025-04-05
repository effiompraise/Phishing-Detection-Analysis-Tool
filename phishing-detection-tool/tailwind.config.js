/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        '3xl': '1792px',
      },
      colors: {
        'risk-high': '#DC2626',
        'risk-medium': '#F59E0B',
        'risk-low': '#10B981',
        'cyber-dark': '#0F172A',
        'cyber-accent': '#3B82F6',
        'dark-bg': '#0a0f1f',
        'card-dark': '#1e293b',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontSize: {
        'xxs': '0.625rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
  darkMode: 'class',
}