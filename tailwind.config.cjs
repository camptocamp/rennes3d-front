/* eslint-env node */
module.exports = {
  content: ['index.html', './src/**/*.{html,js,ts,vue}'],
  safelist: [
    'bg-indigo-100',
    'bg-pink-100',
    'bg-emerald-100',
    'bg-purple-100',
    'bg-indigo-300',
    'bg-pink-300',
    'bg-emerald-300',
    'bg-purple-300',
    'bg-indigo-600',
    'bg-pink-600',
    'bg-emerald-600',
    'bg-purple-600',
    'border-indigo-50',
    'border-pink-50',
    'border-emerald-50',
    'border-purple-50',
    'fill-indigo-600',
    'fill-pink-600',
    'fill-emerald-600',
    'fill-purple-600',
    'stroke-indigo-50',
    'stroke-pink-50',
    'stroke-emerald-50',
    'stroke-purple-50',
    // Link colors
    'before:bg-neutral-900',
    'stroke-neutral-900',
    'before:bg-red-600',
    'stroke-red-600',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        'dm-sans': ['DM Sans'],
      },
      colors: {
        'gray-dark': '#5E5E5E',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
