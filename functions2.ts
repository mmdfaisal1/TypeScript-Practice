// function greeter(fn: (a: string) => void) {
//     fn("Hello, World");
//   }

//   function printToConsole(s: string) {
//     console.log(s);
//   }

//   greeter(printToConsole);

// function firstElement<T> (arr: T[]): T | undefined{
//     return arr[0]
// }

// const u = firstElement([])
// console.log(u)

function Combine<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}

console.log(Combine([1, 1, 3], [4, 7, 9]));

console.log(Combine<string | number>(["abc", "def"], [4, 7, 9]));
