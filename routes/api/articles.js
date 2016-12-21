var express = require('express');
var router = express.Router();

var Article = require('../../models/Article');

router.get('/', function(req, res, next) {
	
	Article.find({}, function(err, articles) {
	  if (err) throw err;

	  console.log(articles);
	  res.send(articles);
	});
});

router.post('/', function(req, res, next) {
	
	var article = Article(req.body);
	console.log(req.body);
	console.log(article);
	article.save(function(err) {
	  if (err) throw err;

	});
	res.status(200).end();
	
});

module.exports = router;
