'use strict';

/*
const Person = function (firstName, birthYear) {

    //Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

  
}

const jonas = new Person('Jonas', 1991);
console.log(jonas);

//Behind the scenes
/*

1. New {} is created (empty object)
2. function is called, this = {}
3. {} inked to prototype
4. function automatically return {}


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
console.log(jonas.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor.__proto__);

const arr = [3, 6, 4, 5, 6, , 3];
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
    return [...new Set(this)]
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);


/*
//CODING CHALLENGE 1

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`Now your ${this.make} runs with a speed of ${this.speed}km/h`);
};

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`Now your ${this.make} runs with a speed of ${this.speed}km/h`);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.brake();
car1.brake();
car2.accelerate();
car2.brake();
car2.brake();
*/

//class expression

//const PersonCl = class {}

//class declaration
class Person {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    //Methods will be added to .prototype property 
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    //Set a property that already exists
    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else
            alert(`Hey ${this.firstName}`);
    }

    get fullName() {
        return this._fullName;
    }
}

const jessica = new Person('Jessica Davis', 1999);
console.log(jessica);
jessica.calcAge();

Person.prototype.greet = function () {
    console.log(`Hey ${this.firstName}`);
};

jessica.greet();

//1. Classes are NOT hoisted
//2. Classes are first-class citizes
//3. Classes are executed in strict mode

const walter = new Person('Walter White', 1999);

console.log(walter);

const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    },

    /* static hey() {
         return this._fullName;
     }*/

};

console.log(account.latest);

//Person.hey();



///Object.create 

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();


const sarah = Object.create(PersonProto)
sarah.init('Sarah', 1998);
sarah.calcAge();

///////CODING CHALLENGE 2

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} going at ${this.speed}km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} going at ${this.speed}km/h`);
    }

    get speedUS() {
        return `${(this.speed / 1.6).toFixed(2)}mi/h`;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const ford = new CarCl('Ford', 120);
ford.brake();
ford.brake();
ford.brake();
ford.accelerate();
console.log(ford.speedUS);
ford.speedUS = 100;
ford.accelerate();

//////
//Inheritance with es6 classes

class Student extends Person {
    constructor(fullName, birthYear, course) {
        //Always needs to happen first!
        super(fullName, birthYear);
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${firstName}`);
    }
}

const martha = new Student('Marhta Jones', 2012);
martha.calcAge();


//public/private fields/methods

class Account {
    //public fields(instances)
    locale = navigator.language;

    //private fields(instances)
    #movements = [];
    #pin;


    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;

        //protected property
        // this._movements = [];
        //this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}!`);
    }

    //Public methods

    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
    }

    withdrawal(val) {
        this.deposit(-val);
    }

    #approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if (this.#approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
        }
    }

    //Private methods
}


const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

acc1.deposit(110);
acc1.withdrawal(20);
acc1.requestLoan(1000);

console.log(acc1.movements);
