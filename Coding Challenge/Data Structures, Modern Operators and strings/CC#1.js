'use strict';

//coding challenge

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//tassk 1
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

//task 2
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

//task 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers.length);

//task 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//task 5
const { team1, x, team2 } = game.odds;
console.log(team1, team2, x);

//task 6
const printGoals = function (...playerNames) {
  let storedPlayers = [];
  for (let i = 0; i < playerNames.length; i++)
    if (!storedPlayers.includes(playerNames[i])) {
      storedPlayers.push(playerNames[i]);
      let goals = 1;
      for (let j = i + 1; j < playerNames.length; j++)
        if (playerNames[i] == playerNames[j])
          goals++;
      console.log(`${playerNames[i]} scored ${goals} goals !`);
    }
  console.log(`${playerNames.length} goals scored in total!`);
}

printGoals(...game.scored);

//task 7 
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');