const path = require('path');

module.exports = 
{
  mode:'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/build'),
  },
  module: {
    rules: [
      {
        test: /\.m?(js)?(jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader"
        ],
      },
    ],
    
  },
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    watchContentBase: true,
    writeToDisk: true,
    compress:true,
    port:3000
  },
};