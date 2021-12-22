
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

