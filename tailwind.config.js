/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fume: {
          "0%": {
            transform: "translateX(-80px) rotate(180deg)",
          },
          "20%": { transform: "translateX(-20px) rotate(180deg)" },
          "40%": { transform: "translateX(40px) rotate(180deg)" },
          "60%": { transform: "translateX(100px) rotate(180deg)" },
          "80%": { transform: "translateX(160px) rotate(180deg)" },
          "100%": { transform: "translateX(210px) rotate(180deg)" },
        },
        rocket: {
          "0%": { transform: "translateX(-185px) rotate(45deg)" },
          "20%": { transform: "translateX(-125px) rotate(45deg)" },
          "40%": { transform: "translateX(-65px) rotate(45deg)" },
          "60%": { transform: "translateX(-5px) rotate(45deg)" },
          "80%": { transform: "translateX(55px) rotate(45deg)" },
          "100%": { transform: "translateX(105px) rotate(45deg)" },
        },
      },
      animation: {
        rocketFume: "fume 1s cubic-bezier(0.02, 0, 1, 1) forwards",
        rocketLaunch: "rocket 1s cubic-bezier(0.02, 0, 1, 1) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
