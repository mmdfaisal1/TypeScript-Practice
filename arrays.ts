export {};

const person = {
  name: "John",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

let favoriteActivities: string[];
favoriteActivities = ["Music", "Reading"];

//Because TypeScript knows 'activity' is a string
//We can perform any string functions on it
for (const activity of favoriteActivities) {
  console.log(activity.toUpperCase());
}

favoriteActivities.forEach((element) => {
  console.log(element);
});

favoriteActivities.forEach(function (item) {
  console.log(item);
});

function PrintHello() {
  console.log("Helloooooo!");
}

favoriteActivities.forEach(PrintHello); //Will print "Helloooo!" for each item in the array

for (const key in favoriteActivities) {
  console.log(favoriteActivities[key]);
}

let anotherArray: any[]; //Not advisable, since you lose the power of TypeScript
