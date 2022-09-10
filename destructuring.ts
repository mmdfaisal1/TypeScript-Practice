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

//Parameter destructuring
type ABC = { a: number; b: number; c: number };
function sum({ a, b, c }: ABC) {
  console.log(a + b + c);
}

sum({ a: 10, b: 5, c: 8 });
