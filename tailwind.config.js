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
        'footer_bg': '#FBE4F7',
        'color_divide': '#A5A3A3',
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
        'footer': '333px',
      },
      fontSize: {
        'copyright': '10px',
        '28': '1.75rem',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',

        'ali1': '3rem',
        'ali2': '4rem',
        'ali3': '5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
