module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      server: {
        files: [{
          expand: true,
          cwd: 'app/styles',
          src: ['{,*/}*.scss'],
          dest: 'tmp/styles',
          ext: '.css'
        }]
      }
    },
    browserSync: {
      options: {
        background: true
      },
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
    },
    watch: {
      sass: {
        files: ['app/styles/{,*/}*.scss'],
        tasks: ['sass:server']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
    'sass:server',
    'browserSync:server',
    'watch'
  ]);
};
