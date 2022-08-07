class GenericClass<Type> {
  zeroValue: Type | undefined;
  add: ((a: Type, b: Type) => Type) | undefined;
}

let myGenericClass = new GenericClass<number>();
myGenericClass.zeroValue = 0;
myGenericClass.add = function (a, b) {
  return a + b;
};
