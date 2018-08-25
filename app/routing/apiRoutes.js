var path = require('path');

var friends = require('../data/friends.js');

module.exports = function(app) {

	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});


	app.post('/api/friends', function(req, res) {


		// this is user info from input
		var userInfo = req.body;
		var userScores = userInfo.scores;
		// add new user info to friends array
		friends.push(userInfo);

		// create an array to store user scores
		var userScoreArray = [];	
		userScoreArray.push(userInfo.scores);

		var matchScoreArray = [];

function matchFinder(){
console.log("function is logging");


		for (var i=0; i < friends.length; i++){
			// console.log("User name" + userScores[i]);

matchScoreArray.push(friends.scores[i]);

		}

		
};

console.log("these are the scores " + matchScoreArray);


// var userFinalScore = 0;
// var bestMatchScore = 0;
// var totalDifference = 0;
	});

};