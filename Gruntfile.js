module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        // includePaths: ['bower_components/foundation/scss']
        sourceMap: true
      },
      dist: {
        options: {
          outputStyle: 'nested'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }
      }
    },
    uglify: {
      my_target: {
        options: {
          mangle: false
        },
        files: {
          'js/dist/app.min.js': [
            'js/vendors/jquery.min.js',
            'js/vendors/foundation.min.js',
            'js/vendors/foundation.abide.js',
            'js/vendors/scroll-up-bar.min.js',
            'js/vendors/owl.carousel.min.js',
            'js/app.js'
          ],
          'js/dist/modernizr.min.js': 'js/vendors/modernizr.js'
        }
      }
    },
    watch: {
      grunt: {
        files: ['Gruntfile.js']
      },
      uglify: {
        files: ['js/app.js'],
        tasks: ['uglify']
      },
      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['sass', 'uglify']);
  grunt.registerTask('default', ['build', 'uglify', 'watch']);
}
