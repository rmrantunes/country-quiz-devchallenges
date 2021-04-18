const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "dark-blue": "#2F527B",
        mustard: "#F9A826",
      },
      spacing: {
        116: "29rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
