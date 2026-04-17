/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0a0f1e',
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
        },
        neon: {
          DEFAULT: '#2effc3',
          dim: '#1aad84',
          glow: 'rgba(46,255,195,0.15)',
          border: 'rgba(46,255,195,0.35)',
        },
        glass: 'rgba(255,255,255,0.04)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 20px rgba(46,255,195,0.4), 0 0 60px rgba(46,255,195,0.15)',
        'neon-sm': '0 0 10px rgba(46,255,195,0.3)',
        'neon-lg': '0 0 40px rgba(46,255,195,0.5), 0 0 100px rgba(46,255,195,0.2)',
        glass: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
      },
      animation: {
        'pulse-neon': 'pulseNeon 3s ease-in-out infinite',
        'scan': 'scan 4s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'grid-move': 'gridMove 20s linear infinite',
      },
      keyframes: {
        pulseNeon: {
          '0%,100%': { boxShadow: '0 0 20px rgba(46,255,195,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(46,255,195,0.8), 0 0 80px rgba(46,255,195,0.3)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gridMove: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(60px)' },
        },
      },
    },
  },
  plugins: [],
};