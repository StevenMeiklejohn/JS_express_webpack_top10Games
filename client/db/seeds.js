use games;
db.dropDatabase();

db.games.insert({rank: 1, title:"Alto's Adventure", publisher: "To be Added", genre: "Sports", review: "To be added", image: "alto.png"});
db.games.insert({rank: 2, title:"Goblin Sword", publisher: "To be Added", genre: "Platformer", review: "To be added", image: "goblinSword.jpg"});
db.games.insert({rank: 3, title:"Steamworld: Heist", publisher: "To be Added", genre: "Strategy", review: "To be added", image: "steamworld.jpg"});
db.games.insert({rank: 4, title:"Skullgirls", publisher: "To be Added", genre: "Fighting", review: "To be added", image: "skullgirls.jpg"});
db.games.insert({rank: 5, title:"Solitairica", publisher: "To be Added", genre: "Puzzle", review: "To be added", image: "solitairica.jpg"});
db.games.insert({rank: 6, title:"Threes", publisher: "To be Added", genre: "Puzzle", review: "To be added", image: "./images/threes.jpg"});
db.games.insert({rank: 7, title:"Dan The Man", publisher: "To be Added", genre: "Platformer", review: "To be added", image: "danTheMan.jpeg"});
db.games.insert({rank: 8, title:"Neon Chrome", publisher: "To be Added", genre: "Shooter", review: "To be added", image: "neonChrome.jpg"});
db.games.insert({rank: 9, title:"Binding Of Issaac", publisher: "To be Added", genre: "Shooter", review: "To be added", image: "isaac.jpg"});
db.games.insert({rank: 10, title:"Neo Turf Masters", publisher: "To be Added", genre: "Sports", review: "To be added", image: "neoTurfMasters.jpg"});

// db.games.find();
// db.games.find({
//   name: "Gary"
// });

// db.games.update({ name: "Gary"}, {
//   $set: { type: "Human" }
// });
//
// db.games.find({
//   name: "Gary"
// });
//
// db.games.remove({
//   name: "Gary"
// });
//
// db.games.find({
//   name: "Gary"
// });
