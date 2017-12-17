var express = require('express');
var gameRouter = express.Router();
var GameQuery = require('../client/db/gameQuery');
var query = new GameQuery();


gameRouter.get('/', function(req, res) {
  query.all(function(results){
    res.json(results);
  });
});

// // game by id
// gameRouter.get('/:id', function(req, res){
//   query.all(function(results){
//     console.log(results[req.params.rank]);
//     res.json(results[req.params.rank]);
//   });
// });

gameRouter.get('/:rank', function(req, res){
  query.all(function(results){
    console.log(results[req.params.rank - 1]);
    res.json(results[req.params.rank - 1]);
  });
});



module.exports = gameRouter;
