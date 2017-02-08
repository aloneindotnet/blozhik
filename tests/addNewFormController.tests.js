describe('AddNewFormController', function() {

	beforeEach(angular.mock.module('blozhik'));
	
	var scope, $location, createController, Article;
	
	var ArticleMock = {
		save: function() {},
		get: function() {}
	};

	beforeEach(inject(function ($rootScope, $controller, _$location_) {
		$location = _$location_;
		scope = $rootScope.$new();

		createController = function(routeParams) {
			return $controller('AddNewFormController', {
				'$scope': scope,
				Article: ArticleMock,
				'$routeParams' : routeParams
			});
		};
		
		spyOn(ArticleMock, "save").and.callThrough();
		spyOn(ArticleMock, "get").and.callThrough();
		
	}));

	it('Should call get and save service function on edit', function(){
		var params = {edit: true, articleId: '0'};
		var controller = createController(params);
		scope.article = {_id: '1', tags: ''};
	
        scope.submitForm();

        expect(ArticleMock.get).toHaveBeenCalled();
		expect(scope.article._id).toBe('1');
		expect(ArticleMock.save).toHaveBeenCalled();
	});
	
	it('Should call save service function on add', function(){
		var params = {edit: true};
		var controller = createController(params);
		scope.article = {_id: '1', tags: ''};
	
        scope.submitForm();

        expect(ArticleMock.get).not.toHaveBeenCalled();
		expect(ArticleMock.save).toHaveBeenCalled();
	});

	it('Should change location on returnToArticles', function(){

		var controller = createController({});
		
        scope.returnToArticles();

        expect($location.path()).toBe('/');
	});

});