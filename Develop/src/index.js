"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });

const Truck_js_1 = __importDefault(require("./Truck.js"));
const Car_js_1 = __importDefault(require("./Car.js"));
const Motorbike_js_1 = __importDefault(require("./Motorbike.js"));
const Cli_js_1 = __importDefault(require("./cli.js"));

// create an array of vehicles
const vehicles = [];

// Create initial vehicles
const truck1 = new Truck_js_1.default("Ford", "F-150", 2021);
const car1 = new Car_js_1.default("Toyota", "Camry", 2021);
const motorbike1 = new Motorbike_js_1.default("Harley Davidson", "Sportster", 2021);

// Add vehicles to array
vehicles.push(truck1);
vehicles.push(car1);
vehicles.push(motorbike1);

// Create and start CLI
const cli = new Cli_js_1.default(vehicles);
cli.startCli();
