export {};

let x = { name: "John" };

console.log(Object.getPrototypeOf(x));

const myDate = new Date();
console.log(Object.getPrototypeOf(myDate));

//Setting a prototype
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes#setting_a_prototype
const personPrototype = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  greet() {
    console.log("Hello!");
  },
  fullName: function () {
    console.log(`${this.firstName}  ${this.lastName}`);
  },
};

const person1 = Object.create(personPrototype);
console.log(person1.firstName); //John
person1.greet(); //Hello!

//Object can also be created by using object constructor
let y = new Object();
