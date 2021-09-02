/*
VARIABLES

1-grammarAndTypes
    02-declarations.js
*/

//What is a variable?
var a = 1; // Announcing the variable presence and giving it a name. Thing that follows var and has the name a. // Initialization is essentially a =. Just like real bucket, you can use a bucket for multiple purposes. 
var b = 2; // "Bucket" is a, in the bucket is 1. You can have empty buckets. It's really flexible. Some restrictions but not many. 
console.log(a + b);

//notes on naming variables
//1) a variable must begin with a letter, underscore, or dollar sign
//2) numbers may follow the above characters, but cannot come first
//3) JavaScript is case sensitive--'hello' and 'Hello' are different variables!!!

/*
DECLARATIONS, INITIALIZATIONS, ASSIGNMENT
/*

/*
Declarations refer to when we 'declare' a variable

Initializations refer to when a variable is assigned a value

Assignment refers to giving a variable a value. This can be after initialization.
*/
var x;
console.log('Declaration 1:', x); //undefined bucket contents. 

x = 10;
console.log('Initialization 1:', x); //10

x = 33;
console.log('Assignment 1:', x); //33

var y;
console.log(y);

y = 'hello'; // = is taking a bucket and storing something inside of it.
console.log(y); //hello

y= 'you are my friend';
console.log(y);

/*
Var, Let, and Const:

Var = 'old' keyword for variables
Let = 'new' keyword for variables (introduced with ES6)
const = also 'new', declares unchangeable variables
*/

let tonight = 'great!'; 
const elevenFifty = 'Amazing!';
console.log(tonight, elevenFifty);

tonight = 'lovely!';
console.log(tonight, elevenFifty);

// elevenFifty = 'Super!';