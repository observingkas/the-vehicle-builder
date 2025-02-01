import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Cli from "./classes/Cli.js";


// create an array of vehicles
const vehicles = [];

// Create initial vehicles
const truck1 = new Truck("Ford", "F-150", 2021);
const car1 = new Car("Toyota", "Camry", 2021);
const motorbike1 = new Motorbike("Harley Davidson", "Sportster", 2021);

// Add vehicles to array
vehicles.push(truck1);
vehicles.push(car1);
vehicles.push(motorbike1);

// Create and start CLI
const cli = new Cli(vehicles);
cli.startCli();
