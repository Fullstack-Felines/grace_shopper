/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        azure: "#ECF8F8",
        pink: "#EEE4E1",
        tan: "#E7D8C9",
        red: "#E6BEAE",
        brown: "#B2967D",
        cafe: "#A48565",
        umber: "#745D44",
        brass: "#BD8775",
        darkbrown: "#181411",
        black: "#0D0A08",
        white: "#FFFFFF",
        gray: "#969696",
        coral: "#f27c82",
        cardpaper: "#F6F1F0",
        cultured: "#edf1f0",
        indeed: "#2164f4",
        github: "#6cc644",
        admin: "#D2042D",
      },
      backgroundImage: {
        "home-pattern":
          "url('https://res.cloudinary.com/dkmoq49jf/image/upload/v1661285874/169071-pic-domestic-kitten-free-download-png-hq_gw2ase.png')",
      },
    },
  },
  plugins: [],
};
