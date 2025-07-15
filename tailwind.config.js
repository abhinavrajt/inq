/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        pixel: ['"Press Start 2P"', 'system-ui', 'monospace'], // or your custom pixel font name
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid': 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '120px 120px',
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'glow': 'glowPulse 2s ease-in-out infinite',
        'gridMove': 'gridMove 40s linear infinite',
        'pulseSlow': 'pulse 6s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'floatUp': 'floatUp 8s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': {
            textShadow: '0 0 6px #0ff, 0 0 10px #0ff',
          },
          '50%': {
            textShadow: '0 0 12px #00ffff, 0 0 18px #0ff',
          },
        },
        gridMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '100px 100px' },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        floatUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100vh)' },
        },
      },
    },
  },
  plugins: [],
};
