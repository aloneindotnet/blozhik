app.controller('ArticlesController', function ArticlesController($scope, $location, Article) {
	  var ctrl = this;
	  this.articles = [];
	  
	  this.init = function(){
		  getArticles();
	  }
	  
	  this.editArticle = function(id) {
		  $location.path('/Article/' + id + '/edit')
	  }
	  
	  this.deleteArticle = function(_id) {
		Article.delete({ id: _id }, function() {
			ctrl.articles = ctrl.articles.filter(function(obj) {
				return obj._id !== _id;
			});
		});
	  }
	  
	  function getArticles() {
		var articles = Article.query(function() {
			ctrl.articles = articles;
		})
	  }
});