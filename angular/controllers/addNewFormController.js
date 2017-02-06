app.controller('AddNewFormController', function AddNewFormController($scope, $routeParams, $location, Article) {
	var editMode = $routeParams.edit;
	
	$scope.title = editMode ? 'Edit Article' : 'Add Article';
	
	$scope.returnToArticles = function() {
		$location.path('/')
	};
	
	if ($routeParams.articleId) {
		var article = Article.get({ id: $routeParams.articleId }, function() {
			$scope.article = article;
		});
	} else {
		$scope.article = {};
	}
	
	$scope.submitForm = function() {
		$scope.article.tags = $scope.article.tags.split(',');
		
		var article = editMode ? $scope.article : $.extend(new Article(), $scope.article);

		Article.save(article, function() {
			$location.path('/');
		});
	}
	
});

app.directive('textlength', function (){ 
   return {
      require: 'ngModel',
      link: function(scope, elem, attr, ngModel) {

          ngModel.$parsers.unshift(function(value) {
			  var valid = value && value.length >= 20;
             ngModel.$setValidity('textlength', valid);
             return valid ? value : undefined;
          });

          ngModel.$formatters.unshift(function(value) {
             ngModel.$setValidity('textlength', value && value.length >= 20);
             return value;
          });
      }
   };
});
