const path = require('path');

module.exports = 
{
  mode:'development',
  entry: './src/index.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/build'),
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    compress:true,
    port:3000
  },
};