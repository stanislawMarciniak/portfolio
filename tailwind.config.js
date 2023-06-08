const { colors } = require("./config.json");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ...colors,
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
