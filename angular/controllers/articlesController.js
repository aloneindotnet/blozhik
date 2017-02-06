app.controller('ArticlesController', function ArticlesController($scope, $location) {
	  var ctrl = this;
	  this.articles = [];
	  
	  this.init = function(){
		  getArticles();
	  }
	  
	  this.editArticle = function(id) {
		  $location.path('/Article/' + id + '/edit')
	  }
	  
	  function getArticles() {
		$.ajax('/api/articles/', 
		{
			type : 'GET',
			success: function(response) {
				ctrl.articles = response;
				$scope.$apply();
			}
		});
	  }
});