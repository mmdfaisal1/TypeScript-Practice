function addNumbers(...n: number[]) {
  let total: number = 0;
  for (let i = 0; i < n.length; i++) {
    total = total + n[i];
  }
  console.log(total);
}

addNumbers(5, 7, 8);
