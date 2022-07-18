"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person = {
    name: "John",
    age: 30,
    hobbies: ["Sports", "Cooking"]
};
var favoriteActivities;
favoriteActivities = ["Music", "Reading"];
//Because TypeScript knows 'activity' is a string
//We can perform any string functions on it
for (var _i = 0, favoriteActivities_1 = favoriteActivities; _i < favoriteActivities_1.length; _i++) {
    var activity = favoriteActivities_1[_i];
    console.log(activity.toUpperCase());
}
for (var key in favoriteActivities) {
    console.log(favoriteActivities[key]);
}
var anotherArray; //Not advisable, since you lose the power of TypeScript
