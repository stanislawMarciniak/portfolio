const { colors } = require("./config.json");
const defaultColors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    colors: {
      darkCustom: "#151515",
      transparent: "transparent",
      current: "currentColor",
      ...colors,
      ...defaultColors,
    },
    extend: {
      width: {
        custom: "450px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
