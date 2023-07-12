/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "320px",
        xs: "375px",
        sm: "500px",
        md: "667px",
        lg: "768px",
        xlg: "960px",
        xxlg: "1024px",
        xxxlg: "1280px"
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      fontFamily: {
        bodyFont: ["Roboto", "sans-serif"]
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2, 12, 27, 0.7)"
      },
      colors: {
        bodyBgColor: "#130A24",
        textAccent: "#EC8D00",
        textLight: "",
        textDark: "",
        hoverColor: ""
      }
    },
  },
  plugins: [],
}
