'use strict';

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
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

/*
const greet = (greeting) => (name) => `${greeting} ${name}`;


const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
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

    console.log(`Transformed by: ${fn.name}`);
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