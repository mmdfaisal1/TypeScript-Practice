"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function combine(input1, input2) {
    var result;
    //The following is a runtime check 
    if (typeof input1 == 'number' && typeof input2 == 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedResult = combine(6, 7);
console.log(combinedResult);
var combinedResult2 = combine('Alice', 'Bob');
console.log(combinedResult2);
