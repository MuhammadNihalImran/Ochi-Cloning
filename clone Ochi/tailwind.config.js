/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    keyframes: {
      // 'border-bottom':{
      //   '0%':{transform : translatex("0%")},
      //   '100%':{transform : translatex("100%")}
      // }
     
    },
    animation: {
      'border-bottom': 'border-bottom 1s ease-in-out infinite',
    },
  },
  plugins: [],
}

