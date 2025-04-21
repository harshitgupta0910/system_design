// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: ["./index.html", "./src/**/*.{ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: "var(--color-primary)",
//         secondary: "var(--color-secondary)",  
//         success: "var(--color-success)",
//         warning: "var(--color-warning)",
//         error: "var(--color-error)",
//       },
//     },
//   },
//   darkMode: "class",
//   plugins: [],
// };

// export default config;

// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
