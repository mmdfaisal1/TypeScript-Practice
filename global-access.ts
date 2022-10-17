//To run this file with ts-node, use npx ts-node --files global-access.ts
//https://stackoverflow.com/questions/51610583/ts-node-ignores-d-ts-files-while-tsc-successfully-compiles-the-project
//Add this property to tsconfig.json
//"ts-node": { "files": true }
//OR
//Use include property in tsconfig.json (this does not work with ts-node)

global.myProp = "abc";
myProp = "def"; //global does not need to be appended
console.log(myProp);

//This will be undefined unless this value is set in the runtime environment
console.log(process.env.MY_ENV_VAR);
export {};
