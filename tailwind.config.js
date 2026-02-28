/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./constants.ts",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        'brand-primary': '#ea580c', // Orange 600
        'brand-secondary': '#c2410c', // Orange 700
        'brand-light': '#fb923c', // Orange 400
        // Light theme colors
        'light-bg': '#fff7ed', // Orange 50 (Very light warm background)
        'light-bg-secondary': '#ffffff',
        'light-bg-tertiary': '#ffedd5', // Orange 100
        'light-text-primary': '#1c1917', // Stone 900
        'light-text-secondary': '#44403c', // Stone 700
        // Dark theme colors
        'dark-bg': '#0c0a09', // Stone 950
        'dark-bg-secondary': '#1c1917', // Stone 900
        'dark-bg-tertiary': '#292524', // Stone 800
        'dark-text-primary': '#f5f5f4', // Stone 100
        'dark-text-secondary': '#a8a29e', // Stone 400
      },
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
