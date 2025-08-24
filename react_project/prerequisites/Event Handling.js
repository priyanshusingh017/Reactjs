// React relies heavily on event handling to interact with user inputs.
// Event handling in JavaScript allows developers to execute code in response to user actions or other events.
// Events can be anything from a mouse click, a key press, or even a change in the state of an element.
// In React, event handling is done using synthetic events, which are a cross-browser wrapper around the browser's native event.
 
// Event Handling in JavaScript
const button = document.querySelector("#myButton");
button.addEventListener("click", () => console.log("Button clicked"));

// This code selects a button with the ID "myButton" and adds an event listener to it.
// When the button is clicked, it logs "Button clicked" to the console.