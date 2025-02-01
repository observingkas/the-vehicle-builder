import Vehicle from './Vehicle.js';

class Truck extends Vehicle {
  constructor(make: string, model: string, year: number) {
    super(make, model, year);
  }

  override drive(): void {
    if (!this.started) {
      console.log('Start the truck first');
      return;
    }
    this.accelerate(15);
  }

  override getStatus(): void {
    console.log(`
      ${this.year} ${this.make} ${this.model} (Truck)
      VIN: ${this.vin}
      Started: ${this.started}
      Speed: ${this.currentSpeed} mph
    `);
  }
}

export default Truck;
