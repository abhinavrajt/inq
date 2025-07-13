/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'], // clean tech-style font
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'glow': 'glowPulse 2s ease-in-out infinite',
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
      },
    },
  },
  plugins: [],
}
