export{}

function addTwoAndHandle (num1: number, num2: number, cb: (num: number) => void){
    const result = num1 + num2;
    cb(result)
}

addTwoAndHandle(5, 7, result => {
    console.log(result)
})

function iterateArray(arr: any[], callback: (item: any) => void ) {
    for (let index =0; index < arr.length; index++){
        callback(arr[index])
    }
}

iterateArray([1, 2, 3], (a) => console.log(a))

