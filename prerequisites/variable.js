// initializing variables with different data types

let age = 25; // Number variable
let name = "John Doe"; // String variable
let isEmployed = true; // Boolean variable

const name1 = "Jane Doe"; // Constant variable
var height1 = 180; // Variable using var keyword
var isSaturday1 = false; // Variable using var keyword
let numbers = [1, 2, 3, 4, 5]; // Array variable
var numbers1 = [6, 7, 8, 9, 10]; // Another array variable


// printing the variables to the console
console.log("Age:", age);
console.log("Name:", name);
console.log("Is Employed:", isEmployed);
console.log("Constant Name:", name1);   
console.log("Height:", height1);
console.log("Is Saturday:", isSaturday1);
console.log("Numbers Array:", numbers);
console.log("Numbers1 Array:", numbers1);
// modifying the variables
numbers.push(6);
numbers1.push(11);
console.log("Updated Numbers Array:", numbers);
console.log("Updated Numbers1 Array:", numbers1);
// reassigning variables
age = 30; // Reassigning age 
console.log("Updated Age:", age);
// reassigning constant variable (will throw an error if uncommented)
// name1 = "Jane Smith"; // Error: Assignment to constant variable.
// console.log("Updated Constant Name:", name1); // Uncommenting this line will cause an error
// using var to reassign a variable
height1 = 185; // Reassigning height1
console.log("Updated Height:", height1);
// using var to reassign a variable
isSaturday1 = true; // Reassigning isSaturday1
console.log("Updated Is Saturday:", isSaturday1);
// using var to reassign an array variable
numbers = [12, 13, 14]; // Reassigning numbers
console.log("Updated Numbers Array:", numbers);
