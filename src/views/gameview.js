var GameView = function(games){
  this.render(games);
}

QuoteView.prototype = {
  render: function(games){

    console.log(games);
    games.forEach( function(game){

      var ul = document.getElementById('games');

      var liRank = document.createElement('li');
      var rank = document.createElement('p');
      rank.innerText = game.rank;
      liRank.appendChild(rank);
      ul.appendChild(liRank);

      var liTitle = document.createElement('li');
      var title = document.createElement('p');
      title.innerText = game.title;
      liTitle.appendChild(title);
      ul.appendChild(liTitle);

      var liPub = document.createElement('li');
      var pub = document.createElement('p');
      pub.innerText = game.publisher;
      liPub.appendChild(pub);
      ul.appendChild(liPub);

      var liGenre = document.createElement('li');
      var genre = document.createElement('p');
      genre.innerText = game.genre;
      liGenre.appendChild(genre);
      ul.appendChild(liGenre);

      var liReview = document.createElement('li');
      var review = document.createElement('p');
      review.innerText = game.review;
      liReview.appendChild(review);
      ul.appendChild(liReview);
    })
  }
}

 module.exports = GameView;
