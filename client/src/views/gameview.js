var GameView = function(games){
  this.render(games);
}

GameView.prototype = {
  render: function(games){

    var listdiv = document.getElementById('list-container');
    console.log(listdiv);
    console.log(games);
    games.forEach( function(game){

      var listdiv = document.getElementById('list-container');
      // var assignLink = function(rank, div){
      //   div.onclick = function() {
      //     window.location.href = "http://localhost:3000/game/" + rank;
      //   };
      // }
      //
      // assignLink(game.rank, listdiv);




      // var gameRank = game.rank;
      // if (typeof window.addEventListener==='function'){
      //           listdiv.addEventListener('click',function(){
      //           window.location.href = "http://localhost:3000/game/" + gameRank;
      //       })};





      // var newSpan = document.createElement('span');
      // var link = document.createElement('a');
      // link.setAttribute('href', "http://localhost:300/game/" + game.rank);
      // newSpan.appendChild(link);
      // listdiv.appendChild(newSpan);

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
      listdiv.appendChild(infoTable);
    })

  }



}

 module.exports = GameView;
