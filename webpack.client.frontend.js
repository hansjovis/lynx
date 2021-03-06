/**
 * Webpack configuration specifics for the clientside.
 */

const path = require( 'path' );
const merge = require( 'webpack-merge' );
const baseConfig = require( './webpack.common.js' );

const config = {
  context: __dirname,
  entry: [ './client_src/script/frontend/index.js' ],
  output: {
    path: path.join( __dirname, 'public', 'js' ),
    filename: 'frontend-bundle.js',
    pathinfo: false,
  },
  resolve: {
    extensions: [ '.js', '.json', '.scss' ]
  }
};

module.exports = merge( baseConfig, config );