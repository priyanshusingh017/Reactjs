// Arrow Functions: Simpler syntax for writing functions.

const add = (a, b) => a + b;
const greet = name => `Hello, ${name}!`;
console.log(greet("Aman"));
console.log(add(5, 10));

// Destructuring: Extract values from objects or arrays.
const person = { name: "John", age: 30 };
const { name, age } = person;
console.log(name, age);
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first, second, third);

// let and const: let for mutable variables and const for constants.

let score = 10;
score = 20; // Allowed
console.log(score);

const PI = 3.14;
// PI = 3.15; // Error

//Classes: Object-oriented approach in JavaScript.

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} makes a noise.`;
    }
}

class Dog extends Animal {
    speak() {
        return `${this.name} barks.`;
    }
}
const dog = new Dog("Rex");
console.log(dog.speak()); // Rex barks.
