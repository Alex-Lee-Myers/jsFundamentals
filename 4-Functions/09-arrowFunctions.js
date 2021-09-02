/*
ARROW FUNCTIONS
*/

//normal function declaration //for named expressions
function coffee(){
    return 'coffee is good';
}

//normal function expression //an unnamed expression
let tea = function(){
    return 'tea is healthy';
}

console.log(coffee());
console.log(tea());

//arrow functions are *always* anonymous //11-13 is unnamed
//arrow function expression
let hotChocolate = () => {
    return 'hot chocolate is king'; //arrow function //nice since they're concise
}

console.log(hotChocolate());

let animals = (kittens, puppies) => {return `I have ${kittens} cats(s) and ${puppies} dog(s)`};

console.log(animals()) //animals variable equal to a function //I have undefined cats(s) and undefined dog(s) //forgot to pass the number for kittens and puppies
console.log(animals(3, 2))
console.log(animals(0, 0)); //arrow functions cannot be hoisted

//concise vs. blockc body
//concise body
let apples = (x) => `There are ${x} apples`;
console.log(apples(10));

//block body
let bananas = (x) => {
    return `There are ${x} bananas`;
}
console.log(bananas(5)); //There are 5 bananas

//return must be explicitly written in a block-body arrow function

let func = () => `hi`;

console.log(func());

let secondFunc = () => 'hi';
//=> //arrow needs to directly follow parenthesis on same line
//'hi';

console.log(secondFunc());