/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-green": "#2E6E65",
        "secondary-green": "#3D9286",
        "gray": "#C1BEBC",
        "navy": "#2B3752",
        "White":"#f4f7ed"
      },
      
    },
  },
  
};
