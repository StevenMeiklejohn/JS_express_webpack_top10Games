use games;
db.dropDatabase();

db.games.insert({rank: 1, title:"Alto's Adventure", publisher: "Snowman", genre: "Sports", review: "Mobile gaming perfected. One touch gameplay disguises immense depth. The environments look glorious. Wonderful physics, landing a trick feels great and is incredibly addictive. Replayability to spare. The game has never left my phone, the longest serving mobile game I own. Beautiful, relaxing and tense at the same time. Play it. Immediately.", image: "alto.png"});
db.games.insert({rank: 2, title:"Goblin Sword", publisher: "Gelato Games", genre: "Platformer", review: "As you will be aware, platform games are the pursuit of the gaming connoisseur. The 16 and 32 bit generations had so many, gamers began to get bored of the format. Imagine! Mobile platforming has something of a troubled development. The issue is precision. Its very hard to achieve pixel perfect precision when using a touch screen to control the game and precision is absolutely key to the tougher (and best) platformers. Gelato games looked at this problem and scoffed. They then proceeded to implement highly precise controls in a highly pleasing 16 bit esque pixel art package. Secrets galore, boss fights, maddening levels and a feeling of accomplishment are all delivered expertly. The pick of the ios platformers.", image: "goblinSword.jpg"});
db.games.insert({rank: 3, title:"Steamworld: Heist", publisher: "Image & Form Int AB", genre: "Strategy", review: "I've always considered turn based strategy games to be slow and boring. Too technical, not enough action. Then I played Steamworld: Heist and fell in love with the game and the whole genre. Great graphics, tonnes of content, great mechanics, lots of fun. Heist proves that strategy games can have all of those things.", image: "steamworld.jpg"});
db.games.insert({rank: 4, title:"Skullgirls", publisher: "Reverge Labs", genre: "Fighting", review: "Ever played Street Fighter 2 on a touch screen? Sucks right? There is no way to replicate the required precision using a touch screen. Revenge Labs' solution? Remove the need for precision controls without removing the depth of the best fighting games. Yeah, good luck with that. Well, they only went and did it. Moves are triggered via a variety of swipes and hold presses, with specials activated by simply pressing on them. Think if Ryu's haduken was assigned to a button that became available when enough energy was collected. Far from making the game too simple, it allows the player to concentrate on the chess like nature of the fighting game, without worrying about actually producing the next required move via a complicated series of directions and buttons. Its a lot of fun. Its also probably THE best looking game on ios with glorious hand drawn animation and charm to spare. ", image: "skullgirls.jpg"});
db.games.insert({rank: 5, title:"Solitairica", publisher: "Righteous Hammer Games", genre: "Puzzle", review: "Solitaire. A classic game for a reason. Endlessly replayable. Now, add on some great RPG elements, a cool fantasy environment and great graphics and you have solitaire redefined. I dread to think the number of hours I've sunk into Solitairica. It never gets old.", image: "solitairica.jpg"});
db.games.insert({rank: 6, title:"Threes", publisher: "Sirvo LLC", genre: "Puzzle", review: "The greatest puzzle game on IOS. Simple, deep, infuriating, rewarding, competitive, with a great looking, clean UI. Threes is the only puzzle game you need.", image: "threes.jpg"});
db.games.insert({rank: 7, title:"Dan The Man", publisher: "HalfBrick Studios", genre: "Platformer", review: "Run and gun platforming/fighting with retro graphics, solid controls, mechanics, great graphics and tonnes of content. This game is amazing.", image: "danTheMan.jpeg"});
db.games.insert({rank: 8, title:"Neon Chrome", publisher: "10 tons", genre: "Shooter", review: "The only serious competition to Binding of Isaac in the top down shooter category.", image: "neonChrome.jpg"});
db.games.insert({rank: 9, title:"Binding Of Issaac", publisher: "Edmund McMillan", genre: "Shooter", review: "The world's greatest rogue-like shooter.", image: "isaac.jpg"});
db.games.insert({rank: 10, title:"Neo Turf Masters", publisher: "SNK", genre: "Sports", review: "SNK. Need I say more? Arcade golf at its best.", image: "neoTurfMasters.jpg"});

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
