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