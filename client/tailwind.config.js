module.exports = {
  purge: [ './public/**/*.html','./src/**/*.js','./src/**/*.jsx',],
  darkMode: false, // or 'media' or 'class'
  theme: 
  {
    fontFamily: 
    {
      'sans': 'ui-sans-serif, system-ui',
      'serif': 'ui-serif, Georgia',
      'mono': 'ui-monospace, SFMono-Regular',
      'rubi': 'Rubik',
     },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
