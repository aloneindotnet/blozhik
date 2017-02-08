describe('ArticlesController', function() {

	beforeEach(angular.mock.module('blozhik'));
	
	var scope, $location, createController, Article, $httpBackend;
	
	var ArticleMock = {
		query: function() {},
		delete: function() {}
	};

	beforeEach(inject(function ($rootScope, $controller, _$location_) {
		$location = _$location_;
		scope = $rootScope.$new();

		createController = function() {
			return $controller('ArticlesController', {
				'$scope': scope,
				Article: ArticleMock
			});
		};
		
		spyOn(ArticleMock, "query").and.callThrough();
		spyOn(ArticleMock, "delete").and.callThrough();
	}));

	it('Should call service query function on getArticles', function(){

		var controller = createController();

        controller.init();

        expect(ArticleMock.query).toHaveBeenCalled();
	});
	
	it('Should change location on editArticle', function(){

		var controller = createController();
		
		var id = '1';

        controller.editArticle(id);

        expect($location.path()).toBe('/Article/' + id + '/edit');
	});
	
	it('Should call service delete function', function(){

		var controller = createController();
		var id = '1';
		
        controller.deleteArticle(id);

        expect(ArticleMock.delete).toHaveBeenCalled();
	});

});