"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["READ_WRITE"] = 2] = "READ_WRITE";
})(Role || (Role = {}));
var person = {
    name: "John",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log("The role is Admin");
}
