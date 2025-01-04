/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },

      colors: {
        "hey-yellow": "#fde03c",
        "hey-yellow-dark": "#FDD90D",
        "hey-blue": "#5848a0",

        "hey-gray": "#8F8F8F",
        "hey-light-gray": "#D3D3D3",
        // "hey-bg-gray": "#D3D3D3",
        "hey-medium-gray": "#A3A3A3",
        "hey-dark-gray": "#707070",

        "hey-blue": "#007bce",
        "hey-light-blue": "#358fcc",

        "hey-crimson": "#E11439",
        "hey-light-crimson": "#EE2F52",
        "hey-dark-crimson": "#970C26",

        "notifications-light-blue": "#2ebfec",
        "active-pink": "#e91e63",
        "active-background": "#efefef",
      },
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"], // Set Ubuntu as the default sans-serif font
      },
    },
  },
  plugins: [],
};
