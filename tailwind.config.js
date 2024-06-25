/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
    },
    fontSize: {
      base: "1rem",
      "13xl": "2rem",
      mini: "0.938rem",
      "29xl": "3rem",
      "5xl": "1.5rem",
      lg: "1.125rem",
      "17xl": "2.25rem",
      "19xl": "2.375rem",
      "10xl": "1.813rem",
      lgi: "1.188rem",
      "3xl": "1.375rem",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
