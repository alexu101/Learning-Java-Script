'use strict';

const runOnce = function () {
    console.log('This will never run again');
}
runOnce();

//Imediately invoked function expression
//IIFE
(function () {
    console.log('This will never run again');
    const isPrivate = 23;
})();

//console.log(isPrivate);


(() => console.log('This will never run again'))();

{
    const isPrivate = 23;
    var notPrivate = 46;
}
//console.log(isPrivate);
console.log(notPrivate);

/*
//CC 1
//task1
const poll = {
    answers: [0, 0, 0, 0],
    registerNewAnswer() {
        //display question and collect answer
        const answer = prompt('What is your favourite programming language?\n0: JavaScript\n1: Python\n2: Rust\n3: C++');
        //console.log(typeof (Number(answer))

        //evaluate answer and update array
        if (!isNaN(Number(answer)) && Number(answer) <= 3 && Number(answer) >= 0 && Number.isInteger(Number(answer)))
            this.answers[Number(answer)]++;
        else console.log('Not a valid answer!❌');


    }
}

//task 2
const btnPoll = document.querySelector('.poll');
btnPoll.addEventListener('click', poll.registerNewAnswer.bind(poll));

//task 3
poll.displayResults = function (type = 'array') {
    if (type === 'array')
        console.log(this.answers);
    else
        if (type === 'string') {
            const ans = `Poll results are ${(this.answers).join(', ')
                } .`
            console.log(ans);
        }
        else {
            console.log('Not a valid type!❌ Choose between "string" and "array"');
        }
};


poll.displayResults.call(poll);

/*
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${ name } booked a seat on ${ this.airline } flight ${ this.iataCode }${ flightNum } `);
        this.bookings.push({ flight: `${ this.iataCode }${ flightNum } `, name })
    },

};

lufthansa.book(239, 'Alex Tanase');
lufthansa.book(621, 'Rares Catalin');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],

}

const book = lufthansa.book;

//NOT WORK
//book(23, 'Sara Maya');

book.call(eurowings, 23, 'Sara maya');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary popins');
console.log(lufthansa);

const swiss = {
    airline: 'swiss airlines',
    iataCode: 'LX',
    bookings: [],

}

book.call(swiss, 546, 'Mary Cooper');
console.log(swiss);

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

//Bind method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23, 'Jonas');
bookEW23('Alex Tanase');

//with event listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

const addTaxRate2 = (rate) => (value) => value + value * rate;

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    }
}

console.log(addTaxRate(0.23)(100));


/*
const greet = (greeting) => (name) => `${ greeting } ${ name } `;


const greet = function (greeting) {
    return function (name) {
        console.log(`${ greeting } ${ name } `);
    }
}


console.log(greet('ceau')('alex'));

/*
const oneWord = function (str) {
    return str.replaceAll(' ', '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

//higher order function
const transformer = function (str, fn) {
    console.log(fn(str));

    console.log(`Transformed by: ${ fn.name } `);
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//JS uses callbacks all the time
const high5 = function () {
    console.log('🖐');
}
document.body.addEventListener('click', high5);

['jonas', 'marta', 'adam'].forEach(high5);

/*
const flight = 'LH234';
const alex = {
    name: 'Alex Tanase',
    passport: 123456789,
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr.' + passenger.name;

    if (passenger.passport === 123456789) {
        alert('Checked in');
    }
    else {
        alert('Wrong passport');
    }
}

checkIn(flight, alex);


const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000000);
}

newPassport(alex);
checkIn(flight, alex);

/*
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123', undefined, flightNum);*/