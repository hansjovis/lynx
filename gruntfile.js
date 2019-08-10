const webpackFrontendConfig = require( './webpack.client.frontend' );
const webpackAdminConfig    = require( './webpack.client.admin' );
const webpackServerConfig         = require( './webpack.server' );

module.exports = function( grunt ) {

  // Project configuration.
  grunt.initConfig( {
    webpack: {
      admin:    webpackAdminConfig,
      frontend: webpackFrontendConfig,
      server:   webpackServerConfig
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
  grunt.registerTask( 'build:client', [ 'copy', 'webpack:frontend', 'webpack:admin' ] );
};