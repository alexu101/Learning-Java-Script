'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// function that recieve an array of movements and work with that data
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';//make sure the container of movements is empty

  movements.forEach(function (mov, index) {

    const type = mov > 0 ? 'deposit' : 'withdrawal'; //the type of movement
    const html = `
    <div class="movements__row">
      <div class="movements__type 
      movements__type--${type}">${index + 1} ${type}</div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${mov}€</div>
  </div>`;//the string with the html element we want to add into movements
    containerMovements.insertAdjacentHTML('afterbegin', html)//inserting a movement into the movements.
  });
};

displayMovements(account1.movements);


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


/////////////////////////////////////////////////

//SIMPLE ARRAY METHODS

let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE
console.log(arr.slice(2, 4));
console.log(arr.slice(2, -4));
console.log(arr.slice(-4, 1));

//ways of creating shallow copies
console.log(arr.slice());
console.log(...arr);

//SPLICE
arr.splice(-1);
console.log(arr);

//REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
arr2.reverse();
console.log(arr2);

//CONCAT
const letters = arr.concat(arr2);

//ways of concatenating 2 arrays
console.log(letters);
console.log([...arr, ...arr2]);

//JOIN
console.log(letters.join(' - '));


//LOOPING ARRAYS forEACH

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for of loop
for (const [i, movement] of movements.entries()) {
  if (movement > 0)
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

//forEach loop
movements.forEach(function (movement, i, arr) {
  if (movement > 0)
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  else
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
});


const currencies = new Map([
  ['USD', 'United States dollar',],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(` ${value}`);
})

//Set
const currenciesUnique = new Set(['usd', 'gbp', 'usd', 'euro', 'lei', 'lei']);

currenciesUnique.forEach(function (value, _, map) {
  console.log(` ${value}`);
})



//CODING CHALLENGE 1

const checkDogs = function (dogsJulia, dogsKate) {

  //task 1
  const copyDogsJulia = dogsJulia;//create a shallow copy to not alter the passed argument
  copyDogsJulia.splice(0, 1);//remove the first cat
  copyDogsJulia.splice(-2);//the last two cats

  //task 2
  const bothArrays = dogsJulia.concat(dogsKate);//creating a new array with both dogs arrays

  //task 3
  bothArrays.forEach(function (dog, i) {
    if (dog >= 3)
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old .`);
    else
      console.log(`Dog number ${i + 1} is still a puppy 🐶 .`);
  })

}

//task 4
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);*/

//MAP METHOD
const eurToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


const movementsUsd = movements.map((mov) => mov * eurToUsd);

const movementsUsdFor = [];
for (const mov of movements)
  movementsUsdFor.push(mov * eurToUsd);


const movementsDescriptions = movements.map((mov, i, arr) =>

  `Movement ${i + 1}: You ${(mov > 0) ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);

console.log(movementsDescriptions);