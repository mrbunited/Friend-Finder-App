var path = require('path');

var friends = require('../data/friends.js');

module.exports = function(app) {

	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});


	app.post('/api/friends', function(req, res) {

		var userInfo = req.body;
		var userScores = userInfo.scores;
		console.log('userScores = ' + userScores);
		friends.push(userInfo);

	});
};