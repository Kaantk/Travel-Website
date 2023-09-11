/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          blue: "#0F3DDE",
          gray: "#D9D9D9",
          green: "#3A5B22",
        },
      },
    },
  },
  plugins: [],
};
