'use strict';

const Person = function (firstName, birthYear) {

    //Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    /*  Never do this
      this.calcAge = function()
      {
          console.log(2037-this.birthYear);
      }
  */
}

const jonas = new Person('Jonas', 1991);
console.log(jonas);

//Behind the scenes
/*

1. New {} is created (empty object)
2. function is called, this = {}
3. {} inked to prototype
4. function automatically return {}
*/

const matilda = new Person('Matilda', 1992);
const jack = new Person('Jack', 1993);
console.log(matilda, jack);

const jay = 'Jay';

console.log(jay instanceof Person);

console.log(Person.prototype);

//Prototypes
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(matilda.__proto__ === jonas.__proto__);

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);