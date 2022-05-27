const colors = {
  'off-black': '#3f3a5a',
}

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'ui-sans-serif', 'Helvetica Neue', 'sans-serif'],
    },
    extend: {
      colors,
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
  },
}
