/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink:   '#0F172A',
        body:  '#475569',
        muted: '#94A3B8',
        line:  '#E2E8F0',
        blue:  { DEFAULT: '#2563EB', deep: '#1D4ED8', soft: '#EFF4FF' },
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: { content: '1080px' },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
