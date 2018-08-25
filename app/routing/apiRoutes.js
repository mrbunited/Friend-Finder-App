var friends = require("../data/friends.js");



module.exports = function (app){

  app.get("/api/friends", function(req, res) {

    res.json(friends);
    });

  app.post("/api/friends", function(req, res) {

    var newFriend = req.body;
  

    var userTotal = 0;
    var lowestDiff = 100;

    for(var x =  0; x < newFriend.scores.length; x++){
      userTotal += parseInt(newFriend.scores[x]);
    }
    var bestMatch= {
      name:"",
      photo:""};

    for (var i = 0; i < friends.length; i ++){

    var totalDiff = 0;

      for(var j =  0; j < friends[i].scores.length; j++){

        var difference = Math.abs(parseInt(newFriend.scores[j]) - parseInt(friends[i].scores[j]));
        totalDiff += difference;
      }

      if(totalDiff < lowestDiff){
        lowestDiff = totalDiff
        bestMatch.name = friends[i].name;
        bestMatch.photo = friends[i].photo;
      }

    }

    friends.push(newFriend);
    console.log(bestMatch);
    res.json(bestMatch);
  });

}