"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addtwo(num1, num2) {
    return (num1 + num2);
}
var myNum1 = 8;
var myNum2 = 9;
console.log("The sum of " + myNum1 + " and " + myNum2 + " is", addtwo(myNum1, myNum2));
var addnumbers;
addnumbers = addtwo; //addnumbers is a pointer to addtwo.
//addnumbers = 7;
console.log(addnumbers(7, 4));
//console.log(addtwo); 
//console.log(addnumbers);
