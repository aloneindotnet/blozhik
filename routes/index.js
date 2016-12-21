var express = require('express');
var router = express.Router();

var Article = require('../models/Article');

/* GET home page. */
router.get('/', function(req, res, next) {
	Article.find({}, function(err, data) {
		if (err) throw err;
		res.render('./articles/articles', { articles: data });
	});
});

router.get('/new', function(req, res, next) {
  res.render('./articles/new', { title: 'Express' });
});

router.get('/:articleId', function(req, res, next) {
	Article.findOne({_id: req.params.articleId}, function(err, data) {
		console.log(data);
		if (err) throw err;
		res.render('./articles/details', { article: data });
	});
});

module.exports = router;
