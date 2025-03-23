/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'risk-high': '#DC2626',  // Red for high risk
        'risk-medium': '#F59E0B', // Amber for medium risk
        'risk-low': '#10B981',    // Green for low risk
        'cyber-dark': '#0F172A',  // Dark blue for backgrounds
        'cyber-accent': '#3B82F6', // Blue for accents
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}