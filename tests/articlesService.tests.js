describe('ArticlesResource', function () {
    var mockArticlesResource, $httpBackend;
    beforeEach(angular.mock.module('blozhik'));

    beforeEach(function () {
        angular.mock.inject(function ($injector) {
            $httpBackend = $injector.get('$httpBackend');
            mockArticlesResource = $injector.get('Article');
        })
    });
	
	it('should call query', inject(function (Article) {
		$httpBackend.expectGET('/api/articles')
			.respond([{_id: '0'}]);

		var result = mockArticlesResource.query();

		$httpBackend.flush();

		expect(result[0]._id).toEqual('0');
    }));
	
	it('should call get', inject(function (Article) {
		$httpBackend.expectGET('/api/articles/0')
			.respond({_id: 0, title: 'TEST'});

		var result = mockArticlesResource.get({id: '0'});

		$httpBackend.flush();

		expect(result.title).toEqual('TEST');
    }));
	
	it('should call delete', inject(function (Article) {
		$httpBackend.expectDELETE('/api/articles/0').respond(200);

		var result = mockArticlesResource.delete({id: '0'});

		$httpBackend.flush();

    }));
	
	it('should call save', inject(function (Article) {
		$httpBackend.expectPOST('/api/articles').respond(200);

		var resource = new mockArticlesResource();
		mockArticlesResource.save(resource);

		$httpBackend.flush();

    }));

});