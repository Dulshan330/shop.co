/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        primaryBlack:['Poppins-Black'],
        primaryBold:['Poppins-Bold'],
        primaryExtraBold:['Poppins-ExtraBold'],
        primaryExtraLight:['Poppins-ExtraLight'],
        primaryMedium:['Poppins-Medium'],
        primaryRegular:['Poppins-Regular'],
      },
      colors:{
        black: '#000000',
        grayLight: '#F3F4F6',
        grayLightWeight: '#e5e7eb',
        grayWeight: '#9ca3af',
        white: '#FFFFFF',
        redLight: '#FECACA',
        redDark: '#B91C1C',
      },
      keyframes:{
        marquee:{
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      }
    },
  },
  plugins: [],
}

