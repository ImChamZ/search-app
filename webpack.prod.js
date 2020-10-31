const HtmlWebPackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: [
          { loader: 'style-loader', options: { injectType: 'linkTag' } },
          { loader: 'file-loader', options: { name: '[name].[ext]' } },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new webpack.EnvironmentPlugin({
      NODE_API_URL_BASE: 'http://localhost:3005/api',
    }),
  ],
  resolve: {
    extensions: ['.js', '.scss'],
    alias: {},
  },
};
