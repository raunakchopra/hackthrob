module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors:{
          schemeColor: '#FF7F41',
        },
        minWidth:{
          '1/3':'33%'
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }