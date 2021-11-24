'use strict';

/*function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let output = `${firstName} you are ${age}, born in ${birthYear}`;
        console.log(output);
        // const firstName = 'Steven';
        if (birthYear >= 1991 && birthYear <= 1996) {
            var millenial = true;
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);
        }
        console.log(millenial);

        function add(a, b) {
            return a + b;
        }
        const output = 'NEW OUTPUT';
    }
    printAge();
    return age;

}

const firstName = 'Jonas';
calcAge(1991);

//Variables
console.log(me);
//console.log(job);
//sconsole.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//Functions
console.log(addDecl(2, 3));
//console.log(addExprl(2, 3));
console.log(addArrow(2, 3));
function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

//Example

if (!numProducts) deleteShoppingCart;

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}


var x = 1;
let y = 2;
const z = 3;



console.log(this);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear)
    console.log(this);
}
calcAgeArrow(1991);

const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(2037 - this.year);
    }
}
jonas.calcAge();

const matilda = {
    year: 2016,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();

const jonas = {
    firstName: 'jonas',
    year: 1991,
    calcAge: function () {
        console.log(2037 - this.year);
        const self = this;
        const isMillenial = function () {
            console.log(self.year >= 1981 && self.year <= 1996);
        };
        isMillenial();
    },
    greet: () => console.log(`Hey, its me ${this.firstName}`),
}
jonas.greet();
jonas.calcAge();


let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Alex',
    age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend', friend);
console.log('Me', me);

*/
//primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//refference type
const jessica = {
    firstName: 'Jessica',
    lastName: 'williams',
    age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log(jessica, marriedJessica);

//copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'williams',
    age: 27,
};

const jessicaCopy = Object(assign({}, jessica2));