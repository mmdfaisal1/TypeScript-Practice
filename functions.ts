export {};

function addtwo(num1: number, num2: number): number {
  return num1 + num2;
}

let myNum1 = 8;
let myNum2 = 9;

console.log(`The sum of ${myNum1} and ${myNum2} is`, addtwo(myNum1, myNum2));

let myAddTwo = addtwo;
