var app = angular.module('blozhik', ['ngRoute', 'ngResource']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
			templateUrl: '/views/articlesView.html',
			controller: 'ArticlesController',
			controllerAs: '$ctrl'
        })
		.when('/Article/add', {
			templateUrl: '/views/addNewFormView.html',
			controller: 'AddNewFormController',
			controllerAs: 'anfCtrl',
			resolve: {
				edit: function ($route) { $route.current.params.edit = false; }
			}
        })
		.when('/Article/:articleId/edit', {
			templateUrl: '/views/addNewFormView.html',
			controller: 'AddNewFormController',
			controllerAs: 'anfCtrl',
			resolve: {
				edit: function ($route) { $route.current.params.edit = true; }
			}
        });
    }
]);

app.factory('Article', function($resource) {
  return $resource('/api/articles/:id');
});
