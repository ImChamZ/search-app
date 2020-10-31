const HtmlWebPackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    compress: true,
    publicPath: '/',
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'public/dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/i,
        use: [
          { loader: 'style-loader', options: { injectType: 'linkTag' } },
          { loader: 'file-loader' },
        ],
      },
    ],
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
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
