/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var GameView = __webpack_require__(1);
var SpecificGameView = __webpack_require__(2);


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


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var GameView = function(games){
  this.render(games);
}

GameView.prototype = {
  render: function(games){

    var listdiv = document.getElementById('list-container');
    console.log(listdiv);
    console.log(games);
    games.forEach( function(game){


      var link = document.createElement('a');
      link.href = "http://localhost:3000/game/" + game.rank + "/";

      var infoTable = document.createElement("table");
      infoTable.className = "gamesTable";

      var row1 = document.createElement("tr");
      var rank1 = document.createElement("td");
      rank1.innerHTML = "Rank";
      rank1.style.width = "20%";
      var rank2 = document.createElement("td");
      rank2.innerHTML = game.rank;
      rank2.style.width = "80%";
      rank2.style.textAlign = "left";

      row1.appendChild(rank1);
      row1.appendChild(rank2);
      infoTable.appendChild(row1);
      // listdiv.appendChild(infoTable);

      var row2 = document.createElement("tr");
      var title1 = document.createElement("td");
      title1.innerHTML = "Title";
      var title2 = document.createElement("td");
      title2.innerHTML = game.title;
      row2.appendChild(title1);
      row2.appendChild(title2);
      infoTable.appendChild(row2);
      // listdiv.appendChild(infoTable);

      var row3 = document.createElement("tr");
      var pub1 = document.createElement("td");
      pub1.innerHTML = "Publisher";
      var pub2 = document.createElement("td");
      pub2.innerHTML = game.publisher;
      row3.appendChild(pub1);
      row3.appendChild(pub2);
      infoTable.appendChild(row3);
      // listdiv.appendChild(infoTable);

      var row4 = document.createElement("tr");
      var genre1 = document.createElement("td");
      genre1.innerHTML = "Genre";
      var genre2 = document.createElement("td");
      genre2.innerHTML = game.genre;
      row4.appendChild(genre1);
      row4.appendChild(genre2);
      infoTable.appendChild(row4);
      // listdiv.appendChild(infoTable);


      var row5 = document.createElement("tr");
      var review1 = document.createElement("td");
      review1.innerHTML = "Review";
      var review2 = document.createElement("td");
      review2.innerHTML = game.review;
      row5.appendChild(review1);
      row5.appendChild(review2);
      infoTable.appendChild(row5);
      // listdiv.appendChild(infoTable);


      var image = document.createElement("img");
      image.className = "gameImage";
      image.src = "./images/" + game.image;
      infoTable.appendChild(image);
      link.appendChild(infoTable);
      listdiv.appendChild(link);
    })

  }



}

 module.exports = GameView;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var SpecificGameView = function(game){
  this.render(game);
}

SpecificGameView.prototype = {
  render: function(game){

    var listdiv = document.getElementById('list-container');
    console.log(listdiv);
    console.log(game);

      var listdiv = document.getElementById('list-container');
      var infoTable = document.createElement("table");
      infoTable.className = "gameTable";

      var row1 = document.createElement("tr");
      var rank1 = document.createElement("td");
      rank1.innerHTML = "Rank";
      rank1.style.width = "20%";
      var rank2 = document.createElement("td");
      rank2.innerHTML = game.rank;
      rank2.style.width = "80%";
      rank2.style.textAlign = "left";

      row1.appendChild(rank1);
      row1.appendChild(rank2);
      infoTable.appendChild(row1);
      // listdiv.appendChild(infoTable);

      var row2 = document.createElement("tr");
      var title1 = document.createElement("td");
      title1.innerHTML = "Title";
      var title2 = document.createElement("td");
      title2.innerHTML = game.title;
      row2.appendChild(title1);
      row2.appendChild(title2);
      infoTable.appendChild(row2);
      // listdiv.appendChild(infoTable);

      var row3 = document.createElement("tr");
      var pub1 = document.createElement("td");
      pub1.innerHTML = "Publisher";
      var pub2 = document.createElement("td");
      pub2.innerHTML = game.publisher;
      row3.appendChild(pub1);
      row3.appendChild(pub2);
      infoTable.appendChild(row3);
      // listdiv.appendChild(infoTable);

      var row4 = document.createElement("tr");
      var genre1 = document.createElement("td");
      genre1.innerHTML = "Genre";
      var genre2 = document.createElement("td");
      genre2.innerHTML = game.genre;
      row4.appendChild(genre1);
      row4.appendChild(genre2);
      infoTable.appendChild(row4);
      // listdiv.appendChild(infoTable);


      var row5 = document.createElement("tr");
      var review1 = document.createElement("td");
      review1.innerHTML = "Review";
      var review2 = document.createElement("td");
      review2.innerHTML = game.review;
      row5.appendChild(review1);
      row5.appendChild(review2);
      infoTable.appendChild(row5);
      // listdiv.appendChild(infoTable);


      var image = document.createElement("img");
      image.className = "selectedGameImage";
      image.src = "../../images/" + game.image;
      infoTable.appendChild(image);
      listdiv.appendChild(infoTable);



    }
}

 module.exports = SpecificGameView;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map