function addNumbers(...n: number[]) {
  let total: number = 0;
  for (let i = 0; i < n.length; i++) {
    total = total + n[i];
  }
  console.log(total);
}

//outputs 20
addNumbers(5, 7, 8);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

//Rest Argument
arr1.push(7, 8, 9, 10); //OK - Note this is not rest argument or spread syntax
arr1.push(...arr1); //OK - this is rest argument (spread syntax)

//arr1.push(arr2) //Not OK
