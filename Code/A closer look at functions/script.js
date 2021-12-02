'use strict';

const flight = 'LH234';
const alex = {
    name: 'Alex Tanase',
    passport: 123456789,
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger = 'Mr.' + passenger.name;

    if (passenger.passport === 123456789) {
        alert('Checked in');
    }
    else {
        alert('Wrong passport');
    }
}

checkIn(flight, alex);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000000);
}

newPassport(jonas);
checkIn(flight, jonas);

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