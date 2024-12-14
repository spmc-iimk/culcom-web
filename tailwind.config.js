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
        blink: 'blink 0.5s step-end infinite',
        glow: 'glow 6s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
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