"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const Vehicle_js_1 = require("./Vehicle.js");

class Truck extends Vehicle_js_1.default {
    constructor(make, model, year) {
        super(make, model, year);
    }

    drive() {
        if (!this.started) {
            console.log('Start the truck first');
            return;
        }
        this.accelerate(15);
    }

    getStatus() {
        console.log(`
      ${this.year} ${this.make} ${this.model} (Truck)
      VIN: ${this.vin}
      Started: ${this.started}
      Speed: ${this.currentSpeed} mph
    `);
    }
}

exports.default = Truck;
