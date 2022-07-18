export{}

function addTwoAndHandle (num1: number, num2: number, cb: (num: number) => void){
    const result = num1 + num2;
    cb(result)
}

addTwoAndHandle(5, 7, result => {
    console.log(result)
})
