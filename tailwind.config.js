/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5242FF",
        secondary: "gray-500",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: { nunito: ["Nunito Sans", "sans-serif"] },
    },
    backgroundImage: {
      hero: "url('/images/Hero.jpg')",
      video: "url('/svgs/Background.svg')",
    },
  },
  plugins: [],
};
