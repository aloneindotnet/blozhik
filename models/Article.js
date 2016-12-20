var mongoose = require('../mongooseConfig');
var Schema = mongoose.Schema;

var articleScema = new Schema({
	title: String,
	text: String,
	tag: [String],
	comments: [
		{
			text: String,
			created: Date,
			author: {
				author_id: String,
				name: String
			}
		}
	],
	created: Date,
	author: {
		author_id: String,
		name: String
	}
});

var Article = mongoose.model('Article', articleScema, 'Articles');

module.exports = Article;