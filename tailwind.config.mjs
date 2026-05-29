/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        kraken: {
          abyss:   '#04080f',
          deep:    '#060d1a',
          ocean:   '#0a1628',
          navy:    '#1a2744',
          blue:    '#1e3a5f',
          gold:    '#c9a84c',
          'gold-light': '#e8c66d',
          'gold-dim':   '#a07c30',
          cream:   '#f5e6c8',
          sand:    '#e8d5a3',
          rope:    '#8b6535',
          wood:    '#4a2e0a',
          rust:    '#b84a2a',
          teal:    '#1a6b6b',
        },
      },
      fontFamily: {
        pirata: ['"Pirata One"', 'cursive'],
        cinzel: ['"Cinzel"', 'serif'],
        crimson: ['"Crimson Pro"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(90deg, #c9a84c 0%, #e8c66d 40%, #c9a84c 60%, #a07c30 100%)',
        'ocean-depth': 'radial-gradient(ellipse at top, #1a2744 0%, #0a1628 40%, #04080f 100%)',
        'wood-grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
      },
      animation: {
        'float':         'float 6s ease-in-out infinite',
        'float-slow':    'float 9s ease-in-out infinite',
        'float-fast':    'float 4s ease-in-out infinite',
        'sway':          'sway 5s ease-in-out infinite',
        'sway-r':        'swayR 6s ease-in-out infinite',
        'shimmer':       'shimmer 3s linear infinite',
        'pulse-gold':    'pulseGold 2.5s ease-in-out infinite',
        'wave-drift':    'waveDrift 8s ease-in-out infinite',
        'rise':          'rise 1s ease-out forwards',
        'fade-up':       'fadeUp 0.9s ease-out forwards',
        'fade-in':       'fadeIn 1s ease-out forwards',
        'text-glow':     'textGlow 3s ease-in-out infinite',
        'spin-slow':     'spin 20s linear infinite',
        'tentacle':      'tentacle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-18px)' },
        },
        sway: {
          '0%,100%': { transform: 'rotate(-4deg) translateX(-6px)' },
          '50%':     { transform: 'rotate(4deg) translateX(6px)' },
        },
        swayR: {
          '0%,100%': { transform: 'rotate(4deg) translateX(6px)' },
          '50%':     { transform: 'rotate(-4deg) translateX(-6px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulseGold: {
          '0%,100%': { boxShadow: '0 0 20px rgba(201,168,76,0.3), 0 0 60px rgba(201,168,76,0.1)' },
          '50%':     { boxShadow: '0 0 40px rgba(201,168,76,0.6), 0 0 100px rgba(201,168,76,0.2)' },
        },
        waveDrift: {
          '0%,100%': { transform: 'translateX(0) scaleY(1)' },
          '50%':     { transform: 'translateX(-20px) scaleY(1.05)' },
        },
        rise: {
          '0%':   { opacity: '0', transform: 'translateY(60px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        textGlow: {
          '0%,100%': { textShadow: '0 0 20px rgba(201,168,76,0.4)' },
          '50%':     { textShadow: '0 0 60px rgba(201,168,76,0.9), 0 0 100px rgba(201,168,76,0.4)' },
        },
        tentacle: {
          '0%,100%': { transform: 'rotate(-5deg) scaleY(1)   translateX(0)' },
          '25%':     { transform: 'rotate(2deg)  scaleY(1.02) translateX(4px)' },
          '75%':     { transform: 'rotate(-2deg) scaleY(0.98) translateX(-4px)' },
        },
      },
    },
  },
  plugins: [],
};
