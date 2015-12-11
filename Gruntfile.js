module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      server: {
        files: [{
          expand: true,
          cwd: 'app/styles',
          src: ['*.scss'],
          dest: 'tmp/styles',
          ext: '.css'
        }]
      }
    },
    browserSync: {
      server: {
        options: {
          server: {
            baseDir: [
              'app',
              'tmp'
            ],
          },
          port: 9000
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', [
    'sass:server',
    'browserSync:server'
  ]);
};
