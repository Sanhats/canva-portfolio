/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        burgundy: {
          50: '#fdf2f2',
          100: '#fce6e6',
          200: '#f9cccc',
          300: '#f4a8a8',
          400: '#ed7777',
          500: '#e14d4d',
          600: '#d12d2d',
          700: '#722F37',
          800: '#5a2529',
          900: '#4a1f22',
        },
      },
      fontFamily: {
        sans: ['var(--font-work-sans)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
}
