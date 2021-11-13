'use strict'

const maxTemp = [17, 21, 23];

const printForecast = function (temps) {
    let message = '...';
    for (let days = 0; days < temps.length; days++) {
        message += ` ${temps[days]} °C in ${days + 1} days ...`
    }
    return message;
}

console.log(printForecast(maxTemp));