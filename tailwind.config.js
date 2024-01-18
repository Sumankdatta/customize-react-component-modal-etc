/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        primary: "Linear-gradient(30deg,#7e22ce,#082f49)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
