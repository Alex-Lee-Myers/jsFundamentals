/*
FUNCTIONS
*/

//General Ideas: at their broadest level, functions do the following:
//0) they take some input which the function will handle/proccess
//1) they process the input given to them
//2 they usually, but not always, return some value
//3 they can be invoked (used) as many times as we want, cutting down on code repetition

//example one:
function newFunc(num){ //made a tool. want tool to give us a number + 1.
    return num + 1; //call 7 or 10 or 11 or -2 below and it will add 1
}

console.log(newFunc(7)); 
console.log(newFunc(10)); 
console.log(newFunc(11)); 
console.log(newFunc(-2)); 

//example two:
function sentence(firstName, lastName){
    return `My first name is ${firstName} and my last name is ${lastName}`;
}

console.log(sentence('Alex', 'Myers'));
let superImportantSentence = sentence('Nicky', 'Disborough');
console.log(superImportantSentence);

//let's build a function that takes a complex type--an array in this case, and console.logs each item in the input array

let arr = [1, true, {key: 'string'}, [0, false,null], 'heya!'];
let arr2 = [5,6,7,8.9,10];

function iteratorFunc(inputArr){
    for (let element of inputArr){
        console.log(element);
    }
}
iteratorFunc(arr);
iteratorFunc(arr2);
