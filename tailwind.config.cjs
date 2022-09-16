/* eslint-env node */
module.exports = {
  content: ['index.html', './src/**/*.{html,js,ts,vue}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors: {
        't1-line': '#D18725',
        't2-line': '#DF51A9',
        't3-line': '#61D03F',
        't4-line': '#68E3DF',
      },
    },
  },
  plugins: [],
}
