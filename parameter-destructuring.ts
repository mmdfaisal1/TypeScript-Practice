type ABC = { a: number, b: number, c: number}
function sum({a, b, c}: ABC){
    console.log(a + b + c)
}

sum({a: 10, b: 5, c: 8})

