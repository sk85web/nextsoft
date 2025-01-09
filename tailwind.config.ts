import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      // screens: {
      // sm: '360px',
      // md: '768px',
      // lg: '960px',
      // max-xl: '1440px',
      // },
    },
    fontFamily: {
      primary: 'var(--font-bebas-neue)',
      regular: 'var(--font-inter)',
    },
    extend: {
      screens: {
        'max-xl': '1440px', // Добавляем кастомный брейкпоинт
      },
      colors: {
        text: '#5B5D5E',
        accent: '#FFC41F',
        yellow: '#E0AB15',
        placeholder: '#D4D4D4',
      },
      backgroundImage: {
        'custom-gradient':
          'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.75) 75%, rgba(255, 255, 255, 0) 100%)',
      },
      opacity: {
        '50': '0.5',
      },
      boxShadow: {
        'custom-combined': `
          0px 20px 30px 0px rgba(0, 0, 0, 0.05), 
          inset 0px 3px 8.1px 0px rgba(255, 255, 255, 0.5)
    `,
      },
    },
  },
  plugins: [],
} satisfies Config;
