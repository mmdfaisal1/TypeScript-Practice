// function identify(arg: number) {
//   return arg;
// }

function identity<Type>(arg: Type): Type {
  return arg;
}

let output = identity<string>("myString"); //the generic function can be called this way

let output2 = identity("myString"); //more commong way of calling generic function

function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}

function loggingIdentity2<Type>(arg: Array<Type>): Array<Type> {
  console.log(arg.length);
  return arg;
}

//the type of the function
let myIdentiy: <Type>(arg: Type) => Type = identity;

//the type as object literal
let myIdentityWithObjectLiteral: { <Type>(arg: Type): Type } = identity;

//the above leads to writing a generic interface
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}

//This function implements the above interface
function identity2<Type>(arg: Type): Type {
  return arg;
}

let myIdentiy2: GenericIdentityFn = identity2;

//Moving the generic parameter to be the parameter of the whole interface
//(instead of the member function)
interface GenericIdentityFn3<Type> {
  (arg: Type): Type;
}

function identity3<Type>(arg: Type): Type {
  return arg;
}

//We will now need to specify the type argument e.g. number
let myidentity3: GenericIdentityFn3<number> = identity;

interface LengthWise {
  length: number;
}

function loggingIdentity3<Type extends LengthWise>(arg: Type): Type {
  console.log(arg.length); //we know that arg is of Type, which extends Lengthwise, so it has length property
  return arg;
}
