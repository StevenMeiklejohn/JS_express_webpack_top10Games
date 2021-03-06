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
