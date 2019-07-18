/**
 * Webpack configuration specifics for the serverside.
 */

const path = require( 'path' );
const merge = require( 'webpack-merge' );
const commonConfig = require( './webpack.common.js' );
const nodeExternals = require( 'webpack-node-externals' );

const config = {
  target: 'node',
  // Exclude all Node specific files (e.g. from 'node_modules')
  externals: [ nodeExternals() ],
  entry:  [ './bin/www' ],
  output:  {
    filename: 'server.js',
    path: path.resolve( __dirname, 'server' ),
  },
  resolve: {
    extensions: [ '.js', '.json' ]
  },
}

module.exports = merge( commonConfig, config );
