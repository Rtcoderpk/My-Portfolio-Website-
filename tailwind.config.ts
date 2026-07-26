import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        dark: '#08070f',
        darker: '#040309',
        surface: '#0d0c18',
        accent: '#a78bfa',
        primary: '#7c3aed',
        secondary: '#3b82f6',
        tertiary: '#06b6d4',
        'violet-glow': '#8b5cf6',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern':
          'linear-gradient(rgba(139,92,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.06) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 20px rgba(139,92,246,0.45)',
        'glow-lg': '0 0 50px rgba(139,92,246,0.35)',
        'glow-blue': '0 0 30px rgba(59,130,246,0.35)',
        'glow-sm': '0 0 12px rgba(139,92,246,0.4)',
        card: '0 8px 30px rgba(0,0,0,0.35)',
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-slower': 'spin 35s linear infinite',
        'spin-reverse': 'spin-reverse 25s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'dash-flow': 'dash-flow 3s linear infinite',
        'hex-flow': 'hex-flow 3s linear infinite',
        'hex-flow-reverse': 'hex-flow-reverse 4s linear infinite',
        'particle-float': 'particle-float 12s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 9s ease-in-out infinite',
        'grid-fade': 'grid-fade 1.5s ease-out forwards',
        blink: 'blink 1.4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'dash-flow': {
          '0%': { strokeDashoffset: '24' },
          '100%': { strokeDashoffset: '0' },
        },
        blink: {
          '0%, 80%, 100%': { opacity: '0.3', transform: 'scale(0.85)' },
          '40%': { opacity: '1', transform: 'scale(1)' },
        },
        'hex-flow': {
          '0%': { strokeDashoffset: '3600' },
          '100%': { strokeDashoffset: '0' },
        },
        'hex-flow-reverse': {
          '0%': { strokeDashoffset: '-3600' },
          '100%': { strokeDashoffset: '0' },
        },
        'particle-float': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)', opacity: '0.3' },
          '25%': { transform: 'translateY(-20px) translateX(8px)', opacity: '0.6' },
          '50%': { transform: 'translateY(-8px) translateX(-5px)', opacity: '0.2' },
          '75%': { transform: 'translateY(-16px) translateX(4px)', opacity: '0.5' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'grid-fade': {
          '0%': { opacity: '0' },
          '100%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}

export default config
