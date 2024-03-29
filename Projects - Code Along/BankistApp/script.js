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
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';//make sure the container of movements is empty

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, index) {

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



const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};


const calcDisplyaSummary = function (account) {

  //INCOMES
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  //WITHDRAWALS
  const withdrawals = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + Math.abs(mov), 0);
  labelSumOut.textContent = `${withdrawals}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => ((mov * 0.012)) > 1 ? (acc + mov * account.interestRate) : acc, 0);
  labelSumInterest.textContent = `${interest}€`
};

calcDisplyaSummary(account1);

//crearea numelor de utilizatori
const createUsernames = function (accs) {//primeste argument toate contruile
  accs.forEach(function (acc) {//pentru fiecare cont
    acc.username = acc.owner//cream o noua proprietate username pentru obiectele account
      .toLocaleLowerCase()//formate din initialele numelui
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);
console.log(accounts);

//Event listeners
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();//prevent form from submitting 

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);


  if (currentAccount?.pin === Number(inputLoginPin.value)) {

    //Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]} ! 😁`;
    containerApp.style.opacity = 100;
    inputLoginPin.blur();

    //updateUI
    updateUI(currentAccount);
  }
});

const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements);

  //Display Balance
  calcPrintBalance(acc);

  //Display Summary
  calcDisplyaSummary(acc);

  //emptying login fields
  inputLoginUsername.value = inputLoginPin.value = ''
};

//transfers
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  console.log(amount.recieverAcc);

  if (amount > 0 && currentAccount.balance >= amount && recieverAcc && recieverAcc?.username !== currentAccount.username) {
    //doing the transfer
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);

    //updateUI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Add the movement
    currentAccount.movements.push(amount);

    //update the ui
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';

})

btnClose.addEventListener('click', function (e) {

  console.log('ok');
  e.preventDefault();

  if (currentAccount.pin === Number(inputClosePin.value) && currentAccount.username === inputCloseUsername.value) {

    const index = accounts.findIndex(acc => acc.username === currentAccount.username);

    //delete accounts
    accounts.splice(index, 1);//mutates the array itself

    //hide ui
    containerApp.style.opacity = 0;

  }

  inputCloseUsername.value = inputClosePin.value = '';

  labelWelcome.textContent = 'Log in to get started';

});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})


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
    console.log(`Movement ${ i + 1 }: You deposited ${ movement } `);
  else {
    console.log(`Movement ${ i + 1 }: You withdrew ${ Math.abs(movement) } `);
  }
}

//forEach loop
movements.forEach(function (movement, i, arr) {
  if (movement > 0)
    console.log(`Movement ${ i + 1 }: You deposited ${ movement } `);
  else
    console.log(`Movement ${ i + 1 }: You withdrew ${ Math.abs(movement) } `);
});


const currencies = new Map([
  ['USD', 'United States dollar',],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(` ${ value } `);
})

//Set
const currenciesUnique = new Set(['usd', 'gbp', 'usd', 'euro', 'lei', 'lei']);

currenciesUnique.forEach(function (value, _, map) {
  console.log(` ${ value } `);
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
      console.log(`Dog number ${ i + 1 } is an adult, and is ${ dog } years old.`);
    else
      console.log(`Dog number ${ i + 1 } is still a puppy 🐶 .`);
  })

}

//task 4
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//MAP METHOD
const eurToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


const movementsUsd = movements.map((mov) => mov * eurToUsd);

const movementsUsdFor = [];
for (const mov of movements)
  movementsUsdFor.push(mov * eurToUsd);


const movementsDescriptions = movements.map((mov, i, arr) =>

  `Movement ${ i + 1 }: You ${ (mov > 0) ? 'deposited' : 'withdrew' } ${ Math.abs(mov) } `
);

console.log(movementsDescriptions);


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);


const withdrawals = movements.filter((mov) => (mov < 0));
console.log(withdrawals);


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

//acumulator is like a snowball
const balance = movements.reduce((acumulator, curr, i, arr) => acumulator + curr, 0);
console.log(balance);

//maximum value
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const maxVal = movements.reduce(function (acc, curr) {
  console.log(acc);
  if (curr > acc)
    return curr;
  else
    return acc;
}, movements[0]);

//console.log(maxVal);

//CODING CHALLENGE 2
//task 1

const calcAverageHumanAge = function (ages) {

  console.log(ages);

  //task 1'
  const humanYears = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
  console.log(`Dog ages in human ages: ${ humanYears } `);

  //task 1''
  const adultDogs = humanYears.filter(function (age) {
    return age >= 18;
  })
  console.log(`Dogs that are at least 18 human years ${ adultDogs } `);

  //task 1'''
  const avgAge = adultDogs.reduce(function (acc, age) {
    return acc + age;
  }, 0) / adultDogs.length;
  console.log(avgAge);

};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

//chaining
const eurToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const totalDepositsUsd = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);


