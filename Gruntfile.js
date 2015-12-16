module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/styles',
          src: ['{,*/}*.scss'],
          dest: 'dist/styles',
          ext: '.css'
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: 'src/styles',
          src: ['{,*/}*.scss'],
          dest: 'tmp/styles',
          ext: '.css'
        }]
      }
    },
    cssmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'dist/styles',
          src: ['*.css'],
          dest: 'dist/styles',
          ext: '.min.css'
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
              'docs',
              'tmp'
            ],
          },
          port: 9000
        }
      }
    },
    watch: {
      sass: {
        files: ['src/styles/{,*/}*.scss'],
        tasks: ['sass:server']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('dist', [
    'sass:dist',
    'cssmin:dist'
  ]);

  grunt.registerTask('server', [
    'sass:server',
    'browserSync:server',
    'watch'
  ]);

  grunt.registerTask('default', 'server');
};
