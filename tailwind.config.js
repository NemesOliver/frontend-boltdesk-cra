module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "814px",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        p: ["1.25rem"], // 20px
      },
      colors: {
        body: "#EFEFEF",
        background: "#FFFFFF",
        primary: "#0A2637",
        secondary: "#F89B1C",
        primaryHover: "#0C486C",
        backdrop: "rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