//CODING CHALLENGE 3
//task 1

const calcAverageHumanAge = function (ages) {

  const avgAge = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4).filter((age) => age > 18
  ).reduce((acc, age, _, arr) => acc + age / arr.length
    , 0)
  console.log(avgAge);

};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);


//FIND method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

const firstWithdrawal1 = function (movements) {
  for (const mov of movements)
    if (mov < 0)
      return mov;
};
console.log(firstWithdrawal1(movements));

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);


//some and every
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

//equality
console.log(movements.includes(-130));

//sum
//conditions
const anyDeposits = movements.some(mov => mov > 0)
console.log(anyDeposits);

//every
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

//flat and flatMap

const arr = [1, 2, 3, 4]
console.log(arr.flat());

const arrDeep = [[1, 2], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());
console.log(arrDeep.flat(1));
console.log(arrDeep.flat(2));

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overlBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overlBalance);


//Sort method
const owners = ['Jonas', 'Martha', 'Gica', 'Mihai'];
console.log(owners.sort());
console.log(owners);

//Numbers
console.log(movements);

//return < 0 A,B
//return > 0 B,A
movements.sort((a, b) => a - b);
console.log(movements);



//CREATING ARRAYS

//Until now we know :
console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 7));

//New ways
const x = new Array(7);//creates a new array with  empty elements
//x.map(() => 5);

x.fill(5);
console.log(x);

x.fill(1, 3);
console.log(x);

x.fill(2, 3, 5);
console.log(x);

let y = [1, 2, 5, 1, 2, 4, 2, 5, 5, 2, 5, 21];
y.fill(23, 2, 6);
console.log(y);

const z = Array.from({ length: 7 }, () => 1);
console.log(y);

const w = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(w);

const movementsUI = Array.from(document.querySelectorAll('.movements_value'));

console.log(movementsUI.map(el => Number(el.textContent)));


//PRACTICE ARRAY METHODS

//1.
const bankDepositSum = accounts.flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

//2. count how many deposits in the bank with at least 1000 dollars

const numDeposits1000 = accounts.flatMap(acc => acc.movements)
  .reduce((sum, cur) => cur > 1000 ? sum + 1 : sum, 0)

console.log(numDeposits1000);

//3.
const { deposits, withdrawals } = accounts.flatMap(acc => acc.movements)
  .filter(mov => mov > 0).reduce((sums, cur) => {
    // cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
    sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
    return sums;
  }, { deposits: 0, withdrawals: 0 });

console.log(deposits, withdrawals);

//4.
const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'or', 'but', 'the', 'in'];

  const titleCase = title.toLocaleLowerCase().split(' ')
    .map(word => exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)).join(' ');
  return titleCase;

}
console.log(convertTitleCase('this is a long title bUt NOT to long'));
*/

//CODING CHALLENGE 4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
//task 1
dogs.forEach(function (dog) {
  dog.recFoodPortion = Math.trunc((dog.weight ** 0.75 * 28));
});
console.log(dogs);

//task2
const sarahsDog = dogs.find((dog) => dog.owners.includes('Sarah'));
console.log(sarahsDog
  .curFood / 1000 > sarahsDog.recFoodPortion ? `eating too much` : `eating too little`);

//task 3
const chubbyDogsOwners = dogs
  .filter(dog => dog.curFood > dog.recFoodPortion)
  .map(dog => dog.owners).flat();


const skinnyDogOwners = dogs
  .filter(dog => dog.curFood <= dog.recFoodPortion)
  .map(dog => dog.owners).flat();

console.log(chubbyDogsOwners);
console.log(skinnyDogOwners);

//task 4
let message = '';
chubbyDogsOwners.forEach(function (owner) {
  message += owner;
  message += ' and ';
});
message = message.slice(0, message.length - 5);
message += "'s dogs eat too much!";
console.log(message);

let message1 = '';
skinnyDogOwners.forEach(function (owner) {
  message1 += owner;
  message1 += ' and ';
});
message1 = message1.slice(0, message1.length - 5);
message1 += "'s dogs eat too little!";
console.log(message1);

/////sau
console.log(`${chubbyDogsOwners.join(' and ')}'s dogs eat too much!`);
console.log(`${skinnyDogOwners.join(' and ')}'s dogs eat too little!`);

//task5
console.log(dogs.some((dog) => dog.recFoodPortion === dog.curFood));

//task 6
const healthyDogs = dogs.some(dog => dog.recFoodPortion * 0.9 < dog.curFood && dog.curFood < dog.recFoodPortion * 1.1)
console.log(healthyDogs);

//task7
let healthyDogsName = dogs.filter(dog => dog.recFoodPortion * 0.9 < dog.curFood && dog.curFood < dog.recFoodPortion * 1.1);
console.log(healthyDogsName);

//task 8
const dogsCopy = dogs.slice().sort((a, b) => a.recFoodPortion - b.recFoodPortion);
console.log(dogsCopy);


