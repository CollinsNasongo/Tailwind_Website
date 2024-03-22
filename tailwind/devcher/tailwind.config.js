/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',

  content: ['./build/*.html'],
  theme: {
    extend: {
      keyframes:{
        'slideIn':{
          '0%': {transform: 'translateX(100%)'},
          '100%': { transform: 'translateX(0)' },
        },
        'slideOut':{
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        'slideIn': 'slideIn 0.5s ease-in forwards',
        'slideOut': 'slideOut 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}

