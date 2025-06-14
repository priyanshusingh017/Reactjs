// Promises: Represent asynchronous operations.

// Example of a simple promise
const myPromise = new Promise((resolve, reject) => {
    const success = true; // Simulate success or failure
    if (success) {
        resolve("Operation was successful!");
    } else {
        reject("Operation failed.");
    }
});

// Using the promise
myPromise
    .then(result => {
        console.log(result); // Output: Operation was successful!
    })
    .catch(error => {
        console.error(error); // Output: Operation failed.
    });

// Async/Await: Syntactic sugar for working with promises.
async function fetchData() {
    try {
        const data = await myPromise; // Wait for the promise to resolve
        console.log(data); // Output: Operation was successful!
    } catch (error) {
        console.error(error); // Output: Operation failed.
    }
}

fetchData();
// Fetch API: Modern way to make HTTP requests.