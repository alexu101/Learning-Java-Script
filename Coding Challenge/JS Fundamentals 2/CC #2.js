'use strict'

const mark = {

    firstName: 'Mark',
    lasName: 'Miller',
    mass: 78,
    height: 1.69,
    bmi: 0,
    calcBmi: function (mass, height) {
        return (mass / height ** 2).toFixed(2);
    }

}

const jonas = {

    firstName: 'Jonas',
    lasName: 'Smith',
    mass: 92,
    height: 1.95,
    bmi: 0,
    calcBmi: function (mass, height) {
        return (mass / height ** 2).toFixed(2);
    }

}

mark.bmi = mark.calcBmi(mark.mass, mark.height);
jonas.bmi = jonas.calcBmi(jonas.mass, jonas.height);

console.log((jonas.bmi > mark.bmi) ? `Jonas has a higher bmi(${jonas.bmi})` : `Mark has a higher bmi(${mark.bmi})`);

