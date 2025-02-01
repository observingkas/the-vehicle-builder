import Vehicle from './Vehicle.js';

class Motorbike extends Vehicle {
  constructor(make: string, model: string, year: number) {
    super(make, model, year);
  }

  override drive(): void {
    if (!this.started) {
      console.log('Start the motorbike first');
      return;
    }
    this.accelerate(40); // Motorbikes accelerate faster
  }

  override getStatus(): void {
    console.log(`
      ${this.year} ${this.make} ${this.model} (Motorbike)
      VIN: ${this.vin}
      Started: ${this.started}
      Speed: ${this.currentSpeed} mph
    `);
  }
}

export default Motorbike;
