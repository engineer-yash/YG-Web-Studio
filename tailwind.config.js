/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#071824',
        surface: '#0E2A36',
        gold: '#D4AF37',
        goldLight: '#E8C963',
        goldDark: '#A8862A',
        cream: '#FFFFFF',
        muted: '#CFCFCF',
      },
      fontFamily: {
        sans: ['Manrope', 'Poppins', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Manrope', 'system-ui', 'sans-serif'],
        script: ['\"Dancing Script\"', 'cursive'],
      },
      boxShadow: {
        gold: '0 0 30px rgba(212, 175, 55, 0.35)',
        goldSm: '0 0 14px rgba(212, 175, 55, 0.25)',
        cardDark: '0 20px 60px rgba(0,0,0,0.45)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E8C963 0%, #D4AF37 50%, #A8862A 100%)',
        'dark-gradient': 'radial-gradient(circle at 20% 0%, #0E2A36 0%, #071824 60%)',
      },
      keyframes: {
        floatY: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        glow: {
          '0%,100%': { boxShadow: '0 0 20px rgba(212,175,55,0.25)' },
          '50%': { boxShadow: '0 0 40px rgba(212,175,55,0.55)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        floatY: 'floatY 6s ease-in-out infinite',
        glow: 'glow 2.6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};