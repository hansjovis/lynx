/**
 * Webpack configuration specifics for the admin part of the clientside.
 */

const path = require( 'path' );
const merge = require( 'webpack-merge' );
const baseConfig = require( './webpack.common.js' );

const config = {
  context: __dirname,
  entry: [ './client_src/script/admin/index.js' ],
  output: {
    path: path.join( __dirname, 'public', 'js' ),
    filename: 'admin-bundle.js',
    pathinfo: false,
  },
  resolve: {
    extensions: [ '.js', '.json', '.scss' ]
  }
};

module.exports = merge( baseConfig, config );