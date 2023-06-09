/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#2470be",

          "secondary": "#ED3562",

          "accent": "#C148AC",

          "neutral": "#021431",

          "base-100": "#FFFFFF",

          "info": "#93E7FB",

          "success": "#81CFD1",

          "warning": "#EFD7BB",

          "error": "#E58B8B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}