/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#114B8C',
        secondary: '#00A878',
        accent: '#FF8A3D',
        bgMain: '#F5F7FA',
        bgCard: '#FFFFFF',
        textMain: '#111827',
        textSecondary: '#4B5563',
        border: '#E5E7EB',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
