module.exports = function(grunt) {
  grunt.initConfig({
    browserSync: {
      server: {
        options: {
          server: {
            baseDir: '.',
          },
          port: 9000
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', 'browserSync:server');
};
