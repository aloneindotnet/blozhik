app.component('addNewButtonComponent', {
	template: '<h1>Blog Posts<button ng-click="$ctrl.addNewArticle()" class="btn btn-primary pull-right">Add Article</a></h1>',
	controller: function($location) {
		this.addNewArticle = function() {
		  $location.path('/Article/add')
		}
	}
});