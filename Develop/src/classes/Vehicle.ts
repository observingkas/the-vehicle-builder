// Vehicle class that implements Driveable interface
class Vehicle {
  // Declare properties of the Vehicle class
  started: boolean;
  currentSpeed: number;
  vin: string;
  make: string;
  model: string;
  year: number;

  // Constructor for the Vehicle class
  constructor(make: string, model: string, year: number) {
    this.started = false;
    this.currentSpeed = 0;
    this.make = make;
    this.model = model;
    this.year = year;
    this.vin = Math.random().toString(36).substring(7); // Simple VIN generation
  }

  // Method to print vehicle details

startEngine(): void {
  this.start();
}

stopEngine(): void {
  this.stop();
}

drive(): void {
  if(!this.started) {
   console.log('Start the vehicle first');
    return;
  }
this.accelerate(20);
console.log(`Vehicle is now driving at ${this.currentSpeed} mph`);
return;
}

getStatus(): void {
  console.log(`
    ${this.year} ${this.make} ${this.model}
    VIN: ${this.vin}
    Started: ${this.started}
    Speed: ${this.currentSpeed} mph
    `);
}
  
  printDetails(): void {
    console.log(`Vehicle started: ${this.started}`);
    console.log(`Vehicle current speed: ${this.currentSpeed} mph`);
  }

  // Method to start the vehicle
  start(): void {
    this.started = true;
    console.log('Vehicle started');
  }

  // Method to accelerate the vehicle
  accelerate(change: number): void {
    // Check if the vehicle is started
    if (this.started) {
      this.currentSpeed += change;
      console.log(`Vehicle accelerated to ${this.currentSpeed} mph`);
    } else {
      console.log('Start the vehicle first');
    }
  }

  // Method to decelerate the vehicle
  decelerate(change: number): void {
    // Check if the vehicle is started
    if (this.started) {
      this.currentSpeed -= change;
      console.log(`Vehicle decelerated to ${this.currentSpeed} mph`);
    } else {
      console.log('Start the vehicle first');
    }
  }

  // Method to stop the vehicle
  stop(): void {
    this.currentSpeed = 0;
    this.started = false;
    console.log('Vehicle stopped');
  }

  // Method to turn the vehicle
  turn(direction: string): void {
    // Check if the vehicle is started
    if (this.started) {
      console.log(`Vehicle turned ${direction}`);
    } else {
      console.log('Start the vehicle first');
    }
  }

  // Method to reverse the vehicle
  reverse(): void {
    // Check if the vehicle is started
    if (this.started) {
      console.log('Vehicle reversed');
    } else {
      console.log('Start the vehicle first');
    }
  }
}

// Export the Vehicle class
export default Vehicle;
