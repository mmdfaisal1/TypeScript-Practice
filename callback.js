"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwoAndHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addTwoAndHandle(5, 7, function (result) {
    console.log(result);
});
