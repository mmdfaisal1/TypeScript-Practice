export{}

enum Role {
    ADMIN,
    READ_ONLY,
    READ_WRITE
}

const person = {
    name: "John",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
}

if (person.role === Role.ADMIN){
    console.log("The role is Admin");
}