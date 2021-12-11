module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {

        'new_color1': '#461F3D',
        'highlight_color1': '#F3CADF',
        'button1': '#C78AA8',
        'button2': '#7A199C',
        'moon_date': '#FFBEBE',
        'cart_bg': '#E8EEFF',

      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '90%': '90%',
        '50%': '50%',
        '16': '4rem',
      },
      width: {
        '22': '5.5rem',
        '25': '6.25rem',
        '30': '7.5rem',
      },
      height: {
        '22': '5.5rem',
        '25': '6.25rem',
        '30': '7.5rem',
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
