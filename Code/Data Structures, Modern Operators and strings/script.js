'use strict';

//STRINGS

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('or'));

console.log(airline.slice(4));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.indexOf(' ') + 1));

console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E')
    console.log('Yo got a middle seat');
  else console.log('You got lucky');
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//Fix capitalization
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log(airline.slice(0, 1).toUpperCase() + airline.slice(1).toLowerCase());

//comparing emails
const email = 'abc@x.com';
const loginEmail = 'abC@x.Com \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(email === trimmedEmail);

//Replacing
const priceGB = '288,97$';
const priceUS = priceGB.replace('$', '&').replace(',', '.');
console.log(priceUS);

const announcement = 'All passangers com to barding door 23. Boarding door 23!';

console.log(announcement.replaceAll('door', 'gate'));

//booleans methods
const plane1 = 'A320neo';
console.log(plane1.includes('A320'));

//practice ex
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();//always put in lowerstring
  if (baggage.includes('knife') || baggage.includes('gun'))
    console.log('You are NOT allowed on board !');
  else
    console.log('Welcome aboard!');

}
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('socks and Camera');
checkBaggage('Got some snacks and a gun for protection');

/*
// Coding Challange no 3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

/*
//task 1
const events1 = [...new Set(gameEvents.values())];
//sau
let events = new Set();
for (let [, event] of gameEvents) {
  events.add(event);
}
console.log(events);

//task 2
console.log(gameEvents);
for (let [key, event] of gameEvents) {
  if (key == 64 && event == '� Yellow card')
    gameEvents.delete(key);
}
console.log(gameEvents);

//task 3 fara sens

//task 4
for (let [key, event] of gameEvents) {
  let half;
  if (key < 45)
    half = 'FIRST';
  else half = 'SECOND';

  console.log(`[${half} HALF]${key}: ${event}`);
}


/*
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  //es6 enchance
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //es6 enchance literal
  openingHours,

  //es6 enchance function
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //es6

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', adress }) {
    console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3} .`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

/*
// MAPS
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy ');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');
console.log(rest.get('name'));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);

const arr = [1, 2];
console.log(rest.set(arr, 'Test'));
console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading');

const question = new Map([['question', 'What is the best programming language in the world?'],
[1, 'C'],
[2, 'Java'],
[3, 'JavaScript'],
['correct', 3],
[true, 'Correct'],
[false, 'Try again'],
]); 33

console.log(question);

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//quiz app

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof (key) == 'number') console.log(`Answer ${key} : ${value}`);
}
const answer = Number(prompt('Your answer'));

console.log(question.get(answer === question.get('correct')));


/*
// Sets
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto',
  'Pasta', 'Pizza']);
console.log(orderSet);

console.log(new Set('Jonas'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
console.log(orderSet);
//orderSet.clear();
for (const order of orderSet) console.log(order);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

//unique letters in my name
console.log(new Set('alexandruionuttanase').size);

/*
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

/*
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  //es6 enchance
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};



const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //es6 enchance literal
  openingHours,

  //es6 enchance function
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //es6

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', adress }) {
    console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3} .`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

//Property Names
const properties = Object.keys(openingHours);
let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}

console.log(openStr);

//Property VALUES
const values = Object.values(openingHours);
console.log(values);

//Entire OBJECT
const entries = Object.entries(openingHours);
//console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

/*
///OPTIONAL CHAINING
if (restaurant.openingHours.mon && restaurant.openingHours)
  console.log(restaurant.openingHours.mon.open);

//With optional chaining

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 0;
  console.log(`On ${day} we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');


//Arrays
const users = [
  { name: 'Jonas', email: 'asd@a.com' }
];

console.log(users[0]?.name ?? 'User array empty');

/*
// for-of looping
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu)
  console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1} : ${el}`);

  console.log([...menu.entries()]);
}

/*
//coding challenge 1

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
      console.log(`${ playerNames[i] } scored ${ goals } goals!`);
    }
  console.log(`${ playerNames.length } goals scored in total!`);
}

printGoals(...game.scored);

//task 7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', adress }) {
    console.log(`Order recieved! ${ this.starterMenu[starterIndex] } and ${ this.mainMenu[mainIndex] } will be delivered to ${ adress } at ${ time } `);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ ing1 }, ${ ing2 }, ${ ing3 } .`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//nullish values : null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

/*
// && operator
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPasta) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// || operator
//Use any data type, return any data type
//and do short circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
/*
//SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]

//Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

//functions parameters

const add = function (...numbers) {
  let s = 0;
  for (let i = 0; i < numbers.length; i++)
    s += numbers[i];
  return s;
}
console.log(add(2, 3));
console.log(add(2, 3, 4, 5, 5));
console.log(add(2, 3, 4, 5, 6, 8, 9));
const x = [1, 2, 3];
console.log(add(...x));

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

/*
restaurant.orderDelivery({
  time: '23:30',
  adress: 'Via del Sole, 21',
  // mainIndex: 2,
  // starterIndex: 2,
});

//using spread first time
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);


//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays or more together
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//spread in string
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

//passing arg to functions with spread
//const ingredients = [prompt('Let\'s make pasta ! Ingredient 1?'), prompt('Ingredient 2 ?'), prompt('Ingredient 3 ?')];
//console.log(ingredients);

//restaurant.orderPasta(...ingredients);

//objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giusepe' };
console.log(newRestaurant);

//shallow copy
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
/*
//destructuring objects using same name
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//destructuring objects with different names
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

//default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//nested objects
const { fri: { open: o, close: c } } = restaurant.openingHours;
console.log(o, c);

/////////////////////////////////////////////////////
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y] = arr;
console.log(x, y);

//switching values(swap)
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);


//ordering something from the menu by foodIndex
let [starterDish, mainDish] = restaurant.order(2, 0);
console.log();
console.log(starterDish, mainDish);

//nested arrays
const nested = [2, 4, [5, 6]];
const [i, , [, j]] = nested;
console.log(i, j);


//default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/