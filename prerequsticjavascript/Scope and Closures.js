// Scope: Defines where variables are accessible.
/*
Types of Scope:
1. Global Scope: Variables defined outside any function are in the global scope and accessible from anywhere.
2. Local Scope: Variables defined within a function are in the local scope and accessible only within that function.
3. Block Scope: Variables defined within a block (e.g., within `{}`) are in the block scope and accessible only within that block.
4. Function Scope: Variables defined within a function are in the function scope and accessible only within that function.
*/

// Example of Global Scope
let globalVar = "I am a global variable";
function globalScopeExample() {
    console.log(globalVar); // Accessible here
}
globalScopeExample();

// Example of Local Scope
function localScopeExample() {
    let localVar = "I am a local variable";
    console.log(localVar); // Accessible here
}
localScopeExample();    

// console.log(localVar); // Error: localVar is not defined outside the function

// Example of Block Scope
{
    let blockVar = "I am a block variable";
    console.log(blockVar); // Accessible here
}       

// console.log(blockVar); // Error: blockVar is not defined outside the block


// Example of Function Scope
function functionScopeExample() {
    var functionVar = "I am a function variable";
    console.log(functionVar); // Accessible here
}
functionScopeExample();
// console.log(functionVar); // Error: functionVar is not defined outside the function

// Closures: Functions that "remember" their scope.
// A closure is a function that captures the lexical scope in which it was created, allowing it to access variables from that scope even when executed outside of it.
// Example of Closure
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
