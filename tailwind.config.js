module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // backgroundColor: (theme) => ({
    //   ...theme('colors'),
    //   main: '#D47163',
    //   accent: '#8382A4',
    //   accentDark: '#95474C',
    //   light: '#fdfdfd',
    //   dark: '#e3342f',
    // }),
    fontFamily: {
      heading: ['Raleway', 'sans-serif'],
      text: ['Open Sans', 'ui-sans-serif', 'system-ui'],
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        primaryHovered: 'var(--color-primary-hovered)',
        secondary: 'var(--color-secondary)',
        secondaryHovered: 'var(--color-secondary-hovered)',
        accent: 'var(--color-accent)',
        accentHovered: 'var(--color-accent-hovered)', // #331e54 || #301e4e || #361a5e
        light: 'var(--color-light)',
        dark: 'var(--color-dark)', // #1c0f30 || #1f1235
      },
      gridTemplateColumns: {
        'grail-md': '300px 5fr',
        'grail-xl': '240px 2fr 1fr',
      },
      maxWidth: {
        'fit-content': 'fit-content',
      },
      minWidth: {
        60: '15rem',
        80: '20rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// main #fdfdfd
// accent #88E9A3
// accentDark #009E85 || #078080
// light #E3F6F5
// dark #324B4A

// main #f4effc
// secondary #67568c
// accent #ff6e6c
// accentDark #301e4e
// light #fdfdfd
// dark #1f1235

// colors: {
//   main: '#8D8999',
//   accent: '#AF3940',
//   accentDark: '#A80000',
//   light: '#F7F4F4',
//   dark: '#18191A', //181C1B
// },
