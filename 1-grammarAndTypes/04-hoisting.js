/*
HOISTING

1-grammarAndTypes
    04-hoisting.js
*/

//example 1:
console.log(scissors);
var scissors = 'blue';

//example 1 breakdown:
var scissors; //hoisted to top
console.log(scissors);
scissors = 'blue';

//example 2:
function hoistTest(){
    console.log(testVar);
    var testVar = 10;
    console.log(testVar); //there is hoisting inside of functions just like global scope.
}

hoistTest();

//example 2 breakdown
function hoistTest(){
    var testVar; //declaration gets 'hoisted' to the top
    console.log(testVar);
    testVar = 10; //assignement stays where it was
    console.log(testVar);
}

hoistTest();