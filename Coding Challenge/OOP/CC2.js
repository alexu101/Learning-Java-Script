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