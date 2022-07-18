export{}

function addtwo (num1: number, num2: number){
    return (num1 + num2)
}

let myNum1 = 8;
let myNum2 = 9;

console.log(`The sum of ${myNum1} and ${myNum2} is`, addtwo(myNum1, myNum2));

let addnumbers : (a: number, b: number) => number;
addnumbers = addtwo; //addnumbers is a pointer to addtwo.
//addnumbers = 7;

console.log(addnumbers(7, 4));

//console.log(addtwo); 
//console.log(addnumbers);