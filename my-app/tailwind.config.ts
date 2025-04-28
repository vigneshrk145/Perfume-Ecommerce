// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        animation: {
          'fade-right': 'fade-right 0.8s ease-out',
        },
        keyframes: {
          'fade-right': {
            '0%': { opacity: 0, transform: 'translateX(-20px)' },
            '100%': { opacity: 1, transform: 'translateX(0)' },
          },
        },
      },
    },
  };
  