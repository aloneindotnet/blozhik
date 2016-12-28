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
	article.created = new Date();

	article.save(function(err) {
	  if (err) throw err;

	});
	res.status(200).end();
	
});

router.put('/:id', function(req, res, next) {
	
	Article.findOneAndUpdate({_id: req.params.id}, req.body, function(err) {
	  if (err) throw err;
	});
	
	res.status(200).end();
});

router.delete('/:id', function(req, res, next) {
	
	Article.findOneAndRemove({_id: req.params.id}, function(err) {
	  if (err) throw err;
	});
	
	res.status(200).end();
});

module.exports = router;
