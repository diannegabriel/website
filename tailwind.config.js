/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      container: "",
      contentContainer: "",
      containerSmall: "",
      containerXS: ""
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        smL: "500px",
        md: "667px",
        mdL: "768px",
        lg: "960px",
        lgL: "1024px",
        xl: "1280px"
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
