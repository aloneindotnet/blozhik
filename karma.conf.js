module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: [
		'./node_modules/angular/angular.js',
		'./node_modules/angular-route/angular-route.js',
		'./node_modules/angular-mocks/angular-mocks.js',
		'./node_modules/angular-resource/angular-resource.min.js',
		'./node_modules/angular-aria/angular-aria.min.js',
		'./node_modules/angular-messages/angular-messages.min.js',
		'./node_modules/angular-cookies/angular-cookies.min.js',
		'./node_modules/angular-animate/angular-animate.min.js',
		'./node_modules/angular-ui-router/release/angular-ui-router.min.js',
		'./node_modules/angular-material/angular-material.js',
		'./node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',

		'./angular/index.js',
		'./angular/controllers/articlesController.js',
		'./angular/controllers/addNewFormController.js',

		'./tests/*.tests.js'
		],
		port: 9876,
		browsers: ['Chrome'],
		singleRun: false
	});
}