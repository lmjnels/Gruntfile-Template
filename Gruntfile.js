// Gruntfile.js

//wrapper function, encapsulates Grunt configuration
module.exports = function(grunt) {

	// ===================
 	// CONFIGURE GRUNT ===
 	// ===================
	grunt.initConfig({
		// Read project settings
		pkg: grunt.file.readJSON('package.json'),

		// Add tasks here


	});

	// ======================
  	// LOAD GRUNT PLUGINS ===
  	// ======================
  	// These can only be loaded if they are in package.json
		grunt.loadNpmTasks('grunt-contrib-*');

	// Default tasks
  	grunt.registerTask('build', ['*', '*', '*']);
  	grunt.registerTask('default', ['watch']);
}