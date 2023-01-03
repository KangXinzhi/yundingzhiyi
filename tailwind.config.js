// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //自定义颜色
        "welcome-btn": "#0052FF",
      },
    },

  },
  plugins: [],
}