'use strict';

//coding challange 2
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

//task1
let goalNo = 0;
for (const name of game.scored) {
  goalNo++;
  console.log(`Goal ${goalNo}: ${name}`);
}

//task 2
let avg = 0;
for (const [, value] of Object.entries(game.odds))
  avg += value / 3;
console.log(avg.toFixed(2));

//task3
for (const [oddName, value] of Object.entries(game.odds)) {
  oddName === 'team1' && console.log(`Odd of ${game.team1}: ${value}`);
  oddName === 'x' && console.log(`Odd of draw : ${value}`);
  oddName === 'team2' && console.log(`Odd of ${game.team2}: ${value}`);
}

//task4
const scorers = {
};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : scorers[player] = 1;
}
console.log(scorers);