const radixColors = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "./docs/**/*.md"
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      boxShadow: {
        button:
          "inset 0px -1px 1px rgba(0, 0, 0, 0.2), inset 0px 1px 1px rgba(255, 255, 255, 0.2)",
      },

      animation: {
        float: "float 12s infinite linear",
        "float-fast": "float 10s infinite linear",
        "float-fastest": "float 8s infinite linear",
      },
      keyframes: {
        float: {
          "0%": {
            transform:
              " rotate(-0.001deg) translate3d(15px, 0, 0) rotate(-0.001deg)",
          },
          "100%": {
            transform:
              "rotate(360.001deg) translate3d(15px, 0, 0) rotate(-360.001deg)",
          },
        },
      },
    },
  },
  corePlugins: {
    preflight: false,
    container: false,
  },
  plugins: [
    require("windy-radix-palette")({
      colors: {
        gray: radixColors.gray,
        grayDark: radixColors.grayDark,
        grayA: radixColors.grayA,
        grayDarkA: radixColors.grayDarkA,
        purple: radixColors.purple,
        purpleDark: radixColors.purpleDark,
      },
    }),
    // require("@tailwindcss/typography"),
  ],
};
