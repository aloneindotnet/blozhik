var mongoose = require('mongoose');

var connStr = 'mongodb://client:1qaz2wsx@ds135818.mlab.com:35818/heroku_k1wx2g79';

mongoose.connect(connStr);

module.exports = mongoose;