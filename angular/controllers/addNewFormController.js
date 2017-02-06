app.controller('AddNewFormController', function AddNewFormController($scope, $routeParams, $location) {
	var editMode = $routeParams.edit;
	
	$scope.title = editMode ? 'Edit Article' : 'Add Article';
	
	$scope.returnToArticles = function() {
		$location.path('/')
	};
	
	if ($routeParams.articleId) {
		$.ajax('/api/articles/' + $routeParams.articleId, 
		{
			type : 'GET',
			success: function(response) {
				$scope.article = response;
				$scope.$apply();
			}
		});
	} else {
		$scope.article = {};
	}
	
	$scope.submitForm = function() {
		$scope.article.tags = $scope.article.tags.split(',');
		
		var requestType = $scope.article._id ? 'PUT' : 'POST';
		
		$.ajax('/api/articles/' + ($scope.article._id || '') , {
			data : JSON.stringify($scope.article),
			contentType : 'application/json',
			type : requestType,
			success: function() {
				$location.path('/');
				$scope.$apply();
			}
		});
	}
	
});
