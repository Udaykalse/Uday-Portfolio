

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         navbarColor: '#003135',
//         divColor: '#024950',
//         cardsDIv:'#AFDDE5'
//       },
//     },
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbarColor: '#003135',
        divColor: '#024950',
        cardsDIv:'#AFDDE5'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        textGlow: {
          '0%': { textShadow: '0 0 5px rgba(255,255,255,0.5)' },
          '100%': { textShadow: '0 0 20px rgba(255,255,255,1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-out',
        slideInLeft: 'slideInLeft 1.5s ease-out',
        textGlow: 'textGlow 3s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};
