/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPink: "#FF99C9",
        customPurple: "#C1BDDB",
      },
    },
    plugins: [],
  },
};
