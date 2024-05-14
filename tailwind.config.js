const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        // https://www.colorhexmap.com/00917c (shades + tint)
        primary: {
          DEFAULT: '#004AAD',
          950: '#002557',
          900: '#002e6c',
          800: '#003882',
          700: '#004197',
          600: '#004AAD', // default primary
          500: '#2061b7',
          400: '#4077c2',
          300: '#608ecc',
          200: '#80a5d6',
          100: '#9fbbe0',
          50: '#bfd2eb'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-font-inter')
  ]
};
