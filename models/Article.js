var mongoose = require('../mongooseConfig');
var Schema = mongoose.Schema;

var articleScema = new Schema({
	title: String,
	text: String,
	tags: [String],
	comments: [
		{
			text: String,
			created: Date,
			/*author: {
				author_id: String,
				name: String
			}*/
			authorName: String
		}
	],
	created: Date,
	/*author: {
		author_id: String,
		name: String
	}*/
	authorName: String
});

var Article = mongoose.model('Article', articleScema, 'Articles');

module.exports = Article;