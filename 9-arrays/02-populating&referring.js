/*
ARRAYS
*/

/* what is an array
has [] brackets
can hold multiple datatypes
arrays can list datatypes in an orderer, numbered way */

let students = ['Tony', 'Zane', 'Jackson', 'Ryan', 23, true, ['Brian','Mark']];
//hidden keys:    0       1        2         3      4    5           6        //key value pairs for studentp[]
console.log(typeof students); // <-- this is an object. typeof doesn't tell me my variable is an array
console.log(students instanceof Array); // <--instanceof tells me my array is an array
console.log(students[2]); // <--- Jackson
console.log(students[3]); // <--- Ryan
console.log(students[4]); // <--- 23

let nameOfStudent = students[6][1];
console.log(nameOfStudent);
console.log(`Hell ${nameOfStudent}, you look nice today.`);

//recall for-of loop
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

for (f of food){
    console.log(f+'is amazing!'); // Pecan Pie is amazing! Shrimp is amazing! Quesadilla is amazing! // ...etc.
}

//array methods
food.push('Pizza'); //adding Pizza to the food array
console.log(food); //adds elements to an array that already exists
food.splice(1, 1, 'Bananas'); //food.splice(insert into first position (before Shrimp), Replace Shrimp, put "Bananas"
console.log(food);
food.splice(2,0, 'Sweet Potato Pie'); //before quasadilla we're putting Sweet Potato Pie. asks for an insertion point, how many things to remove, then the item/items to add
console.log(food);
food.pop(); //removes the last element //aka this would delete Pizza since that was pushed earlier
console.log(food); // ['Pecan Pie', 'Bananas', 'Sweet Potato Pie', 'Quesadilla', 'Cheese Cake', 'Hotdog']

food = food.slice(2,4); //the first number is the first element to slice fromthe array, while the second number is the stop position (which is not to be included)
console.log(food); // ['Sweet Potato Pie', 'Quesadilla', 'Cheese Cake']

//forEach allows us to iterate with loops specifically, and we can directly grab both the elements and their index numbers
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

// food.forEach((f) => console.log(f));  // "grab pecan pie, then grab shrimp, etc." 
// food.forEach((food, index) => {
//     console.log(food);
//     console.log(index);
// })

food.forEach((food, index) => {
    console.log(`The ${food} in our array is at position ${index}`);
})  //The Pecan Pie food in our array is at position 0, The Shrimp food in our array is at position 0, etc.

let movies = ['300', 'Snow White', 'The Phantom Menace', 'The Watchmen', 'The Sound of Music'];
//              0        1              2                    3                  4 
movies.push('The Force Awakens');
console.log(movies); // Adding The Force Awakens at the end.
movies.splice(3, 1, 'League of Extraordinary Gentleman');
console.log(movies); // Replaced The Watchmen with line 59 string

movies.forEach(movie => console.log(movie));
console.log(movies.length); //6 items in it

//let's do the following with an array
//we will check if we are working with an array
//flip the values within the array (what was in index 4 is now in 0, 3 to 1, etc.)
//using a method only, let's print the values of the newly arranged array

let arr = new Array(1,2,3,4,5);

if (arr instanceof Array){
    let revArr = arr.reverse();
    revArr.forEach(numbers => console.log(numbers));
}