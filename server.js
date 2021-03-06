var express = require('express');
var parser = require('body-parser');
var app = express();
var path = require("path");
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static('client/build'));

app.use(require('./controllers/index'));

var MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://localhost:27017/games", function(err, database){
  if(err){
    return console.log(err);
  }
  db = database;
  console.log("Connected to games DB");

  app.listen(3000, function () {
    console.log('App running on port '+this.address().port);
  })
});


app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/build/index.html');
});

app.get('/game/:uid', function(req, res){
  res.sendFile(__dirname + '/client/build/specificGame.html');
});

app.get('/about', function(req, res){
  res.sendFile(__dirname + '/client/build/about.html');
});

app.get('/edit', function(req, res){
  res.sendFile(__dirname + '/client/build/edit.html');
});

app.get('/games', function(req, res) {
 var cursor = db.collection('games').find().toArray(function(err, results){
 res.json(results);
 });
});

app.post("/edit", function(req, res){
  db.collection("games").save(req.body, function(err, result){
    if(err){
      return console.log(err);
    }
    console.log("Saved to database.");
    res.redirect("/about");
  });
});

app.post("/delete", function(req, res){
  db.collection("games").remove();
  res.redirect("/");
});
