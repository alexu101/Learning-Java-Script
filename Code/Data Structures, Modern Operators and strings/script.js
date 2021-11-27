'use strict';

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  //es6 enchance   
  [weekDays[4]]: {
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
// for-of looping
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu)
  console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1} : ${el}`);

  console.log([...menu.entries()]);
}

/*
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