/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Anton, sans-serif']
    },
    extend: {
      rotate: {
        270: '270deg'
      },
      backgroundImage: {
        'hero-pattern': "url('/public/paloma_infinity_shot.avif')"
      }
    }
  },
  plugins: []
}
