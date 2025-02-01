import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Vehicle from "./Vehicle.js";

class Cli {
  private vehicles: Vehicle[];
  private selectedVehicleVin: string | undefined;

  constructor(vehicles: Vehicle[]) {
    this.vehicles = vehicles;
  }

  public async startCli(): Promise<void> {
    const { choice } = await inquirer.prompt([{
      type: 'list',
      name: 'choice',
      message: 'Would you like to create a new vehicle, or select an existing one?',
      choices: ['Create a vehicle', 'Select existing']
    }]);

    if (choice === 'Create a vehicle') {
      await this.createVehicle();
    } else {
      await this.selectExistingVehicle();
    }

    await this.performActions();
  }

  private async createVehicle(): Promise<void> {
    const { vehicleType } = await inquirer.prompt([{
      type: 'list',
      name: 'vehicleType',
      message: 'What type of vehicle would you like to create?',
      choices: ['Car', 'Truck', 'Motorbike']
    }]);

    const details = await inquirer.prompt([
      {
        type: 'input',
        name: 'make',
        message: 'Enter the make of the vehicle:'
      },
      {
        type: 'input',
        name: 'model',
        message: 'Enter the model of the vehicle:'
      },
      {
        type: 'input',
        name: 'year',
        message: 'Enter the year of the vehicle:',
        validate: (input: string) => !isNaN(Number(input))
      }
    ]);

    let newVehicle: Vehicle;
    switch (vehicleType) {
      case 'Car':
        newVehicle = new Car(details.make, details.model, Number(details.year));
        break;
      case 'Truck':
        newVehicle = new Truck(details.make, details.model, Number(details.year));
        break;
      case 'Motorbike':
        newVehicle = new Motorbike(details.make, details.model, Number(details.year));
        break;
      default:
        throw new Error('Invalid vehicle type');
    }

    this.vehicles.push(newVehicle);
    this.selectedVehicleVin = newVehicle.vin;
  }

  private async selectExistingVehicle(): Promise<void> {
    const { vehicle } = await inquirer.prompt([{
      type: 'list',
      name: 'vehicle',
      message: 'Select a vehicle:',
      choices: this.vehicles.map(v => ({
        name: `${v.make} ${v.model} (${v.vin})`,
        value: v.vin
      }))
    }]);

    this.selectedVehicleVin = vehicle;
  }

  private async performActions(): Promise<void> {
    let continueActions = true;
    while (continueActions) {
      const { action } = await inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'What would you like to do with the vehicle?',
        choices: ['Start Engine', 'Stop Engine', 'Drive', 'Check Status', 'Exit']
      }]);

      if (action === 'Exit') {
        continueActions = false;
        return;
      }

      const vehicle = this.vehicles.find(v => v.vin === this.selectedVehicleVin);
      if (!vehicle) return;

      switch (action) {
        case 'Start Engine':
          vehicle.startEngine();
          break;
        case 'Stop Engine':
          vehicle.stopEngine();
          break;
        case 'Drive':
          vehicle.drive();
          break;
        case 'Check Status':
          vehicle.getStatus();
          break;
      }
    }
  }
}

export default Cli;
