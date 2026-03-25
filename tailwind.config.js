/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          navy: {
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            300: '#CBD5E1',
            400: '#94A3B8',
            500: '#64748B',
            600: '#475569',
            700: '#334155',
            800: '#1E3A5F',
            900: '#1B3A57', // 深海蓝 - 主色
          },
          gold: {
            50: '#FEFDFB',
            100: '#FDF6E9',
            200: '#F9E9D0',
            300: '#F4D4A8',
            400: '#C9B085',
            500: '#B89B6A', // 哑光金 - 强调色
            600: '#9B7F54',
            700: '#7D6441',
            800: '#5F4A31',
            900: '#413121',
          },
        },
        fontFamily: {
          sans: ['Inter', 'Helvetica Neue', 'sans-serif'],
          serif: ['Noto Serif SC', 'serif'],
          mono: ['Roboto Mono', 'monospace'],
        },
        maxWidth: {
          '7xl': '1400px',
        },
        transitionTimingFunction: {
          'default': 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
    plugins: [],
  }