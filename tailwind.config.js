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
        "primary-green": "#3FA037",
        "secondary-green": "#4DB33D",
        "gray": "#C1BEBC",
      },
      
    },
  },
  
};
