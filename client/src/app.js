var GameView = require('./views/gameview');
var SpecificGameView = require('./views/specificGameView');


var app = function(){

  var url = "http://localhost:3000/games";
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
  console.log(window.location.href);
  console.log(window.location);
}

var requestComplete = function(){
  if(this.status !== 200) return ;
  var quoteString = this.responseText;
  var games = JSON.parse(quoteString);
  console.log(window.location.href);
  if(window.location.href == "http://localhost:3000/"){
    console.log("Games view triggered");
   var view = new GameView(games);
 } else {
    console.log("Game view triggered");
    var requested = window.location.href.split( '/' );
    var index = requested[requested.length - 2];
    console.log(index);
    var view = new SpecificGameView(games[index]);
  };
}
window.addEventListener('load', app);
