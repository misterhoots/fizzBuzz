// Wrapper function, encapsulates Grunt config
module.exports = function(grunt) {
   // Load the Grunt plugins we need.
   // These should have all been installed through NPM (Node Pacakge Manager)
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-compass');
      // Initialize our configuration object
      grunt.initConfig({
         uglify: {
            my_target: {
               files: {
                  '_/js/script.js' : ['_/components/js/*.js']
               } //files
            } //mytarget
         }, //uglify
         compass: {
            dev: {
               options: {
                  config: 'config.rb'
               } //options
            } // dev
         }, //compass
         watch: {
            options : { livereload: true },
            scripts: {
               files: ['_/components/js/*.js'],
               tasks: ['uglify']
            }, //script
            sass: {
               files: ['_/components/sass/*.scss', '_/components/sass/partials/*.scss'],
               tasks: ['compass']
            }, //sass
            html: {
               files: ['*.html']
            } //html
         } //watch
      }) //initconfig
      grunt.registerTask('default','watch')
} //exports
