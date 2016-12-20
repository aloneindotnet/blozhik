var express = require('express');
var router = express.Router();

var Article = require('../../models/Article');

router.get('/', function(req, res, next) {
	
	Article.find({}, function(err, articles) {
	  if (err) throw err;

	  console.log(users);
	  res.send(users);
	});
});

module.exports = router;
