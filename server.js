// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3700;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var characters = [
    {
      routeName: "yoda",
      name: "Yoda",
      role: "Jedi Master",
      age: 900,
      forcePoints: 2000
    },
    {
      routeName: "darthmaul",
      name: "Darth Maul",
      role: "Sith Lord",
      age: 200,
      forcePoints: 1200
    },
    {
      routeName: "obiwankenobi",
      name: "Obi Wan Kenobi",
      role: "Jedi Master",
      age: 55,
      forcePoints: 1350
    }
  ];

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
  });
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
  });

  
  // Create New Characters - takes in JSON input
  app.post("/api/friends-list", function(req, res) {
    var newcharacter = req.body;
    console.log(newcharacter);
    characters.push(newcharacter);
  
    // We then display the JSON to the users
    res.json(newcharacter);
  });


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  