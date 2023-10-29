/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans"], // Add Poppins to the default sans-serif fonts
    },
    extend: {
      fontSize: {
        "70px": "10px",
        "16px": "16px",
        "14px": "14px",
        "18px": "18px",
        logo: "40px",
        "13px": "13px",
        "20px": "20px",
        "28px": "28px",
        "24px": "24px",
        "30px": "30px",
      },
      colors: {
        whiteColor: "#FFFFFF",
        brandRed: "#FF0000",
        blackColor: "#000000",
        brandYellow: "#FFF122",
        offCoffee: "#EFC5A7",
        brandOrange: "#F6BD60",
        brandGreen: "#06E401",
        lightGrey: "#F2F2F2",
        deepGrey: "#CEC1B4",
        brandPrimary: '#FFF122',
        brandGrey: '#f2f2f2',
        pending: '#FFA800'


      },
    },
  },
  daisyui: {
    base: false,
    themes: ["light"]
  },

  plugins: [
    require("tailwind-scrollbar-hide"),
    require("daisyui"),
    function ({ addUtilities }) {
      const newUtilities = {
        '.mask-gradient': {
          maskImage: 'linear-gradient(to top, rgba(0,0,0,0) , white )',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0), white)'
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
