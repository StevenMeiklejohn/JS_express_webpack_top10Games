var GameView = require('./views/gameview');

var app = function(){
  var url = "http://localhost:3000/games";
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function(){
  if(this.status !== 200) return ;
  var quoteString = this.responseText;
  var games = JSON.parse(quoteString);
  var gameView = new GameView(games);
}





window.addEventListener('load', app);
