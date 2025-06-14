// object -> Objects are collections of key-value pairs.
const person = {
    name: "John",
    age: 30,
    isEmployed: true,
    greet() {
        return `Hello, my name is ${this.name}` + ` and I am ${this.age} years old.`;
    }
};
// printing the object to the console
console.log("Person name:", person.name);
console.log("Person Age:", person.age);
console.log("Person Employment Status:", person.isEmployed);
console.log("Person Greeting:", person.greet());

// array -> Arrays are ordered collections of values.
const numbers = [1, 2, 3, 4, 5];
// printing the array to the console
console.log("Numbers Array:", numbers);
// accessing elements in the array
console.log("First Element:", numbers[0]);
