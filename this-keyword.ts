let person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    console.log(`${this.firstName}  ${this.lastName}`);
  },
  //Following does not work because arrow functions don't provide their own `this` binding
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#arrow_functions
  //   fullName2: () => {
  //     console.log(`${this.firstName}  ${this.lastName}`);
  //   },
};

person.fullName();
//person.fullName2();

//The following works because arrow function has been wrapped inside a regular function
let obj = {
  a: "a-value",
  foo: function () {
    return (() => {
      console.log(this.a);
    })();
  },
};
obj.foo(); //"a-value"

//Binding
let car = {
  name: "Mazda",
  getName: function () {
    console.log(this.name);
  },
};

car.getName(); //"Mazda"

let bike = {
  name: "Harley",
  getName: function () {
    console.log(this.name);
  },
};

const bound = bike.getName.bind(car);
bound(); //"Mazda"

export {};
