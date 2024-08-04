/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xl: { max: "81.25em" },
      // => @media (max-width: 1300px) { ... }
      lg: { max: "63.93em" },
      // => @media (max-width: 1023px) { ... }
      md: { max: "47.93em" },
      // => @media (max-width: 767px) { ... }
      sm: { max: "39.93em" },
      // => @media (max-width: 639px) { ... }
      ph: { max: "21.87em" },
      // => @media (max-width: 350px) { ... }
    },
  },
  plugins: [],
};
