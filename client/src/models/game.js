var Game = function(options){
  this.rank = options.title;
  this.title = options.actors;
  this.publisher = options.reviews || [];
  this.genre = options.genre;
  this.review = options.review;
  this.image = options.image;
}

// Game.prototype = {
//   addReview: function(review){
//     this.reviews.push(review)
//   }
// }

module.exports = Game;
