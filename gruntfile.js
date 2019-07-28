const webpackClientConfig = require( './webpack.client.js' );
const webpackServerConfig = require( './webpack.server.js' );

module.exports = function( grunt ) {

  // Project configuration.
  grunt.initConfig( {
    webpack: {
      client: webpackClientConfig,
      server: webpackServerConfig
    },
    copy: {
      style: {
        expand: true,
        cwd: 'client_src/style',
        src: [ '**/*.css' ], 
        dest: 'public/css/'
      }
    }
  } );

  grunt.loadNpmTasks( 'grunt-webpack' );
  grunt.loadNpmTasks( 'grunt-contrib-copy' );

  grunt.registerTask( 'default', [ 'copy', 'webpack' ] );

  // Build steps.
  grunt.registerTask( 'build:server', [ 'webpack:server' ] );
  grunt.registerTask( 'build:client', [ 'webpack:client' ] );
};