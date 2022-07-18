export{}

const person = {
    name: "John",
    age: 30,
    hobbies: ["Sports", "Cooking"]
}

let favoriteActivities: string[];
favoriteActivities = ["Music", "Reading"];

//Because TypeScript knows 'activity' is a string
//We can perform any string functions on it
for (const activity of favoriteActivities) {
    console.log(activity.toUpperCase());
}


for (const key in favoriteActivities) {
    console.log(favoriteActivities[key]);
}

let anotherArray: any[]; //Not advisable, since you lose the power of TypeScript




