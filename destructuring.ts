function getScores() {
  return [70, 80, 90, 100];
}

//https://www.javascripttutorial.net/es6/destructuring/
//Array destructuring - note the [] bracket around a, b, c, d is NOT array syntax
const [a, b, c, d] = getScores();

console.log(a); // 70
console.log(b); // 80
console.log(c); // 90
console.log(d); // 100

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#rest_property
//Rest property
const [x, y, ...rest] = getScores();
console.log(rest); // [90, 100]

//To set default value in destructuring
//See more about this and related topics - https://www.javascripttutorial.net/es6/destructuring/
let [, , , , fifthItem = 0] = getScores();

//Object destructuring
//https://www.javascripttutorial.net/es6/javascript-object-destructuring/
let person = {
  firstName: "John",
  lastName: "Doe",
};

//Instead of fName = person.firstName
//Note the curly braces on the left do NOT indicate an object
let { firstName: fName, lastName: lName } = person;

//The above can be written more concisely, by having the same variable name as that of object properties
let { firstName, lastName } = person;

//Nested object destructuring
let employee = {
  id: 1001,
  employeeName: {
    firstNameEmployee: "John",
    lastNameEmployee: "Doe",
  },
};

let {
  id,
  employeeName: { firstNameEmployee, lastNameEmployee },
} = employee;

console.log(firstNameEmployee); // John
//console.log(typeof employeeName);

//Destructuring function arguments
type Car = { make: string; model: string; year: number };
const myCar: Car = { make: "Honda", model: "Accord", year: 1990 };

//No destructuring
function displayCar(car: Car) {
  return console.log(`${car.make} ${car.model}`);
}
displayCar(myCar); // Honda Accord

//Unpacking properties from objects passed as a function parameter
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
//Note: About { make, model }: { make: string; model: string }, see
//https://bobbyhadz.com/blog/typescript-binding-element-implicitly-has-an-any-type
function displayCar2({ make, model }: { make: string; model: string }) {
  return console.log(`${make} ${model}`);
}
displayCar2(myCar);

const user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "John",
    lastName: "Doe",
  },
};

//Note the {id} object passed in as parameter has to be typed - because of noImplicitAny set to true in tsconfig
function userId({ id }: { id: number }) {
  return id;
}

console.log(userId(user)); //42

//Parameter destructuring - TS handbook
type ABC = { a: number; b: number; c: number };
function sum({ a, b, c }: ABC) {
  console.log(a + b + c);
}

sum({ a: 10, b: 5, c: 8 });
