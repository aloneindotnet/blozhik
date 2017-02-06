var express = require('express');
var path = require('path');
var router = express.Router();

var Article = require('../models/Article');

router.get('/', function(req, res, next) {
	res.sendFile(path.join(__dirname, '../angular/index.html'));
	/*Article.find({}, function(err, data) {
		if (err) throw err;
		res.render('./articles/articles', { articles: data });
	});*/
});

router.get('/articles/new', function(req, res, next) {
  res.render('./articles/new', {article: {}, title: 'Add Article' });
});

router.get('/articles/edit/:id', function(req, res, next) {
	Article.findOne({_id: req.params.id}, function(err, data) {
		if (err) throw err;
		data.tags = data.tags.join();
		res.render('./articles/new', { article: data, title: 'Edit Article' });
	});

});

router.get('/articles/:articleId', function(req, res, next) {
	Article.findOne({_id: req.params.articleId}, function(err, data) {
		if (err) throw err;
		res.render('./articles/details', { article: data });
	});
});

module.exports = router;
