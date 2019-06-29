/**
 * Webpack configuration specifics for the clientside.
 */

const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.common.js');

const config = {
  context: __dirname,
  entry: ['./client_src/javascripts/index.js'],
  output: {
    path: path.join(__dirname, 'public', 'js'),
    filename: 'client-bundle.js',
    pathinfo: false,
  },
  resolve: {
    extensions: ['.js', '.json', '.scss']
  }
};

module.exports = merge(baseConfig, config);