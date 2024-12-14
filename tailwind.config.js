/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['Lobster', 'cursive'], // 'cursive' as fallback
      },
      colors: {
        'gradient-start': '#133F95',
        'gradient-end': '#CCFCFD',
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        slideUp: 'slideUp 2s ease-in-out',
        typing: 'typing 4s steps(30, end) infinite alternate',
        blink: 'blink 0.5s step-end infinite',
        glow: 'glow 6s ease infinite',
        spinParticles: 'spinParticles 3s ease-in-out infinite',
        spinWrapper: 'spinWrapper 3s linear infinite',
        flyCycle: "flyCycle 1s steps(10) infinite",
        flyRight: "flyRight 15s linear infinite",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        spinParticles: {
          '0%': { opacity: '0', width:0, transform: 'translate3d(-4px, -4px, 0px)' },
          '100%': { opacity: '1',width:10, transform: 'translate3d(-4px, -4px, 570px)' },
        },
        spinWrapper: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(720deg)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        typing: {
          'from': { width: '0%' },
          'to': { width: '100%' },
        },
        blink: {
          '50%': { 'border-color': 'transparent' },
        },
        glow: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}