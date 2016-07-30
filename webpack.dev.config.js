const path = require('path');
const webpack = require('webpack');

module.exports = {

  devtool: 'eval',

  entry: [
    './client/main'
  ],
  output: {
    path: path.join(__dirname, 'client'),
    filename: 'index.js',
    publicPath: '/client/'
  },
  devServer: {
    inline: true,
    contentBase: './client',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css',
        include: path.join(__dirname, 'client', 'styles')
      }
    ]
  }
}