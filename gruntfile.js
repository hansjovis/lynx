const webpackClientConfig = require( './webpack.client.js' );
const webpackServerConfig = require( './webpack.server.js' );

module.exports = function( grunt ) {

  // Project configuration.
  grunt.initConfig( {
    webpack: {
      client: webpackClientConfig,
      server: webpackServerConfig
    }
  } );

  grunt.loadNpmTasks( 'grunt-webpack' );

  grunt.registerTask( 'default', [ 'webpack' ] );

  // Build steps.
  grunt.registerTask( 'build:server', [ 'webpack:server' ] );
  grunt.registerTask( 'build:client', [ 'webpack:client' ] );
};