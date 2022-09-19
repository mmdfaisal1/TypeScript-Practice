export {};

export function addtwo(num1: number, num2: number): number {
  return num1 + num2;
}

let myNum1 = 8;
let myNum2 = 9;

console.log(`The sum of ${myNum1} and ${myNum2} is`, addtwo(myNum1, myNum2));

let myAddTwo = addtwo;

function Vehicle(this: any, make: string, model: string, color: string) {
  (this.make = make),
    (this.model = model),
    (this.color = color),
    (this.getName = function () {
      return this.make + " " + this.model;
    });
}

const car1 = new (Vehicle as any)("Honda", "Accord", "White");
console.log(car1.make); //"Honda"

//The above is essentially the same as class, which is syntatic sugar over function
class VehicleDetails {
  make: string;
  model: string;
  color: string;
  constructor(make: string, model: string, color: string) {
    this.make = make;
    this.model = model;
    this.color = color;
  }
}

const car2 = new VehicleDetails("Dodge", "Charger", "Black");
