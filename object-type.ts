// { prop1: number } is an anonymous object type

function myPrint(myType: { prop1: number }) {
  console.log(myType.prop1);
}

myPrint({ prop1: 10 });
