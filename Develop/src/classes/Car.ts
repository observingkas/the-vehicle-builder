import Vehicle from './Vehicle.js';

class Car extends Vehicle {
  constructor(make: string, model: string, year: number) {
    super(make, model, year);
  }

  override drive(): void {
    if (!this.started) {
      console.log('Start the car first');
      return;
    }
    this.accelerate(25);
  }

  override getStatus(): void {
    console.log(`
      ${this.year} ${this.make} ${this.model} (Car)
      VIN: ${this.vin}
      Started: ${this.started}
      Speed: ${this.currentSpeed} mph
    `);
  }
}

export default Car;
