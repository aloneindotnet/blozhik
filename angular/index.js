var app = angular.module('blozhik', ['ngRoute']);

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
