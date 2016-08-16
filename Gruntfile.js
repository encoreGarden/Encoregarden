module.exports = function(grunt) {

    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/**
		 * Sass
		 */
		sass: {
		  dev: {
		    options: {
		      style: 'expanded',
		      sourcemap: 'none',
		    },
            files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['main-sass.scss'],
                    dest: 'min',
                    ext: '.css'
                  }]
		  }
		},

        /**
		 * concate
		 */
        concat: {
           basic_and_extras: {
             files: {
               'js/custom-js.js': ['jsss/**/*.js'],
             },
           },
         },

        /**
		 * minify css
		 */
         cssmin: {
           target: {
             files: {
              'min/my-sass.css': ['min/main-sass.css']
             }
           }
       },
       /**
        * minify js
        */
        uglify: {
            my_target: {
              files: {
                'min/js/custom-js.js': ['js/custom-js.js']
              }
            }
        },

	  	/**
	  	 * Watch
	  	 */
         watch: {
           files: ['css/**/*.scss'],
           tasks: ['sass','concat','cssmin','uglify']
         }

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['sass']);
};
