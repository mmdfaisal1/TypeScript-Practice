export{}

type NumberOrString = number | string;

function combine (input1: NumberOrString, input2: NumberOrString){
    let result;
    //The following is a runtime check 
    if (typeof input1 == 'number' && typeof input2 == 'number'){
        result = input1 + input2;
    }
    else{
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedResult = combine(6, 7);
console.log(combinedResult);

const combinedResult2 = combine('Alice', 'Bob');
console.log(combinedResult2);