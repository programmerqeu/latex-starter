/**
 *  @project      Thesis nanny
 *  @author       André Lademann <vergissberlin@googlemail.com>
 *  @copyright    Copyright (c) 2016
 *  @license      MIT
 */

module.exports = function (grunt) {
	'use strict';

	// show elapsed time at the end
	require('time-grunt')(grunt);

	// load all grunt tasks (and the rest) just in time
	// @link https://github.com/shootaroo/jit-grunt
	require('jit-grunt')(grunt);

	// Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		bump: {
			options: {
				files: [
					'package.json'
				],
				updateConfigs: [],
				commit: true,
				commitMessage: 'Release v%VERSION%',
				commitFiles: ['package.json'],
				createTag: true,
				tagName: 'v%VERSION%',
				tagMessage: 'Version %VERSION%',
				push: true,
				pushTo: 'upstream',
				gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
				globalReplace: false,
				prereleaseName: false,
				metadata: '',
				regExp: false
			}
		},

		notify: {
			msg: {
				options: {
					title: 'Latex compiled',
					message: '✅ Tasks completed'
				}
			}
		},

		watch: {

			all: {
				files: [
					'Gruntfile.js'
				],
				tasks: [
					'latex',
					'notify'
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-jstestdriver');

	// Register tasks
	grunt.registerTask('default', [
		'latex',
		'notify',
		'watch'
	]);

};
