/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-background': 'radial-gradient(at center, #6986BE, #0264B8)',
        'warm-gradient': 'linear-gradient(to right, yellow, orange, red)'
      },
      fontFamily: {
        nabla: ['Nabla', 'sans-serif'],
        honk: ['Honk', 'sans-serif'],
        comfortaa: ['Comfortaa', 'sans-serif']
      },
      // keyframes and animation from https://stackoverflow.com/questions/30872773/css-only-3d-spinning-text
      animation: {
        spinner: 'spinner 3s linear 2, depth 3s linear 2'
      },
      keyframes: {
        spinner: {
          from: { transform: 'rotateY(0deg)' }, 
          to: { transform: 'rotateY(-360deg)' }
        },
        depth: {
          '0%, 50%, 100%': { textShadow: '0 0 currentcolor' },
          '25%': { textShadow: '1px 0 currentcolor, 2px 0 black, 3px 0 currentcolor, 4px 0 currentcolor, 5px 0 currentcolor' },
          '75%': { textShadow: '-1px 0 currentcolor, -2px 0 currentcolor, -3px 0 currentcolor, -4px 0 currentcolor, -5px 0 currentcolor' }
        }
      }
    },
  },
  plugins: [],
}

