module.exports = {
    plugins: 
      [
        require('postcss-import'),
        require('autoprefixer'),
        require('tailwindcss'),
        require('postcss-preset-env')({ stage: 1 }),
      ],
  };
  