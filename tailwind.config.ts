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
    },
    fontFamily: {
      primary: 'var(--font-bebas-neue)',
      primary_ru: 'var(--font-oswald)',
      regular: 'var(--font-inter)',
    },
    extend: {
      screens: {
        xl: '1440px',
        lg: '1024px',
        md: '768px',
        sm: '360px',
      },
      colors: {
        text: '#5B5D5E',
        accent: '#FFC41F',
        yellow: '#E0AB15',
        gray_light: '#ECECEC',
        placeholder: '#D4D4D4',
      },
      backgroundImage: {
        'custom-gradient':
          'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.75) 75%, rgba(255, 255, 255, 0) 100%)',
        'product-gradient': 'linear-gradient(320deg, #FFFFFF, #FFEAAF)',
      },
      opacity: {
        '50': '0.5',
      },
      boxShadow: {
        'custom-combined': `
          0px 20px 30px 0px rgba(0, 0, 0, 0.05), 
          inset 0px 3px 8.1px 0px rgba(255, 255, 255, 0.5)
    `,
        'features-shadow': `
          8px 8px 20px 0px rgba(0, 0, 0, 0.1) 
    `,
      },
    },
  },
  plugins: [],
} satisfies Config;
