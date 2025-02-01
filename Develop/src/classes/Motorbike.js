"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const Vehicle_js_1 = require("./Vehicle.js");

class Motorbike extends Vehicle_js_1.default {
    constructor(make, model, year) {
        super(make, model, year);
    }

    drive() {
        if (!this.started) {
            console.log('Start the motorbike first');
            return;
        }
        this.accelerate(40);
    }

    getStatus() {
        console.log(`
      ${this.year} ${this.make} ${this.model} (Motorbike)
      VIN: ${this.vin}
      Started: ${this.started}
      Speed: ${this.currentSpeed} mph
    `);
    }
}

exports.default = Motorbike;
